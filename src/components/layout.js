import React from "react"
import Header from "./header"
import Footer from "./footer"
import CookieConsent, { Cookies } from "react-cookie-consent"
// import UnderConstruction from "./underConstruction"

import "@wordpress/block-library/build-style/style.css"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      {/* <UnderConstruction /> */}
      <Header />
      <main>{children}</main>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This website uses third party cookies to enhance the user experience.
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Layout
