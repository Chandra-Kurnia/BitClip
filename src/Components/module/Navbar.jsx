import React from 'react'
import styles from '../../styles/Navbar.module.css'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  const {push} = useHistory()
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <span onClick={() => push('/')} className="navbar-brand mb-0 cursor-pointer">ClipBit</span>
          <span className={styles.inputWrapper}>
              <input onChange={props.handleSearch} type="text" placeholder='Search Movie' className={styles.searchInput}/>
          </span>
        </div>
      </nav>
    )
}

Navbar.propType = {
  handleSearch: PropTypes.func
}

export default Navbar
