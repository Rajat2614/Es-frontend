import axios from 'axios';
import React, {useState, useEffect } from 'react';
import NewsArticles from './NewsArticles';

const LatestNews = () => {

    const [initialData,setInitialData] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
        const res = await axios.get('http://localhost:3000/api/news/getNews');
        const ans = await JSON.stringify(res);
        const par = await JSON.parse(ans);
        setInitialData(par);
        }
        fetchData();
    }, []);

    return (
        <div className='container m-20 ml-10 mr-10 p-5 grid grid-cols-5 gap-2 w-[100%]'>
            <div className=" fav grid-rows w-[80%] h-[100%] ">
                <ul className='list-none text-right'><span className='font-bold'>AMERICA'S FAVORITES</span>
                    <li>#TomBrady</li>
                    <li>#MichaelJordan</li>
                    <li>#Shaq</li>
                    <li>#TigerWoods</li>
                    <li>#MikeTyson</li>
                    <li>#SerenaWilliams</li>
                    <li>#StephCurry</li>
                    <li>#TomBrady</li>
                    <li>#MichaelJordan</li>
                    <li>#Shaq</li>
                    <li>#TigerWoods</li>
                    <li>#MikeTyson</li>
                    <li>#SerenaWilliams</li>
                    <li>#StephCurry</li>
                    <li>#TomBrady</li>
                    <li>#MichaelJordan</li>
                    <li>#Shaq</li>
                </ul>
            </div>
            
            <div className="col-span-3">
                <NewsArticles initialData={initialData}/>
            </div>
            <div className="editor w-[80%] ">
                <ul className='list-none text-left'><span className='font-bold'>EDITOR'S PICK</span>

                </ul>
            </div>
        </div>

    );
}

export default LatestNews;


