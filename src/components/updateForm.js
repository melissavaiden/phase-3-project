import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function UpdateForm({user, editItem}) {
    const [updatedItem, setUpdatedItem] = useState({
        id:"",
        name:"",
        price:"",
        category:"",
        description:"",
        username:"",
        picture_url:""
    })

    function handleChange(e) {
        setUpdatedItem({
            ...updatedItem,
            [e.target.name] : e.target.value
        })
        console.log(updatedItem)
    }

    function handleUpdateSubmit() {
        // const index = foodItems.findIndex((food) => food.id === updatedItem.id)
        // console.log(index)
    }

    const users = user.map((person) => {
        return <option key={person.id} value={person.id}>{person.username}</option>
    })



    return (
        <div>
            <h1>Update this Item</h1>
            <form className='form' onSubmit={handleUpdateSubmit}>
                <label className='selection'>
                    Food Item Name:
                    <input className='inputs' type='string' name='name' placeholder={editItem.name} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Price:
                    <input className='inputs' type='number' name='price' placeholder={editItem.price} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Category:
                    <input className='inputs' type='string' name='category' placeholder={editItem.category} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Description:
                    <input className='inputs description' type='string' name='description' placeholder={editItem.description} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Username:
                    <select className='inputs' name='username' placeholder={editItem.username} onChange={handleChange}>
                        <option placeholder={editItem.username} value={editItem.id}>{editItem.username}</option>
                        {users}
                    </select>
                </label>
                <br></br>
                <label className='selection'>
                    Picture URL:
                    <input className='inputs' type='string' name='picture_url' placeholder={editItem.picture_url} onChange={handleChange}></input>
                </label>
                <br></br>
                <NavLink to='/food/categories'>
                <button type='submit'>Update</button>
                </NavLink>
            </form>

        </div>
    )

}

export default UpdateForm;