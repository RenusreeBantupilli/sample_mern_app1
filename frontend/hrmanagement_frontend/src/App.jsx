import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home_page from './pages/Home_page'
import About from './pages/About'
import contact from './pages/contact'
import {Routes,Route}from 'react-router-dom'

function App() {
  return(
    <div>
  
<Header />
 <Routes>
  <Route path="/" element={<Home_page></Home_page>}></Route>
<Route path="/About" element={<About></About>}></Route>
<Route path="/contact" element={<contact></contact>}></Route>

  
 </Routes>
  
        <Footer />

       
     
  </div>
  )
}

export default App
