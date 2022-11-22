import React from "react";

function FoodCard({foodItems, deleteFoodItem}) {

    function handleDelete(e) {
        fetch(`http://localhost:9292/food/${e.target.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => console.log('deleted!'));
        deleteFoodItem();
    }

    let foodCard = foodItems.map((food) => {
        return (
        <div key={food.id} className="foodCard">
            <img className='food_url' src={food.picture_url}></img>
            <h2>{food.name}---{food.price}</h2>
            {/* <h3>{food.user.username}</h3> */}
            <p>{food.category}</p>
            <p>{food.description}</p>
            <button id={food.id} onClick={handleDelete}>Delete</button>
            <button>Edit</button>
        </div>
     )})

 return (
    <div>
        {foodCard}
    </div>
 )
}

export default FoodCard;
