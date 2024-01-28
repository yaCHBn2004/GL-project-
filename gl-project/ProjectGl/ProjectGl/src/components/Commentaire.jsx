import Navbar from "./Navbar";
import pic from "../img/photo.svg";
import point from "../img/etoile.svg";
import {useEffect, useState} from "react";
import Card3 from "./Card3.jsx";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";



const  Commentaire = ({reviews,id}) => {

  const navigate = useNavigate();


  const [rating,setRating] = useState(0)
  const [comment,setText] = useState("")

  const [message,setMessage] = useState("")
  const token = localStorage.getItem("token")
  const addReview = async()=>{
    const verifyToken = async (url) => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
          const res = await axios.get(url, {
            params: {token},
            withCredentials: true,
          });

          if (res.data.success) {
            console.log(res.data.message);
            return true

          } else {
            console.error("Verification failed");
            return false
          }
        }
      } catch (error) {
        console.error("Error during token verification", error);
      }
    }

    const isClient = await verifyToken("http://localhost:8000/core/verify-client")
    if (isClient){
      const form = {
        rating:parseInt(rating),
        comment:comment,
        
      }
      console.log(form)
      fetch(
          `http://localhost:8000/core/lawyer-search/${id}/reviews/`,
          {
            method:"POST",
            withCredentials: true,
            body:JSON.stringify(form),
            headers: {
              'Authorization': token,
              "Content-Length": 115640,
              "Content-Type": "application/json",
            },
          }
      ).then((res)=>{
        console.log(res)
        navigate(0)
      }).catch(e=>{
        console.log(e)
      })
    }else{
      console.log("not client")
    }
  }
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
              id={id}
            />
          </div>


          <div className="flex flex-col gap-10 p-[2%] h-[20vh]  w-full">
            <div className="flex flex-col gap-2 relative">
              <label className="  f66 text-[#25323B] text-sm ">
                {reviews?.length} commentaires
              </label>
              <textarea
                placeholder="Ajouter Commentaire"
                className="p-2 text-base f10 outline-none focus:outline-none text-[#111111] bg-transparent w-full h-10 border-b-[1px] border-[#808F99] mb-3"
                onChange={(e)=>{setText(e.target.value)}}
              >
                {" "}
              </textarea>
                <input type="number" onChange={(e)=>{setRating(e.target.value)}}/>
              <button
                onClick={addReview}
                className="rounded-[10px] f3 h-[55%] w-[21%] text-[#556773] bg-[#DDE2E5]  absolute top-[100%] left-[80%] "
              >
                Ajouter
              </button>
            </div>

            <div>
                {reviews?.map((review) => (
                    <div className=" border-b-[1px] border-[#808F99] mb-2 p-1">
                        <p className="f66 text-[#25323B] text-xl mb-1">{review.client_name}</p>
                        <p className="text-[#808F99] font-bold mb-1">{review.created_at}</p>
                        <p className="text-[#556773] font-semibold mb-1 ">{review.comment}</p>
                    </div>
                ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commentaire;
