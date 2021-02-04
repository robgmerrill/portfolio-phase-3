import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HiMenu } from "react-icons/hi"
import { GrClose } from "react-icons/gr"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  // boolean to track if menu is open or closed
  const [menuClosed, setMenuClosed] = React.useState(true)
  console.log(menuClosed)
  return (
    <header className="md:flex justify-between items-center">
      {/* avatar and hamburger button */}
      <div className="md:shadow-none flex justify-between p-5 items-center md:inline">
        <Link to="/">
          <img
            src="https://pbs.twimg.com/profile_images/1276969680519852032/K5uoIf4h_400x400.jpg"
            className="h-20 w-20 rounded-full md:inline"
          ></img>
        </Link>
        {/* buttons */}

        {menuClosed && (
          <h1 onClick={() => setMenuClosed(!menuClosed)}>
            <HiMenu className="md:hidden text-2xl" />
          </h1>
        )}
        {!menuClosed && (
          <h1 onClick={() => setMenuClosed(!menuClosed)}>
            <GrClose className="z-10 md:hidden text-2xl" />
          </h1>
        )}
      </div>
      {/* menu items */}
      <div
        className={
          " h-screen font-bold md:h-full space-x-8 md:inline flex flex-col h-full justify-center items-center text-4xl md:text-lg" +
          (menuClosed ? " hidden" : " block")
        }
      >
        <div className="space-y-8 md:space-y-0  text-gray-800 transform -translate-y-8 md:translate-y-0 md:space-x-12 md:pr-10">
          <div className="md:inline-block hover:text-blue-500">
            <Link to="/work">Work</Link>
          </div>
          <div className="md:inline-block hover:text-blue-500">
            <Link to="/services">Services</Link>
          </div>
          <div className="md:inline-block hover:text-blue-500 transform md:hover:scale-105 transition duration-300">
            <Link
              to="/contact"
              class="md:border md:py-3 md:px-6 md:rounded-lg md:shadow-lg md:bg-gray-800 md:text-gray-100 md:hover:text-white md:hover:shadow-2xl transform transition scale-150"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
