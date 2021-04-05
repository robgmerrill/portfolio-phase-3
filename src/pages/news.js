// import React from "react"
// import Layout from "../components/layout"
// import BlockText from "../components/blockText"
// import PageHeader from "../components/pageHeader"
// import { Link } from "gatsby"

// // graphql query
// export const query = graphql`
//   query NewsPageQuery {
//     news: allSanityNews(limit: 3, sort: { fields: publishedAt, order: DESC }) {
//       edges {
//         node {
//           _rawBody
//           _rawExcerpt
//           mainImage {
//             asset {
//               fluid {
//                 src
//               }
//             }
//           }
//           slug {
//             current
//           }
//           title
//           publishedAt
//           id
//         }
//       }
//     }
//   }
// `

// const NewsPage = ({ data }) => {
//   console.log("data from the news js page", data.news.edges)
//   return (
//     <Layout>
//       <PageHeader title="News" />
//       <div className="container gap-8 px-5 mx-auto lg:grid-cols-3 md:grid-cols-2 md:grid md:h-108">
//         {data.news.edges.map(newsItem => {
//           return (
//             <Link to={`/news/${newsItem.node.slug.current}`}>
//               <div className="h-full rounded shadow-xl">
//                 <img
//                   className="object-cover w-full rounded-t h-60"
//                   src={newsItem.node.mainImage.asset.fluid.src}
//                 />

//                 <div className="p-5">
//                   <h1 className="mb-4 text-3xl text-gray-800">
//                     {newsItem.node.title}
//                   </h1>
//                   <h2 className="mb-12 text-xl text-gray-600">
//                     <BlockText blocks={newsItem.node._rawExcerpt} />
//                   </h2>
//                 </div>
//               </div>
//             </Link>
//           )
//         })}
//       </div>
//     </Layout>
//   )
// }

// export default NewsPage
