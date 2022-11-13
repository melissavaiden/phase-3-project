import React, {useEffect, useState} from "react";
import FoodCard from "./foodCard";
import NavBar from "./NavBar";

function FoodSelections({changeCategory, foodItems}) {
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
        
    }

    let categoryNavButtons = categories.map((cat) => {
       return <button onClick={handleClick} key={cat.id}>{cat}</button>
    })

    return (
        <div>
            <NavBar /> 
            <button onClick={displayAll}>All</button>
            {categoryNavButtons}
            <FoodCard foodItems={foodItems}/>
        </div>
    )

}

export default FoodSelections;