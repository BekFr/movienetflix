import React from 'react';
import '../App.css'

export default function SearchBox(props) {
  return (
      <div className='SearchBox'>
          <input 
            value={props.searchValue}
            className='search_input'
            type="text" 
            placeholder='Type name of the movie '
            onChange={(event) => {props.setSearchValue(event.target.value)}}  
        />
      </div>
    
  )
}
