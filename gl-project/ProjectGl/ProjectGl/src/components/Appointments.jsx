import React, { useEffect } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import "./Appointments.css"
const Appointments = () => {
    const navigate = useNavigate()
    const params = useParams() 
    const token = localStorage.getItem('token')
    const [appointments,setAppointments] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const getAppointments = async() =>{
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
                    const res1 = await axios({
                       url: "http://localhost:8000/core/lawyers/",
                       method: "get",
                       headers: {
                        'Authorization': token,
                    },
                    })
                    console.log(res1)
                    console.log(res1.data[0])
                    console.log(res1.data[0].id)
                    return res1.data[0].id
      
                } else {
                  console.error("Verification failed");
                  return false
                }
              }
            } catch (error) {
              console.error("Error during token verification", error);
            }
          }
          const id = await verifyToken("http://localhost:8000/core/verify-lawyer")
          console.log("fetched");
          console.log(id);
          if (id){
                axios(
                    {url:`http://localhost:8000/core/lawyers/${id}/appointments/`,
                    method:"get",
                    headers: {
                        'Authorization': token,
                    },
                },
                ).then((res)=>{
                    console.log(res.data)
                    setAppointments(res.data)
                    setIsLoading(false)
                // navigate(0)
                }).catch(e=>{
                console.log(e)
                })
          }
      
    }
    useEffect(() =>{
        getAppointments()
    },[])
  return isLoading?<div className='flex mx-auto w-full justify-center'><p className='text-4xl font-black'>Loading...</p></div>:(

    <div>
        <div className='text-2xl font-bold text-center bg-slate-500 flex flex-row gap-4 text-white justify-around'>
           <a href={`http://localhost:3000/lawyers/appointments`}><button>Appointments</button></a>
           <a href={`http://localhost:3000/lawyers`}><button>Edit Profile</button></a>
        </div>
        <h2 className='text-3xl font-bold text-center py-3'>Appointment</h2>
        <div className='flex flex-col items-center'>
            {appointments.map((appointment) =>(
                <div className="appoint flex  ">
                <div className="main  flex-[50] ">
                     <h1>Client : <p>{appointment.first_name} {appointment.last_name}</p></h1>
                     <div className="btn">
                        <button className="refuse" >refuse</button>
                        <button className="accept" >accept</button>
                     </div>
                </div>
                <div className="time flex-[50]">
                     <h2>  date : <p>{appointment.day}</p>  </h2>
                     <h2>  start time : <p>{appointment.start_time}</p> </h2>
                     <h2>  end time  : <p>{appointment.end_time}</p> </h2>
                </div>
         </div>
            ))}
        </div>
    </div>
  )
}
export default Appointments
