import  { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import data from "./data.json";

function Navbar2() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isNvClassAdded, setNvClassAdded] = useState(false);
  const navigate = useNavigate();

  const showSearch = () => {
    setSearchVisible(true);
    setNvClassAdded(true);
  };

  const hideSearch = () => {
    setSearchVisible(false);
    setNvClassAdded(false);
  };
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [selectedCommune, setSelectedCommune] = useState(""); // Correction ici
  const [communes, setCommunes] = useState([]);

  const handleWilayaChange = (event) => {
    const selectedWilaya = event.target.value;
    setSelectedWilaya(selectedWilaya);

    const wilayaData = data.find((wilaya) => wilaya.nom === selectedWilaya);
    const selectedCommunes = wilayaData ? wilayaData.communes : [];

    setCommunes(selectedCommunes);
  };
  const wilayasOptions = data.map((wilaya) => (
    <option key={wilaya.id} value={wilaya.nom}>
      {wilaya.nom}
    </option>
  ));

  const communesOptions = communes.map((commune) => (
    <option key={commune.id} value={commune.nom}>
      {commune.nom}
    </option>
  ));
  return (
    <div className="relative h-[8vh] w-full z-50">
      <div
        id="sn"
        className={`flex flex-row justify-between fixed h-[8vh] w-full bg-[#31404A] opacity-75 p-[1%] ${
          isNvClassAdded ? "nv" : ""
        }`}
      >
        <img src={logo} className="w-[5%] lg" />
        <div className="f1 flex flex-row justify-between text-[#FFFFFF] w-[50%]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Avocats</a>
          <a href="">Annuaire</a>
          <a href="">Help</a>
          <a href="">Contact</a>
        </div>
        <button
          id="sr"
          onClick={() => {
            showSearch();
            navigate("/Search");
          }}
          className="w-[2%] lg"
        >
          <img src={search} />
        </button>
      </div>
      {isSearchVisible && (
        <div>
          <div className="fixed h-[20vh] w-full top-[10vh] zz  flex  gap-[12%] text-white">
            <div className="flex  space-x-5 w-[60%] justify-center relative ">
              <input
                type="text"
                className=" border-none text-xl mt-4 font-semibold h-[5.5vh] w-[80%] bg-[#31404A]"
                placeholder="Rechercher un avocat"
              />
            </div>

            <div className=" flex flex-col gap-3  w-[25%]">
              <div className="flex gap-[5%] w-[80%] ">
                <select
                  id="wilaya"
                  onChange={handleWilayaChange}
                  value={selectedWilaya}
                  className=" bg-[#556773] px-5 py-2 rounded-[10px] w-[45%]"
                >
                  <option value=""> Wilaya</option>
                  {wilayasOptions}
                </select>
                <select
                  id="commune"
                  onChange={(event) => setSelectedCommune(event.target.value)}
                  value={selectedCommune}
                  className="bg-[#556773] px-5 py-2 rounded-[10px] w-[50%]"
                >
                  <option value=""> commune</option>
                  {communesOptions}
                </select>
              </div>

              <div className="w-[80%]">
                <select className="flex items-center justify-between space-x-1 w-full bg-[#E0E2E9] text-[#556773] px-5 py-2 rounded-[10px] font-semibold">
                  <option value=""> Domaine</option>
                  <option value=""> Droit</option>
                  <option value="">Crimes</option>
                  <option value="">Droit fiscal</option>
                </select>
              </div>
            </div>
          </div>
          <div
            onClick={hideSearch}
            className="fixed h-[72vh] backdrop-blur-sm w-full top-[28vh]"
          >
            {/* Content for search, you can use searchInputRef.current to access the input if needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
