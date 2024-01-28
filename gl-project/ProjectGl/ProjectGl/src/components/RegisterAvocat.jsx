import pro from '../img/profil2.svg'
import {useNavigate} from 'react-router-dom';
import {useState, useRef} from "react";
import axios from "axios";
function RegisterAvocat() {
    
    const [data , setData] = useState({
        id : 1,
        firstname : "aaa",
        lastname : "aaa",
        address : "aaa",
        wilaya : "aaa",
        commune : "aaa",
        univ : "aaa",
        diploma : "aaa",
        obtdate : "2000",
        phone : "00000000",
        email : "aaa@gmail.com",
        website : "aaa.com",
        position : [0,0],
        languages : [false,false,false],
        practicearea : [false,false,false],
        image : "aaa",
        cost : 0,
        per : "hour",
        desciptions : [
            {
                id : 1,
                title : "aaa",
                description : "aaa"
            },
            {
                id : 2,
                title : "aaa",
                description : "aaa"
            },
            {
                id : 3,
                title : "aaa",
                description : "aaa"
            }
        ],
        schedue : [
            {id : 1 , day : "sunday" , from : "00:00" , to : "00:00"},
            {id : 2 , day : "monday" , from : "00:00" , to : "00:00"},
            {id : 3 , day : "tuesday" , from : "00:00" , to : "00:00"},
            {id : 4 , day : "wednesday" , from : "00:00" , to : "00:00"},
            {id : 5 , day : "thursday" , from : "00:00" , to : "00:00"},
            {id : 6 , day : "saturday" , from : "00:00" , to : "00:00"},
        ]
    })
    const [position, setPosition] = useState(data.position);
    const [practicearea, setPracticearea] = useState(data.practicearea); //[arab,english,frnch]
    const [image, setImage] = useState(data.image);
    const [wilayaselected, setWilayaselected] = useState(true);
    const [commune, setCommune] = useState(data.commune);
    const [wilaya, setWilaya] = useState(data.wilaya);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [year, setYear] = useState(data.obtdate);
    const [timeSlots,setTimeSlots] = useState([])
    const [bio,setBio] = useState([])
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState('')
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [specialization,setSpecialization] = useState("")
    const token = localStorage.getItem("token")
    const handlePost = async ()=>{
        const form = {
            // "first_name":firstName,
            // "last_name":lastName,
            specialization: specialization,
            phone_number: phone,
            bio: bio,
            language: 'fr',
            address:{
                street: address,
                city: commune,
                state: wilaya,
                zip_code: "000000",
                country: "Algeria"
            },
            "time_slots": timeSlots
        }
        console.log(form)
        await fetch(
            "http://localhost:8000/core/lawyers/", {
                method: "POST",
                withCredentials: true,
                body: JSON.stringify(form),
                headers: {
                    'Authorization': token,
                    "Content-Length": 115640,
                    "Content-Type": "application/json",
                },
                maxContentLength: 2000000,
            }).then((res)=>{
            console.log(res.data)
            }
        ).catch((e)=>{
            console.log(e)
            }
        )
    }


    return (
        <div id="l" className="flex justify-center items-center h-screen relative " >

     <div className="w-full p-5">
     <a className=' f6 text-base absolute top-[2%] left-[93%] cursor-pointer  ' href='' onClick={()=>{navigate('/')}} >retour</a>
          <div className=" h-[80%] w-full flex flex-col items-center gap-4 rounded-[10px] " >
            <h1 className="font-Poppins text-[#3498DB] font-bold text-2xl  mb-2">Creation du compte pour un avocat</h1>
            <form action="" className="flex flex-col gap-8 h-  items-center justify-center w-[80%] ">
            <div className="flex flex-row gap-[6%] w-[80%] items-center">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Phone
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="phone" value={phone} name="phone_number"  onChange={(e) =>{setPhone(e.target.value)}}/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Specialization
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="specialization" onChange={(e) =>{setSpecialization(e.target.value)}} value={specialization} name="specialization"/>
            </div>
                
                <img src={pro}/>
            </div>
                <div className='w-[100%] flex flex-col justify-center items-center gap-3'>
                    <div class="mb-4 w-[50%]">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            wilaya
                        </label>
                        <input  onChange={(e) =>{setWilaya(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="wilaya"  value={wilaya} name="wilaya" />
                    </div>
                    <div class="mb-4 w-[50%]">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        commune
                        </label>
                        <input  onChange={(e) =>{setCommune(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="commune"  value={commune} name="commune" />
                    </div>
                    <div class="mb-4 w-[50%]">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        address
                        </label>
                        <input onChange={(e) =>{setAddress(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="address"  value={address} name="address"/>
                    </div>
                   
                </div>
                <div className='w-[82%] flex flex-col gap-5 '>
                    <div className='flex flex-col gap-2'>
                        <label className='  f66 text-[#25323B] text-base '>experience</label>
                        <textarea placeholder="Message" name="bio" value={bio}
                                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[88%] h-16"
                                  onChange={(e) =>{setBio(e.target.value)}}> </textarea>
                        
                    </div>
                </div>

            </form>
              <button className='bg-[#25323B] text-[#fff] rounded-[13px] w-[10%] h-[2.4rem]' onClick={handlePost}>Register</button>

            </div>
      </div>
     </div>
    );
  }
  
  export default RegisterAvocat;
  