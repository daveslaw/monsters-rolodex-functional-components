import React from 'react'

export default function SearchBox({handleSearch, placeholder}) {
  return (
    <div><input type="search" onChange={handleSearch} placeholder={placeholder} /></div>
  )
}
