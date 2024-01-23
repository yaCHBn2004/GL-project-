// import About from "./About";
// import HomeA from "./HomeA";
// import HomeB from "./HomeB";
// import Login from "./Login";
// import Navbar from "./Navbar";
// import Register from "./Register";

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


function Card2(props: { img2: string | undefined; name1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; img3: string | undefined; spec1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
 
   
    return (

     
     <div className="  shadow-[#000000] w-[70%] relative h-[18vh] bg-[#E0E2E9] flex flex-row items-center rounded-[15px]">
       <div className="flex flex-row gap-3 h-full items-center justify-center w-4/5"> <img src={props.img2} className="top-[12%]  left-[1%] w-[10%] h-[60%] max-h-[200px]"/>
             <div className="h-[50%] flex flex-col w-[80%]">
            <p className="   left-[37%] top-[12%] f8 text-xl text-[#2C2C2C] ">{props.name1}</p>
            <img src={props.img3} className=" h-1/6  w-[10%] "/>

           <p className="flex flex-row gap-2    left-[37%] top-[40%]"> <p className="f8 text-base text-[#808F99]">Specialité:</p><p className="f7 text-base text-[#3498DB]">{props.spec1}</p></p>
          </div> 
          </div>
          <button className="rounded  mt-14  text-[#25323B] w-[7rem] bg-[#fff] left-[70%] top-[80%] p-[0.2%] f8 text-base"><p className="mx-[2%]">lire la suite </p> </button>
        
     </div>
    );
  }
  
  export default Card2;
  