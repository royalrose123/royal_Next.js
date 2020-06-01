import React, { useState } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import Router from 'next/router'
import Head from 'next/head'

// components
import BookItem from '@/components/BookItem'
import Button from '@/components/Button'
import BookAdd from '@/components/BookAdd'

export const propTypes = {
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

const cx = classnames.bind(styles)

function Book(props) {
  const { books } = props

  const [isAdding, setIsAdding] = useState(false)

  const onButtonClick = () => {
    console.log('add!')
    setIsAdding(true)
  }

  return (
    <>
      <Head>
        <title>Book</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={cx('book-header')}>
        <Button onClick={onButtonClick}>Add Book</Button>
      </div>
      {isAdding && <BookAdd setIsAdding={setIsAdding} />}
      <div className={cx('book-list')}>{books.length > 0 && books.map((book, index) => <BookItem book={book} key={index} />)}</div>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookie = context.req?.headers?.cookie

  const booksResponse = await fetch('http://localhost:3000/api/books', {
    headers: {
      cookie: cookie,
    },
  })

  const books = await booksResponse.json()

  if (booksResponse.status === 401 && context.req) {
    context.res.writeHead(302, { Location: '/auth' })
    context.res.end()
    return
  }

  if (booksResponse.status === 401 && !context.req) {
    Router.push('/auth')
  }

  return {
    props: { books },
  }
}

Book.propTypes = propTypes

export default Book
