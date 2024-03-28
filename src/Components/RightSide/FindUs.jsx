import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <div>
            <h2 className="text-xl font-bold  mb-4">Find Us</h2>
                <button className="flex gap-2 items-center border-2 p-2 w-full rounded-t-lg ">
                    <BsFacebook/>
                    Facebook
                </button>
                <button className="flex gap-2 items-center border-x-2 p-2 w-full ">
                    <FaXTwitter/>
                    X
                </button>
                <button className="flex gap-2 items-center border-2 p-2 w-full rounded-b-md ">
                    <FaInstagram/>
                    Instagram
                </button>
            </div>            
        </div>
    );
};

export default FindUs;