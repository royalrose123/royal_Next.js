import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
// import Cookies from 'js-cookie'
// import Router from 'next/router'

// styles
import '@/styles/main.scss'

// Components
import DefaultLayout from '@/layouts/layout'

export const propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? DefaultLayout

  // const token = Cookies.get('token')

  // useEffect(() => {
  //   if (!token) {
  //     Router.push('/auth')
  //   }
  // }, [token])

  return (
    <>
      <Head>
        <title>Royal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.propTypes = propTypes
