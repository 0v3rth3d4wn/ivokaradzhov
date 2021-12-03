import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import GoToTop from '../components/GoToTop'
import SEO from '../components/SEO'
import RetroPC from '../components/RetroPC'

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
      <RetroPC />
      <About />
      <Contact />
      <GoToTop />
    </>
  )
}

export default Index
