import React, { useContext } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Hamburger from '../assets/images/icons/hamburger.svg'
import NavOverlay from './nav-overlay'
import NavContext from '../store/nav-context'

const Nav = () => {
  const { setNavOpen, setNavClosed, isNavOpen } = useContext(NavContext)

  return (
    <div className="">
      {/* Toggle nav button */}
      <button type="button" className="block" onClick={() => setNavOpen()}>
        {isNavOpen ? (
          <XIcon className="text-white w-8 h-8" />
        ) : (
          <Hamburger className="text-white w-8 h-8" />
        )}
      </button>
      {/* Nav overlay with nav items if isNavOpen is true */}
      {isNavOpen && <NavOverlay onClick={() => setNavClosed()} />}
    </div>
  )
}

export default Nav
