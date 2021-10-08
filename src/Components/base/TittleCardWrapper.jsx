import React from 'react'
import styles from '../../styles/TitleCardWrapper.module.css'

const TittleCardWrapper = (props) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{props.text}</h3>
        </div>
    )
}

export default TittleCardWrapper
