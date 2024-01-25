import pro from '../img/profil2.svg'
import { useNavigate } from 'react-router-dom';

function RegisterAvocat() {
    
      const navigate=useNavigate()
   
    return (
        <div id="l" className="flex justify-center items-center h-screen relative " >

     <div className="w-full p-5">
     <a className=' f6 text-base absolute top-[2%] left-[93%] cursor-pointer  ' href='' onClick={()=>{navigate('/')}} >retour</a>
          <div className=" h-[80%] w-full flex flex-col items-center gap-4 rounded-[10px] " >
            <h1 className="font-Poppins text-[#3498DB] font-bold text-2xl  mb-2">Creation du compte pour un avocat</h1>
            <form action="" className="flex flex-col gap-8 h-  items-center justify-center w-[80%] ">
            <div className="flex flex-row gap-[6%] w-[80%]">
            <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-row  gap-[2%] w-full">
               <input type="text"  placeholder="nom" className="bg-[#808F99] text-sm text-center p-3 bg-transparent flex justify-center items-center rounded-[10px] border font-Poppins text-[#2C2C2C] border-black/10 outline-none focus:outline-none w-[40%] h-9  "/>
               <input type="text"  placeholder="Prenom" className="bg-[#808F99] text-sm text-center p-3 bg-transparent flex justify-center items-center rounded-[10px] border font-Poppins text-[#2C2C2C] border-black/10 outline-none focus:outline-none w-[40%]  h-9"/>
              </div>
            
                <input type="email"  placeholder="email" className="bg-[#808F99] text-sm text-center p-3 bg-transparent flex justify-center items-center rounded-[10px] border font-Poppins text-[#2C2C2C] border-black/10 outline-none focus:outline-none w-[82%] h-9 "/>
                <input type="password"  placeholder="Password" className="bg-[#808F99] text-sm text-center p-3 bg-transparent flex justify-center items-center rounded-[10px] border font-Poppins text-[#2C2C2C] border-black/10 outline-none focus:outline-none w-[82%] h-9 "/>

            </div>
            <img src={pro}  />
            </div>
            <div className='w-[80%] flex flex-col justify-center items-center gap-3'>
               
               <div className='w-full'> 
               <div className='w-[60%] flex flex-row gap-3 items-center '>
                    <label className=' w-[12em] f66 text-[#25323B] text-base '>numero de telephone   : </label>
                    <input type="text"  placeholder="nom" className="bg-[#808F99] text-sm text-center p-3 bg-transparent flex justify-center items-center rounded-[10px] border font-Poppins text-[#2C2C2C] border-black/10 outline-none focus:outline-none w-[48%] h-9 "/>
                </div>
               </div>
                <div className='w-full flex flex-row gap-2 items-center justify-between '>
                    <div className='w-[60%] flex flex-row items-center gap-3'>
                    <label className='w-[12em] f66 text-[#25323B] text-base '>Place de travail :  </label>
                    <input type="text"  placeholder="nom" className="bg-[#808F99] text-sm text-center p-3 bg-transparent flex justify-center items-center rounded-[10px] border font-Poppins text-[#2C2C2C] border-black/10 outline-none focus:outline-none w-[48%] h-9 "/> 
                    </div>
                     <div className='w-[32%] flex flex-row gap-3 '>
                    <button className='bg-[#25323B] text-[#fff] rounded-[13px] w-[43%] h-9'>wilaya</button>
                    <button className='bg-[#25323B] text-[#fff] rounded-[13px] w-[43%] h-9'> commune</button>
              </div> 
               </div>
                </div>
                <div className='w-[82%] flex flex-col gap-5 '>
                <button className='bg-[#25323B] text-[#fff] rounded-[13px] w-[16%] h-9'> commune</button>
               <div className='flex flex-col gap-2'>
                <label className='  f66 text-[#25323B] text-base '>experience</label>
                <textarea placeholder="Message" className="p-2 text-base f10 rounded text-[#808F99] bg-[#E0E2E9] w-[88%] h-16"> </textarea>      
               </div>
                </div>
                 
            </form>
                <button className='bg-[#25323B] text-[#fff] rounded-[13px] w-[10%] h-[2.4rem]'>Register</button>

            </div>
      </div>
     </div>
    );
  }
  
  export default RegisterAvocat;
  