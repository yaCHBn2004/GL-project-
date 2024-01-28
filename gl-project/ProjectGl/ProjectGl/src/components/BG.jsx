// import About from "./About";
// import About2 from "./About2";
// import HomeA from "./HomeA";
// import HomeB from "./HomeB";
// import Login from "./Login";
// import Navbar from "./Navbar";
import l from "../img/bg.svg";


const  BG =() =>{
 
   
    return (

     <div className="relative w-full h-auto ">
        <img src={l}  className="w-full relative "/>
        <div className=" z-20 absolute flex flex-col top-[20%] gap-3 w-[90%] left-[8%] ">
           <p className="flex flex-row gap-2 text-3xl "> <p className="text-[#fff] f6">Explorez notre site annuaire dédié</p><p className="text-[#3498DB] f8"> aux avocats en Algérie,</p></p>
            <p className="f33 text-[#fff] text-2xl ">
un outil essentiel pour vous connecter avec des professionnels du droit qualifiés. Trouvez facilement des avocats spécialisés dans divers domaines juridiques, de la famille au droit des affaires.</p>
            <p className="f33 text-[#fff] text-base"> Notre plateforme vous offre des profils détaillés, des informations de contact, et la possibilité de filtrer les résultats en fonction de vos besoins spécifiques. Simplifiez votre recherche d'experts juridiques en utilisant notre annuaire, un compagnon fiable pour vos préoccupations légales en Algérie</p>
        </div>
     </div>
    );
  }
  
  export default BG;
  