import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
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
  }
`

const About = () => {
  const {
    aboutJson: { anchor: id, title, subtitle, name, description },
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
    <div className="relative pb-22 bg-gradient" id={id}>
      <Heading
        headingClassName="pt-22 px-8 relative"
        title={title}
        subtitle={subtitle}
      />
      <div className="sm:grid overflow-hidden relative -top-8 sm:grid-cols-[2fr,3fr] lg:grid-cols-[1fr,2fr] sm:gap-8 px-8 pt-8 mx-auto max-w-7xl">
        <div
          ref={gradientBoxRef}
          className="flex relative flex-col justify-center items-center p-9 mb-10 rounded-xl border-2 border-transparent border-solid square border-gradient"
        >
          <StaticImage
            src="../assets/images/karadzhov.png"
            width={144}
            height={144}
            alt={name}
            imgClassName="rounded-full avatar-gradient"
            className="mb-6 rounded-full avatar-gradient"
            quality="90"
          />
          <div className="text-2xl font-bold text-center text-white uppercase">
            {name}
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none box-parent">
            <Circle className="absolute top-0 left-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <p className="text-lg lg:text-xl text-white">
          <strong>Lorem ipsum dolor</strong>, sit amet consectetur adipisicing
          elit. Delectus alias accusamus quis eius nostrum deserunt, blanditiis
          atque impedit aperiam amet perferendis saepe nisi aspernatur? Ab, a
          atque. Adipisci, vero delectus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis fugiat{' '}
          <a href="##" target="_blank" rel="noopener noreferrer">
            repellendus
          </a>{' '}
          impedit dolorem? Inventore magni optio ab recusandae corrupti neque
          facilis veritatis fugit veniam blanditiis corporis reiciendis,
          architecto, culpa dignissimos?
        </p>
      </div>
    </div>
  )
}

export default About
