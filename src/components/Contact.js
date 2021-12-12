import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Obfuscate from 'react-obfuscate'
import Envelope from '../assets/images/icons/envelope.svg'

import Heading from './Headings'
import Footer from './Footer'
import Social from './Social'

const contactJSON = graphql`
  query ContactQuery {
    contactJson {
      anchor
      title
      subtitle
      email
    }
  }
`

const Contact = () => {
  const {
    contactJson: { anchor: id, title, subtitle, email },
  } = useStaticQuery(contactJSON)

  return (
    <div className="relative pb-11 bg-gradient" id={id}>
      <Heading
        headingClassName="pt-22 px-8 relative"
        title={title}
        subtitle={subtitle}
      />

      <div className="px-8 mx-auto max-w-7xl">
        <Obfuscate
          email={email}
          headers={{
            subject: `Let's work together`,
          }}
          obfuscateChildren={false}
          className="flex relative after:absolute after:right-[-1.5rem] flex-wrap gap-3 justify-center items-center p-5 w-[calc(100%-2rem)] after:w-8 after:h-full text-quaternary bg-tertiary after:bg-tertiary hover:bg-white hover:after:bg-white transition-colors after:transition-colors duration-200 after:duration-200 after:-skew-x-12"
        >
          <Envelope />
          <div className="font-black">hello@ivokaradzhov</div>
        </Obfuscate>
        <Social />
      </div>

      <Footer />
    </div>
  )
}

export default Contact
