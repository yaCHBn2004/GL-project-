import Navbar from "./Navbar";
import pic from "../img/photo.svg";
import point from "../img/etoile.svg";
import M from "../img/map.svg";
import Card3 from "./Card3.jsx";

import { useNavigate,useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Commentaire from "./Commentaire.jsx";
import {data} from "autoprefixer";


function ProfilAvocat() {
  const navigate = useNavigate();
  const params = useParams()
  const [Lawyer, setLawyer] = useState({})
  const [reviews, setReviews] = useState([])
  console.log(params.id)
  useEffect(() =>{
    axios({
      method: "get",
      url: `http://localhost:8000/core/lawyer-search/${params.id}/`
    }).then(
        (res) =>{
          console.log(res.data)
          setLawyer(res.data)
        }
    )
  },[])
  useEffect(() =>{
    axios({
      method: "get",
      url: `http://localhost:8000/core/lawyer-search/${params.id}/reviews/`
    }).then(
        (res) =>{
          console.log(res.data)
          setReviews(res.data)
        }
    )
  },[])
  
  return (
    <div>
      <Navbar />
      <div className="w-full relative p-[6%]  justify-center">
        <div className="flex flex-col gap-10 my-5 p-5  items-center   ">
          <div className="w-full">
            <Card3
              name1={`${Lawyer.first_name} ${Lawyer.last_name}`}
              spec1={Lawyer.specialization}
              img2={pic}
              img3={point}
              id={params.id}
            />
          </div>
          <div className=" w-[60%] h-10   ">
            <button
              
              className=" rounded-[10px] f3 h-[100%] w-[50%] text-white bg-[#3498DB] "
            >
              {" "}
              information
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
                  {Lawyer.specialization}
                </p>
              </div>
              <div className="flex gap-2 ml-10 ">
                <p className="f66 text-[#25323B] text-base">Experience:</p>
                <p className="text-[#556773] font-semibold">
                  {" "}
                  {Lawyer.bio}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-10">
              <div className="flex flex-col gap-3">
                <p className="f66 text-[#25323B] text-xl mb-2">Contact : </p>
                <div className="flex gap-2 ml-10 ">
                  <p className="f66 text-[#25323B] text-base">Num Tel : {Lawyer.phone_number}</p>
                  <p className="font-semibold">06 87 56 99 23</p>
                </div>
                <div className="flex gap-2 ml-10 ">
                  <p className="f66 text-[#25323B] text-base">PLACE : </p>
                  <p className="font-semibold">`{Lawyer?.address?.street} {Lawyer?.address?.city}  {Lawyer?.address?.state}`</p>
                </div>
              </div>
              <img src={M} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Commentaire reviews={reviews} id={params.id}/>
    </div>
  );
}

export default ProfilAvocat;
