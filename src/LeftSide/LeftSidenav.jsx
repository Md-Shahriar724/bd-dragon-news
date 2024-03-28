import { useEffect, useState } from "react";
import LeftCetegori from "./LeftCetegori";

const LeftSidenav = () => {
    const [categories, setCategories] = useState([])


    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data =>setCategories(data))
    },[])
console.log(categories)
    return (
        <div>
            <h2 className="text-xl font-bold  mb-4">All Category</h2>
            <p>Total Categories : {categories.length}</p>
            <div className="mt-4">
            {
                categories.map((dataName)=><LeftCetegori key={categories.id} dataName={dataName}></LeftCetegori>)
            }
            </div>
            
        </div>
    );
};

export default LeftSidenav;