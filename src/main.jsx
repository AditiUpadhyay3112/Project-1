import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Cart from './Pages/Cart.jsx'
import FirstHome from './Pages/FirstHome.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import UserForm from './Components/UserForm.jsx'

const router = createBrowserRouter(
createRoutesFromElements
(
  <Route path='/' element= {<Layout/>}>
    <Route path='' element={<FirstHome/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/userform' element={<UserForm/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
