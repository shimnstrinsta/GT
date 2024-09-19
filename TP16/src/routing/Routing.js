import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';

export default function Routing() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/cart' element={<CartPage/>}/>
        </Routes>
    </Router>
  )
}
