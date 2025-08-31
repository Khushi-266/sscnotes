import React from 'react'
import Header from '../Layouts/Header'
import Hero from '../Layouts/Hero'
import Access from '../Layouts/Access'
import FeaturesSection from '../Layouts/FeaturesSection'
import AspirantSupportSection from '../Layouts/AspirantSupportSection'
import ReviewSection from '../Layouts/ReviewSection'
import StatsSection from '../Layouts/StateSection'
import Footer from '../Layouts/Footer'
import NotesSection from '../Layouts/NotesSection'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Access/>
      <FeaturesSection/>
      <NotesSection/>
      <AspirantSupportSection/>
      <ReviewSection/>
      <StatsSection/>
      <Footer/>
    </>
  )
}

export default Home
