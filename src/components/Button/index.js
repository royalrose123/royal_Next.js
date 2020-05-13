import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// components

export const propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
}

export const defaultProps = {
  type: 'default',
}

function Button(props) {
  const cx = classnames.bind(styles)

  const { children, className, type, ...restProps } = props

  return (
    <button className={cx('button', className)} data-type={type} {...restProps}>
      {children}
    </button>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
