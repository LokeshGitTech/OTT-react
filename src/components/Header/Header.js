import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <span onClick={()=> window.scroll(0, 0)} className="header" >&#128251; Entertainment Hub &#127926;</span>
  )
}

export default Header
