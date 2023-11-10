import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </>
  )
}

export default App
