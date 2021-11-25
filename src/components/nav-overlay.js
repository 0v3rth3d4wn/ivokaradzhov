import ReactDom from 'react-dom'
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { XIcon } from '@heroicons/react/outline'

// Get nav links from data/nav.json
const navItemsQuery = graphql`
  {
    allNavJson {
      nodes {
        to
        text
        key
      }
    }
  }
`

const NavOverlay = ({ onClick }) => {
  const {
    allNavJson: { nodes: navLinks },
  } = useStaticQuery(navItemsQuery)

  return ReactDom.createPortal(
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-[#DE0C8A] z-50 nav-overlay">
      {/* Close nav btn */}
      <button
        className="absolute top-8 right-8 block"
        type="button"
        onClick={onClick}
      >
        <XIcon className="text-white w-8 h-8 " />
      </button>

      {/* Nav with nav items from graphql query */}
      {navLinks && (
        <nav className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full px-8 text-center">
          <ul>
            {navLinks.map(({ key, to, text }) => (
              <li key={key}>
                <Link
                  className="text-white hover:text-primary transition-colors duration-300 font-bold text-2xl uppercase mb-4 block"
                  to={to}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>,
    document.getElementById('portal')
  )
}

export default NavOverlay
