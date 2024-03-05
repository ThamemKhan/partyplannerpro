import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import Booking from './Booking'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './SignUp'
import SignIn from './SignIn'
import Profile from './components/Profile'
import Payment from './components/payment'
import Features from './components/Features'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/home" element={<Booking/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/payment" element={<Payment/>}/>
    {/* <Route path="/services" element={<Features/>}/> */}

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
