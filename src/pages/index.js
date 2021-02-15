import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data.allSanityHomePage.nodes[0].welcomeMessage)
  const title = data.allSanityHomePage.nodes[0].welcomeMessage
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container p-5 mx-auto my-28">
        <h1 className="text-4xl font-bold leading-normal md:text-center">
          {title}
        </h1>
      </div>
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
