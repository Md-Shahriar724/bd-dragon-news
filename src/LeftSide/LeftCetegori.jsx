import { NavLink } from "react-router-dom";

const LeftCetegori = ({dataName}) => {

    const {name} = dataName;
    console.log(name)

    return (
        <div className="">
        <NavLink>
        <button className="w-full text-start text-gray-500 font-semibold my-2 ">
            {name}
            </button>
        </NavLink>
       

        </div>
    );
};

export default LeftCetegori;