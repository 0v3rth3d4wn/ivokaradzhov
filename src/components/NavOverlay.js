import ReactDom from 'react-dom'
import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
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

const NavOverlay = ({ onClick: hideOverlay }) => {
  const {
    allNavJson: { nodes: navLinks },
  } = useStaticQuery(navItemsQuery)

  return ReactDom.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 nav-overlay-gradient nav-overlay">
      {/* Close nav btn */}
      <button
        className="absolute block top-8 right-8"
        type="button"
        onClick={hideOverlay}
      >
        <XIcon className="w-8 h-8 text-white " />
      </button>

      {/* Nav with nav items from graphql query */}
      {navLinks && (
        <nav className="absolute left-0 right-0 w-full px-8 text-center -translate-y-1/2 top-1/2">
          <ul>
            {navLinks.map(({ key, to, text }) => (
              <li key={key}>
                <AnchorLink
                  className="block mb-10 text-4xl font-bold text-white uppercase transition-colors duration-300 hover:text-primary"
                  to={to}
                  onAnchorLinkClick={hideOverlay}
                >
                  {text}
                </AnchorLink>
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
