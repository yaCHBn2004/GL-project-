// import About from "./About";
// import About2 from "./About2";
// import HomeA from "./HomeA";
// import HomeB from "./HomeB";
// import Login from "./Login";
// import Navbar from "./Navbar";
import h from "../img/logo.svg";

function Footer() {
  return (
    <div className="relative  w-full bg-[#25323B] h-[50vh] flex flex-row">
      <div className="relative gap-[7%] h-[90%] w-[60%]">
        <div className="flex flex-row absolute top-[15%] left-[10%] ">
          <img src={h} />
          <p className="f9 text-[#fff] text-4xl">-Mouhami</p>
        </div>
        <div className="f11 text-lg text-[#fff] flex flex-col gap-2 absolute left-[20%] top-[30%]  ">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Avocats</a>
          <a href="">Annuaire</a>
          <a href="">Help</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="w-[30%] h-full p-2 flex flex-col g-3   ">
        <p className="my-[7%] f9 text-3xl text-[#fff]">Contact Us </p>
        <form className="h-[65%] flex flex-col justify-between">
          <input
            placeholder="Enter your Email ID"
            type="email"
            id="email"
            className="p-1 f10 rounded bg-[#E0E2E9] text-[#808F99] w-[88%] h-[18%]"
          />
          <textarea
            placeholder="Message"
            className="p-2 f10 rounded text-[#808F99] bg-[#E0E2E9] w-[88%] h-[75%]"
          >
            {" "}
          </textarea>
        </form>
      </div>
    </div>
  );
}

export default Footer;
