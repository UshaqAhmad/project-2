import React from 'react'
import logo from '../pics/logo.jpeg'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className='img-1' src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto ushaq123">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Become a bike mechanic</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cyclofix Business</a>
        </li>
        <li class="nav-item">
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          header.texts.5
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#"> header.texts.6</a></li>
            <li><a class="dropdown-item" href="#"> header.texts.7</a></li>
            <li><a class="dropdown-item" href="#"> header.texts.8</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Prices & info
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Prices</a></li>

            <li><a class="dropdown-item" href="#">Need Help</a></li>
          </ul> 
        </li>
        {/* <div className="icns">
        <i class="fa-solid fa-user-nurse"></i>
        <h5>Log in</h5>
      
        </div> */}
        <Link to='Form'>
        <button className='btn1'>Book a Service <i class="fa-solid fa-angle-right"></i></button>  
        </Link>
       

      </ul>
      
    
    </div>
  </div>
</nav>

   
   
   
   </>
  )
}

export default Navbar
{/* <a href=""></a>
<a href=""></a>
<a href=""></a> */}