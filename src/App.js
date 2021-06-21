
import './App.css';
import Header from "./Components/head/head"
import OurService from "./Components/ourServices/ourService"
import About from "./Components/aboutUs/about"
import ContactUs from './Components/contactUs/contactUs';
import FaQ from './Components/faq/faq';
import FooterOne from './Components/footerfolder/footerone';
import ServicesPage from './Components/servicePage/servicePage';
function App() {
  return (
    <div className="App">
      <Header/>
      <OurService/>
      <About/> 
      <ContactUs/>
      <FaQ/>
      <FooterOne />
      {/* <ServicesPage/> */}
    </div>
  );
}

export default App;
