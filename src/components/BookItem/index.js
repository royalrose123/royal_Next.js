import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import { useRouter } from 'next/router'

// components
import Button from '@/components/Button'

export const propTypes = {
  book: PropTypes.object,
}

function BookItem(props) {
  const cx = classnames.bind(styles)

  const { book } = props
  const { id, name, price, rentPrice } = book

  const router = useRouter()

  const onButtonClick = () => {
    router.push(`/home/book/${id}`)
  }

  return (
    <div className={cx('book-item')}>
      <p className={cx('book-item__context')}>id : {id}</p>
      <p className={cx('book-item__context')}>name : {name}</p>
      <p className={cx('book-item__context')}>price : {price}</p>
      <p className={cx('book-item__context')}>rent_price : {rentPrice}</p>
      <div className={cx('book-item__button')}>
        <Button onClick={onButtonClick}>Read More</Button>
      </div>
    </div>
  )
}

BookItem.propTypes = propTypes

export default BookItem
