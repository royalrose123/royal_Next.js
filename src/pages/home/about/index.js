import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'

export const propTypes = {
  SSRbooks: PropTypes.array,
}

function About(props) {
  const { SSRbooks } = props

  return (
    <>
      <p>ABOUT</p>
      <div>
        {SSRbooks.map((book, index) => (
          <div key={index}>{book.name}</div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps({ res }) {
  // Call an external API endpoint to get posts
  const booksResponse = await fetch('http://127.0.0.1:8000/api/books')
  const SSRbooks = await booksResponse.json()

  const bookResponse = await fetch('http://127.0.0.1:8000/api/book/11')
  const SSRbook = await bookResponse.json()

  return {
    props: {
      SSRbooks,
      SSRbook,
    },
  }
}

About.propTypes = propTypes

export default About
