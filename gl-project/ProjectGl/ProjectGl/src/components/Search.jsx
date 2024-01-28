// import About from "./About";
// import HomeA from "./HomeA";
// import HomeB from "./HomeB";
// import Login from "./Login";
// import Register from "./Register";


import Footer from "./Footer.jsx";
import Navbar2 from "./Navbar2.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

import {DataProvider} from "../providers/DataProviders.tsx";

import LawyersGrid from "./lawersGrid.jsx";
const Search = () =>{

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  useEffect(() =>{
      axios({
        method: "get",
        url: "http://localhost:8000/core/lawyer-profile-search/"
      }).then(
          (res) =>{
            console.log(res.data)
            setData(res.data)
            setIsLoading(false)
          }
      )
  },[])
    console.log(data)
    return (
    <div className="w-full">
      {" "}
        <DataProvider>
      <Navbar2 />
            {!isLoading?<LawyersGrid filterdata={data}/>: <p>Loading</p>}
        </DataProvider>
      <Footer />
    </div>
  );
}

export default Search;
