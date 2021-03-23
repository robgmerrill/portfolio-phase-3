import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="services" />
      <PageHeader title="Services" />
      <div className="p-5">
        <div>
          <p className="leading-loose">
            I have a passion for creating beautifully designed software
            experiences that connect businesses and their customers. I have over
            10 years of experience designing, developing, and scaling
            applications that have been used by millions of people around the
            world. User experience is at the core of everything I do.
          </p>
          <br />
          <p className="leading-loose">
            From the design research, to the user interface, to the technical
            implementation— it needs to be simple, clear, and easy to use. In a
            world saturated with competing software products that are similar,
            you win by creating something that is simple to understand,
            reliable, and delightful to use.
          </p>
        </div>
        <div className="md:flex md:justify-between">
          <div className="mt-10 md:w-1/3">
            <div className="text-lg font-bold">Design</div>
            <ul className="p-5">
              <li className="pt-4">SEO </li>
              <li className="pt-4">AdWords</li>
              <li className="pt-4">Facebook Group Strategy</li>
              <li className="pt-4">Google Map submission</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
            </ul>
          </div>
          <div className="mt-10 md:w-1/3">
            <div className="text-lg font-bold">Design</div>
            <ul className="p-5">
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
            </ul>
          </div>
          <div className="mt-10 md:w-1/3">
            <div className="text-lg font-bold">Design</div>
            <ul className="p-5">
              <li className="pt-4">Thingssd sdf sdf sdf sdf </li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
              <li className="pt-4">Things</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
