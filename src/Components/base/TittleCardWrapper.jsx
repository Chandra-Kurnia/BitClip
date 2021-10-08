import React from 'react'
import styles from '../../styles/TitleCardWrapper.module.css'
import PropTypes from 'prop-types'

const TittleCardWrapper = (props) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{props.text}</h3>
        </div>
    )
}

TittleCardWrapper.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default TittleCardWrapper
