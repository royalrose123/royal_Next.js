import React from 'react'
import PropTypes from 'prop-types'

// styles
import '@/styles/main.scss'

// Components
import DefaultLayout from '@/layouts/layout'

export const propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.propTypes = propTypes
