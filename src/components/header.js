import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa';

const Headwrapper = styled.div`
  margin: 0 auto;
  margin-bottom: -1rem;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  background: white;
  
`

const Navbar = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 60px;
  max-width: 960px;
  padding: 0rem 2rem;
  border: solid 3px;
  border-radius: 20px;
`
const Navlink = styled.div`
  text-decoration: none;
`

const Topbar = styled.div`
  margin: 0 auto;
  margin-bottom: -1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 960px;
  padding: 0rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <Headwrapper>
      <Topbar>
        <h4>Have questions?</h4>
        <h4><a style={{
          textDecoration: "none",
        }} href="mailto:info@mountalbertsportsday5l.ca"><FaEnvelope /> info@mountalbertraceday5k.ca</a></h4>
        <h4><a style={{
          textDecoration: "none",
        }} href="https://www.facebook.com/Mountalbert5km/"><FaFacebookSquare /> facebook page</a></h4>
      </Topbar>
      <div
        style={{
          margin: `0 auto`,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <StaticImage
          src="../images/5klogo.jpg"
          width={150}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="5k Logo"
          style={{ marginRight: `1.45rem` }}
        />
        <div>
          <h2 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `#dd3333`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h2>
          <Navbar>
            <h4><Link style={{
              textDecoration: "none",

            }} to="/">Home</Link></h4>
            <h4><Link style={{
              textDecoration: "none",

            }} to="/faq">FAQ</Link></h4>
            <h4><Link style={{
              textDecoration: "none",

              marginBottom: "0px !important",
            }} to="/volunteer">Volunteer</Link></h4>
            <h4><Link style={{
              textDecoration: "none",

            }} to="/sponsors">Sponsors</Link></h4>
          </Navbar>
        </div>
      </div>
    </Headwrapper>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
