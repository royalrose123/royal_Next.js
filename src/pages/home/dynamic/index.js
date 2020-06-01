import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

export const propTypes = {
  people: PropTypes.array,
}

const DynamicItemComponent = dynamic(() => import('@/components/DynamicItem'), { loading: () => <p>loading...</p>, ssr: false })

function Dynamic(props) {
  const { people } = props

  return (
    <>
      {people.map((person, index) => (
        <div key={index}>
          <DynamicItemComponent person={person} />
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  })

  const people = await db.all('select * from person')

  return {
    props: {
      people,
    },
  }
}

Dynamic.propTypes = propTypes

export default Dynamic
