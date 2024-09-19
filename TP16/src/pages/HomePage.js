import React from 'react'
import ProductsList from '../components/ProductsList';
import Header from '../components/Header';
import Footeer from '../components/Footeer';

export default function HomePage() {
  return (
    <div>
    <Header/>
        <ProductsList/>
    <Footeer/>
    </div>
  )
}
