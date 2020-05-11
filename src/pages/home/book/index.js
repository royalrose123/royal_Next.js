import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// components
import BookItem from '@/components/BookItem'

export const propTypes = {
  books: PropTypes.array,
}

function Book(props) {
  const cx = classnames.bind(styles)

  const { books } = props

  return (
    <div className={cx('book')}>
      {books.map((book, index) => (
        <BookItem book={book} key={index} />
      ))}
    </div>
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
