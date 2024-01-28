// import Login from "./Login";
// import Register from "./Register";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo1.svg'
function HomeA() {
  const navigate = useNavigate();

  return (
    <div className="w-full relative p-[6%] flex flex-row-reverse items-center justify-center bgg h-[100vh] ">
     
      <div className="flex flex-col  h-[60vh] w-[80vh] gap-[15%]  ">
        <div className="flex flex-col justify-center items-center  " >
          <p className="f6 text-7xl my-6 text-[#00253D] ">Bienvenu sur</p>
          <img src={logo} className="w-[70%]" />

         
        </div>
        <div className=" my-[1vh] h-[16%] flex flex-row  justify-around w-[90%]">
          <button
            onClick={() => {
              navigate("/LoginAvocat");
            }}
            className="rounded-[8px] f3 h-[100%] w-[40%] text-[#556773] bg-[#DDE2E5] "
          >
           
            je suis un avocat
          </button>

          <button
            onClick={() => {
              navigate("/Login");
            }}
            className=" rounded-[8px] f3 h-[100%] w-[30%] text-[#000000] bg-[#3498DB] "
          >
            {" "}
            Commencer
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeA;
