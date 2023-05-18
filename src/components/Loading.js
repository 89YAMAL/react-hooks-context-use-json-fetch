import React from 'react'
import useJsonFetch from '../useJsonFetch'

export default function Loading() {
  const [{data, loading}] = useJsonFetch("http://localhost:7070/loading")

  return (
    <div>
      {loading ? <p>Loading.....</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}