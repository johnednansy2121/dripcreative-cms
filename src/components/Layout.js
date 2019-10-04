import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteSettings from './SiteSettings'
import { withPrefix } from "gatsby"
import './css/bootstrap.css'
import './css/layout.scss'

const TemplateWrapper = ({ children }) => {
  
  const { general, footer } = useSiteSettings()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{general.site_title}</title>
        <meta name="description" content={general.description} />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={general.site_title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
        
      </Helmet>
      <Navbar logo = { general.logo }/>
      <div>
        <main>{children}</main>
      </div>
      <Footer footer = { footer } />
    </div>
  )
}

export default TemplateWrapper