import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
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
            quality="75"
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
            <strong>web developer</strong> with over <strong>10 years</strong>{' '}
            of experience.
          </p>
          <p className="mb-4">
            My goal is to create stylish, meaningful, and robust websites,
            combined with great user experience. For all the years I have been
            in the industry, I have developed the skillset and the mindset to
            not only deliver high-quality <strong>end products</strong> and{' '}
            <strong>working solutions</strong>, but to create memorable user
            experiences.
          </p>
          <p className="mb-4">
            I stared with Flash and ActionScript 2 back in high school around
            2005 and then transitioned to creating MySpace custom layouts with
            HTML and CSS. From 2010 onwards I've been part of{' '}
            <strong>two leading agencies</strong>, worked as a{' '}
            <strong>freelancer</strong>, <strong>volunteered</strong> with my
            skills for important social causes, and{' '}
            <strong>continiously improved</strong>.
          </p>

          <p className="mb-4">
            My path was very rich in terms of{' '}
            <AnchorLink to="/#skills">technology stack</AnchorLink> and I've
            always worked both on the backend and the frontend, always managing
            and enjoying to adapt quickly to the constantly changing challenges
            of the industry. I also love <strong>Linux</strong>.
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
            <a
              href="https://wordpress.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              WordPress
            </a>{' '}
            as a headless CMS.
          </p>

          <p className="mb-4">
            There are three things that mostly influenced my career path so far
            - honest feedback, learning from past mistakes, and giving back to
            the community.
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
