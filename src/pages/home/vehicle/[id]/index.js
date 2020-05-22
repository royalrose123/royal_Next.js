import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

export const propTypes = {
  vehicle: PropTypes.object,
}

function Vehicle(props) {
  const cx = classnames.bind(styles)
  const { vehicle } = props

  const router = useRouter()

  // console.log('router.isFallback', router.isFallback)

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className={cx('vehicle')}>
      <p>Vehicle Id: {vehicle.id}</p>
      <p>Vehicle Brand: {vehicle.brand}</p>
      <p>Vehicle Price: {vehicle.price}</p>
      <img src='/vercel.svg' alt='my image' />
    </div>
  )
}

export async function getServerSideProps(context) {
  const cookie = context.req?.headers?.cookie
  const vehicleId = context.query.id

  const vehicleResponse = await fetch(`http://localhost:3000/api/vehicle/${vehicleId}`, {
    headers: {
      cookie,
    },
  })
  const vehicle = await vehicleResponse.json()

  return {
    props: {
      vehicle,
    },
  }
}

Vehicle.propTypes = propTypes

export default Vehicle
