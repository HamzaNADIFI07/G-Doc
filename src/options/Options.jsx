import React from 'react'
import style from './OptionsStyles.module.css'

import { Link } from 'react-router-dom'

import attestationDeTravail from '../assets/icons8-travail-100.png'
import attestationDeSalaire from '../assets/icons8-chèque-de-paie-100.png'
import attestationDeTitularisation from '../assets/icons8-presse-papiers-100.png'
import DomiciliationDeTravail from '../assets/icons8-marqueur-de-plan-100.png'
function Options() {
  return (
    <div className={style.options}>
        <div className={style.title}>
            <h1>Type de document</h1>
            <div className={style.ligne1}>
                <Link to="/AttestationDeTravail">
                    <h2>Attestation de Travail</h2>
                    <img src={attestationDeTravail} alt="Attestation De Travail" />
                </Link>

                <Link to="/AttestationDeSalaire">
                    <h2>Attestation de Salaire</h2>
                    <img src={attestationDeSalaire} alt="Attestation De Salaire" />
                </Link>
            </div>
            <div className={style.ligne2}>
                <Link to="/AttestationDeTitularisation">
                    <h2>Attestation de Titularisation</h2>
                    <img src={attestationDeTitularisation} alt="Attestation De Titularisation" />
                </Link>

                <Link to="/DomiciliationDeTravail">
                    <h2>Domiciliation De Travail</h2>
                    <img src={DomiciliationDeTravail} alt="Domiciliation De Travail" />
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Options