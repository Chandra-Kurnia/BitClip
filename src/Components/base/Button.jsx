import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

    return (
        <Fragment>
            <button className={`${props.className} button`} onClick={props.onClick}>{props.text}</button>
        </Fragment>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default Button
