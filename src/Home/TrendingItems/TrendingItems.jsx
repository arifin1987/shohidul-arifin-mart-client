import { useEffect, useState } from "react";
import TrendingProduct from "../TrendingProduct/TrendingProduct";


const TrendingItems = () => {
    const[items, setItems] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/trending')
        .then(res =>res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl mb-2">Trending Now</h1>
            <div className="md:grid grid-cols-5 gap-4 mb-4">
            {
                items.map(item=> <TrendingProduct
                key={item.id}
                item = {item}
                ></TrendingProduct>)
            }

            </div>
            
            
        </div>
    );
};

export default TrendingItems;