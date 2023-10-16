import {Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './Components/Home/home.jsx'
import CaDetail from './Components/CADetails/cadetails.jsx'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CaDetail />} />
    </Routes>
  )
}

export default App
