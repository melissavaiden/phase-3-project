import React, {useEffect, useState} from "react";

function NavBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories')
    .then((r) => r.json())
    .then((cat) => setCategories(cat))
    },[])

    console.log(categories)

    let categoryNavButtons = categories.map((cat) => {
       return <button>{cat}</button>
    })

    return (
        <div>
            {categoryNavButtons}
        </div>
    )

}

export default NavBar;