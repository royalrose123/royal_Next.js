import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// components
import Menu from '../Menu'

export const propTypes = {
  navigations: PropTypes.array,
}

function Navigation(props) {
  const cx = classnames.bind(styles)

  const { navigations } = props

  return (
    <div className={cx('navigation')}>
      <Menu>
        {navigations.map((item, index) => {
          const { name, path } = item

          return <Menu.Item key={index} name={name} path={path} />
        })}
      </Menu>
    </div>
  )
}

Navigation.propTypes = propTypes

export default Navigation
