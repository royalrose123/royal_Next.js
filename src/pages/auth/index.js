import React from 'react'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// Components
import AuthLayout from '@/layouts/AuthLayout'
import Button from '@/components/Button'

export function Auth() {
  const cx = classnames.bind(styles)

  return (
    <div className={cx('auth')}>
      <div className={cx('auth-form-item')}>
        <p>Username:</p>
        <input className={cx('auth-form-item__input')} />
      </div>
      <div className={cx('auth-form-item')}>
        <p>Password:</p>
        <input className={cx('auth-form-item__input')} />
      </div>
      <Button className={cx('auth-form__button')}>Confirm</Button>
    </div>
  )
}

Auth.Layout = AuthLayout

export default Auth
