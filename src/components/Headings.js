import React from 'react'
import SkillsPattern from '../assets/images/lines.svg'

const Headings = ({ title = '', subtitle = '', headingClassName = '' }) => (
  <div className="relative px-8 xl:px-0 pt-22 xl:pt-48 pb-10 xl:pb-20">
    <SkillsPattern className="object-cover absolute top-0 left-1/2 z-[9] w-full h-[calc(100%-2.5rem)] xl:h-[calc(100%-5rem)] opacity-70 -translate-x-1/2" />
    <div className="relative z-10 xl:px-8 mx-auto mb-1 max-w-7xl text-xs lg:text-base font-extrabold text-secondary uppercase">
      {subtitle}
    </div>
    <h2 className="relative z-10 xl:px-8 pb-0 mx-auto max-w-7xl text-4xl lg:text-6xl font-bold text-white">
      {title}
    </h2>
  </div>
)

export default Headings
