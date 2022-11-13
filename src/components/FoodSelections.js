import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import NavLink from "react-router-dom"

function FoodSelections({changeCategory}) {
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

    let categoryNavButtons = categories.map((cat) => {
       return <button onClick={handleClick} key={cat.id}>{cat}</button>
    })

    return (
        <div>
            {categoryNavButtons}
        </div>
    )

}

export default FoodSelections;