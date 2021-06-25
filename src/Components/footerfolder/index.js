import React from "react";


function FooterOne() {
  return (
    <div>
      <div className="footerone">
        <div className="footone  ">
          <div className="onefoot ">
            <div>
              <img src="image/icons1/Group 46.svg" />
            </div>
            <div className="div1">Email</div>
            <div className="div2">support@wareserv.com</div>
            <div className="div3">info@wareserv.com</div>
          </div>
          <div className="onefoot">
            <div>
              <img src="image/icons1/Group 49.svg" />
            </div>
            <div className="div1">Adress</div>
            <div className="div2">908 New Hampshire Avenue Northwest #100</div>
          </div>
          <div className="onefoot">
            <div>
              <img src="image/icons1/Group 50.svg" />
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
            <img src="image/socilaIcons/instagram.svg" className="icon" />
            <img src="image/socilaIcons/f.svg" className="icon" />
            <img src="image/socilaIcons/linkedin-in.svg" className="icon" />
            <img src="image/socilaIcons/youtube.svg"  className="icon"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default FooterOne;
