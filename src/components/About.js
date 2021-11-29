import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

import SkillsPattern from '../assets/images/lines.svg'
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

  return (
    <div className="relative pb-22 bg-gradient" id={id}>
      <Heading
        headingClassName="pt-22 px-8 relative"
        title={title}
        subtitle={subtitle}
      />
      <div className="px-8 md:grid md:grid-cols-[1fr,3fr] lg:grid-cols-[1fr,2fr] md:gap-8">
        <div className="relative flex flex-col items-center justify-center mb-10 border-2 border-transparent border-solid p-9 square rounded-xl border-gradient">
          <StaticImage
            src="../assets/images/karadzhov.png"
            width={144}
            height={144}
            alt={name}
            className="mb-6 rounded-full avatar-gradient"
            quality="90"
          />
          <div className="text-2xl font-bold text-center text-white uppercase">
            {name}
          </div>
        </div>
        <p className="text-lg lg:text-xl text-white">
          <strong>Lorem ipsum dolor</strong>, sit amet consectetur adipisicing
          elit. Delectus alias accusamus quis eius nostrum deserunt, blanditiis
          atque impedit aperiam amet perferendis saepe nisi aspernatur? Ab, a
          atque. Adipisci, vero delectus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis fugiat{' '}
          <a href="https://ralev.com" target="_blank" rel="noopener noreferrer">
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
