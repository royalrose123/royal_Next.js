import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'
import Router from 'next/router'
import Link from 'next/link'

import VehicleItem from '@/components/VehicleItem'

export const propTypes = {
  vehicle: PropTypes.array,
}

function Vehicle(props) {
  const { vehicle } = props

  return (
    <>
      <p>Vehicle</p>
      {vehicle.map((vehicle, index) => {
        return (
          <Link key={index} href='/home/vehicle/[id]' as={`/home/vehicle/${vehicle.id}`}>
            <a>
              <VehicleItem vehicle={vehicle} />
            </a>
          </Link>
        )
      })}
    </>
  )
}

export async function getServerSideProps(context) {
  const cookie = context.req?.headers?.cookie

  const vehicleResponse = await fetch('http://localhost:3000/api/vehicle', {
    headers: {
      cookie,
    },
  })

  // for client side
  if (vehicleResponse.status === 401 && !context.req) {
    Router.replace('/login')
    return {}
  }

  // for server side
  if (vehicleResponse.status === 401 && context.req) {
    context.res.writeHead(302, { Location: 'http://localhost:3000/login' })

    context.res.end()
    return {}
  }

  const vehicle = await vehicleResponse.json()

  return {
    props: {
      vehicle,
    },
  }
}

Vehicle.propTypes = propTypes

export default Vehicle
