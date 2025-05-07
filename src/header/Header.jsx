import React from 'react'
import style from './HeaderStyles.module.css'
import { Link } from 'react-router-dom'

import logoLaval from '../assets/logoLaval.png'

function Header() {
  return (
    <div className={style.header}>
        <div className={style.logo}>
            <Link to="/">
                <img src={logoLaval} alt="Logo Laval" />
            </Link>
            
        </div>
    </div>
  )
}

export default Header