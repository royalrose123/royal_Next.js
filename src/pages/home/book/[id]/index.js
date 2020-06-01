import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

export const propTypes = {
  book: PropTypes.object,
}

function Book(props) {
  const cx = classnames.bind(styles)
  const { book } = props

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className={cx('book')}>
      <p>Book Id: {book.id}</p>
      <p>Book Name: {book.name}</p>
      <p>Book Price: {book.price}</p>
      <p>Book Rent Price: {book.rent_price}</p>
      <img src='/vercel.svg' alt='my image' />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/api/books')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }))

  return { paths, fallback: true } // { fallback: false } means other routes should 404.
}

export async function getStaticProps({ params }) {
  const bookResponse = await fetch(`http://127.0.0.1:8000/api/book/${params.id}`)
  const book = await bookResponse.json()

  return {
    props: {
      book,
    },
  }
}

Book.propTypes = propTypes

export default Book
