import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const siteMetadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

const SEO = ({ children, location, title, description, image }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(siteMetadataQuery)
  return (
    <Helmet titleTemplate={`%s - ${siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={siteMetadata.description} />

      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5b0e7f" />
      <meta name="msapplication-TileColor" content="#361359" />
      <meta name="theme-color" content="#5b0e7f" />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:image" content={image || '/favicon.svg'} />
      <meta
        property="og:site_name"
        content={siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Person',
          name: 'Ivo Karadzhov',
          url: 'https://ivokaradzhov.com',
          image: '',
          sameAs: [
            'https://twitter.com/rijia',
            'https://www.linkedin.com/in/ivo-karadzhov-88582424/',
            'https://github.com/0v3rth3d4wn',
            'https://ivokaradzhov.com',
          ],
        })}
      </script>
      {children}
    </Helmet>
  )
}

export default SEO
