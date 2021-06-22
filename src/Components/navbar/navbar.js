import React , {useState} from "react"
import '../head/head.css'
import ServicesPage from "../servicePage/servicePage";
import {Link} from "react-router-dom"


function Navbar() {
const [open, setOpen] = useState()

const handleProfileMenuOpen = (event) => {
  setOpen(event.currentTarget);
};

const goService = () => {
  return <ServicesPage/>
};
    return(
        <div className="headerBar">
          <div className="companyName">
            <span className="span">Ware</span>Serv
          </div>
          <div className="menuBar">  
      
            <nav className="navbar navbar-expand-lg  ">
            <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
              <div className=" navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="dee"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      open={open}
                     onClick={handleProfileMenuOpen}
                    >
                      Services
                    </a>
                  
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
          </div>
        </div>
    )
}
export default Navbar