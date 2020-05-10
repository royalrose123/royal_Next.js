import React from 'react'
import PropTypes from 'prop-types'
import '../styles/main.scss'

// Components
import Layout from '../layouts/layout'

export const propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.propTypes = propTypes
