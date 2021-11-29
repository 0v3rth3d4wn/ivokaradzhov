import React from 'react'
import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main id="main">{children}</main>
  </>
)

export default Layout
