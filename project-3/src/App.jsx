import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Contract from './Routes/Contract'
import Project from './Routes/Project'
import './index.css'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/About' element={ <About />} />
    <Route path='/Contract' element={ <Contract />} />
    <Route path='/Project' element={ <Project />} />
   </Routes>
   
   
   </BrowserRouter>
  )
}

export default App
