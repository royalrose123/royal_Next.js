import React, { useState } from 'react'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import fetch from 'isomorphic-unfetch'
// import getConfig from 'next/config'

// Lib MISC

// Components
import AuthLayout from '@/layouts/AuthLayout'
import Button from '@/components/Button'

export function Auth(props) {
  const cx = classnames.bind(styles)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onInputChange = (event, setValue) => {
    const currentValue = event.target.value

    setValue(currentValue)
  }

  const onConfirmClick = async () => {
    console.log('username 11111', username)
    console.log('password 22222', password)

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })

    const json = await response.json()

    console.log('json 000000', json)
  }

  return (
    <div className={cx('auth')}>
      <div className={cx('auth-form-item')}>
        <p>NODE_ENV {process.env.TEST}</p>
        <p>Username:</p>
        <input className={cx('auth-form-item__input')} value={username} onChange={(event) => onInputChange(event, setUsername)} />
      </div>
      <div className={cx('auth-form-item')}>
        <p>Password:</p>
        <input className={cx('auth-form-item__input')} value={password} onChange={(event) => onInputChange(event, setPassword)} />
      </div>
      <Button className={cx('auth-form__button')} onClick={onConfirmClick}>
        Confirm
      </Button>
    </div>
  )
}

Auth.Layout = AuthLayout

export default Auth
