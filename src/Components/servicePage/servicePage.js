import React from "react";
import "./servicePage.css";
import FaQ from "../faq/faq";
import Navbar from "../navbar/navbar";
import FooterOne from "../footerfolder/footerone";
import Svgline from "../../image/Title-style.svg";
import SvgSlac from "../../image/icons/slac.svg";
import Svg26 from "../../image/service/Image 26.png";
import Svg96 from "../../image/service/Group 96.svg";
import Svg97 from "../../image/service/Group 97.svg";
import Svg98 from "../../image/service/Group 98.svg";

function ServicesPage() {
  return (
    <div>
      <div className="service-page">
        <Navbar />
        <div className="row">
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
            <img src={Svg26} className="svg26s" />
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6 service-icon">
            <img src={Svg97} className="svg26s" />
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6 lll">
            <div className="title-ware">
              <div>
                <span className="service-span">Soft</span>Ware
              </div>
              <img src={Svgline} />
            </div>
            <div className="ware-section">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </div>

            <div className="ware-section-learn">
              Learn More{" "}
              <span>
                <img src={SvgSlac} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6 right-move ">
          <div className="title-ware">
              <div>
                <span className="service-span">Hard</span>Ware
             <div className="ll"><img src={Svgline} /></div> </div>
              
            </div>
              
            <div className="ware-section-right-move">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </div>

            <div className="ware-section-learn">
              Learn More{" "}
              <span>
                <img src={SvgSlac} />
              </span>
            </div>
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6 service-icon">
            <img src={Svg96} className="svg26s" />
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6 service-icon">
            <img src={Svg98} className="svg26s" />
          </div>
          <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6	col-xl-6 lll">
          <div className="title-ware">
              <div>
                <span className="service-span"></span>Marketing
              </div>
              <img src={Svgline} />
            </div>
            <div className="ware-section">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </div>

            <div className="ware-section-learn">
              Learn More{" "}
              <span>
                <img src={SvgSlac} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="splitFooter">
      <FaQ/>
      <FooterOne /></div>
    </div>
  );
}
export default ServicesPage;
