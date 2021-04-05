import React from "react"
import { graphql } from "gatsby"
// import Container from "../components/container"
// import GraphQLErrorList from "../components/graphql-error-list"
// import Project from "../components/project"
import SEO from "../components/seo"
// import Layout from "../containers/layout"
import Layout from "../components/layout"

export const query = graphql`
  query WorkTemplateQuery($id: String!) {
    work: sanityWork(id: { eq: $id }) {
      id
      image {
        asset {
          fluid {
            src
          }
        }
      }
      workTitle
      workSummary
    }
  }
`

const WorkTemplate = props => {
  const { data, errors } = props
  //   const work = data && data.project
  console.log("This is the data I am LOOKING FOR", data)
  return (
    <Layout>
      <div className="container flex mx-auto">
        <div>
          <h1>{data.work.workTitle}</h1>
          <h2>{data.work.workSummary}</h2>
        </div>
        <div>
          <div className="">
            <a href="/images/myw3schoolsimage.jpg" download>
              <div>Desktop Preview</div>
              <img
                className="w-full px-5 shadow-xl"
                src={data.work.image.asset.fluid.src}
              />
            </a>
          </div>
          <div className="">
            <div>Mobile Preview</div>
            <img
              className="w-full px-5 shadow-xl"
              src={data.work.image.asset.fluid.src}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkTemplate
