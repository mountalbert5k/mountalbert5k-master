import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contentwrapper = styled.div`
  text-align: center;
  padding: 0 5% 0 5%;
`

const Here = styled.div`
  background: #dd3333;
  width: 50%;
  padding: 1rem;
  margin: 0 auto;
  border-radius:24px;
  margin-bottom: 2rem;
  
`
const Buttonlink = styled.a`
  color: white !important;
  text-transform: uppercase;
  text-decoration: none !important;
  font-size: 3em;
  font-family: Roboto;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Contentwrapper>
      <h1>Register for the {new Date().getFullYear()} race </h1>
      <Buttonlink href="https://raceroster.com/events/2022/57876/2022-mount-albert-sports-day-5km-runwalk/participants"><Here>HERE</Here></Buttonlink> 
      <h3>Run takes place first Saturday of June</h3>
      <h3>Registration closes 7:00 PM night before run</h3>
      <p>For information on bib / t-shirt pickup date and location please check our <a href="https://www.facebook.com/Mountalbert5km/">facebook page</a></p>
      <p>Further details about the run including race day schedule, prices, and more can be found on the <a href="https://www.facebook.com/Mountalbert5km/">facebook page</a>. Also check our facebook page for photos after the race!</p>
      <h3>Questions about the race?</h3> 
      <h3><Link style={{
              textDecoration: "none",

            }} to="/faq">FAQ</Link></h3>
      <h3>Looking to volunteer?</h3> 
      <h3><Link style={{
              textDecoration: "none",

            }} to="/volunteer">Volunteer</Link></h3>
    </Contentwrapper>
  </Layout>
)

export default IndexPage
