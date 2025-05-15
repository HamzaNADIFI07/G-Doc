import './App.css'
import Header from './header/Header.jsx'
import Options from './options/Options.jsx'
import AttesDeTravail from './type/attesDeTravail/AttesdeTravail.jsx'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/AttestationDeTravail" element={<AttesDeTravail />} />
      </Routes>
    </Router>
  )
}

export default App
