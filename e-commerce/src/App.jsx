import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Nsvbar2 from './components/Nsvbar2'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Nsvbar2/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/shop' element={<Shop/>}  />
        <Route path='/cart' element={<Cart/>}  />
        <Route path='/contact' element={<Contact/>}  />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
