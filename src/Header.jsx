import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons'

const Header = () => {
  return (
    <div className='header'>  
     <div className='header_left'>
     <img src="" alt="" srcset="" />
      <div className='header_search'>
        <SearchIcon />
        <input type="text"  />
      </div>
     </div> 
     <div className='header_right'>Header</div> 
     
    </div>
  )
}

export default Header