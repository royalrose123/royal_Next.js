import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// components
import Item from './components/Item'

export const propTypes = {
  children: PropTypes.array,
}

function Menu(props) {
  const cx = classnames.bind(styles)

  const { children } = props

  return <div className={cx('menu')}>{children}</div>
}

Menu.propTypes = propTypes

Menu.Item = Item

export default Menu
