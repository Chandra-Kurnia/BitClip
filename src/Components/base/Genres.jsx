import React from 'react'
import PropTypes from 'prop-types'

const Genres = (props) => {
    return (
        <span className='genre'>
            {props.text}
        </span>
    )
}

Genres.propTypes = {
    text: PropTypes.string
}

export default Genres
