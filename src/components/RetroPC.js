import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const RetroPC = () => (
  <div>
    <StaticImage
      alt="PC"
      className="block w-full h-auto sm:hidden"
      layout="fullWidth"
      src="../assets/images/computer.jpg"
      quality="75"
      aspectRatio={1 / 1.5}
      breakpoints={[480, 750, 1080]}
    />
    <StaticImage
      alt="PC"
      className="hidden w-full h-auto sm:block"
      layout="fullWidth"
      src="../assets/images/computer.jpg"
      quality="75"
      breakpoints={[750, 1080, 1920, 2560]}
    />
  </div>
)

export default RetroPC
