import React, { useState } from 'react';
import axios from 'axios';
import swal from "sweetalert"
import NavbarSeller from '../components/NavbarSeller';
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

 const [name, setName] = useState('')
 const [description, setDescription] = useState('')
 const [price, setPrice] = useState('')
 const [quantity, setQuantity] = useState('')
 const [imageURL, setImageURL] = useState('')



 // To navigate to a page 
 const navigate = useNavigate()




 // Create a function for handle submit
 const handleSubmit = (e) => {
  e.preventDefault()
  if (name === "" || description === "" || price === "" || quantity === "" || imageURL === "") {
   swal("Empty fields", "Fill the required fields", "error")
  }
  else {
   axios.post(`${process.env.REACT_APP_API_URL}/products/create`, { name, description, price, quantity, imageURL })
    .then((response) => {
     swal(response.data.msg === "You have registered your product" ? "Successfully posted product" : "Error posting your product", response.data.msg, response.data.msg === "You have registered your product" ? "success" : "error")

     if (response.data.msg === "You have registered your product") {
      navigate("/sellerdashboard")
     }
    })
    .catch((err) => {
     console.log(err);
    })
  }

 }


 // Handle and convert it in base 64
 const handleImage = (e) => {
  const file = e.target.files[0]
  setFileToBase(file)
  console.log(file)
 }

 const setFileToBase = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file);
  reader.onloadend = () => {
   setImageURL(reader.result)
  }
 }



 return (<div>
  <NavbarSeller />
  <div class="row container">
   <div className='col-md-5 offset-md-1 mt-5'>

    <form className='shadow py-3 px-4 mb-5 bg-body rounded'
     onSubmit={handleSubmit}
    >
     <h3 className='text-center'>Post Product</h3>
     <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input type="text" class="form-control"
       name="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
       id="exampleFormControlInput1" placeholder="Enter product name" />
     </div>
     <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Description</label>
      <input type="text" class="form-control"
       name='description'
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       id="exampleFormControlInput1" placeholder="Enter product description" />
     </div>
     <div class="mb-4">
      <label for="exampleFormControlInput1" class="form-label">Price</label>
      <input type="text" class="form-control" id="exampleFormControlInput1"
       name='price'
       value={price}
       onChange={(e) => setPrice(e.target.value)}
       placeholder="Enter product price" />
     </div>
     <div class="mb-4">
      <label for="exampleFormControlInput1" class="form-label">Quantity</label>
      <input type="text" class="form-control" id="exampleFormControlInput1"
       name='quantity'
       value={quantity}
       onChange={(e) => setQuantity(e.target.value)}
       placeholder="Enter product quantity" />
     </div>
     <div class="mb-4">
      <label for="exampleFormControlInput1" class="form-label">Image URL</label>
      <input type="file" class="form-control"
       id="exampleFormControlInput1"
       name='imageURL'
       onChange={handleImage}
       placeholder="Enter Image Url" />
     </div>
     <div class="d-grid gap-2 mb-4">
      <button class="btn btn-primary" type="submit">Submit</button>
     </div>
    </form>
   </div>
   <div class="col-md-5 offset-md-1">
    <div><img class="post-img" src={imageURL} alt="" />
    </div>
    <div class="post-list">
     <li>
      {name}
     </li>
     <li>
      {description}
     </li>
     <li>
      {price}
     </li>
    </div>
   </div>
  </div>
 </div>);
}


export default AddProduct;

