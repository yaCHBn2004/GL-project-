import {Link} from "react-router-dom";
import Card2 from "./Card2.jsx";

import React, {useEffect, useState} from "react";
import {useData} from "../providers/DataProviders.tsx";
// import { Pagination } from 'flowbite-react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const LawyersGrid = ({filterdata}) =>{
    const { selectedOption } = useData();
    const [filterData,setFilterData]=useState(filterdata.search_results)
    useEffect(() =>{
        handleSearch()
    },[selectedOption])
    console.log(filterData)
    console.log(filterdata)
    console.log(selectedOption)
    const handleSearch = () => {
        

            let filtered = filterData.filter((lawyer) => {
                 if (
                     lawyer.first_name.toLowerCase().includes(selectedOption.name) || lawyer.last_name.toLowerCase().includes(selectedOption.name)
                 ) {
                     return true;
                 }
                 return false;
                });
                 if (selectedOption.cat !="") {
                     filtered = filtered.filter((lawyer) => lawyer.categ == selectedOption.cat);
                 }


                 if (selectedOption.wilaya) {
                     filtered = filtered.filter((lawyer) => lawyer.address == selectedOption.wilaya);
                 }
                setFilterData(filtered);
    }
    
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => setCurrentPage(page);
    return (

        <>
        <div className="h-full p-2 flex flex-col items-center gap-4">
            {filterData?.map((item) => (
                    <Link to={`/ProfilAvocat/${item.id}`}>
                        <Card2
                            id={item.id}
                            name={`${item.first_name} ${item.last_name}`}
                            address={item.address.state}
                            rating={item?.rating}
                            categ={item.specialization.slice(0,100)}
                            exp={""}
                            img={decodeURI(item.images[0].image.replace("/media/",'').replace('%3A',':/'))}
                            wilaya={item.address.city}
                            commune={item.address.street}
                        />
                    </Link>
                )
            )}

            
        </div>
        <div className="flex flex-row justify-center my-4">
        <Stack spacing={2}>
      <Pagination count={10} />
     
    </Stack>
        </div>
        </>
    )
}
export default LawyersGrid