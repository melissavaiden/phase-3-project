import React, {useState} from 'react';

function FoodForm() {
    const [newFoodItem, setNewFoodItem] = useState({
        id:"",
        name:"",
        price:"",
        category:"",
        description:"",
        username:"",
        pictureUrl:""
    })
    
    return (
        <div>
            <h1>FOOD FORM</h1>
            <form>
                <h1>Share your Food!</h1>
                <label className='selection'>
                    Food Item Name:
                    <input type='string'></input>
                </label>
                <label className='selection'>
                    Price:
                    <input type='number'></input>
                </label>
                <label className='selection'>
                    Category:
                    <input type='string'></input>
                </label>
                <label className='selection'>
                    Description:
                    <input type='string'></input>
                </label>
                <label className='selection'>
                    Username:
                    <input type='string'></input>
                </label>
                <label className='selection'>
                    Picture URL:
                    <input type='string'></input>
                </label>
            </form>

        </div>
    )
}

export default FoodForm;