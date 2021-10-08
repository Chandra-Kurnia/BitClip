import axiosInstance from '../../configs/axios';

export const getAllMovies = (page, keyword) => async (dispatch, getState) => {
  try {
    const dataMovie = await axiosInstance.get(`?apikey=${process.env.REACT_APP_API_KEY}&s=${keyword}&page=${page}`);
    dispatch({type: 'getAllMovies', payload: dataMovie.data.Search})
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = (keyword) => async (dispatch) => {
  try {
    const dataMovie = await axiosInstance.get(`?apikey=${process.env.REACT_APP_API_KEY}&s=${keyword}&page=1`);
    if(dataMovie?.data?.Search && dataMovie.data.Search.length > 0){
      dispatch({type: 'searchMovie', payload: dataMovie.data.Search})
    }else{
      dispatch({type: 'searchMovie', payload: []})
    }
  } catch (error) {
    console.log(error);
  }
}

export const getmovie = (imdbId) => async (dispatch) => {
  try {
    const movie = await axiosInstance.get(`?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbId}`)
    dispatch({type: 'getMovie', payload: movie.data})
  } catch (error) {
    console.log(error);
  }
}

export const recentlyViewed = (movies) => async (dispatch, getState) => {
  try {
    const recentlyViewed = getState().recentlyViewed
    const findIndex = recentlyViewed.find((element) => {
      return element.imdbID === movies.imdbID
    })
    if(!findIndex){
      recentlyViewed.unshift(movies)
    }
    if(recentlyViewed.length > 5){
      recentlyViewed.pop()
    }
    dispatch({type: 'recentlyViewed', payload: recentlyViewed})
  } catch (error) {
    console.log(error);
  }
  
}

export const UpdateWatchList = (movies) => async (dispatch, getState) => {
  try {
    const WatchList = getState().WatchList
    const findIndex = WatchList.find((element) => {
      return element.imdbID === movies.imdbID
    }) 
    if(!findIndex){
      dispatch({type: 'WatchList', payload: movies})
    }
  } catch (error) {
    console.log(error);
  }
}