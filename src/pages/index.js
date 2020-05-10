import { useEffect } from 'react'

import { useRouter } from 'next/router'
// import MyApp from './_app'

export default () => {
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    if (pathname === '/') router.push('/home/book')
  }, [router, pathname])

  return null
}
