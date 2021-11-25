import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { SiWordpress } from '@react-icons/all-files/si/SiWordpress'
import { SiWoo } from '@react-icons/all-files/si/SiWoo'
import { SiNginx } from '@react-icons/all-files/si/SiNginx'
import { SiReact } from '@react-icons/all-files/si/SiReact'
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby'
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack'
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql'
import { SiGit } from '@react-icons/all-files/si/SiGit'
import { SiSass } from '@react-icons/all-files/si/SiSass'
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss'
import { SiBootstrap } from '@react-icons/all-files/si/SiBootstrap'

import SkillsPattern from '../assets/images/skills-pattern.svg'
import '../styles/skills.css'

const skillsQuery = graphql`
  query MyQuery {
    skillsJson {
      title
      subtitle
      skills {
        icon
        name
      }
    }
  }
`
const icons = {
  wordpress: SiWordpress,
  woocommerce: SiWoo,
  nginx: SiNginx,
  react: SiReact,
  javascript: SiJavascript,
  gatsbyjs: SiGatsby,
  webpack: SiWebpack,
  graphql: SiGraphql,
  git: SiGit,
  sass: SiSass,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
}

const Skills = () => {
  const {
    skillsJson: { title, subtitle, skills },
  } = useStaticQuery(skillsQuery)

  return (
    <div className="py-22 px-8 skills relative">
      <SkillsPattern className="absolute top-0 left-1/2 -translate-x-1/2 z-[9] opacity-70 w-full h-auto" />
      <div className="text-secondary font-extrabold uppercase text-xs relative z-10 mb-1">
        {subtitle}
      </div>
      <h2 className="text-white text-4xl font-bold relative z-10 pb-10">
        {title}
      </h2>

      {skills && (
        <div className="grid gap-4 grid-cols-3 z-10 relative skill-list">
          {skills.map(({ icon, name }, index) => (
            <div key={index}>
              <div
                title={name}
                className="rounded-2xl bg-[#7477D4] bg-opacity-10 flex-1 square flex flex-wrap items-center justify-center self-center"
              >
                {icons[icon] &&
                  React.createElement(icons[icon], {
                    className: 'text-white w-14 h-14',
                  })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Skills