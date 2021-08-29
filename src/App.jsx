import Contacts from "./components/contacts/Contacts";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import {useState} from "react"
import "./app.scss"
import Menu from "./components/menu/Menu";


function App() {
  const[menu, setMenu] = useState(false);
  return (
    <div className="app">
    

    <Topbar menu={menu} setMenu={setMenu}/>
    <Menu menu={menu} setMenu={setMenu}/>
    <div className="sections">
    
    <Intro />
    <Portfolio />
    <Works />
    <Testimonials />
    <Contacts />
    </div>
    </div>
  );
}

export default App;
