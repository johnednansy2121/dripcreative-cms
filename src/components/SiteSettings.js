import { graphql, useStaticQuery } from 'gatsby'

const useSiteSettings = () => {
  const { general, menu, footer } = useStaticQuery(
    graphql`
        query SITE_GENERAL_SETTINGS {
            general: markdownRemark(frontmatter: { templateKey: { eq: "general" } }) {
                frontmatter {
                    site_title
                    description
                    favicon {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        extension
                        publicURL
                    }
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
                    styles
                    scripts
                    css_external{
                        name
                        url
                    }
                    js_external{
                        name
                        url
                    }
                }
            }
            menu: markdownRemark(frontmatter: { templateKey: { eq: "menu" } }) {
                frontmatter {
                    topLevelItems{
                        name
                        url
                        childLevelItems {
                            name
                            url
                        }
                    }
                }
            }
            footer: markdownRemark(frontmatter: { templateKey: { eq: "footer" } }) {
                frontmatter {
                    about
                    copyright
                    getInTouch
                    socialLinks {
                        label
                        icon
                        linkURL
                    }
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
        }
    `
  )
  return {
        "general": general.frontmatter,
        "menu": menu.frontmatter,
        "footer": footer.frontmatter
    }
}

export default useSiteSettings
