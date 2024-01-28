import { useState, useEffect } from "react"
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
const EditProfile = () =>{
    const navigate = useNavigate();
    const params = useParams()
    const token = localStorage.getItem("token")
    const [lawyer,setLawyer] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [practice,setPractice] = useState("")
    const [commune, setCommune] = useState(lawyer?.address?.city);
    const [wilaya, setWilaya] = useState(lawyer?.address?.state);
    const [street, setStreet] = useState(lawyer?.address?.street);
    const [age, setAge] = useState(lawyer?.age);
    const [firstName,setFirstName] = useState(lawyer?.first_name);
    const [lasttName,setLastName] = useState(lawyer?.last_name);
    const [specialization,setSpecialization] = useState(lawyer?.specialization)
    const [phoneNumber, setPhoneNumber] = useState(lawyer?.phone_number)
    
    const handlePost = async ()=>{
        const form = {
            specialization:specialization,
            age: age,
            phone_number:phoneNumber,
            language:'fr',
            address:{
            city:commune,
            street:street, 
            state:wilaya,
            zip_code:"1111",
            country:"Algeria",
            },
            time_slots:[
                {day: 'saturday', start_time: '15:00:00', end_time: '17:00:00'},
                { day: 'sunday', start_time: '17:00:00', end_time: '17:00:00'},
                { day: 'monday', start_time: '15:00:00', end_time: '14:00:00'},
                {day: 'tuesday', start_time: '13:00:00', end_time: '12:00:00'},
                {day: 'wednesday', start_time: '15:00:00', end_time: '20:00:00'},
            ],
            
           }
        console.log(form)
        await fetch(
            "http://localhost:8000/core/lawyers/", {
                method: "PUT",
                withCredentials: true,
                body: JSON.stringify(form),
                headers: {
                    'Authorization': token,
                    "Content-Length": 115640,
                    "Content-Type": "application/json",
                },
                maxContentLength: 2000000,
            }).then((res)=>{
                console.log(res)
                // navigate("/")
            }
        ).catch((e)=>{
                console.log(e)
            }
        )
    }
    const verifyTokenLaywer = async (url) => {
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
    useEffect(()=>{
        const checkLawyer = async()=>{
            const isLawyer = await verifyTokenLaywer("http://localhost:8000/core/verify-lawyer")
            if (isLawyer){
                axios(
                    {
                        method:"get",
                        url:"http://localhost:8000/core/lawyers/",
                        headers:{"Authorization":token},
                    }
                ).then((res=>{
                    console.log(res.data[0])
                    // setIsLoading(false)
                    setLawyer(res.data[0])
                    console.log(lawyer)
                    // setAddress(lawyer.address.street)
                    if(lawyer){
                    //  setForm(lawyer)
                    }
                    // setPractice(lawyer.specialization)

                })).catch((e)=>{
                    console.log(e)
                })
            }else{
                console.log("nta hmar")
                navigate('/')
            }
        }

        checkLawyer()
    },[])
    const handleSpecialization = (e) =>{
        setSpecialization(e.target.value)
        
       
    }
    return(
        <div className=" h-[100vh]">
            <div className='text-2xl font-bold text-center bg-slate-500 flex flex-row gap-4 text-white justify-around'>
           <a href={`http://localhost:3000/lawyers/appointments`}><button>Appointments</button></a>
           <a href={`http://localhost:3000/lawyers`}><button>Edit Profile</button></a>
        </div>
          <h3 className="text-3xl font-bold text-center py-3">Edit Profile</h3>  

<form class=" mx-auto bore bg-gray-700 py-4 px-20 rounded-md w-[80%] ">
  
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={lawyer?.first_name}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={lawyer?.last_name}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
              specialization
              </label>
              <div className="mt-2">
                <input
                  type="text"
    
                  name="specialization"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={handleSpecialization}
                  placeholder={lawyer?.specialization}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
              phone number
              </label>
              <div className="mt-2">
                <input
                  type="text"
    
                  name="phone_number"
                  id="phone_number"
                  autoComplete="given-name"
                    value={lawyer?.phone_number}
                  
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
              city
              </label>
              <div className="mt-2">
                <input
                  type="text"
    
                  name="city"
                  id="phone_number"
                  autoComplete="given-name"
                  value={lawyer?.address?.city}
                  
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
              state
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  
                  name="phone_number"
                  id="phone_number"
                  autoComplete="given-name"
                  value={lawyer?.address?.state}
                  
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>
        <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
              phone number
              </label>
              <div className="mt-2">
                <input
                  type="text"
    
                  name="phone_number"
                  id="phone_number"
                  autoComplete="given-name"
                    value={lawyer?.phone_number}
                  
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>
  <div className="mt-5">
  <table className="text-white w-full">
  <thead>
    <tr>
      <th>Day</th>
      <th>Start Time</th>
      <th>End Time</th>
    </tr>
  </thead>
  <tbody className="text-center">
    {lawyer?.time_slots?.map((day) => (
      <tr key={day.id}>
        <td className=" text-right p-1 font-semibold">{day.day}</td>
        <td className=" text-right p-1">
          <input
            value={day.start_time}
            type="text"
            name={`start_time_${day.id}`}
            className="text-white bg-transparent border-0 border-b-2 border-gray-300"
            placeholder={day.start_time}
            required
          />
        </td>
        <td className=" text-right p-1">
          <input
            value={day.end_time}
            type="text"
            name={`end_time_${day.id}`}
            className="text-white bg-transparent border-0 border-b-2 border-gray-300"
            placeholder={day.end_time}
            required
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>
  </div>
  
  <div className="flex flex-row justify-center p-4"><button type="submit" class="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center " onClick={handlePost}>Submit</button></div>
</form>

        </div>
    )
}
export default EditProfile;