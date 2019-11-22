import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteSettings from './SiteSettings'
// import './css/layout.scss'

const TemplateWrapper = ({ children }) => {
  
  const { general, menu, footer } = useSiteSettings()

  if(general.css_external) {
    var css_external = general.css_external.map((css, key) => 
      <link rel="stylesheet" href={css.url} key={key}/>
    );
  }
  
  if(general.js_external) {
    var js_external = general.js_external.map((js, key) => 
      <script src={js.url} key={key}></script>
    );
  }
  
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{ children.props.title ? `${ children.props.title } - ${ general.site_title }` : general.site_title }</title>
        <meta name="description" content={ general.description } />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={ children.props.title ? children.props.title : general.site_title } />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={ (general.favicon) ? ((!general.favicon.childImageSharp && general.favicon.extension === 'svg') ? general.favicon.publicURL : general.favicon.childImageSharp.fluid.src) : "" } />
        <link rel="shortcut icon" href={ (general.favicon) ? ((!general.favicon.childImageSharp && general.favicon.extension === 'svg') ? general.favicon.publicURL : general.favicon.childImageSharp.fluid.src) : "" } />

        <style>{ general.styles }</style>

        { css_external }

        <script>{ general.scripts }</script>

        { js_external }
      </Helmet>

      <Navbar
        logo = { general.logo }
        menu = { menu.topLevelItems }
      />
      
      <div>
        <main>{children}</main>
      </div>

      <Footer footer = { footer } />
    </div>
  )
}

export default TemplateWrapper