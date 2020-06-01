import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classnames from 'classnames/bind'

// Components
import Button from '@/components/Button'

export const propTypes = {
  setIsAdding: PropTypes.func,
}

const cx = classnames.bind(styles)

function BookAdd(props) {
  const { setIsAdding } = props

  const onAddClick = () => {
    console.log('onAddClick')
  }

  const onCloseClick = () => {
    setIsAdding(false)
  }

  return (
    <div className={cx('book-add')}>
      <div className={cx('book-add-popover')}>
        <div className={cx('book-add-popover__header')}>
          <p>Add Book</p>
          <p className={cx('book-add-popover__header__close')} onClick={onCloseClick}>
            X
          </p>
        </div>
        <div className={cx('book-add-popover__content')}>
          <div className={cx('form-item')}>
            <p className={cx('form-item__title')}>Name:</p>
            <input className={cx('form-item__input')} />
          </div>
          <div className={cx('form-item')}>
            <p className={cx('form-item__title')}>Price:</p>
            <input className={cx('form-item__input')} />
          </div>
          <div className={cx('form-item')}>
            <p className={cx('form-item__title')}>Rent Price:</p>
            <input className={cx('form-item__input')} />
          </div>
          <Button onClick={onAddClick}>Add Book</Button>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

BookAdd.propTypes = propTypes

export default BookAdd
