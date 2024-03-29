import {  useEffect, useState } from "react";

import { Link } from "react-router-dom";


const LeftSidenav = () => {
    const [categories, setCategories] = useState([])
    

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-xl font-bold  mb-4">All Category</h2>
            <p>Total Categories : {categories.length}</p>
            <div className="mt-4 grid grid-cols-1">
            {
                categories.map((dataName)=><Link
                 className="font-semibold py-2"
                  to={`/category/${dataName.id}`}
                   key={dataName.id}
                    >
                    {dataName.name}</Link>)
            }
            </div>
            
        </div>
    );
};

export default LeftSidenav;