import { useSWRFetcher } from '@/effects/useSwrFetcher'
import bookListUrl, { fetchBookList } from '@/api/fetchBookList'

export function useBookList(params = {}) {
  const { data, isFetched: isBookListFetched } = useSWRFetcher(
    {
      url: bookListUrl,
    },
    fetchBookList,
  )

  return { bookList: data, isBookListFetched }
}
