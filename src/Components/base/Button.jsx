import React, { Fragment } from 'react'

const Button = (props) => {

    return (
        <Fragment>
            <button className={`${props.className} button`} onClick={props.onClick}>{props.text}</button>
        </Fragment>
    )
}

export default Button
