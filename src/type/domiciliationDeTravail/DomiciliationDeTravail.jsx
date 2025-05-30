import React, { useState } from 'react'

import { jsPDF } from "jspdf";
import style from './DomiciliationDeTravailStyles.module.css'

import logoLaval from '../../assets/logoLaval.png'
function DomiciliationDeTravail() {
  const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      cin: '',
      poste: '',
      dateEmbauche: '',
      salaireMensuel: '',
      banque: '',
      codeBanque: '',
      codeVille: '',
      NCompte:'',
      CleRib:'',
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
  
    const civilite = formData.genre === "Femme" ? "Mme" : "Mr"

    const generatePDF = () => {
      const doc = new jsPDF()
    
      const img = new Image()
      img.src = logoLaval
      img.onload = function () {
        doc.addImage(img, 'PNG', 10, 10, 50, 20)
    
        doc.setFont("Times" , "bold")
        doc.setFontSize(16)
        doc.text("ENGAGEMENT DE DOMICILIATION IRRÉVOCABLE DE SALAIRE", 105, 40, { align: "center" })
        doc.setLineWidth(0.5)
        doc.line(17, 42, 195, 42) 
        doc.setFontSize(12)
        doc.setFont("Times" , "normal")
        const paragraph1 = 
          "Nous, soussignés, la société LAVAL ACADEMY PRIVE représentée par Mr AHMITO MOHAMMED en sa qualité de GERANT habilité à l'effet de la présente attestations que " +
          civilite + " " + formData.nom.toUpperCase() + " " + formData.prenom.toUpperCase() + ", titulaire de la carte d’identité nationale n° " +
          formData.cin + ", exerce au sein de notre établissement en qualité de: \n\n" +
          "   •  " + formData.poste + "\n\n" +
          "Et ce, depuis le " + formatDateFrench(formData.dateEmbauche) + ".\n\n" +
          civilite + " " + formData.nom.toUpperCase() + " " + formData.prenom.toUpperCase() + " perçoit un salaire mensuel net de " + formData.salaireMensuel + " dirhams" +
          " Suite à la demande de " + civilite + " " + formData.nom.toUpperCase() + " " + formData.prenom.toUpperCase() + ", employée auprès de notre établissement , nous nous engageons par la présente à virer irrévocablement et de manière permanente le salaire de " +
          civilite + " " + formData.nom.toUpperCase() + " " + formData.prenom.toUpperCase() + " , ainsi le cas échéant en cas de départ, le solde de tout compte, les indemnités de quelque soit la nature sur son compte ouvert auprès de la " +
          formData.banque + " sous les références:\n\n" + "RIB:\n\n";
          
          
        const lines1 = doc.splitTextToSize(paragraph1, 170)
        doc.text(lines1, 20, 70)
        var yPosition = 160
        doc.text("Code Banque  \n\n" + formData.codeBanque, 30, yPosition)
        doc.text("Code Ville  \n\n" + formData.codeVille, 60, yPosition)
        doc.text("Numéro de Compte  \n\n" + formData.NCompte, 90, yPosition)
        doc.text("Clé RIB  \n\n" + formData.CleRib, 140, yPosition)
        
        doc.setLineWidth(0.5)
        //trace les lignes horizontales
        doc.line(27, 155, 170, 155) 
        doc.line(27, 164, 170, 164) 
        doc.line(27, 173, 170, 173) 
        //trace les lignes verticales
        doc.line(27, 155, 27, 173) 
        doc.line(57, 155, 57, 173) 
        doc.line(87, 155, 87, 173)
        doc.line(137, 155, 137, 173)
        doc.line(170, 155, 170, 173)

        const paragraph2 = "En cas de départ de " + civilite + " " + formData.nom.toUpperCase() + " " + formData.prenom.toUpperCase() + ", nous nous engageons à informer la " + formData.banque.toUpperCase() + " dans les meilleurs délais et par tout moyen des montants de solde de tout compte , ainsi que les indemnités , de quelque soit la nature et procéder à leur virement au compte supra.\n" +
          "Cet engagement restera valable jusqu'à notification écrite du BMCE , attestant le remboursement de toutes créances sur le compte supra."
        const lines2 = doc.splitTextToSize(paragraph2, 170)
        doc.text(lines2, 20, 190)

        yPosition = 230
        doc.text("Fait à : CASABLANCA", 70, yPosition)
        doc.text("Le : " + formatDateFrench(formData.dateDelivrance), 115, yPosition)
        doc.text("Signature de l'employeur", 90, yPosition+10)
        doc.setFont("Times" , "bold")
        doc.setTextColor(6, 176, 80)
        doc.text("42 ALLEE DE MIMOSA ET ALLEE DES CITRONNIERS AIN SEBAA - Casablanca.", 30, 285)
        doc.setTextColor(5, 11, 8)
        doc.text("ICE: 003039695000032 IF: 52446555 – T.P: 32252457 - R.C: 543595 CNSS: 4878280", 35, 290)

        doc.save(`DOMICILIATION_IRRÉVOCABLE_DE_SALAIRE_${formData.nom}_${formData.prenom}.pdf`)
      }
    }
    
    
    
  
    return (
      <div className={style.container}>
        <h1>Domiciliation de Travail</h1>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formGroup1}>
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
            <label>Banque :
              <input type="text" name="banque" value={formData.banque} onChange={handleChange} required />
            </label>
          </div>
          
          <div className={style.formGroup2}>
            <label>Code Banque :
              <input type="text" name="codeBanque" value={formData.codeBanque} onChange={handleChange} required />
            </label>

            <label>Code Ville :
              <input type="text" name="codeVille" value={formData.codeVille} onChange={handleChange} required />
            </label>

            <label>Numéro de Compte :
              <input type="text" name="NCompte" value={formData.NCompte} onChange={handleChange} required />
            </label>

            <label>Clé RIB :
              <input type="text" name="CleRib" value={formData.CleRib} onChange={handleChange} required />    
            </label>
  
            <label>Date d’embauche :
              <input type="date" name="dateEmbauche" value={formData.dateEmbauche} onChange={handleChange} required />
            </label>
  
            <label>Date de délivrance :
              <input type="date" name="dateDelivrance" value={formData.dateDelivrance} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Générer le document</button>
  
          
        </form>
        
      </div>
    )
}

export default DomiciliationDeTravail