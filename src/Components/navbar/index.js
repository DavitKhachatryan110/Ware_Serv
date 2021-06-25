import React , {useState} from "react"
import { Route, Link, BrowserRouter as Router , Switch} from "react-router-dom";
import ServicesPage from "../servicePage/index";
import routes from "../../Routing/routing"
import {useRoutes} from 'hookrouter';
import { useHistory } from "react-router-dom";

function Navbar({style}) {
  console.log(style)
  const routeResult = useRoutes(routes);
    return(<div style={{color:style}} className="container">
        <div className="headerBar">
          <div className="companyName"  >
           <a href="/" className="go-home" style={{color:style}} > <span className="span">Ware</span>Serv</a>
          </div>
          <div className="menuBar">  
   
            <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
    
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
              <div className=" collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/service"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      style={{color:style}}
                    >
                      Services
                    </a>
                  
                  
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#" style={{color:style}}>
                        Action
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#" style={{color:style}}>
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{color:style}}>
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{color:style}}>
                      FAQs
                    </a>
                  </li>
                </ul>
               
              </div>
              </div>
              
            </nav>
        
          </div>
          
        </div>
      
        </div>
    )
}
export default Navbar