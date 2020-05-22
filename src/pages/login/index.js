import React, { useState } from 'react'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

// Lib MISC

// Components
import AuthLayout from '@/layouts/AuthLayout'
import Button from '@/components/Button'

export function Login(props) {
  const cx = classnames.bind(styles)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')

  const onInputChange = (event, setValue) => {
    const currentValue = event.target.value

    setValue(currentValue)
  }

  const onConfirmClick = async () => {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, password: password }),
    })

    const data = await response.json()

    if (data.statusCode === '0000') Router.push('/home')

    console.log('json 000000', data)
    setResponse(data.message)
  }

  return (
    <div className={cx('auth')}>
      <div className={cx('auth-form-item')}>
        <p>NODE_ENV {process.env.TEST}</p>
        <p>response: {JSON.stringify(response)}</p>
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

Login.Layout = AuthLayout

export default Login
