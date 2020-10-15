import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const UnderConstruction = () => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        getHeader {
          siteLogoUrl
        }
      }
    }
  `)

  const logo = data.wpgraphql.getHeader.siteLogoUrl

  return (
    <div className="uc-container">
      <h1 className="uc-header">Sorry, we're doing some work on the site</h1>
      <img
        onContextMenu={e => e.preventDefault()}
        className="uc-logo"
        src={logo}
        alt={logo}
      ></img>
      <p>Thank you for being patient</p>
      <p>If you need help, please contact Kingsley on:</p>
      <ul>
        <li>Mobile: 07950 647 993</li>
        <li>Email: phoenixkarate@hotmail.com</li>
      </ul>
    </div>
  )
}

export default UnderConstruction
