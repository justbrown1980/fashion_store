import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import TopHeader from './top-header'
import Banner from './banner'
import SalesProducts from './sales-products'
import Promos from './promos'
import Deal from './deal'
import FeaturedProducts from './featured-products'
import Social from './social'
import Newsletter from './newsletter'
import Footer from './footer'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <TopHeader />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Banner />
        <SalesProducts />
        <Promos />
        <Deal />
        <FeaturedProducts />
        <Social />
        <Newsletter />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
