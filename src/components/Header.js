import React, { useEffect, useRef } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
  const headerHeight = 56
  const scrollY = useScrollPosition()
  let isHeaderVisible = true

  // Use useRef to store the previous value of scrollY
  const prevScrollYRef = useRef(0)

  // Store the current scrollY after the render method
  useEffect(() => {
    prevScrollYRef.current = scrollY
  }, [scrollY])

  /**
   * If the current scrollY value is smaler or equals to
   * the previous scrollY value - we are scrolling up (we are closer to the top) and then showing the header,
   * otherwise we are scrolling down (the current scrollY becomes larger) thus we are hiding the header
   */
  isHeaderVisible = scrollY <= prevScrollYRef.current || scrollY < headerHeight

  return (
    <>
      <header
        className={`px-8 py-8 fixed top-0 left-0 right-0 w-full flex flex-wrap items-center justify-between z-40 ${
          scrollY < headerHeight
            ? 'bg-transparent'
            : 'bg-quaternary shadow'
        } duration-300 transition-all delay-[100ms] ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <AnchorLink to="/#main">
          <Logo />
        </AnchorLink>
        <Nav />
      </header>
    </>
  )
}

export default Header
