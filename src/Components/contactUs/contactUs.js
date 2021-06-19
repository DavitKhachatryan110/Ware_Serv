import React from "react";
import "./contactUs.css";
import logo from "../../image/Title-style.svg";
import Group56 from "../../image/Group56.png";
function ContactUs() {
  return (
    <div className="contact-div">
      <div className="desk-div">
        <div className="row">
          <div className="col-md-6 col-xs-6 col-sm-6 left-side">
            <div className="us">
              Contact Us
              <div className="line-div">
                <img src={logo} />
              </div>
            </div>
            <div className="contacPng">
              <img src={Group56} width="60%" height="60%" />
            </div>
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 right-side">
            <div className="divmassige">
            <div >
                <input type="text" className="input" placeholder="Name" />
            </div>
            <div className="inputs" >
              <input type="text" className="inputtwo" placeholder="Email" />
</div>
<div className="inputs" >
              <input
                type="text"
                className="massege-div"
                placeholder="Massege"
              ></input>
              </div>
              <div className="inputs" >
              <button className="subButton">Submit</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
