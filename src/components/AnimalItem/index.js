import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import { useRouter } from 'next/router'

// components
import Button from '@/components/Button'

export const propTypes = {
  animal: PropTypes.object,
}

function AnimalItem(props) {
  const cx = classnames.bind(styles)

  const { animal } = props
  const { id, name, size } = animal

  const router = useRouter()

  const onButtonClick = () => {
    router.push(`/home/animal/${id}`)
  }

  return (
    <div className={cx('animal-item')}>
      <p className={cx('animal-item__context')}>id : {id}</p>
      <p className={cx('animal-item__context')}>name : {name}</p>
      <p className={cx('animal-item__context')}>size : {size}</p>
      <div className={cx('animal-item__button')}>
        <Button onClick={onButtonClick}>Read More</Button>
      </div>
    </div>
  )
}

AnimalItem.propTypes = propTypes

export default AnimalItem
