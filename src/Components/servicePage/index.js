import React from "react";
import Navbar from "../navbar/index";
import ServiceSecondPart from "./index2"

function ServicesPage({color}) {
  return (
    <div>
      <div className="service-page ">
      <Navbar style={color}  />
        <div className="container">
        
        <div  className="row our-service">
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6  left">
            <div className="service-page-title">
              Our <span className="bold-size">Services</span>
            </div>
            <div className="service-page-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6 right">
          <div className='servise-page-right'>  <img src="image/Image26.png" className="our-service-png" /></div>
          </div>
        </div>
      </div>
      
     
      {/* <div className="splitFooter">
      <FaQ/>
      <FooterOne /></div> */}
      </div> <ServiceSecondPart/>
    </div>
  );
}
export default ServicesPage;
