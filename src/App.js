
import './App.css';
import routes from "./Routing/routing"
import SoftWarePage from "./Components/SoftWarePage/index"
import {useRoutes} from 'hookrouter';
import Navbar from "./Components/navbar/index"
import FaQ from './Components/FAQ/index'
import FooterOne from "./Components/footerfolder/index"

function App() {
  const routeResult = useRoutes(routes)
  return(<div>
  
  {routeResult}
  <FaQ/>
      <FooterOne />
  </div>
  )
}

export default App;
