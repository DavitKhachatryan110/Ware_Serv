
import Header from "../head/index"
import OurService from "../ourServices/index"
import About from "../aboutUs/index"
import ContactUs from '../contactUs/index';
import FaQ from '../FAQ/index';
import FooterOne from '../footerfolder/index';
import ServicesPage from '../servicePage/index';

function Home({style}) {
  return (
    <div className="App">
      <Header style={style} />
      <OurService/>
      <About/> 
      <ContactUs/>
      
      
      

    </div>
  );
}

export default Home;