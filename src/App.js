import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
import Login from './Components/Login'
import UserDet from './Components/UserDet'
import CartPage from './Components/CartPage'
import CheckOut from './Components/CheckOut'

const App = () => {
  

  return (
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/UserDet' element={<UserDet/>}/>
  <Route path='/CartPage' element={<CartPage/>}/>
  <Route path='/Checkout' element={<CheckOut/>}/>

  

  <Route/>
 </Routes>



  )
  
}

export default App
