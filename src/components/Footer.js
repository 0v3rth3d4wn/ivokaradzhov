import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="px-8 text-xs text-center text-white">
    Copyright &copy; {new Date().getFullYear()} Ivo Karadzhov |{' '}
    {/* <Link to="/terms">Terms of use</Link> */}
  </footer>
)

export default Footer
