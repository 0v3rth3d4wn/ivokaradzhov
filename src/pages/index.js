import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import GoToTop from '../components/GoToTop'

const Index = () => (
  <>
    <Hero />
    <Skills />
    <StaticImage
      alt="PC"
      className="block w-full h-auto"
      layout="fullWidth"
      src="../assets/images/computer.png"
      quality="100"
    />
    <About />
    <Contact />
    <GoToTop />
  </>
)

export default Index
