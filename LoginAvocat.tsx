import google from "../img/google.svg";
import { useNavigate } from "react-router-dom";
const LoginAvocat = () => {
  const navigate = useNavigate();

  return (
    <div id="l" className="flex justify-center items-center h-screen relative ">
      <a
        className=" f6 text-base absolute top-[2%] left-[93%] cursor-pointer "
        onClick={() => {
          navigate("/");
        }}
      >
        retour
      </a>
      <div className="bg-[#E0E2E9] h-[80%] w-[65%] flex flex-col items-center gap-4 rounded-[10px] ">
        <h1 className="font-Poppins text-[#3498DB] font-bold text-2xl mt-12 mb-2">
          LOGIN TO YOUR ACCOUNT
        </h1>
        <form action="" className="flex flex-col  items-center w-[50%] ">
          <div className="flex flex-col  justify-between w-full">
            <input
              type="email"
              placeholder="User name or Email"
              className="text-sm  text-center p-3 bg-transparent flex justify-center items-center mb-5 rounded-[10px]  font-Poppins text-[#2C2C2C] border border-black/10 outline-none focus:outline-none "
            />
            <input
              type="password"
              placeholder="Password"
              className=" text-sm text-center p-3 bg-transparent flex justify-center items-center rounded-[10px] border font-Poppins text-[#2C2C2C] border-black/10 outline-none focus:outline-none"
            />
          </div>
        </form>
        <div className="flex flex-row gap-[5%] items-center justify-center">
          {" "}
          <button
            type="submit"
            className="font-Poppins text-[#FFFFFF] bg-[#2C2C2C] p-2 font-bold rounded-[10px] mt-9 mb-6 w-36"
          >
            Login
          </button>
          <button
            type="submit"
            className="font-Poppins text-[#2C2C2C] bg-[#ffffff] p-2 font-bold rounded-[10px] mt-9 mb-6 w-36 flex flex-row gap-3 justify-center"
          >
            <img src={google} className="w-[25px]" />
            <p>Google</p>
          </button>
        </div>
        <div className="flex flex-row gap-[2%] w-[60%] justify-center items-center">
          {" "}
          <div className=" h-[2px] bg-[#2C2C2C]  w-[35%] "></div>
          <p className="f6">or </p>{" "}
          <div className=" h-[2px] bg-[#2C2C2C]  w-[35%] "></div>
        </div>
        <div className="font-Poppins text-black mt-1">
          <span>You don't have an account ?</span>
        </div>
        <span
          onClick={() => {
            navigate("/RegisterAvocat");
          }}
          className="font-Poppins text-[#2C2C2C] font-semibold underline underline-offset-2 cursor-pointer mt-2"
        >
          Sign up
        </span>
      </div>
    </div>
  );
};

export default LoginAvocat;
