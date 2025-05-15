import './App.css'
import Header from './header/Header.jsx'
import Options from './options/Options.jsx'
import AttesDeTravail from './type/attesDeTravail/AttesdeTravail.jsx'
import AttesDeSalaire from './type/attesDeSalaire/AttesDeSalaire.jsx'
import AttesDeTitularisation from './type/attesDeTitularisation/AttesdeTitularisation.jsx'
import DomiciliationDeTravail from './type/domiciliationDeTravail/DomiciliationDeTravail.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/AttestationDeTravail" element={<AttesDeTravail />} />
        <Route path="/AttestationDeSalaire" element={<AttesDeSalaire />} />
        <Route path="/AttestationDeTitularisation" element={<AttesDeTitularisation />} />
        <Route path="/DomiciliationDeTravail" element={<DomiciliationDeTravail />} />
      </Routes>
    </Router>
  )
}

export default App
