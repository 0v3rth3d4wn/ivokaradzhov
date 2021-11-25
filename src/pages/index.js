import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Hero from '../components/hero'
import Skills from '../components/skills'
import About from '../components/about'
import Contact from '../components/contact'

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
  </>
)

export default Index
