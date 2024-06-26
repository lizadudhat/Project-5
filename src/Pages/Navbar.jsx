import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import './navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { GiToggles } from "react-icons/gi";
import { MdWifiCalling1 } from "react-icons/md";



const Navbar = () => {
  return (
    <>
        <div className="container">
            <div className="row">
<nav className="navbar navbar-expand-lg  d-flex align-items-center">
  <div className="container-fluid">
    <a className="navbar-brand new" href="#"><GiToggles />
</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item me-4 text-light">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item me-4 text-light">
          <a className="nav-link" aria-current="page" href="#">Category <IoIosArrowDown /></a>
        </li>
        <li className="nav-item me-4 text-light">
          <a className="nav-link" aria-current="page" href="#">Products <IoIosArrowDown />
</a>
        </li>
        <li className="nav-item me-4 text-light">
          <a className="nav-link" aria-current="page" href="#">Pages <IoIosArrowDown />
</a>
        </li>
        <li className="nav-item me-4 text-light">
          <a className="nav-link" aria-current="page" href="#">Blog <IoIosArrowDown />
</a>
        </li>
        <li className="nav-item me-4 text-light">
          <a className="nav-link" aria-current="page" href="#">Elements <IoIosArrowDown />
</a>
        </li>

      </ul>

      <div className="last-page">
        <h5>
        <MdWifiCalling1 />
        +123 (456) (7890)
        </h5>
      </div>
     
    </div>
  </div>
</nav>

            </div>
        </div>
    </>
  )
}

export default Navbar
