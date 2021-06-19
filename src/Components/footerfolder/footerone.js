import React from "react";
import "./footerone.css";
import Group46 from "../../image/icons1/Group 46.svg";
import Group49 from "../../image/icons1/Group 49.svg";
import Group50 from "../../image/icons1/Group 50.svg";
import fbSvg from "../../image/socilaIcons/f.svg";
import instaSvg from "../../image/socilaIcons/instagram.svg";
import linkSvk from "../../image/socilaIcons/linkedin-in.svg";
import youtube from "../../image/socilaIcons/f.svg";
function FooterOne() {
  return (
    <div>
      <div className="footerone">
        <div className="footone">
          <div className="onefoot">
            <div>
              <img src={Group46} />
            </div>
            <div className="div1">Email</div>
            <div className="div2">support@wareserv.com</div>
            <div className="div3">info@wareserv.com</div>
          </div>
          <div className="onefoot">
            <div>
              <img src={Group49} />
            </div>
            <div className="div1">Adress</div>
            <div className="div2">908 New Hampshire Avenue Northwest #100</div>
          </div>
          <div className="onefoot">
            <div>
              <img src={Group50} />
            </div>
            <div className="div1">Phones</div>
            <div className="div2">Phone: +1 916-875-2235</div>
            <div className="div3">Mobile: +1 916-875-2235</div>
          </div>
        </div>
      </div>
      <div className="footersecond">
      <div className="row ">
        <div className="col-md-4 col-xs-4 col-sm-4">
          <div className="div-foot-1">Services</div>
          <div className="div-foot">HardWare</div>
          <div className="div-foot">SoftWare</div>
          <div className="div-foot">Marketing</div>
        </div>
        <div className="col-md-4 col-xs-4 col-sm-4">
          <div className="div-foot-2">About Us</div>
          <div className="div-foot2">Contact Us</div>
          <div className="div-foot2">FAQ</div>
          <div className="div-foot2">Support</div>
        </div>
        <div className="col-md-4 col-xs-4 col-sm-4">
          <div className="div-foot1">Follow us on</div>
          <div className="div-foot-icon">
            <img src={instaSvg} className="icon" />
            <img src={fbSvg} className="icon" />
            <img src={linkSvk} className="icon" />
            <img src={youtube} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default FooterOne;
