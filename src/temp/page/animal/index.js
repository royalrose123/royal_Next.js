import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import Router from 'next/router'

// components
import AnimalItem from '@/components/AnimalItem'

export const propTypes = {
  animals: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

function Animal(props) {
  const cx = classnames.bind(styles)
  const { animals } = props

  return (
    <>
      <div className={cx('animal')}>{animals.length > 0 && animals.map((animal, index) => <AnimalItem animal={animal} key={index} />)}</div>
    </>
  )
}

// Animal.getInitialProps = async (context) => {
export async function getServerSideProps(context) {
  // const cookie = context.req?.headers?.cookie

  const booksResponse = await fetch('http://localhost:3000/api/animal', {
    // headers: {
    //   cookie: cookie,
    // },
  })
  const animals = await booksResponse.json()

  // if (booksResponse.status === 401 && context.req) {
  //   context.res.writeHead(302, { Location: '/login' })
  //   context.res.end()
  //   return
  // }

  // if (booksResponse.status === 401 && !context.req) {
  //   Router.push('/login')
  // }

  return { props: { animals } }
}

Animal.propTypes = propTypes

export default Animal
