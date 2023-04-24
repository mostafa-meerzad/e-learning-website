import React from 'react'
import Header from './components/Header'
import "./styles.css"
import Hero from './components/Hero'
import Courses from './components/Courses'
import Roadmap from './components/Roadmap'
import Benefits from './components/Benefits'
import Opinions from './components/Opinions'
import Resources from './components/Resources'
import Subscription from './components/Subscription'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Courses/>
    <Roadmap/>
    <Benefits/>
    <Opinions/>
    <Resources/>
    <Subscription/>

    <Footer/>
    </>
  )
}

export default App