import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Cart from './Pages/Cart.jsx'
import FirstHome from './Pages/FirstHome.jsx'
import SignupForm from './Components/SignupForm.jsx'
import LoginForm from './Components/LoginForm.jsx'
import ForgotPassword from './Components/ForgotPassword.jsx'
import OTP from './Components/OTP.jsx'
import ChangePassword from './Components/ChangePassword.jsx'

const router = createBrowserRouter(
createRoutesFromElements
(
  <Route path='/' element= {<Layout/>}>
    <Route path='' element={<FirstHome/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/signup' element={<SignupForm/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/otp' element={<OTP/>}/>
    <Route path='/change-password' element={<ChangePassword/>}/>



  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
