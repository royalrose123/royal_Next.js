import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'
import Router from 'next/router'
import useSWR from 'swr'

export const propTypes = {
  people: PropTypes.array,
}

const fetcher = (url) => fetch(url).then((r) => r.json())

function Person(props) {
  const { people } = props

  const { data } = useSWR('http://127.0.0.1:8000/api/books', fetcher)

  console.log('Person data', data)

  return (
    <>
      <p>Person</p>
      {people.length > 0 && people.map((book, index) => <div key={index}>Name: {book.name}</div>)}
    </>
  )
}

export async function getServerSideProps(context) {
  const cookie = context.req?.headers?.cookie

  const personResponse = await fetch('http://localhost:3000/api/person', {
    headers: {
      cookie,
    },
  })

  // for client side
  if (personResponse.status === 401 && !context.req) {
    Router.replace('/auth')
    return {}
  }

  // for server side
  if (personResponse.status === 401 && context.req) {
    context.res.writeHead(302, { Location: 'http://localhost:3000/auth' })

    context.res.end()
    return {}
  }

  const people = await personResponse.json()

  return {
    props: {
      people,
    },
  }
}

Person.propTypes = propTypes

export default Person
