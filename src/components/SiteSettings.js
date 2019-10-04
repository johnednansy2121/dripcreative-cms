import { graphql, useStaticQuery } from 'gatsby'

const useSiteSettings = () => {
  const { general, footer } = useStaticQuery(
    graphql`
        query SITE_GENERAL_SETTINGS {
            general: markdownRemark(frontmatter: { templateKey: { eq: "general" } }) {
                frontmatter {
                    site_title
                    description
                    logo {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                            extension
                            publicURL
                        }
                        alt
                    }
                }
            }
            footer: markdownRemark(frontmatter: { templateKey: { eq: "footer" } }) {
                frontmatter {
                    about
                }
            }
        }
    `
  )
  return {
      "general": general.frontmatter,
      "footer": footer.frontmatter
    }
}

export default useSiteSettings
