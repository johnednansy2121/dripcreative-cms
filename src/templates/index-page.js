import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Hero from '../components/Homepage/Hero'
import Services from '../components/Homepage/Services'
import Projects from '../components/Homepage/Projects'
import Clients from '../components/Clients'
import Insights from '../components/Insights'

export const IndexPageTemplate = ({
  hero,
  services,
  projects,
  clients,
}) => (
  <div>

    <Hero
      hero = { hero }
    />

    <Services
      services = { services }
    />
    
    <Projects 
      projects = { projects }
    />
    
    <Insights/>
    
    <Clients 
      clients = { clients }
    />


  </div>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  services: PropTypes.object,
  projects: PropTypes.object,
  clients: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        general={frontmatter.general}
        hero={frontmatter.hero}
        services={frontmatter.services}
        projects={frontmatter.projects}
        clients={frontmatter.clients}
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
        projects {
          project {
            name
            description
            logo {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            url
            button
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
        clients {
          headline
          description
          client {
            name
            logo {
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
