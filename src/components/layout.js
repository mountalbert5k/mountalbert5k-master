/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import "./layout.css"

const Foot = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-bottom:1rem;
`
const Pagecontent = styled.div`
padding: 0 5% 0 5%;
`
const Footnav = styled.div`
  display: flex;
  gap: 10px;
`
const Main = styled.div`
  background: white;
  margin: 0 auto;
  max-width: 960px;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>
        <Pagecontent><main>{children}</main></Pagecontent>
        <footer>
          <Foot>
            <Footnav>
              <a href="https://raceroster.com/events/2022/57876/2022-mount-albert-sports-day-5km-runwalk/participants">Register Here</a>
              <a href="https://www.facebook.com/Mountalbert5km/">Facebook Page</a>
            </Footnav>
            © {new Date().getFullYear()}, Mount Albert Race Day 5K
            {` `}

          </Foot>
        </footer>

        <StaticImage
          src="../images/runwide2.jpg"

          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="wide banner"
          layout="fullWidth"
          style={{ margin: `auto`, }}
        />
      </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
