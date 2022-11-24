import React, {useState} from "react";

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
        console.log(updatedItem)
        setUpdatedItem({
            ...updatedItem,
            [e.target.name] : e.target.value
        })
    }

    // function handleUpdate(e) {
    //     fetch(`http://localhost:9292/food/${e.target.id}`, {
    //         method: "PATCH",
    //         Headers:
    //         { "Content-Type": "application/json" },
    //         Body: JSON.stringify({
    //           "correctIndex": e.target.value})
    //       })
    //         .then((r) => r.json())
    //         .then(() => console.log("updated!", e.target.value));
    // }

    const users = user.map((person) => {
        return <option key={person.id} value={person.id}>{person.username}</option>
    })



    return (
        <div>
            <h1>Update this Item</h1>
            <form className='form'>
                <label className='selection'>
                    Food Item Name:
                    <input className='inputs' type='string' name='name' value={editItem.name} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Price:
                    <input className='inputs' type='number' name='price' value={editItem.price} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Category:
                    <input className='inputs' type='string' name='category' value={editItem.category} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Description:
                    <input className='inputs description' type='string' name='description' value={editItem.description} onChange={handleChange}></input>
                </label>
                <br></br>
                <label className='selection'>
                    Username:
                    <select className='inputs' name='username' value={editItem.username} onChange={handleChange}>
                        <option value={editItem.username}>{editItem.username}</option>
                        {users}
                    </select>
                </label>
                <br></br>
                <label className='selection'>
                    Picture URL:
                    <input className='inputs' type='text' name='picture_url' value={editItem.pictureUrl} onChange={handleChange}></input>
                </label>
                <br></br>
                <button type='submit'>Update</button>
            </form>

        </div>
    )

}

export default UpdateForm;