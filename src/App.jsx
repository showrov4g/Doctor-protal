import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/doctors' element={<Doctors/>} />
          <Route path='/doctors/:specialty' element={<Doctors/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/my-profile' element={<MyProfile/>} />
          <Route path='/my-appointment' element={<MyAppointments/>} />
          <Route path='/appointment/:docId' element={<Appointment/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
