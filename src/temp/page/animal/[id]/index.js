import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

export const propTypes = {
  animal: PropTypes.object,
}

function Animal(props) {
  const cx = classnames.bind(styles)
  const { animal } = props

  const router = useRouter()

  // console.log('router.isFallback', router.isFallback)

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className={cx('animal')}>
      <p>Animal Id: {animal.id}</p>
      <p>Animal Name: {animal.name}</p>
      <p>Animal Price: {animal.size}</p>
      <img src='/vercel.svg' alt='my image' />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/animal')
  const animals = await res.json()

  const paths = animals.map((post) => ({
    params: { id: String(post.id) },
  }))

  return { paths, fallback: false } // { fallback: false } means other routes should 404.
}

export async function getStaticProps({ params }) {
  const animalResponse = await fetch(`http://localhost:3000/api/animal/${params.id}`)
  const animal = await animalResponse.json()

  return {
    props: {
      animal,
    },
  }
}

Animal.propTypes = propTypes

export default Animal
