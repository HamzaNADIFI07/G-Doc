import React from 'react'
import { Link } from 'react-router-dom'
import style from './CentreStyles.module.css'

import logo from '../assets/logo.png'

function Centre() {
  return (

    <div className={style.logo}>
      <Link to="Options">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Centre