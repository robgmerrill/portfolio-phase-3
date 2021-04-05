/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
// import background from "../../assets/mountain-range.svg"

import Header from "./header"
import Footer from "./footer"

// const LayoutWrapper = styled.div`
/* background: url(${background});
  background-repeat: no-repeat;
  background-color: yellow;
  background-size: cover;
  background-position: center; */
// `

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
      <div className="container flex flex-col justify-between h-screen mx-auto ">
        <Header />

        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
