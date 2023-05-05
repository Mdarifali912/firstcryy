import React from 'react'

import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import ProductPage from '../pages/ProductPage'

const AllRoutes = () => {
  return (


    
    <div>

           
          
          <Routes>

            <Route  path='/' element={<Home/>}/>
            <Route  path='/login' element={<Login/>}/>
            <Route  path='/signup' element={<Signup/>}/>
            
            <Route  path='/productpage' element={<ProductPage/>}/>
            
          </Routes>
          
          





    </div>
  
  )
}

export default AllRoutes