import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import background from "../images/mountain-range.png"

const MainWrapper = styled.div`
  /* background: url(${background}); */
`

const IndexPage = ({ data }) => {
  console.log(data.allSanityHomePage.nodes[0].welcomeMessage)
  const title = data.allSanityHomePage.nodes[0].welcomeMessage
  return (
    <Layout>
      <SEO title="Home" />
      <MainWrapper>
        <div className="container p-5 mx-auto">
          <h1 className="p-5 text-2xl font-bold leading-normal md:p-0 md:text-4xl md:text-center">
            {title}
          </h1>
        </div>
      </MainWrapper>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allSanityHomePage {
      nodes {
        welcomeMessage
      }
    }
  }
`

export default IndexPage
