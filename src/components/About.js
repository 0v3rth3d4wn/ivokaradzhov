import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Obfuscate from 'react-obfuscate'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Circle from '../assets/images/circle.svg'

import '../styles/about.css'
import Heading from './Headings'

const aboutJSON = graphql`
  query AboutQuery {
    aboutJson {
      anchor
      title
      subtitle
      name
      description
    }

    contactJson {
      email
    }
  }
`

const About = () => {
  const {
    aboutJson: { anchor: id, title, subtitle, name, description },
    contactJson: { email },
  } = useStaticQuery(aboutJSON)

  const gradientBoxRef = useRef()
  const b1 =
    'linear-gradient(190deg, rgba(78, 16, 114, 0.74) 10.41%, #261548 89.87%) padding-box, linear-gradient(225deg, #F675FF 1.68%, rgba(170, 189, 249, 0) 58.85%, #64FFF4 100%) border-box'

  const b2 =
    'linear-gradient(190deg, rgba(78, 16, 114, 0.74) 10.41%, #261548 89.87%) padding-box, linear-gradient(585deg, #F675FF 1.68%, rgba(170, 189, 249, 0) 58.85%, #64FFF4 100%) border-box'

  // Start animating the img box gradient on mount
  useEffect(() => {
    gsap.fromTo(
      gradientBoxRef.current,
      {
        ease: 'none',
        background: b1,
      },
      {
        ease: 'none',
        duration: 19,
        background: b2,
        repeat: -1,
      }
    )
  }, [])

  return (
    <div className="relative pb-22 xl:pb-48 bg-gradient" id={id}>
      <Heading title={title} subtitle={subtitle} />
      <div className="sm:grid overflow-hidden relative -top-8 sm:grid-cols-[2fr,3fr] lg:grid-cols-[1fr,3fr] sm:gap-8 px-8 pt-8 mx-auto max-w-7xl">
        <div
          ref={gradientBoxRef}
          className="flex relative flex-col justify-center items-center p-9 mb-10 rounded-xl border-2 border-transparent border-solid square border-gradient"
        >
          <StaticImage
            src="../assets/images/karadzhov.png"
            width={1000}
            height={1000}
            alt={name}
            imgClassName="rounded-full avatar-gradient"
            className="mb-6 w-[144px] md:w-[192px] xl:w-[256px] h-[144px] md:h-[192px] xl:h-[256px] rounded-full avatar-gradient"
            quality="100"
            breakpoints={[480, 750, 1080]}
          />
          <div className="text-2xl font-bold text-center text-white uppercase">
            {name}
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none box-parent">
            <Circle className="absolute top-0 left-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <p className="mb-4">
            Hi, my name is <strong>Ivo</strong> and I'm a{' '}
            <strong>web developer</strong>. I currently work at{' '}
            <a
              href="https://ralev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ralev.com
            </a>{' '}
            - design and{' '}
            <a
              href="https://dev.ralev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              web development
            </a>{' '}
            agency. <br />
            My goal is to create stylish, meaningful, and robust websites,
            combined with great user experience. I have been in the industry for
            more than <strong>10 years</strong> now and I have the skillset and
            the mindset to deliver <strong>end products</strong> and{' '}
            <strong>working solutions</strong>.
          </p>
          <p className="mb-4">
            I stared with Flash and ActionScript 2 in high school around 2005
            and then transitioned to creating MySpace custom layouts in 2006
            with HTML and CSS. From 2010 onwards I've been a part of 2 agencies,
            worked as a freelancer, volunteered, and continiously improved.
          </p>

          <p className="mb-4">
            My path was very rich in terms of{' '}
            <AnchorLink to="/#skills">technology stack</AnchorLink> and I've
            always worked both on the backend and the frontend and I've managed
            to adapt quickly depending on the situation.
          </p>

          <p className="mb-4">
            My favorite thing right now is using{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.com/"
            >
              Gatsby
            </a>{' '}
            to create static websites while using{' '}
            <a href="https://wordpress.org/">WordPress</a> as a headless CMS.
          </p>

          <p className="mb-4">
            I believe that people should be invested in what they like to do,
            hold yourself accountable, take no shortcuts, give honest feedback,
            and give back to the communities you are involved in. I believe that
            there is a right tool for every job.
          </p>
          <p className="mb-4">
            Use the big button <AnchorLink to="/#contact">below</AnchorLink> or
            just{' '}
            <Obfuscate
              email={email}
              headers={{
                subject: `Let's work together`,
              }}
            >
              click here
            </Obfuscate>{' '}
            to reach out to me.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
