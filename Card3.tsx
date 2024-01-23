import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { useNavigate } from "react-router-dom";

function Card3(props: {
  img2: string | undefined;
  name1:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  img3: string | undefined;
  spec1:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  const navigate = useNavigate();

  return (
    <div className="  relative h-[18vh]  flex flex-row items-center w-full justify-between ">
      <div className="flex flex-row  gap-5 h-full items-center justify-center w-4/5 border-b-[1px] border-[#3498DB]">
        {" "}
        <img
          src={props.img2}
          className=" "
        />
        <div className="h-[50%] flex flex-col w-[80%] ">
          <p className="   left-[37%] top-[12%] f8 text-2xl text-[#111111] ">
            {props.name1}
          </p>
          <img src={props.img3} className=" h-2/6  w-[10%] " />

          <p className="flex flex-row gap-2    left-[37%] top-[40%]">
            {" "}
            <p className="f7 text-base text-[#808F99]">Specialité:</p>
            <p className="f1 text-base text-[#3498DB]">{props.spec1}</p>
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full w-[20%] gap-5  ">
        <button
          onClick={() => {
            navigate("/Login");
          }}
          className=" rounded-[10px] f3 h-[100%] w-[40%] text-[#000000] bg-[#3498DB] w-full"
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
