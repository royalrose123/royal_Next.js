import React from 'react'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// Components

const cx = classnames.bind(styles)

export default function Home(props) {
  return <div className={cx('home')} />
}
