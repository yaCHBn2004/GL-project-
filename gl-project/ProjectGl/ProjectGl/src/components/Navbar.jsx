import logo from "../img/logo.svg";
import search from "../img/search.svg";
import { useNavigate } from "react-router-dom";



import  { useState } from 'react';
import "../index.css";



const  Navbar =() =>{
  const navigate = useNavigate();


  const [isExpanded, setExpanded] = useState(false);



  return (
    <div className="relative h-[1px] w-full z-50 ">
      <div className=" flex flex-row justify-between fixed h-[8vh] w-full bg-[#31404A] opacity-95 p-[1%]  /*backdrop ${isExpanded ? 'blurred' : ''}*/ ">
        <img src={logo} className="w-[5%]" />
        <div className="f1 flex flex-row justify-between text-[#FFFFFF] w-[50%]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Avocats</a>
          <a href="">Annuaire</a>
          <a href="">Help</a>
          <a href="">Contact</a>
        </div>
        <button
          onClick={() => {
            console.log('Before toggle:', isExpanded);
            navigate("/Search");

            setExpanded(!isExpanded); //  ceci c pour changer l'état d'expansion
            console.log('After toggle:', !isExpanded);

          }}
          className="w-[2%] ${isExpanded ? 'hover:blur focus:blur' : ''}"
        >
          <img src={search} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
