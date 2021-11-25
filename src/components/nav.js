import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Hamburger from '../assets/images/icons/hamburger.svg'
import NavOverlay from './nav-overlay'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="">
      {/* Toggle nav button */}
      <button
        type="button"
        className="block"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? (
          <XIcon className="text-white w-8 h-8" />
        ) : (
          <Hamburger className="text-white w-8 h-8" />
        )}
      </button>
      {/* Nav overlay with nav items if isNavOpen is true */}
      {isNavOpen && <NavOverlay onClick={() => setIsNavOpen(false)} />}
    </div>
  )
}

export default Nav
