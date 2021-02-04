import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const WorkPage = ({ props }) => {
  return (
    <Layout>
      <SEO title="work" />
      <PageHeader title={"Work"} />
      {/* work samples */}
      <div className="space-y-6 px-5 md:grid grid-cols-6 gap-5">
        <div className="col-span-4 pt-6">
          <img
            className="rounded shadow-lg w-full h-96  object-cover"
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          />
        </div>
        <div className="col-span-2">
          <img
            className="rounded shadow-lg w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          />
        </div>
        <div className="col-span-2">
          <img
            className="rounded shadow-lg w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          />
        </div>
        <div className="col-span-2">
          <img
            className="rounded shadow-lg w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          />
        </div>
        <div className="col-span-2">
          <img
            className="rounded shadow-lg w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          />
        </div>
        <div className="col-span-2">
          <img
            className="rounded shadow-lg w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          />
        </div>
        <div className="col-span-4">
          <img
            className="rounded shadow-lg w-full h-96 object-cover"
            src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMG9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          />
        </div>
      </div>
    </Layout>
  )
}

export default WorkPage
