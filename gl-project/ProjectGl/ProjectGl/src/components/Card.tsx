import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Card(props: { img: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; img1: string | undefined; spec: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
 
   
    return (

     <div className=" relative h-full flex flex-row items-center">
        <img src={props.img} className="top-[12%] absolute left-[1%] w-[40%] h-[50%] max-h-[200px]"/>
       
            <p className="  absolute  left-[37%] top-[12%] f8 text-2xl text-[#2C2C2C] ">{props.name}</p>
            <img src={props.img1} className="absolute left-[37%] top-[32%]"/>

           <p className="flex flex-row gap-2  absolute  left-[37%] top-[40%]"> <p className="f8 text-lg text-[#808F99]">Specialité:</p><p className="f7 text-lg text-[#3498DB]">{props.spec}</p></p>
           <button className="rounded w-[7rem] bg-slate-500 absolute left-[70%] top-[80%] p-[0.2%] f8 text-base"><p className="mx-[2%]">lire la suite </p> </button>
        
     </div>
    );
  }
  
  export default Card;