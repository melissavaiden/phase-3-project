import React, {useState} from "react";

function UpdateForm({user, editItem, handleUpdateSubmit}) {
    const [updatedItem, setUpdatedItem] = useState({
        id: editItem.id,
        name:editItem.name,
        price:editItem.price,
        category:editItem.category,
        description:editItem.description,
        username:editItem.username,
        picture_url:editItem.picture_url
    })

    function handleChange(e) {
        console.log(e.target.value)
        setUpdatedItem({
            ...updatedItem,
            [e.target.name] : e.target.value
        })
       }


    const users = user.map((person) => {
        return <option key={person.id} value={person.id}>{person.username}</option>
    })

    function handleUpdateSubmit() {      
        fetch(`http://localhost:9292/food/${updatedItem.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "name" : updatedItem.name,
            "price" : updatedItem.price,
            "category" : updatedItem.category,
            "description" : updatedItem.description,
            "user_id" : updatedItem.username,
            "picture_url" : updatedItem.picture_url
          }),
        })
          .then((r) => r.json())
          .then((updatedItem) => console.log(updatedItem));
      }



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
                        <option value={editItem.username}>{editItem.username}</option>
                        {users}
                    </select>
                </label>
                <br></br>
                <label className='selection'>
                    Picture URL:
                    <input className='inputs' type='string' name='picture_url' placeholder={editItem.picture_url} onChange={handleChange}></input>
                </label>
                <br></br>
                    <button type='submit'>Update</button>
            </form>

        </div>
    )

}

export default UpdateForm;