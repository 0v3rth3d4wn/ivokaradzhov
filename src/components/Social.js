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
      <div className="px-8 py-22">
        <div className="text-white uppercase text-xs font-bold mb-2">
          Or find me at
        </div>
        <div className="flex items-center gap-4">
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
