import React, {useEffect} from "react";
import FoodCard from "./foodCard";

function Home() {
    useEffect(() => {
        fetch("http://localhost:9292/")
        .then((r) => r.json())
        .then((foodItems) => console.log(foodItems))
    },[])

    return (
    <div>   
         <h1>Home Chef</h1>
         <FoodCard />
    </div>
)}

export default Home;