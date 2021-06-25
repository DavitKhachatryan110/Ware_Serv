import React from "react";



function SendMessage() {
  return (
    <div className="desk-div">
    <div className="row contact">
      <div className="col-md-6 col-xs-6 col-sm-6 left-side">
        <div className="us">
          Contact Us
          <div className="line-div">
            <img src="image/Title-style.svg" />
          </div>
        </div>
        <div className="contacPng">
          <img src="image/Group56.png" width="60%" height="60%" />
        </div>
      </div>
      <div className="col-md-6 col-xs-6 col-sm-6 right-side">
        <div className="">
        <div >
            <input type="text" className="input" placeholder="Name" />
        </div>
        <div className="inputs" >
          <input type="text" className="input" placeholder="Email" />
</div>
<div className="inputs" >
          <input
            type="text"
            className="massege-div"
            placeholder="Massege"
          ></input>
         
         
          </div>
          <div className="send-inputs" >
          <button className="subButton">Submit</button></div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default SendMessage;