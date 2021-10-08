/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import Card from '../Components/module/Card';
import styles from '../styles/Home.module.css';
// import dummyBatman from '../assets/dummyBatman.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {getAllMovies, getmovie, searchMovies, UpdateWatchList} from '../redux/actions/movieActions';
import Navbar from '../Components/module/Navbar';
import TittleCardWrapper from '../Components/base/TittleCardWrapper';
import Modal from '../Components/module/Modal';
import Footer from '../Components/module/Footer';
import Fade from 'react-reveal';

const Home = () => {
  const [Page, setPage] = useState(1);
  const [keyword, setkeyword] = useState('batman');
  const [showModal, setshowModal] = useState(0);
  const movies = useSelector((state) => state.movies);
  const movie = useSelector((state) => state.movie);
  const recentlyViewed = useSelector((state) => state.recentlyViewed);
  const WatchList = useSelector((state) => state.WatchList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies(Page, keyword));
  }, [Page]);

  document.addEventListener('scroll', () => {
    console.log(Math.ceil(window.scrollY));
    console.log(window.outerHeight);
    console.log(document.body.clientHeight);
    // console.log(Math.ceil(window.scrollY) + window.outerHeight === document.body.clientHeight);
    if ((Math.ceil(window.scrollY) + window.outerHeight) === document.body.clientHeight) {
      if (Page === 100) {
        setPage(1);
      } else {
        setPage(Page + 1);
      }
      // console.log('true');
    }
  });

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setkeyword('batman');
      dispatch(getAllMovies(1, 'batman'));
    } else {
      setkeyword(e.target.value);
      dispatch(searchMovies(e.target.value));
    }
    setPage(1);
  };

  const handleModal = (imdbId) => {
    setshowModal(1);
    dispatch(getmovie(imdbId));
  };

  const handlewatchlist = (movieToWL) => {
    dispatch(UpdateWatchList(movieToWL));
  };

  // const handleScroll = () => {
  //   if(InfiniteScrollRef.current){
  //     const { scrollTop, scrollHeight, clientHeight } = InfiniteScrollRef.current;
  //     if(scrollTop + clientHeight === scrollHeight){
  //       console.log('sudah sampai bawah');
  //     }
  //   }
  // }

  return (
    <div>
      {showModal === 1 && (
        <Modal
          Year={movie.Year}
          Title={movie.Title}
          released={movie.Released}
          runtime={movie.Runtime}
          genre={movie.Genre}
          poster={movie.Poster}
          imdbID={movie.imdbID}
          closeButton={() => setshowModal(0)}
        />
      )}
      <Navbar handleSearch={(e) => handleSearch(e)} />
      <div className="container">
        <TittleCardWrapper text="Recently Viewed" />
        <div className={`${styles.cardWrapperRecent} mb-5`}>
          {recentlyViewed.length > 0 ? (
            recentlyViewed
              .slice(0, 5)
              .map((movieVIewed, index) => (
                <Card
                  className="me-4"
                  onClick={() => handleModal(movieVIewed.imdbID)}
                  key={index}
                  poster={movieVIewed.Poster}
                  tittle={movieVIewed.Title}
                  year={movieVIewed.Year}
                  type={movieVIewed.Type}
                  handleWL={() => handlewatchlist(movieVIewed)}
                />
              ))
          ) : (
            <span className="text-white">You haven't seen a movie</span>
          )}
        </div>
        <TittleCardWrapper text="My Watchlist" />
        <div className={`${styles.cardWrapperRecent} mb-5`}>
          {WatchList.length > 0 ? (
            WatchList.map((movieWatchlist, index) => (
              <Card
                watchlist={true}
                className="me-4"
                onClick={() => handleModal(movieWatchlist.imdbID)}
                key={index}
                poster={movieWatchlist.Poster}
                tittle={movieWatchlist.Title}
                year={movieWatchlist.Year}
                type={movieWatchlist.Type}
                imdbID={movieWatchlist.imdbID}
              />
            ))
          ) : (
            <span className="text-white">you haven't added the movie to the watchlist</span>
          )}
        </div>
        <TittleCardWrapper text="Movie List" />
        <div className={styles.cardWrapper}>
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <Fade>
                <Card
                  onClick={() => handleModal(movie.imdbID)}
                  key={index}
                  poster={movie.Poster}
                  tittle={movie.Title}
                  year={movie.Year}
                  type={movie.Type}
                  handleWL={() => handlewatchlist(movie)}
                />
              </Fade>
            ))}
        </div>
        <button className="btn btn-warning mt-3" onClick={() => setPage(Page + 1)}>
          Show More
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
