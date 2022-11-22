import React, {useEffect, useState} from "react";
import FoodCard from "./foodCard";

function FoodSelections({changeCategory, foodItems, deleteFood}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories')
    .then((r) => r.json())
    .then((cat) => setCategories(cat))
    },[])

    function handleClick(e) {
        let catName = (e.target.innerHTML)
        changeCategory(catName)
    }

    function displayAll() {
        changeCategory(0)
    }


    let categoryNavButtons = categories.map((cat) => {
       return <button className="catButton" onClick={handleClick} key={cat.id}>{cat}</button>
    })

    return (
        <div>
            <button className="catButton" onClick={displayAll}>All</button>
            {categoryNavButtons}
            <FoodCard foodItems={foodItems} deleteFood={deleteFood}/>
        </div>
    )

}

export default FoodSelections;