import dc from '../img/doicivil.svg'
import avocat from '../img/avocat.svg'
import {useNavigate} from 'react-router-dom'
function HomeB() {
    const navigate = useNavigate()
    return (
     <div className='flex flex-row text-center justify-evenly my-[2vh] h-[100vh] text-[#fff] bg-gray-200 items-center' >
        <a href='/RegisterAvocat' className=" rounded-2xl p-2 h-[60%] w-[30%] bg-[#25323B] hover:bg-[hsl(205,23%,30%)] flex flex-col items-center justify-center gap-[2%] " >
            <img src={avocat} className='w-20'/>
        <p className='f4 '>Avocat</p>
        <p className='f5'> creer un compte avocat</p>
        </a>
        <a href="/RegisterClient" className="rounded-2xl p-2 h-[60%] w-[30%] bg-[hsl(205,23%,19%)] hover:bg-[hsl(205,23%,30%)] flex flex-col items-center justify-center gap-[2%]">
            <img src={dc} className='w-20'/>
        <p className='f4'>Client</p>
        <p className='f5'> creer un compte client</p>
        </a>
     </div>
    );
  }
  
  export default HomeB;