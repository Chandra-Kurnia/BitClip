const initialState = {
    movies: [],
    movie: [],
    recentlyViewed: [],
    WatchList: [],
    loading: false
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getAllMovies':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    ...action.payload
                ]
            }
        case 'searchMovie':
            return {
                ...state,
                movies: action.payload
            }
        case 'getMovie':
            return {
                ...state,
                movie: action.payload
            }
        case 'recentlyViewed':
            return {
                ...state,
                recentlyViewed: action.payload
            }
        case 'WatchList':
            return {
                ...state,
                WatchList: [
                    ...state.WatchList,
                    action.payload
                ]
            }
        case 'loading':
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default movieReducer;