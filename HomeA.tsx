import imghome from "../img/imghome.svg";
// import Login from "./Login";
// import Register from "./Register";
import { useNavigate } from "react-router-dom";
function HomeA() {
  const navigate = useNavigate();

  return (
    <div className="w-full relative p-[6%] flex flex-row-reverse justify-center  ">
      <img
        className="w-[35%] max-h-[300px] justify-center h-[40vh]"
        src={imghome}
      />
      <div className="flex flex-col   w-[80vh] gap-[15%]  ">
        <div>
          <p className="f6 text-5xl text-[#00253D] ">Bienvenu sur</p>
          <p className="f2 flex flex-row   ">
            <p className="text-[#3498DB]">DZ</p>
            <p className="text-[#00253D]">-Mouhami </p>
          </p>
        </div>
        <div className=" my-[1vh] h-[15%] flex flex-row justify-around w-[70%]">
          <button
            onClick={() => {
              navigate("/LoginAvocat");
            }}
            className="rounded-[5px] f3 h-[100%] w-[50%] text-[#556773] bg-[#DDE2E5] "
          >
            je suis un avocat
          </button>

          <button
            onClick={() => {
              navigate("/Login");
            }}
            className=" rounded-[5px] f3 h-[100%] w-[40%] text-[#000000] bg-[#3498DB] "
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
