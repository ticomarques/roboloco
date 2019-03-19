import React from "react"
import PropTypes from "prop-types"

import './bootstrap.min.css'
import "./layout.css"

import Navbar from './Globals/Navbar'

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}

  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
