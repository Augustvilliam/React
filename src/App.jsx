import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import C7 from './Components/C7/C7'

function App() {
  
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <C7 />
    </main>
  </BrowserRouter>
  )
}

export default App
