import dc from '../img/doicivil.svg'
import avocat from '../img/avocat.svg'
function HomeB() {
    return (
     <div className='flex flex-row text-center justify-evenly my-[2vh] h-[70vh]'>
        <div className=" rounded-[5px] p-2 h-[80%] w-[30%] bg-[#DDE2E5] flex flex-col items-center justify-center gap-[2%]  ">
            <img src={avocat} className='w-20'/>
        <p className='f4 '>droit des affaires</p>
        <p className='f5'> l'ensemble des règles juridiques régissant les activités commerciales et les relations contractuelles entre les entités économiques</p>
        </div>
        <div className="rounded-[5px] p-2 h-[80%] w-[30%] bg-[#DDE2E5] flex flex-col items-center justify-center gap-[2%]">
            <img src={dc} className='w-20'/>
        <p className='f4'>droit civil</p>
        <p className='f5'> les droits légaux et constitutionnels qui garantissent la liberté, l'égalité et la protection juridique des individus au sein d'une société</p>
        </div>
     </div>
    );
  }
  
  export default HomeB;
  