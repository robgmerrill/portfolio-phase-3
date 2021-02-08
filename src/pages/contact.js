import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeader title="Let's Talk!" />
      <div className="container mx-auto p-5">
        <div>
          <p className="leading-loose">
            Please fill out the form below if you’re interested in working
            together, having me speak at your meetup or conference, or if you
            have any other questions. If filling out forms isn't your thing,
            feel free to shoot me an email at brian [at] robmerrill [dot] co.
            Thanks!
          </p>
        </div>
        <div>
          <form
            action="#"
            method="POST"
            className="mt-12 space-y-6 md:space-y-0 md:grid grid-cols-6 md:w-2/3 gap-8"
          >
            {/* email */}
            <div className="col-span-3">
              <label className="text-gray-400 mb-3 block" for="email">
                Your Email (required)
              </label>
              <input
                id="email"
                type="text"
                className="block border-2 border-gray-800 w-full rounded shadow-lg p-2 focus:outline-none"
              />
            </div>
            <div className="col-span-3">
              <label className="text-gray-400 mb-3 block" for="subject">
                What do you want to talk about?
              </label>
              <select
                name="subject"
                id="subject"
                class="border-2 w-full border-gray-800 rounded shadow-lg p-2 focus:outline-none"
              >
                <option>I am interested in...</option>
                <option>I am interested in...</option>
                <option>I am interested in...</option>
              </select>
            </div>
            <div className="col-span-3">
              <label for="email" class="text-gray-500 text-sm">
                When does the project start?
              </label>
              <select
                name="subject"
                id="subject"
                class="border-2 border-black w-full p-2 rounded block"
              >
                <option value="">option A</option>
                <option value="">Option B</option>
                <option value="">Option C</option>
              </select>
            </div>
            <div className="col-span-3">
              <label for="email" class="text-gray-500 text-sm">
                When does it need to be finished?
              </label>
              <select
                name="subject"
                id="subject"
                class="border-2 border-black w-full p-2 rounded block"
              >
                <option value="">option A</option>
                <option value="">Option B</option>
                <option value="">Option C</option>
              </select>
            </div>
            <div className="col-span-3">
              <label for="email" class="text-gray-500 text-sm">
                What's the estimated budge for this project?
              </label>
              <select
                name="subject"
                id="subject"
                class="border-2 border-black w-full p-2 rounded block"
              >
                <option value="">option A</option>
                <option value="">Option B</option>
                <option value="">Option C</option>
              </select>
            </div>
            <div className="col-span-4">
              <legend for="design" class="text-gray-500 text-sm">
                What services are you wanting to hire me for?
              </legend>
              <div class="flex items-center mt-4">
                <input
                  id="design"
                  name="design"
                  type="checkbox"
                  class="h-4 w-4 mr-4 border-4 border-yellow-800 shadow rounded-full focus:ring-indigo-500 text-indigo-600"
                />
                <label for="design">Design</label>
              </div>
              <div class="flex items-center mt-4">
                <input
                  id="design"
                  name="design"
                  type="checkbox"
                  class="h-4 w-4 mr-4 border-4 border-yellow-800 shadow rounded-full focus:ring-indigo-500 text-indigo-600"
                />
                <label for="design">Development</label>
              </div>
              <div class="flex items-center mt-4">
                <input
                  id="design"
                  name="design"
                  type="checkbox"
                  class="h-4 w-4 mr-4 border-4 border-yellow-800 shadow rounded-full focus:ring-indigo-500 text-indigo-600"
                />
                <label for="design">Strategy</label>
              </div>
            </div>
            <div class="mt-6 col-span-6">
              <label for="extra" class="text-gray-500 text-sm block mb-4">
                Anything else you would like me to know?
              </label>
              <textarea
                name="extra"
                id="extra"
                cols="30"
                rows="7"
                class="block border-2 border-black rounded w-full p-5"
              ></textarea>
            </div>
            <div>
              <button className="bg-black py-2 px-6 font-extrabold text-gray-100 rounded shadow uppercase mt-6">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
