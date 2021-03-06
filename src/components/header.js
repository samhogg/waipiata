import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        background: '#2574A9',
        paddingTop: '3rem',
        marginBottom: '4rem',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="six columns">
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
          <div className="six columns">
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/previous-work"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Previous Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
