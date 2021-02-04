import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto p-5 my-28">
      <h1 className="text-4xl font-bold md:text-center leading-normal">
        I help businesses grow by creating software experiences that are simple
        and delightful.
      </h1>
    </div>
  </Layout>
)

export default IndexPage
