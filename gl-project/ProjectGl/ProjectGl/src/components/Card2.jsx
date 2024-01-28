// import About from "./About";
// import HomeA from "./HomeA";
// import HomeB from "./HomeB";
// import Login from "./Login";
// import Navbar from "./Navbar";
// import Register from "./Register";


import RatingComponent from "./RatingComponent.jsx";
import * as React from "react";

const Card2 =({name,address,rating,categ,exp,img}) =>{
 
   
    return (


        <div className="w-[100%] h-60 bg-white rounded-2xl my-2 flex justify-start items-center">
            <div className="w-40 h-full bg-slate-500 rounded-s-2xl flex flex-row items-center">
                <img src={img} alt="" />
            </div>
            <div className="p-2">
                <h1 className="text-xl text-primary font-semibold">{name}</h1>
                <p>{address}</p>
                <RatingComponent/>
                <p>{categ}</p>
                <p>{exp}</p>
                <p>{rating}</p>

            </div>
        </div>
    );
}

export default Card2;
  