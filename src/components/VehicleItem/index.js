import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import { useRouter } from 'next/router'

// components
import Button from '@/components/Button'

export const propTypes = {
  vehicle: PropTypes.object,
}

function VehicleItem(props) {
  const cx = classnames.bind(styles)

  const { vehicle } = props
  const { id, brand, price } = vehicle

  const router = useRouter()

  const onButtonClick = () => {
    router.push(`/home/vehicle/${id}`)
  }

  return (
    <div className={cx('vehicle-item')}>
      <p className={cx('vehicle-item__context')}>id : {id}</p>
      <p className={cx('vehicle-item__context')}>brand : {brand}</p>
      <p className={cx('vehicle-item__context')}>price : {price}</p>
      <div className={cx('vehicle-item__button')}>
        <Button onClick={onButtonClick}>Read More</Button>
      </div>
    </div>
  )
}

VehicleItem.propTypes = propTypes

export default VehicleItem
