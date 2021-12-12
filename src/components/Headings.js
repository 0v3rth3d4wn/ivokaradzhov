import React from 'react'
import SkillsPattern from '../assets/images/lines.svg'

const Headings = ({ title = '', subtitle = '', headingClassName = '' }) => (
  <div className="relative px-8 xl:px-0 pt-22">
    <SkillsPattern className="object-cover absolute top-0 left-1/2 z-[9] w-full h-[calc(100%-2rem)] opacity-70 -translate-x-1/2" />
    <div className="relative z-10 xl:px-8 mx-auto mb-1 max-w-7xl text-xs font-extrabold text-secondary uppercase">
      {subtitle}
    </div>
    <h2 className="relative z-10 xl:px-8 pb-10 mx-auto max-w-7xl text-4xl font-bold text-white">
      {title}
    </h2>
  </div>
)

export default Headings
