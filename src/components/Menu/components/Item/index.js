import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

export const propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
}

function Item(props) {
  const cx = classnames.bind(styles)

  const { name, path } = props

  return (
    <div className={cx('item')}>
      <Link href={`/home/${path}`}>
        <a className={cx('item__link')}>{name}</a>
      </Link>
    </div>
  )
}

Item.propTypes = propTypes

export default Item
