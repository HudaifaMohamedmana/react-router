import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Profile from './component/Profile'
import Home from './component/Home'
import About from './component/About'
import Settings from './component/Settings'
import Contact from './component/Contact'


const App = () => {
  return (
    <>
    <Nav />
    <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Profile' element={<Profile />} />
    <Route path='/Settings' element={<Settings />} />
    </Routes>
    </>
    )
}
export default App