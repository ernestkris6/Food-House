import React from 'react'
import HeroSection from '../UI/HeroSection'
import Details from '../UI/Details'
import Products from '../UI/Products'
import SubscribeOrder from '../UI/Subscribe'
import SlideMenu from '../UI/SlideMenu'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Details />
      <SlideMenu />
      <Products />
      <SubscribeOrder />
    </div>
  )
}
