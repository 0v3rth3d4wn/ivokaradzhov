import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const TaglineQuery = graphql`
  query {
    aboutJson {
      tagline
    }
  }
`

const RetroPC = () => {
  const {
    aboutJson: { tagline },
  } = useStaticQuery(TaglineQuery)

  return (
    <div className="relative">
      <StaticImage
        alt="PC"
        className="block sm:hidden w-full h-auto"
        layout="fullWidth"
        src="../assets/images/computer.jpg"
        quality="75"
        aspectRatio={1 / 1.5}
        breakpoints={[480, 750, 1080]}
      />
      <StaticImage
        alt="PC"
        className="hidden sm:block w-full h-auto"
        layout="fullWidth"
        src="../assets/images/computer.jpg"
        quality="75"
        breakpoints={[750, 1080, 1920, 2560]}
      />
      <h3 className="absolute inset-0 bg-black/30">
        <div className="absolute top-1/2 left-1/2 text-7xl font-extrabold tracking-[-0.5px] leading-[84px] text-white -translate-x-1/2 -translate-y-1/2">
          {tagline &&
            tagline.map((line, index) => <div key={index}>{line}</div>)}
        </div>
      </h3>
    </div>
  )
}
export default RetroPC
