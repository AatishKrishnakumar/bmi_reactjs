import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{backgroundColor:"gray"}}>
    <h3>React App</h3>

   <ul>

       <li><Link to="/Bmi">Home</Link></li>
        

   </ul>




    </div>
  )
}

export default Header