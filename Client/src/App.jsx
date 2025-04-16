import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {Toaster} from "react-hot-toast"
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'
import { useAppContext } from './Context/AppContext'
import Login from './Components/Login'
import AllProducts from './Pages/AllProducts'
import ProductCategory from './Pages/ProductCategory'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import AddAddress from './Pages/AddAddress'
import MyOrders from './Pages/MyOrders'
import SellerLogin from './Components/Seller/SellerLogin'
import SellerLayout from './Pages/Seller/SellerLayout'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin, isSeller} = useAppContext()
  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      
      {isSellerPath ? null : <Navbar/> }
      {showUserLogin ? <Login/> : null}
      
      <Toaster/>
      <div className= {` ${isSellerPath ? " " : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/products' element={ <AllProducts/>} />
          <Route path='/products/:category' element={ <ProductCategory />} />
          <Route path='/products/:category/:id' element={ <ProductDetails />} />
          <Route path='/cart' element={ <Cart/>} />
          <Route path='/add-address' element={ <AddAddress/>} />
          <Route path='/my-orders' element={ <MyOrders/>} />
          <Route path='/seller' element={ isSeller ? <SellerLayout/> : <SellerLogin/>} >

          </Route>
        </Routes>
      </div>
     {! isSellerPath &&  <Footer/>}
    </div>
  )
}

export default App