import React, { useContext } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Hamburger from '../assets/images/icons/hamburger.svg'
import NavOverlay from './NavOverlay'
import NavContext from '../store/nav-context'

const Nav = () => {
  const { setNavOpen, setNavClosed, isNavOpen } = useContext(NavContext)

  return (
    <>
      {/* Toggle nav button */}
      <button type="button" className="block" onClick={() => setNavOpen()}>
        <Hamburger className="text-white w-8 h-8" />
      </button>
      {/* Nav overlay with nav items if isNavOpen is true */}
      {isNavOpen && <NavOverlay onClick={() => setNavClosed()} />}
    </>
  )
}

export default Nav
