import React from "react"
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <footer className="p-5 md:flex md:justify-between ">
        {/* socials */}
        <div className="flex mb-8 space-x-8 text-xl md:order-2">
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaGithub />
          </a>
          <a>
            <FaDribbble />
          </a>
        </div>
        {/* copyright date */}
        <div className="font-bold">
          © {new Date().getFullYear()}, Rob Merrill CO.
        </div>
      </footer>
    </div>
  )
}

export default Footer
