import './App.css'
import Header from './header/Header.jsx'
import Center from './centre/Centre.jsx'
import Options from './options/Options.jsx'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Center />} />
        <Route path="/Options" element={<Options />} />
      </Routes>
    </Router>
  )
}

export default App
