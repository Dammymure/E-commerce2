import NavbarSeller from '../components/NavbarSeller';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert"
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

 const [name, setName] = useState('')
 const [description, setDescription] = useState('')
 const [price, setPrice] = useState('')
 const [quantity, setQuantity] = useState('')
 const [imageURL, setImageURL] = useState('')

 const [product, setProduct] = useState({
  name: "",
  description: "",
  price: "",
  quantity: ""
 })

 const { id } = useParams()
 // To navigate to a page 
 const navigate = useNavigate()

 // Create a function for the handle input
 const handleInputs = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setProduct({ ...product, [name]: value })
 }

 // Create a function for handle submit
 const handleSubmit = (e) => {
  e.preventDefault()

  // Update the product
  async function updateProduct() {
   await axios.put(`http://localhost:9000/api/products/update/${id}`, { product, imageURL })
    .then((response) => {
     if (response.data.msg === "Product successfully updated") {
      console.log("YES");
      swal("Successfully updated", response.data.msg, "success")
      navigate("/sellerdashboard")
     }
    })
  }
  updateProduct()
 }

 // Fetch data for single product
 useEffect(() => {
  async function fetchProduct() {
   await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`)
    .then((response) => {
     setProduct(response.data)
    })
  }
  fetchProduct()
 }, [])

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


 return (
  <div>
   <NavbarSeller />
   <div class="row container">
    <div className='col-md-5 offset-md-1 mt-5'>

     <form className='shadow py-3 px-4 mb-5 bg-body rounded'
      onSubmit={handleSubmit}
     >
      <h3 className='text-center'>Post Product</h3>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Name</label>
       <input type="text"
        name="name"
        class="form-control"
        value={product.name}
        onChange={handleInputs}
        id="exampleFormControlInput1" placeholder="Enter product name" />
      </div>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Description</label>
       <input type="text" class="form-control"
        name='description'
        value={product.description}
        onChange={handleInputs}
        id="exampleFormControlInput1" placeholder="Enter product description" />
      </div>
      <div class="mb-4">
       <label for="exampleFormControlInput1" class="form-label">Price</label>
       <input type="text" class="form-control" id="exampleFormControlInput1"
        name='price'
        value={product.price}
        onChange={handleInputs}
        placeholder="Enter product price" />
      </div>
      <div class="mb-4">
       <label for="exampleFormControlInput1" class="form-label">Quantity</label>
       <input type="text" class="form-control" id="exampleFormControlInput1"
        name='quantity'
        value={product.quantity}
        onChange={handleInputs}
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
     <div><img class="post-img" src={product.imageURL} alt="" />
     </div>
     <div class="post-list">
      <li>
       Name: {product.name}
      </li>
      <li>
       Description: {product.description}
      </li>
      <li>
       Price: {product.price}
      </li>
      <li>
       quantity: {product.quantity}
      </li>
     </div>
    </div>
   </div>
  </div>)
}


export default EditProduct;