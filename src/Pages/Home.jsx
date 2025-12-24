import React from 'react'
import HeroSection from '../UI/HeroSection'
import Details from '../UI/Details'
import Products from '../UI/Products'
import SubscribeOrder from '../UI/Subscribe'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Details />
      <Products />
      <SubscribeOrder />
    </div>
  )
}
