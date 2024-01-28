
import Navbar from "./Navbar.jsx";
import HomeA from "./HomeA.jsx";
import HomeB from "./HomeB.jsx";
import About from "./About.jsx";
import About2 from "./About2.jsx";
import BG from "./BG.jsx";
import Footer from "./Footer.jsx";
import "../index.css";
import Navbar2 from "./Navbar2.jsx";


function Home() {
 
   
    return (

     <div>
      <Navbar/>
      <HomeA/>
      <HomeB/>
      <About/>
      <About2/>
      <BG/>
      <Footer/>
      
     </div>
    );
  }
  
  export default Home;