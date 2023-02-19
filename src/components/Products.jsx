import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //every time page loads the prodcuts gets loaded
  useEffect(() => {
    getProducts();
  }, []);

  // to get plants from backend
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/plant-list",{
      headers: {
        authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    // console.log(result);
    setProducts(result);
  };

  // to edit records from frontend using edit button
  const handleEdit = async (id) => {
    await navigate(`/update/${id}`);
  };

  // to delete records from frontend using delete button
  const handleDelete = async (id) => {
    // console.log(id);
    let result = await fetch(`http://localhost:5000/plant/${id}`, {
      method: "Delete",
      headers: {
          authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    result = await result.json();

    if (result) {
      //to refresh the page with remaining plants after a plant is deleted
      getProducts();
    }
  };

  //function for searching plants
  const handleSearch = async (e) => {
    // console.log(e.target.value);
    let key = e.target.value;
    if(key){
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers: {
          authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      result = await result.json();
      // console.log(result)
      if(result){
        setProducts(result)
      }
    } else{
      getProducts();
    }
  ;
  };

  return (
    <div className="products">
      <div className="searchInputDiv">
        <input
          type="text"
          className="searchInput"
          placeholder="Search here.."
          onChange={handleSearch}
        />
      </div>
      <table className="productList">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        { (products.length > 0) ? products.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    onClick={() => handleEdit(item._id)}
                    className="green operationBtn"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="red operationBtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          }) : (<h1>No result Found</h1>) }
                </tbody>
      </table>
    </div>
  );
};

export default Products;
