import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Homepage/Hero'
import Services from '../components/Homepage/Services'

export const IndexPageTemplate = ({
  hero,
  services,
}) => (
  <div>

    <Hero
      hero = { hero }
    />

    <Services
      services = { services }
    />

  </div>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  services: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        general={frontmatter.general}
        hero={frontmatter.hero}
        services={frontmatter.services}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        general {
          title
          description
          keywords
        }
        hero {
          headline
          description
          button
          buttonLink
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL
          }
        }
        services {
          headline
          description
          service {
            name
            description
            url
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  }
`
