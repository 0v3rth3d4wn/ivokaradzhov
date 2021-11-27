import React from 'react'
import SkillsPattern from '../assets/images/lines.svg'

const Heading = ({ title = '', subtitle = '', headingClassName = '' }) => (
  <div className={headingClassName}>
    <SkillsPattern className="absolute top-0 left-1/2 -translate-x-1/2 z-[9] opacity-70 w-full h-[calc(100%-2rem)] object-cover" />
    <div className="relative z-10 mb-1 text-xs font-extrabold uppercase text-secondary">
      {subtitle}
    </div>
    <h2 className="relative z-10 pb-10 text-4xl font-bold text-white">
      {title}
    </h2>
  </div>
)

export default Heading
