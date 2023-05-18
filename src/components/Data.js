import React from 'react'
import useJsonFetch from '../useJsonFetch'

export default function Data() {
  const [{data}] = useJsonFetch("http://localhost:7070/data")

  return (
    <div>
      <p>{data.status}</p>
    </div>
  )
}