import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const GlobalFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #3498db;
  color: #fff;
  padding: 1rem 3rem;
`

const Para = styled.p`
  height: 30px;
  margin: 0;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        getHeader {
          siteTitle
        }
      }
    }
  `)

  const todaysDate = new Date()
  const currentYear = todaysDate.getFullYear()

  const author = data.wpgraphql.getHeader.siteTitle

  return (
    <GlobalFooter>
      <div>
        {" "}
        <Para>{`Created by ${author} @ ${currentYear}`}</Para>
      </div>
      <div>
        <Para>Home</Para>
        <Para>About Us</Para>
        <Para>Children's Classes</Para>
        <Para>Adult's Classes</Para>
        <Para>Gallery</Para>
        <Para>Contact</Para>
      </div>
      <div>
        <Para>Facebook</Para>
        <Para>Instagram</Para>
        <Para>Twitter</Para>
      </div>
    </GlobalFooter>
  )
}

export default Footer
