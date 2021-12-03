import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import useScrollPosition from '@react-hook/window-scroll'
import { FiArrowUp } from '@react-icons/all-files/fi/FiArrowUp'

const GoToTop = () => {
  const scrollY = useScrollPosition(60)

  return (
    <AnchorLink
      to="/#main"
      className={`${
        scrollY > 200 ? 'opacity-1' : 'opacity-0'
      } fixed right-8 bottom-8 bg-primary z-[12] rounded-lg p-1 bg-opacity-80 transition-opacity duration-500 hover:bg-opacity-100`}
    >
      <FiArrowUp className="w-6 h-6 text-secondary" />
    </AnchorLink>
  )
}

export default GoToTop
