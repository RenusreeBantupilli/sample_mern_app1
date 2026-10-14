import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home_page from './pages/Home_page'
import About from './pages/About'
import Contact_page from './pages/Contact_page'
import {Routes,Route}from 'react-router-dom'

function App() {
  return(
    <div>
  
<Header />
 <Routes>
  <Route path="/" element={<Home_page></Home_page>}></Route>
<Route path="/About" element={<About></About>}></Route>
<Route path="/Contact_page" element={<Contact_page></Contact_page>}></Route>c

  
 </Routes>
  
        <Footer />

       
     
  </div>
  )
}

export default App
