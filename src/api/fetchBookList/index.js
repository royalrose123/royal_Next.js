import getService from '../service'
// import transformRequest from './transformRequest'
// import transformResponse from './transformResponse'

const url = 'books'

export function fetchBookList(url) {
  return getService({
    config: {
      url,
      method: 'GET',
    },
    // transformRequest,
    // transformResponse,
    name: 'FETCH_BOOK_LIST',
  })
}

export default url
