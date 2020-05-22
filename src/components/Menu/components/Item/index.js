import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import { useRouter } from 'next/router'

export const propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
}

function Item(props) {
  const cx = classnames.bind(styles)

  const { name, path } = props

  const router = useRouter()
  const { pathname } = router

  const currentPath = `/home/${path}`
  const isCurrentPath = pathname.includes(currentPath)

  return (
    <div className={cx('item')}>
      <Link href={currentPath}>
        <a className={cx('item__link')} data-is-actived={isCurrentPath}>
          {name}
        </a>
      </Link>
    </div>
  )
}

Item.propTypes = propTypes

export default Item
