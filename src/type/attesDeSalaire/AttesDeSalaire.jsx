import React, { useState } from 'react'
import { jsPDF } from "jspdf";
import style from './AttesDeSalaireStyles.module.css'

function AttesDeSalaire() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    poste: '',
    cin: '',
    salaireMensuel: '',
    dateEmbauche: '',
    dateDelivrance: new Date().toISOString().split('T')[0],
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

  const generatePDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text("Attestation de Travail", 20, 20)

    doc.setFontSize(12)
    doc.text(`Nom : ${formData.nom}`, 20, 40)
    doc.text(`Prénom : ${formData.prenom}`, 20, 50)
    doc.text(`Poste : ${formData.poste}`, 20, 60)
    doc.text(`Date d’embauche : ${formData.dateEmbauche}`, 20, 70)
    doc.text(`Date de délivrance : ${formatDateFrench(formData.dateDelivrance)}`, 20, 80)

    doc.save(`Attestation_Travail_${formData.nom}_${formData.prenom}.pdf`)
  }

  return (
    <div className={style.container}>
      <h1>Attestation de Salaire</h1>
      <form onSubmit={handleSubmit} className={style.form}>
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
