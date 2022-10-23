import React from 'react'
import "./navbar.css";

function NewsBar(props) {
  return (
    <div className='newsBar'>{props.children}</div>
  )
}

export default NewsBar;