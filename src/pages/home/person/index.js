import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'
import Router from 'next/router'

export const propTypes = {
  people: PropTypes.array,
}

function Person(props) {
  const { people } = props

  return (
    <>
      <p>Person</p>
      {people.length > 0 && people.map((book, index) => <div key={index}>Name: {book.name}</div>)}
    </>
  )
}

export async function getServerSideProps(context) {
  // Person.getInitialProps = async (context) => {
  const cookie = context.req?.headers?.cookie

  const personResponse = await fetch('http://localhost:3000/api/person', {
    headers: {
      cookie,
    },
  })

  // for client side
  if (personResponse.status === 401 && !context.req) {
    Router.replace('/login')
    return {}
  }

  // for server side
  if (personResponse.status === 401 && context.req) {
    context.res.writeHead(302, { Location: 'http://localhost:3000/login' })

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
