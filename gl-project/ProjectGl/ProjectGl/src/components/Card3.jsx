
import { useNavigate } from "react-router-dom";

const  Card3 =({img2,name1,img3,
  spec1,id
    }) => {
  
  const navigate = useNavigate();

  return (
    <div className="  relative h-[18vh]  flex flex-row items-center w-full justify-between ">
      <div className="flex flex-row  gap-5 h-full items-center justify-center w-4/5 border-b-[1px] border-[#3498DB]">
        {" "}
        <img
          src={img2}
          className=" "
        />
        <div className="h-[50%] flex flex-col w-[80%] ">
          <p className="   left-[37%] top-[12%] f8 text-2xl text-[#111111] ">
            {name1}
          </p>
          <img src={img3} className=" h-2/6  w-[10%] " />

          <p className="flex flex-row gap-2    left-[37%] top-[40%]">
            {" "}
            <p className="f7 text-base text-[#808F99]">Specialité:</p>
            <p className="f1 text-base text-[#3498DB]">{spec1}</p>
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full w-[20%] gap-5  ">
        <button
          onClick={() => {
            navigate(`/Render-vous/${id}`);
          }}
          className=" rounded-[10px] f3 h-[100%] text-[#000000] bg-[#3498DB] w-full"
        >
          {" "}
          rendez-vous
        </button>

        <button
          onClick={() => {
            navigate("/LoginAvocat");
          }}
          className="rounded-[10px] f3 h-[100%]  text-[#556773] bg-[#DDE2E5] w-full "
        >
          message
        </button>
      </div>
    </div>
  );
}

export default Card3;
