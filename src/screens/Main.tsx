import { useEffect } from 'react'
import PageBody from '../components/PageBody'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

export default function Main() {
  const dispatch = useMyDispatch()

  useEffect(() => {
    dispatch(setPage('main'))
  }, [dispatch])
  return <PageBody>123</PageBody>
}
