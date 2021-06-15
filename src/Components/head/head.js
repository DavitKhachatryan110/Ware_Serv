import React from "react";
import "./head.css";
import logo from "../../image/green_pgot.png";
function Header() {
  return (
    <section className="general">
      <div className="margin">
        <div className="headerBar">
          <div className="companyName">
            <span className="span">Ware</span>Serv
          </div>
          <div className="menuBar">
            <nav className="navbar navbar-expand-lg  ">
              <div className=" navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
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
            </nav>
          </div>
        </div>
        <div className="container">
        <div className="row secondPartHeader">
          <div className=" col-md-6 col-xs-6 col-sm-6 textDiv ">
            <div className="largeText">
              Lorem ipsum dolor sit amet Consetetor
            </div>
            <div className="smallText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="href">
              <a className="learnMore" href="#">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 pictureDiv">
            <img className="logoImage" src={logo} />
          </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
export default Header;
