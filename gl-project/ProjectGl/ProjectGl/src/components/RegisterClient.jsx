import React from 'react'
import { useState,useRef } from 'react';
const RegisterClient =() => {
    const [data,setData] = useState({
        age:12,
        gender:"male",
        phone_number:"00232323",
        street:"bejaia",
        state:"bejaia",
        city:"bejaia",
        country:"algerie",
        zip_code:"1111"
    })
    const [position, setPosition] = useState(data.position);
    const [practicearea, setPracticearea] = useState(data.practicearea); //[arab,english,frnch]
    const [image, setImage] = useState(data.image);
    const [commune, setCommune] = useState(data.commune);
    const [wilaya, setWilaya] = useState(data.wilaya);
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const token = localStorage.getItem("token")
   const handlePost = async()=>{
    const form = {
     
        age: parseInt(age),
        phone_number: phone,
        gender:gender,
        address:{
            street: address,
            city: commune,
            state: wilaya,
            zip_code: "000000",
            country: "Algeria"
        }
    }
    console.log(form)
    await fetch(
        "http://localhost:8000/core/clients/", {
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
    <div>
         <div id="l" className="flex justify-center items-center h-screen relative " >

<div className="w-full p-5">
<a className=' f6 text-base absolute top-[2%] left-[93%] cursor-pointer  ' href='' onClick={()=>{navigate('/')}} >retour</a>
     <div className=" h-[80%] w-full flex flex-col items-center gap-4 rounded-[10px] " >
       <h1 className="font-Poppins text-[#3498DB] font-bold text-2xl  mb-2">Creation du compte pour un client</h1>
       <form action="" className="flex flex-col gap-8 h-  items-center justify-center w-[80%] ">
       
           <div className='w-[100%] flex flex-col justify-center items-center gap-3'>
                    <div class="mb-4 w-[50%]">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        phone
                        </label>
                        <input  onChange={(e) =>{setPhone(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="phone"  value={phone} name="wilaya" />
                    </div>
                    <div class="mb-4 w-[50%]">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Age
                        </label>
                        <input  onChange={(e) =>{setAge(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="age"  value={age} name="wilaya" />
                    </div>
                    <div class="mb-4 w-[50%]">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Gender
                        </label>
                        <input  onChange={(e) =>{setGender(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="gender"  value={gender} name="gender" />
                    </div>

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

       </form>
         <button className='bg-[#25323B] text-[#fff] rounded-[13px] w-[10%] h-[2.4rem]' onClick={handlePost}>Register</button>

       </div>
 </div>
</div>
    </div>
  )
}
export default RegisterClient