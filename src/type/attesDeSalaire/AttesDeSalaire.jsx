import React, { useState } from 'react'
import { jsPDF } from "jspdf";
import style from './AttesDeSalaireStyles.module.css'

import logoLaval from '../../assets/logoLaval.png'


function AttesDeSalaire() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    poste: '',
    cin: '',
    salaireMensuel: '',
    dateEmbauche: '',
    dateDelivrance: new Date().toISOString().split('T')[0],
    genre: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formatDateFrench = (isoDate) => {
    const [year, month, day] = isoDate.split('-')
    return `${day}/${month}/${year}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Données du formulaire :", formData)
    generatePDF()
  }

  const civilite = formData.genre === "Femme" ? "Madame" : "Monsieur"
  const interesse = formData.genre === "Femme" ? "interessée" : "interessé"

  const generatePDF = () => {
      const doc = new jsPDF()
    
      const img = new Image()
      img.src = logoLaval
      img.onload = function () {
        doc.addImage(img, 'PNG', 10, 10, 50, 20)
    
        doc.setFont("Times" , "bolditalic")
        doc.setFontSize(20)
        doc.text("ATTESTATION DE SALAIRE", 105, 60, { align: "center" })
        doc.setLineWidth(0.5)
        doc.line(57, 62, 153, 62) 
        doc.setFontSize(16)
        doc.setFont("Times" , "normal")
        const content = 
          "Nous, soussignés, la société" + " LAVAL ACADEMY" + ", domiciliée au 42 Boulevard Citronnier, attestons par la présente que " +
          civilite + " " + formData.nom.toUpperCase() + " " + formData.prenom.toUpperCase() + ", titulaire de la carte d’identité nationale n° " +
          formData.cin + ", exerce au sein de notre établissement en qualité de: \n\n" +
          "•  " + formData.poste + "\n\n" +
          "Et perçoit un salaire de " + formData.salaireMensuel + " dirhams, et ce, depuis le " + formatDateFrench(formData.dateEmbauche) + " jusqu’aujourd’hui.\n\n"
          "La présente attestation est délivrée à " + interesse + " à sa demande, pour servir et valoir ce que de droit.\n\n";
    
        const lines = doc.splitTextToSize(content, 170)
        doc.text(lines, 20, 90)
    
        const yPosition = 180
        doc.text("Fait à : Casablanca", 20, yPosition)
        doc.text("Le : " + formatDateFrench(formData.dateDelivrance), 150, yPosition)
        doc.text("Signature", 150, 200)
    
        doc.save(`Attestation_Salaire_${formData.nom}_${formData.prenom}.pdf`)
      }
    }

  return (
    <div className={style.container}>
      <h1>Attestation de Salaire</h1>
      <form onSubmit={handleSubmit} className={style.form}>
      <label>
        Civilité :
            <select name="genre" value={formData.genre} onChange={handleChange} required>
              <option value="">Sélectionner</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
        </label>
        <label>Nom :
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </label>

        <label>Prénom :
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </label>

        <label>CIN :
          <input type="text" name="cin" value={formData.cin} onChange={handleChange} required />
        </label>

        <label>Poste :
          <input type="text" name="poste" value={formData.poste} onChange={handleChange} required />
        </label>

        <label>Salaire mensuel (en dirhams) :
          <input type="number" name="salaireMensuel" value={formData.salaireMensuel} onChange={handleChange} required />
        </label>

        <label>Date d’embauche :
          <input type="date" name="dateEmbauche" value={formData.dateEmbauche} onChange={handleChange} required />
        </label>

        <label>Date de délivrance :
          <input type="date" name="dateDelivrance" value={formData.dateDelivrance} onChange={handleChange} required />
        </label>

        <button type="submit">Générer le document</button>
      </form>
    </div>
  )
}

export default AttesDeSalaire
