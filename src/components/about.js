import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import SkillsPattern from '../assets/images/skills-pattern.svg'
import '../styles/about.css'

const aboutJSON = graphql`
  query AboutQuery {
    aboutJson {
      title
      subtitle
      name
      description
    }
  }
`

const About = () => {
  const {
    aboutJson: { title, subtitle, name, description },
  } = useStaticQuery(aboutJSON)

  return (
    <div className="py-22 px-8 skills relative">
      <SkillsPattern className="absolute top-0 left-1/2 -translate-x-1/2 z-[9] opacity-70 w-full h-auto" />
      <div className="text-secondary font-extrabold uppercase text-xs relative z-10 mb-1">
        {subtitle}
      </div>
      <h2 className="text-white text-4xl font-bold relative z-10 pb-10">
        {title}
      </h2>
      <div className="flex flex-col p-9 square items-center justify-center relative border-transparent border-2 border-solid rounded-xl border-gradient mb-10">
        <StaticImage
          src="../assets/images/karadzhov.png"
          width={192}
          height={192}
          alt={name}
          className="rounded-full bg-gradient mb-6"
        />
        <div className="text-white uppercase text-2xl text-center font-bold">
          {name}
        </div>
      </div>
      <p className="text-white text-lg">
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
  )
}

export default About
