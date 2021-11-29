import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import GoToTop from '../components/GoToTop'
import SEO from '../components/SEO'

const seoQuery = graphql`
  {
    indexJson {
      pageTitle
    }
  }
`

const Index = () => {
  const {
    indexJson: { pageTitle },
  } = useStaticQuery(seoQuery)

  return (
    <>
      <SEO title={pageTitle} />
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
}

export default Index
