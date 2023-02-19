import React from "react";
import { useState } from "react";

const AddProduct= ()=>{
    const [name,setName]=  useState('');
    const [price,setPrice]=  useState('');
    const [category,setCategory]=  useState('');
    const [error,setError]= useState(false);
    
    const sendPlants = async(e)=>{
        e.preventDefault();
        if(!name || !price || !category){
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id
        let result = await fetch('http://localhost:5000/add-plant',{
            method:"POST",
            body: JSON.stringify({name,price,category,userId}),
            headers: {
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        // console.log(result)
    };

    return(
        <div className="formPage">
           <h1>Add Product</h1>
            <form className="form">
            <input type="text" placeholder="plant name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            {error && !name && <small className="small">Please fill plant name..</small>}
            <input type="text" placeholder="plant price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            {error && !price && <small className="small">Please fill plant price..</small>}
            <input type="text" placeholder="plant category" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            {error && !category && <small className="small">Please fill plant category..</small>}
            <button className="btn signUpBtn" onClick={sendPlants}>Add</button>
            </form>
        </div>
    )
};

export default AddProduct;