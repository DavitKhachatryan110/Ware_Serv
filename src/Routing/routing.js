import React from "react";
import Home from "../Components/HomePage/index";
import ServicesPage from "../Components/servicePage";
import SoftWarePage from "../Components/SoftWarePage/index"
let black = "#000000"
let white = "#ffffff"
const routes = {
  "/": () => <Home color={white} />,
  "/service": () => <ServicesPage color={white}/>,
  "/softwar":() =><SoftWarePage color={black}/>,
};
export default routes;