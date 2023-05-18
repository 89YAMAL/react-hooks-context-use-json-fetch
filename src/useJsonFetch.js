import { useState, useEffect } from "react";

export default function useJsonFetch(url) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) 
          throw new Error(response.statusText)
        const loaded = await response.json()
        setData(loaded)
        setError(null)
      }
      catch(e) {
        setError(e)
      }
      finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [url])

  return [{data, loading, error}]
}