import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Obfuscate from 'react-obfuscate'
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope'
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

      <div className="px-8">
        <Obfuscate
          email={email}
          headers={{
            subject: `Let's work together`,
          }}
          obfuscateChildren={false}
          className="p-5 relative bg-tertiary text-quaternary flex flex-wrap items-center justify-center w-[calc(100%-2rem)] hover:bg-white transition-colors duration-200 after:w-8 after:bg-tertiary after:h-full after:absolute after:right-[-1.5rem] after:-skew-x-12 hover:after:bg-white after:transition-colors after:duration-200 gap-3"
        >
          <Envelope />
          <div className="font-black">hello@ivokaradzhov</div>
        </Obfuscate>
      </div>

      <Social />

      <Footer />
    </div>
  )
}

export default Contact
