import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
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
      <div>
        <Link href='/'>
          <a>index</a>
        </Link>
        <br />
        <Link href='/book'>
          <a>Book</a>
        </Link>
        <br />
        <Link href='/about'>
          <a>About</a>
        </Link>
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
