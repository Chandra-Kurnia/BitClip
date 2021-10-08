import React from 'react';
import styles from '../../styles/Card.module.css';
import { useHistory } from 'react-router';

const Card = (props) => {
    const {push} = useHistory()
  return (
    <div className={`${styles.wrapper} ${props.className}`}>
      <div className={styles.posterWrapper} onClick={props.onClick}>
        <img className={styles.poster} src={props.poster} alt="" />
      </div>
      <div className={styles.content} onClick={props.onClick}>
        <span className={`${styles.title} text-truncate d-block ps-1 pe-1`}>
          {props.tittle} - ({props.year})
        </span>
      </div>
      <button className={styles.type}>{props.type}</button>
      {props.watchlist !== true ? (
        <button onClick={props.handleWL} className={styles.watchlist}>
          Add to watchlist
        </button>
      ) : 
        <button className={styles.watchlist} onClick={() => push(`/${props.imdbID}`)}>
          Detail
        </button>
      }
    </div>
  );
};

export default Card;
