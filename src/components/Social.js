import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin'

const socialIconsQuery = graphql`
  {
    allSocialJson {
      nodes {
        name
        key
        url
      }
    }
  }
`

const icons = {
  github: SiGithub,
  linkedin: SiLinkedin,
}

const Social = () => {
  const {
    allSocialJson: { nodes: socialIcons },
  } = useStaticQuery(socialIconsQuery)

  return (
    socialIcons && (
      <div className="py-22 ">
        <div className="mb-2 text-xs font-bold text-white uppercase">
          Or find me at
        </div>
        <div className="flex gap-4 items-center">
          {socialIcons.map(({ name, key, url }, index) => (
            <a href={url} key={index}>
              {icons[key] &&
                React.createElement(icons[key], {
                  title: name,
                  className: 'w-8 h-8 text-tertiary',
                })}
            </a>
          ))}
        </div>
      </div>
    )
  )
}

export default Social
