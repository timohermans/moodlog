import { useEffect, useState } from 'react'

const useFetch = (query: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = async () => {
    setIsLoading(true)
    const response = await fetch(query)
    const data = await response.json()
    setData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [query])

  return { isLoading, data, fetchData }
}

export default useFetch
