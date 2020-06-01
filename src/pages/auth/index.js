import React, { useState } from 'react'
import styles from './style.module.scss'
import classnames from 'classnames/bind'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Cookies from 'js-cookie'

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
    const response = await fetch('http://127.0.0.1:8000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })

    const data = await response.json()

    Cookies.set('token', data.token, { expires: 1 })

    if (data.token) Router.push('/home')
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
