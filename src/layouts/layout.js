import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// components
import Navigation from '@/components/Navigation'

export const propTypes = {
  children: PropTypes.object,
}

function Layout(props) {
  const cx = classnames.bind(styles)

  const { children } = props

  const navigations = [
    {
      name: 'Book',
      path: 'book',
    },
    {
      name: 'About',
      path: 'about',
    },
  ]

  return (
    <>
      <Head>
        <title>Royal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={cx('layout')}>
        <div className={cx('layout__header')} />
        <div className={cx('layout__main')}>
          <Navigation navigations={navigations} />
          <div className={cx('layout__main__content')}>{children}</div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = propTypes

export default Layout
