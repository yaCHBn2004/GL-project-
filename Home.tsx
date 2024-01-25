
import Navbar from "./Navbar";
import HomeA from "./HomeA";
import HomeB from "./HomeB";
import About from "./About";
import About2 from "./About2";
import BG from "./BG";
import Footer from "./Footer";
import "../index.css";
import Navbar2 from "./Navbar2";


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