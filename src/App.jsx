import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'
import ResetPassword from './pages/ResetPassword'
import ProductDetails from './pages/ProductDetail'
import Footer from './components/Footer'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './store/Payment'

const stripePromise = loadStripe('your-publishable-key');

const App = () => {
  const navlocation=useLocation()
  // console.log(navlocation.pathname)

  let navPath=["/login","/register","/reset"]
  let hideNavbar=navPath.includes(navlocation.pathname)
  console.log(hideNavbar)

  return (
    <>
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
        {!hideNavbar&&<Navbar/>}
          <Routes>
            <Route path='/FireStoreApp' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* Route for Product Details */}
            <Route path="/product/:id" element={<ProductDetails/>} />
            {/* <Route path='/cart' element={<Cart/>}/> */}
            <Route path='/cart' element={
              <PrivateRoute>
                <Cart/>
              </PrivateRoute>
            }/>
            {/* <Route path='/payment' element={<Payment/>}/> */}
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/reset' element={<ResetPassword/>} />
            <Route path='/payment' element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }/>
          </Routes>
          <Footer/>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
