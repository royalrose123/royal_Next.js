import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// components

export const propTypes = {
  children: PropTypes.object,
}

function AuthLayout(props) {
  const cx = classnames.bind(styles)

  const { children } = props

  return (
    <>
      <div className={cx('auth-layout')}>
        <div className={cx('auth-layout__header')} />
        <div className={cx('auth-layout__main')}>{children}</div>
      </div>
    </>
  )
}

AuthLayout.propTypes = propTypes

export default AuthLayout
