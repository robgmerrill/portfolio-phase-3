import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import { graphql, Link } from "gatsby"

const WorkPage = ({ data }) => {
  console.log("work", data.work.nodes)
  const work = data.work.nodes
  return (
    <Layout>
      <SEO title="work" />
      <PageHeader title={"Work"} />
      {/* work samples */}
      <div className="grid-cols-6 gap-5 px-5 space-y-6 md:container md:mx-auto md:space-y-0 md:grid">
        {work.map(workProject => {
          return (
            <Link
              to={`/work/${workProject.slug.current}`}
              class="lg:col-span-2 md:col-span-3"
            >
              <div className="transform first:pt-10">
                <img
                  className="object-cover w-full rounded shadow-lg h-96"
                  src={workProject.image.asset.fluid.src}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query WorkPageQuery {
    work: allSanityWork {
      nodes {
        workTitle
        workSummary
        image {
          asset {
            fluid {
              src
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`

export default WorkPage
