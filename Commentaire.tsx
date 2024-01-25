import Navbar from "./Navbar";
import pic from "../img/photo.svg";
import point from "../img/etoile.svg";
import M from "../img/map.svg";
import Card3 from "./Card3";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function Commentaire(_props: any) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="w-full relative p-[6%]  justify-center ">
        <div className="flex flex-col gap-10 my-5 p-5  items-center   ">
          <div className="w-full">
            <Card3
              name1="Meriem Benayache"
              spec1="spécialité : Avocat en propriété intellectuelle (PI ) ... "
              img2={pic}
              img3={point}
            />
          </div>
          <div className=" w-[60%] h-10   ">
            <button
              onClick={() => {
                navigate("/ProfilAvocat");
              }}
              className=" rounded-[10px] f3 h-[100%] w-[50%] text-[#111111] bg-[#DDE2E5]  "
            >
              {" "}
              information
            </button>

            <button
              onClick={() => {
                navigate("/Commentaire");
              }}
              className="rounded-[10px] f3 h-[100%] w-[50%]  text-white bg-[#3498DB] "
            >
              commentaires
            </button>
          </div>

          <div className="flex flex-col gap-10 p-[2%] h-[20vh]  w-full">
            <div className="flex flex-col gap-2 relative">
              <label className="  f66 text-[#25323B] text-sm ">
                45 commentaires
              </label>
              <textarea
                placeholder="Ajouter Commentaire"
                className="p-2 text-base f10 outline-none focus:outline-none text-[#111111] bg-transparent w-full h-10 border-b-[1px] border-[#808F99] mb-3"
              >
                {" "}
              </textarea>
              <button
                onClick={() => {
                  navigate("/LoginAvocat");
                }}
                className="rounded-[10px] f3 h-[55%] w-[21%] text-[#556773] bg-[#DDE2E5]  absolute top-[100%] left-[80%] "
              >
                Ajouter
              </button>
            </div>

            <div>
                <div className=" border-b-[1px] border-[#808F99] mb-2 p-1">
                    <p className="f66 text-[#25323B] text-xl mb-1">Meriem Benayache</p>
                    <p className="text-[#808F99] font-bold mb-1">Dec 30,2023</p>
                    <p className="text-[#556773] font-semibold mb-1 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industrrey. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                </div>
                <div className=" border-b-[1px] border-[#808F99] mb-2 p-1">
                    <p className="f66 text-[#25323B] text-xl mb-1">Meriem Benayache</p>
                    <p className="text-[#808F99] font-bold mb-1">Dec 30,2023</p>
                    <p className="text-[#556773] font-semibold mb-1 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industrrey. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                </div>
                <div className=" border-b-[1px] border-[#808F99] mb-2 p-1">
                    <p className="f66 text-[#25323B] text-xl mb-1">Meriem Benayache</p>
                    <p className="text-[#808F99] font-bold mb-1">Dec 30,2023</p>
                    <p className="text-[#556773] font-semibold mb-1 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industrrey. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                </div>
                <div className=" border-b-[1px] border-[#808F99] mb-2 p-1">
                    <p className="f66 text-[#25323B] text-xl mb-1">Meriem Benayache</p>
                    <p className="text-[#808F99] font-bold mb-1">Dec 30,2023</p>
                    <p className="text-[#556773] font-semibold mb-1 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industrrey. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                </div>
                <div className=" border-b-[1px] border-[#808F99] mb-2 p-1">
                    <p className="f66 text-[#25323B] text-xl mb-1">Meriem Benayache</p>
                    <p className="text-[#808F99] font-bold mb-1">Dec 30,2023</p>
                    <p className="text-[#556773] font-semibold mb-1 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industrrey. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commentaire;
