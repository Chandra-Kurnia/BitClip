import React from 'react';
import styles from '../../styles/Modal.module.css';
// import dummyBatman from '../../assets/dummyBatman.jpg';
import Button from '../base/Button'
import { useHistory } from 'react-router';

const Modal = (props) => {
  const {push} = useHistory()
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className="d-flex flex-wrap h-100">
          <div className={styles.poster}>
            <img src={props.poster} alt="" />
          </div>
          <div className={styles.content}>
            <table class="table table-dark table-striped w-100">
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{props.Title} ({props.Year})</td>
                    </tr>
                    <tr>
                        <td>Released</td>
                        <td>{props.released}</td>
                    </tr>
                    <tr>
                        <td>Runtime</td>
                        <td>{props.runtime}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>{props.genre}</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex flex-wrap justify-content-between">
                <Button className='w-50 btnClose' onClick={props.closeButton} text='Close'/>
                <Button className='w-50 btnDetail' text='Detail' onClick={() => push(`/${props.imdbID}`)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
