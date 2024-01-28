// import About from "./About";
// import HomeA from "./HomeA";
// import HomeB from "./HomeB";
// import Login from "./Login";
// import Navbar from "./Navbar";
// import Register from "./Register";

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


function Card(props: { img: string | undefined; des: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; des1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
 
   
    return (

     <div className="w-full shadow shadow-[#000000]  relative h-full flex flex-col">
        <img src={props.img} className=" left-[1%] w-full h-[70%] max-h-[200px]"/>
       <div className="bg-[#DDE2E5] h-[38%]">
            <p className="   left-[37%] top-[24%] f7 text-base text-[#3498DB] ">{props.des}</p>
            <p className="   left-[37%] top-[24%] f7 text-xs text-[#fff] ">{props.des1}</p>

            </div>
        
        
     </div>
    );
  }
  
  export default Card;
  