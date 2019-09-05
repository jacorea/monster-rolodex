import React from 'react'
import './search-box.styles.css'

export const SearchBox =({placeholder,handleSearch})=>(
    <div>
        <input
            className="search" 
            type='search' 
            placeholder={placeholder} 
            onChange={handleSearch}/>
    </div>
  )

