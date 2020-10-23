import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const GlobalFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #3498db;
  color: #fff;
  padding: 20px 50px;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const LogoContainer = styled.img`
  height: 200px;
  width: 200px;
`

const Para = styled.p`
  height: 30px;
  margin: 0;
`

const NavColumn = styled.div`
  display: flex;
  margin-bottom: 10px 0;
  flex-direction: column;
  justify-content: space-around;
`

const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
  }
`

const FooterLink = styled.a`
  padding: 5px;

  transition: all 200ms ease-in;
  :hover {
    color: goldenrod;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        getHeader {
          siteTitle
          siteLogoUrl
        }
      }
    }
  `)

  const currentYear = new Date().getFullYear()
  const author = data.wpgraphql.getHeader.siteTitle
  const logo = data.wpgraphql.getHeader.siteLogoUrl

  return (
    <GlobalFooter>
      <NavColumn>
        <Para>{`Created by ${author} @ ${currentYear}`}</Para>
        <LogoContainer
          src={logo}
          alt={author}
          className="footer-logo"
        ></LogoContainer>
      </NavColumn>
      <NavColumn className="footer-nav">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about-us">About Us</FooterLink>
        <FooterLink href="/childrens-classes">Children Classes</FooterLink>
        <FooterLink href="/adults-classes">Adult Classes</FooterLink>
        <FooterLink href="/gallery">Gallery</FooterLink>
        <FooterLink href="/contact-us">Contact</FooterLink>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
      </NavColumn>
      <SocialColumn>
        <FooterLink href="https://www.facebook.com/Phoenix-Karate-School-103751281081376">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </FooterLink>
        <FooterLink href="https://www.instagram.com/phoenixkarateschool/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </FooterLink>
      </SocialColumn>
    </GlobalFooter>
  )
}

export default Footer
