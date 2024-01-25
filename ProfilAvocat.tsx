import Navbar from "./Navbar";
import pic from "../img/photo.svg";
import point from "../img/etoile.svg";
import M from "../img/map.svg";
import Card3 from "./Card3";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function ProfilAvocat(_props: any) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="w-full relative p-[6%]  justify-center">
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
              className=" rounded-[10px] f3 h-[100%] w-[50%] text-white bg-[#3498DB] "
            >
              {" "}
              information
            </button>

            <button
              onClick={() => {
                navigate("/Commentaire");
              }}
              className="rounded-[10px] f3 h-[100%] w-[50%] text-[#111111] bg-[#DDE2E5] "
            >
              commentaires
            </button>
          </div>

          <div className="flex flex-col gap-10 p-[2%]">
            <div className="flex flex-col gap-3">
              <p className="f66 text-[#25323B] text-xl mb-3">
                Inforamtion du domaine:{" "}
              </p>
              <div className="flex gap-2 ml-10 ">
                <p className="f66 text-[#25323B] text-base">Spécialité : </p>
                <p className="text-[#556773] font-semibold">
                  Avocat en planification successorale Avocat spécialisé en
                  dommages corporels
                </p>
              </div>
              <div className="flex gap-2 ml-10 ">
                <p className="f66 text-[#25323B] text-base">Experience:</p>
                <p className="text-[#556773] font-semibold">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-3">
                <p className="f66 text-[#25323B] text-xl mb-2">Contact : </p>
                <div className="flex gap-2 ml-10 ">
                  <p className="f66 text-[#25323B] text-base">Num Tel : </p>
                  <p className="font-semibold">06 87 56 99 23</p>
                </div>
                <div className="flex gap-2 ml-10 ">
                  <p className="f66 text-[#25323B] text-base">PLACE : </p>
                  <p className="font-semibold">rue pricipale , bab eloued , alger</p>
                </div>
              </div>
              <img src={M} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilAvocat;
