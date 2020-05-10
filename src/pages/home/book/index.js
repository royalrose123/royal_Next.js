import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'

export const propTypes = {
  books: PropTypes.array,
}

function Book(props) {
  const { books } = props

  return (
    <>
      <p>Book </p>
      <div>
        {books.map((book, index) => (
          <div key={index}>{book.name}</div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const booksResponse = await fetch('http://127.0.0.1:8000/api/books')
  const books = await booksResponse.json()

  return {
    props: {
      books,
    },
  }
}

Book.propTypes = propTypes

export default Book
