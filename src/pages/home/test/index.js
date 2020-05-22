import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'

export const propTypes = {
  Testbooks: PropTypes.array,
}

function Test(props) {
  const { Testbooks } = props

  return (
    <>
      <p>Test</p>
      <div>{Testbooks && Testbooks.map((book, index) => <div key={index}>{book.name}</div>)}</div>
    </>
  )
}
export async function getStaticProps() {
  const booksResponse = await fetch('http://127.0.0.1:8000/api/books')
  const Testbooks = await booksResponse.json()

  return {
    props: {
      Testbooks,
    },
  }
}

Test.propTypes = propTypes

export default Test
