import React from "react"
import Layout from "../components/layout"
import BlockText from "../components/blockText"
import PageHeader from "../components/pageHeader"

// graphql query
export const query = graphql`
  query NewsPageQuery {
    news: allSanityNews(limit: 3, sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          _rawBody
          _rawExcerpt
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
          slug {
            current
          }
          title
          publishedAt
          id
        }
      }
    }
  }
`

const NewsPage = ({ data }) => {
  console.log("data from the news js page", data.news.edges)
  return (
    <Layout>
      <PageHeader title="News" />
      <div className="container grid grid-cols-3 gap-8 mx-auto">
        {data.news.edges.map(newsItem => {
          return (
            <div className="rounded shadow-xl">
              <img
                className="object-cover w-full rounded-t h-60"
                src={newsItem.node.mainImage.asset.fluid.src}
              />

              <div className="p-5">
                <h1 className="mb-4 text-3xl text-gray-800">
                  {newsItem.node.title}
                </h1>
                <h2 className="mb-12 text-xl text-gray-600">
                  <BlockText blocks={newsItem.node._rawExcerpt} />
                </h2>
                <p className="text-gray-400">
                  <BlockText blocks={newsItem.node._rawBody} />
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default NewsPage
