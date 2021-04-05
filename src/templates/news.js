import { graphql } from "gatsby"
import React from "react"
import BlockText from "../components/blockText"
import Layout from "../components/layout"
import styled from "styled-components"

export const query = graphql`
  query NewsPostTemplateQuery($id: String!) {
    news: sanityNews(id: { eq: $id }) {
      id
      publishedAt
      slug {
        current
      }
      title
      _rawBody
      _rawExcerpt
      mainImage {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`

// const BlockTextContainer = styled.div`
//   img
// `

const NewsTemplate = ({ data }) => {
  console.log("data from this pages news template", data)
  const news = data.news
  return (
    <Layout>
      <div className="container p-5 mx-auto">
        <div className="grid grid-cols-4">
          <div className="flex flex-col items-center justify-center col-span-2 border-8">
            <div>
              <h1 className="mb-10 text-4xl text-gray-800">{news.title}</h1>
              <h2 className="text-xl text-gray-600">
                <BlockText blocks={news._rawExcerpt} />
              </h2>
            </div>
          </div>

          <img
            src={news.mainImage.asset.fluid.src}
            className="object-cover w-full col-span-2 h-80"
          />
        </div>
        <p className="p-5 text-gray-600">
          <BlockText blocks={news._rawBody} />
        </p>
      </div>
    </Layout>
  )
}

export default NewsTemplate
