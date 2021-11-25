import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Obfuscate from 'react-obfuscate'
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope'

import SkillsPattern from '../assets/images/skills-pattern.svg'

const contactJSON = graphql`
  query ContactQuery {
    contactJson {
      title
      subtitle
      email
    }
  }
`

const Contact = () => {
  const {
    contactJson: { title, subtitle, email },
  } = useStaticQuery(contactJSON)

  return (
    <div className="py-22 px-8 skills relative">
      <SkillsPattern className="absolute top-0 left-1/2 -translate-x-1/2 z-[9] opacity-70 w-full h-auto" />
      <div className="text-secondary font-extrabold uppercase text-xs relative z-10 mb-1">
        {subtitle}
      </div>
      <h2 className="text-white text-4xl font-bold relative z-10 pb-10">
        {title}
      </h2>
      <Obfuscate
        email={email}
        headers={{
          subject: `Let's work together`,
        }}
        className="p-5 relative bg-tertiary text-primary flex flex-wrap items-center justify-center w-[calc(100%-2rem)] hover:bg-white transition-colors duration-200 after:w-8 after:bg-tertiary after:h-full after:absolute after:right-[-1.5rem] after:-skew-x-12 hover:after:bg-white after:transition-colors after:duration-200"
      >
        <FaRegEnvelope className="w-6" />
      </Obfuscate>
    </div>
  )
}

export default Contact
