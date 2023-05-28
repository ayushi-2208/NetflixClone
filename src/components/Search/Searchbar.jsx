import React, { useRef } from 'react'
import './search.scss'

const SearchBar = () => {
  const searchquery = useRef()
  return (
    <div className='search-top'>
      <input
              type="text"
              placeholder="Search"
              ref={searchquery}
              style={{
                padding: "7px 12px",
                borderRadius: "6px",
                border: "3px solid red",
                width: "400px",
                
              }}
              
            ></input>
            {/* <button>Search</button> */}
    </div>
  )
}

export default SearchBar
