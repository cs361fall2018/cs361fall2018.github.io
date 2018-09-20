import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'CS 361 Fall 2018 Class Website' },
        { name: 'keywords', content: 'cs, 361, oregon state, software engineering' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    <div>
      <div className="nav">
        <Link to="/schedule">Schedule</Link>
        <Link to="/syllabus">Syllabus</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/positive-community">Establishing a <br />positive community</Link>
      </div>
      <div className="main">
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
