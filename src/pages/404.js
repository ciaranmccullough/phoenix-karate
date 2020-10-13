import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  height: 40vh;
`

const Para = styled.p`
  margin: 20px 50px;
  transition: all 200ms ease-in;
  :hover {
    color: goldenrod;
  }
`

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Container>
        <Para>
          <Link to="/">Head home ></Link>
        </Para>
      </Container>
    </Layout>
  )
}

export default NotFound
