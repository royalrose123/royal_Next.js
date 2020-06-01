import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// components

export const propTypes = {
  person: PropTypes.object,
}

export function DynamicItem(props) {
  const cx = classnames.bind(styles)

  const { person } = props
  const { id, name, email } = person

  return (
    <div className={cx('dynamic-item')}>
      <p className={cx('dynamic-item__context')}>id : {id}</p>
      <p className={cx('dynamic-item__context')}>name : {name}</p>
      <p className={cx('dynamic-item__context')}>email : {email}</p>
    </div>
  )
}

DynamicItem.propTypes = propTypes

export default DynamicItem
