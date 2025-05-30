import React from 'react'
import style from './HeaderStyles.module.css'
import { Link } from 'react-router-dom'

import logoLaval from '../assets/logoLaval.png'
import logoGdoc from '../assets/logo.png'

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logoLaval}>
        <Link to="/">
          <img src={logoLaval} alt="Logo Laval" />
        </Link>
      </div>

      <div className={style.logoGdoc}>
        <Link to="/">
          <img src={logoGdoc} alt="Logo G-doc" />
        </Link>
      </div>
    </div>
  )
}

export default Header
