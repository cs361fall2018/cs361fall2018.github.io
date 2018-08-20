import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div className="header-background">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="header-text"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
