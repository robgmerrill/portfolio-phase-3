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
              class="lg:col-span-3 md:col-span-3 h-auto"
            >
              <div className="relative h-auto p-5 transform shadow-lg rounded-xl first:pt-10">
                <div className="h-auto">
                  <img
                    className="object-cover w-full"
                    src={workProject.image.asset.fluid.src}
                  />
                </div>
                <div className="bottom-0 h-24 mt-4 mb-10">
                  <h3 className="mb-2 font-semibold">
                    {workProject.workTitle}
                  </h3>
                  <p>{workProject.workSummary}</p>
                  <div className="flex pr-5 mt-4 space-x-4">
                    <div className="w-1/2 py-2 text-center text-white bg-black rounded">
                      Desktop Preview
                    </div>
                    <div className="w-1/2 py-2 text-center text-white bg-black rounded">
                      Mobile Preview
                    </div>
                  </div>
                </div>
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
