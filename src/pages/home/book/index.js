import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import Router from 'next/router'

// components
import BookItem from '@/components/BookItem'

export const propTypes = {
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

function Book(props) {
  const cx = classnames.bind(styles)
  const { books } = props

  return (
    <>
      <div className={cx('book')}>{books.length > 0 && books.map((book, index) => <BookItem book={book} key={index} />)}</div>
    </>
  )
}

Book.getInitialProps = async (context) => {
  const cookie = context.req?.headers?.cookie

  const booksResponse = await fetch('http://localhost:3000/api/books', {
    headers: {
      cookie: cookie,
    },
  })
  const books = await booksResponse.json()

  if (booksResponse.status === 401 && context.req) {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()
    return
  }

  if (booksResponse.status === 401 && !context.req) {
    Router.push('/login')
  }

  return { books }
}

Book.propTypes = propTypes

export default Book
