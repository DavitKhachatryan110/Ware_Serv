import React from "react";
import routes from "../../Routing/routing"
import {useRoutes} from 'hookrouter';



  

function OurService() {
  const routeResult = useRoutes(routes);
  return (
    
      <div className="container ">
        <div className="name">
          <div className="our">
            Our <span className="Service">Services</span>
          </div>
        </div>
        <div className="svg-div">
          <img src="image/Title-style.svg" />
        </div>
        <div className="row">
          <div className="  col-md-7 col-xs-7 col-sm-7 col-lg-7 col-xl-7 left-div" >
           
          </div>
          <div className="  col-md-5 col-xs-5 col-sm-5 col-lg-5 col-xl-5">
            <div className=" row right-div">
              <div className="col-md-3 col-xs-3 col-sm-3 col-lg-3 col-xl-3 ">
                <img src="image/icons/Group 10.svg" />
              </div>
              <div className="col-md-9 col-xs-9 col-sm-9 col-lg-9	col-xl-9  ">
                <div className="nameOfSection">
                  <span className="bold">Soft</span>Ware
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et…
                </div>
                <div className="learn">
                 <a href="softwar" className="a-learn"> Learn More <span><img src="image/icons/slac.svg"/></span></a>
                </div>
              </div>
            </div>
            <div className="row right-div">
              <div className=" col-md-3 col-xs-3 col-sm-3 col-lg-3 col-xl-3 ">
                <div>
                <img src="image/icons/Group 11.svg" /></div>
              </div>
              <div className="col-md-9 col-xs-9 col-sm-9 col-lg-9	col-xl-9 ">
                <div className="nameOfSection">
                  <span className="bold">Hard</span>Ware
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et…
                </div>
                <div className="learn">
                  Learn More <span><img src="image/icons/slac.svg" /></span>
                </div>
              </div>
            </div>
            <div className="row right-div">
              <div className="col-md-3 col-xs-3 col-sm-3 col-lg-3 col-xl-3">
                <img src="image/icons/Group 12.svg" />
              </div>
              <div className="col-md-9 col-xs-9 col-sm-9 col-lg-9	col-xl-9 ">
                <div className="nameOfSection">
                  <span className="bold">Marketing</span>
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et…
                </div>
                <div className="learn">
                  Learn More <span><img src="image/icons/slac.svg" /></span>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
export default OurService;
