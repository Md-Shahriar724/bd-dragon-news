import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const SingleNews = ({ news }) => {

    const [detail, setDetail] = useState(false)
    

  const { title, image_url, author, details, rating, total_view
  } = news;

  const { name, img, published_date } = author;
    const newsdetails = details.slice(0, 200)
  console.log(news);

  const handleDetails = ()=>{
    setDetail(!detail)
  }

  return (
    <div className="my-6 shadow-lg">
      <div className="grid grid-cols-2 justify-between items-center bg-slate-200">
        <div className="flex gap-2 items-center px-2 py-4">
          <img src={img} className="w-8 h-8 rounded-full" alt="" />
          <div>
            <h2 className="text-sm ">{name}</h2>
            <p className="text-sm ">{published_date}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-end px-2 py-4">
          <CiBookmark className="text-2xl " />
          <CiShare2 className="text-2xl " />
        </div>
      </div>
      <div className=" px-4">
        <h1 className="text-xl font-bold text-gray-500 py-4">{title}</h1>
        <img className="mb-3" src={image_url} alt="" />
        <p className=" text-sm font-sans">{detail ? details : newsdetails}....</p>
       { detail ? 
        <h2 className="text-md font-semibold text-green-500 pb-4 cursor-pointer"  onClick={handleDetails} >read less</h2> :
        <h2 className="text-md font-semibold text-green-500 pb-4 cursor-pointer"  onClick={handleDetails} >read more</h2>
       } 
      <div className="flex justify-between items-center pb-4">
      <div className="flex gap-1 ">
        <FaStar className=" text-orange-500 text-xl"/>
        <FaStar className=" text-orange-500 text-xl"/>
        <FaStar className=" text-orange-500 text-xl"/>
        <FaStar className=" text-orange-500 text-xl"/>
        <FaStar className=" text-orange-500 text-xl"/>
        {rating.number}
      </div>
      <div className="flex gap-2 items-center">
        <IoEye className="text-xl"/>
        <p>{total_view}</p>
      </div>
      </div>
      
      
      </div>
    </div>
  );
};

export default SingleNews;
