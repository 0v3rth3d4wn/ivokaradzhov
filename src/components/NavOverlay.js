import ReactDom from 'react-dom'
import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'
import Close from '../assets/images/icons/close.svg'

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
    <motion.div
      key="nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 right-0 bottom-0 left-0 z-50 nav-overlay-gradient nav-overlay"
    >
      {/* Close nav btn */}
      <button
        className="block absolute top-8 right-8"
        type="button"
        onClick={hideOverlay}
      >
        <Close className="w-8 h-8 text-white " />
      </button>

      {/* Nav with nav items from graphql query */}
      {navLinks && (
        <nav className="absolute top-1/2 right-0 left-0 px-8 w-full text-center -translate-y-1/2">
          <ul>
            {navLinks.map(({ key, to, text }) => (
              <li key={key}>
                <AnchorLink
                  className="block mb-10 text-4xl font-bold text-white hover:text-primary uppercase transition-colors duration-300"
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
    </motion.div>,
    document.getElementById('portal')
  )
}

export default NavOverlay
