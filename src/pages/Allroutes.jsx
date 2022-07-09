import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from './About.'
import Cart from './Cart'
import Details from './Details'
import Home from './Home'
import Login from './Login'
import Painting from './Painting'
import Wishlist from './Wishlist'
const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/painting' element={ <Painting/> }/>
            <Route path='/wishlist' element={ <Wishlist/> }/>
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/login' element={ <Login/> }/>
            <Route path='/painting/:id' element={<Details/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes