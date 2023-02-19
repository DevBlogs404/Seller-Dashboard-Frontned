import React,{ useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"; 

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [error,setError]= useState(false);

  const navigate = useNavigate();

  //we use useParams hook for gettind id from the update/id url
  const params = useParams();

  useEffect(()=>{
    // console.log(params);
    getPlantDetails();
  },[])

  const getPlantDetails = async () => {
    let result = await fetch(`http://localhost:5000/plant/${params.id}`,{
      headers: {
        authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result = await result.json();
    // console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category)
  };

  const updatePlants = async(e) =>{
    e.preventDefault();
    let result = await fetch(`http://localhost:5000/plant/${params.id}`,{
        method:'PUT',
        body: JSON.stringify({name,price,category}),
        headers: {
            authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`,
            'Content-Type': 'application/json'
        }
    });
    result = await result.json();
    console.log(result)
    if(result){
        navigate('/')
    }

  }

  return (
    <div className="formPage">
      <h1>Update Product</h1>
      <form className="form">
        <input
          type="text"
          placeholder="plant name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {/* {error && !name && <small className="small">Please fill plant name..</small>} */}
        <input
          type="text"
          placeholder="plant price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        {/* {error && !price && <small className="small">Please fill plant price..</small>} */}
        <input
          type="text"
          placeholder="plant category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        {/* {error && !category && <small className="small">Please fill plant category..</small>} */}
        <button className="btn signUpBtn" onClick={updatePlants}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
