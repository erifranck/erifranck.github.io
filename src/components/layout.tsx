/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Header } from "../layouts/header"
import { linkList } from "../utils/link_list"
import { LandingSection } from "../layouts/landingSections"
import {useStaticQuery, graphql} from "gatsby";
import { AboutSection } from "../layouts/aboutSection"


const Layout = ({ children }) => {
  return (
    <>
      <LandingSection id="home">
        <Header
          links={linkList}
        />
      </LandingSection>
      <AboutSection />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
