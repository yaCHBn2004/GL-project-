import React from 'react'
import Example from './Celender'
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import { TimePicker } from 'react-ios-time-picker';
import { useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Rendez() {
    const [selected, setSelected] = useState();
    const params = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState('10:00');
    const [value2, setValue2] = useState('23:00');
    const onChange = (timeValue) => {
        setValue(timeValue);
     }
     const onChange2 = (timeValue) => {
        setValue2(timeValue);
     }
     console.log(selected)
     console.log(value+":00")
     console.log(value2)
     const token = localStorage.getItem("token");
     const last_name = localStorage.getItem("last_name") 
     const first_name = localStorage.getItem("first_name") 
     const email = localStorage.getItem("email") 
     const sendAppointment = async() =>{
        const verifyToken = async (url) => {
            try {
              
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
                "day":"sunday",
                "start_time":`${value}:00`,
                "end_time":`${value2}:00`,
                "last_name":last_name,
                "first_name":first_name,
                "phone_number":email
            }
            console.log(form)
            fetch(
                `http://localhost:8000/core/lawyer-search/${params.id}/appointments/`,
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
            //  navigate(0)
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
        <h3 className='font-bold text-3xl mt-36 text-center'>Prendre un rendez-vous</h3>
        <div className='flex flex-row p-9 gap-4 items-center bg-[#E0E2E9] justify-around rounded-md'>
            <div>
                <Example selected={selected} setSelected={setSelected}/>
            </div>
            <div>
            <div>
            <div className='flex flex-col gap-2'>
                <h3>start-time</h3>
                <TimePicker onChange={onChange} value={value} />
            </div>
            <div className='flex flex-col gap-2'>
                <h3>end-time</h3>
                <TimePicker onChange={onChange2} value={value2} />
            </div>
            </div>
            </div>
        </div>
        <div className='flex justify-center mt-3'>
        <button className='bg-[#E0E2E9] py-2 px-5 font-semibold text-2xl rounded-md' onClick={sendAppointment}>Send</button>
        </div>
    </div>
  )
}
