import React, {useState} from 'react';

function FoodForm({user}) {
    const [newFoodItem, setNewFoodItem] = useState({
        id:"",
        name:"",
        price:"",
        category:"",
        description:"",
        username:"",
        pictureUrl:""
    })

    const users = user.map((person) => {
        return <option>{person.username}</option>
    })

    function handleChange(e) {
        setNewFoodItem({
            ...newFoodItem,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit() {

    }
    
    return (
        <div>
            <h1>FOOD FORM</h1>
            <form className='form' >
                <h1>Share your Food!</h1>
                <label className='selection'>
                    Food Item Name:
                    <input type='string' name='name' onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Price:
                    <input type='number' name='price' onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Category:
                    <input type='string' name='category' onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Description:
                    <input type='string' name='description' onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Username:
                    <select name='username' className='selection'>
                        {users}
                    </select>
                </label>
                <br></br>
                <label className='selection'>
                    Picture URL:
                    <input type='url' name='picture_url' onChange={handleChange}></input>
                </label>
                <br></br>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default FoodForm;