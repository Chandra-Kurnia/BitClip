import React from 'react';
import styles from '../../styles/Footer.module.css';
import fbIcon from '../../assets/icons/fb.png';
import igIcon from '../../assets/icons/ig.png';
import twitchIcon from '../../assets/icons/tw.png';
import ytIcon from '../../assets/icons/yt.png';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className="text-center d-flex justify-content-center">
        <div className={styles.socialWrapper}>
          <a href="https://facebook.com" target="blank">
            <span>
              <img src={fbIcon} alt="" />
            </span>
          </a>
          <a href="https://instagram.com" target="blank">
            <span>
              <img src={igIcon} alt="" />
            </span>
          </a>
          <a href="https://twitch.com" target="blank">
            <span>
              <img src={twitchIcon} alt="" />
            </span>
          </a>
          <a href="https://youtube.com" target='blank'>
            <span>
              <img src={ytIcon} alt="" />
            </span>
          </a>
        </div>
      </div>
        <span className={styles.cpr}>Copyright@2021</span>
    </div>
  );
};

export default Footer;
