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
      <Heading title={title} subtitle={subtitle} />

      <div className="px-8 mx-auto max-w-7xl md:flex md:flex-wrap md:justify-center md:items-center md:gap-8 md:mb-12 md:relative">
        <Obfuscate
          email={email}
          headers={{
            subject: `Let's work together`,
          }}
          obfuscateChildren={false}
          className="flex relative after:absolute after:right-[-1.5rem] flex-wrap gap-3 justify-center items-center p-5 w-[calc(100%-2rem)] after:w-8 after:h-full text-quaternary bg-tertiary after:bg-tertiary hover:bg-white hover:after:bg-white transition-colors after:transition-colors duration-200 after:duration-200 after:-skew-x-12 md:w-auto md:h-auto md:order-2 lg:w-[600px]"
        >
          <Envelope />
          <div className="font-black">hello@ivokaradzhov</div>
        </Obfuscate>
        <Social className="md:order-1 md:absolute md:left-8"/>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
