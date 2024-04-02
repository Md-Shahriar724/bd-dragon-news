import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";


const MainNews = () => {
    const [newsData, setNewsData] = useState([])

useEffect(()=>{
    fetch('news.json')
    .then(res =>res.json())
    .then(data => setNewsData(data))
},[])

    return (
        <div>
            <h1 className="text-xl font-bold">Dragon News Home</h1>
            <h1>Total News : {newsData.length}</h1>
            <div>
            {
                newsData.map((news)=><SingleNews key={news.id} news={news}></SingleNews>)
            }
            </div>
          
        </div>
    );
};

export default MainNews;