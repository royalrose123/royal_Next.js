import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

export const propTypes = {
  books: PropTypes.array,
  book: PropTypes.object,
}

function Book(props) {
  const cx = classnames.bind(styles)
  const { books, book } = props

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <p>BOOK </p>
      <div>
        {books.map((book, index) => (
          <div key={index}>{book.name}</div>
        ))}
      </div>
      <div className={cx('book-book')}>
        <p>Book Id: {book.id}</p>
        <p>Book Name: {book.name}</p>
        <p>Book Price: {book.price}</p>
        <p>Book Rent Price: {book.rent_price}</p>
        <img src='/vercel.svg' alt='my image' />
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

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://127.0.0.1:8000/api/books')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }))

  // We'll pre-render only these paths at build time.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const booksResponse = await fetch('http://127.0.0.1:8000/api/books')
  const books = await booksResponse.json()

  const bookResponse = await fetch(`http://127.0.0.1:8000/api/book/${params.id}`)
  const book = await bookResponse.json()

  return {
    props: {
      books,
      book,
    },
  }
}

Book.propTypes = propTypes

export default Book
