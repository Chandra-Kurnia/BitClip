/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {getmovie, recentlyViewed} from '../redux/actions/movieActions';
import styles from '../styles/ShowMovie.module.css';
import TittleCardWrapper from '../Components/base/TittleCardWrapper';
import Genres from '../Components/base/Genres';
import Navbar from '../Components/module/Navbar';
import Footer from '../Components/module/Footer';

const ShowMovie = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getmovie(imdbID));
  }, []);

  if (Object.keys(movie).length > 0) {
    dispatch(recentlyViewed(movie));
  }

  return (
    <Fragment>
      <Navbar />
      <div className={styles.wrapper}>
        <div className="container">
          <TittleCardWrapper text="Movie Detail" />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 p-2 d-flex">
              <div className={styles.posterWrapper}>
                <img src={movie.Poster} className={styles.poster} alt="" />
                <div className={styles.movieType}>{movie.Type}</div>
                <div className={styles.runtime}>{movie.Runtime}</div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 p-2">
              <h2 className={styles.title}>
                {movie.Title} - ({movie.Year})
              </h2>
              <span className="d-block fs-6 mb-3 text-white">Released on {movie.Released}</span>
              {movie.Genre && movie.Genre.split(',').map((genre, index) => <Genres key={index} text={genre} />)}
              <p className={`${styles.title} mt-3`}>{movie.Plot}</p>
              {/* <span className='d-block text-white'>Director : {movie.Director}</span>
            <span className='d-block text-white'>Writter : {movie.Writer}</span>
            <span className='d-block'>Actors</span>
            <span className='d-block'>Language</span>
            <span className='d-block'>CCountry</span> */}
              <table className="text-white">
                <tr>
                  <td>Director</td>
                  <td className="ps-3 pe-3">:</td>
                  <td>{movie.Director}</td>
                </tr>
                <tr>
                  <td>Writer</td>
                  <td className="ps-3 pe-3">:</td>
                  <td>{movie.Writer}</td>
                </tr>
                <tr>
                  <td>Actors</td>
                  <td className="ps-3 pe-3">:</td>
                  <td>{movie.Actors}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td className="ps-3 pe-3">:</td>
                  <td>{movie.Language}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td className="ps-3 pe-3">:</td>
                  <td>{movie.Country}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShowMovie;
