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

import Heading from './Headings'

const skillsQuery = graphql`
  query MyQuery {
    skillsJson {
      anchor
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
    skillsJson: { anchor: id, title, subtitle, skills },
  } = useStaticQuery(skillsQuery)

  return (
    <div className="relative pb-22 bg-gradient" id={id}>
      <Heading
        headingClassName="pt-22 px-8 relative"
        title={title}
        subtitle={subtitle}
      />

      {skills && (
        <div className="relative z-10 grid grid-cols-3 gap-4 px-8 md:grid-cols-6 skill-list">
          {skills.map(({ icon, name }, index) => (
            <div key={index}>
              <div
                title={name}
                className="rounded-2xl bg-[#7477D4] bg-opacity-10 flex-1 square flex flex-wrap items-center justify-center self-center"
              >
                {icons[icon] &&
                  React.createElement(icons[icon], {
                    title: name,
                    className:
                      'text-white w-14 h-14 xl:w-28 xl:h-28 xl:opacity-60 xl:hover:opacity-100 xl:transition-opacity xl:duration-200 xl:cursor-pointer',
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
