import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './normalize.css'
import './skeleton.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Waipiata Consulting are specialists in health strategy, technology, leadership, and professional governance.',
        },
        {
          name: 'keywords',
          content:
            'leadership, health services planning and development, healthcare it, health tech, workforce development, service reviews, professional governance',
        },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600,400italic"
        rel="stylesheet"
        type="text/css"
      />{' '}
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
