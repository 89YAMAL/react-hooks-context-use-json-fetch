import React from 'react'
import useJsonFetch from '../useJsonFetch'

export default function Error() {
  const [{error}] = useJsonFetch("http://localhost:7070/error")

  return (
    <div>
      {error && <p>{error.message}</p>}
    </div>
  )
}