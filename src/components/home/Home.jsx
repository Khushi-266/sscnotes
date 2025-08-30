import React from 'react'
import Header from '../Layouts/Header'
import Hero from '../Layouts/Hero'
import Access from '../Layouts/Access'
import FeaturesSection from '../Layouts/FeaturesSection'
import AspirantSupportSection from '../Layouts/AspirantSupportSection'
import ReviewSection from '../Layouts/ReviewSection'
import StatsSection from '../Layouts/StateSection'
import Footer from '../Layouts/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Access/>
      <FeaturesSection/>
      <AspirantSupportSection/>
      <ReviewSection/>
      <StatsSection/>
      <Footer/>
    </>
  )
}

export default Home
