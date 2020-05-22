import axios from 'axios'
import { withAuth } from '@/utils/withAuth'

export const books = (req, res) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      baseURL: `http://127.0.0.1:8000/api`,
      url: '/books',
      params: {},
    })
      .then((result) => {
        res.json(result.data)
      })
      .catch((err) => {
        console.error('err', err)
      })
  })
}

export default withAuth(books)
