import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert"
import { useNavigate, useParams } from 'react-router-dom';
import NavbarSeller from '../components/NavbarSeller';

const EditSeller = () => {
 const [seller, setSeller] = useState({
  fullname: "",
  email: "",
  phone: "",
  imageURL: ""
 })

 const { id } = useParams()
 // To navigate to a page 
 const navigate = useNavigate()

 // Create a function for the handle input
 const handleInputs = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setSeller({ ...seller, [name]: value })
 }

 // Create a function for handle submit
 const handleSubmit = (e) => {
  e.preventDefault()
  console.log("YES");
  // Update the product
  async function updateSeller() {
   await axios.put(`${process.env.REACT_APP_API_URL}/seller/update/${id}`, seller)
    .then((response) => {
     if (response.data.msg === "record successfully updated") {
      console.log("YES");
      swal("Successfully updated", response.data.msg, "success")
      navigate(`/sellerprofile/${seller._id}`)
     }
    })
  }
  updateSeller()
 }


 // Fetch data for single product
 useEffect(() => {
  async function fetchSeller() {
   await axios.get(`${process.env.REACT_APP_API_URL}/seller/${id}`)
    .then((response) => {
     setSeller(response.data)
    })
  }
  fetchSeller()
 }, [])


 return (
  <div>
   <NavbarSeller />
   <div class="row container-fluid">
    <div className='col-md-5 offset-md-1 mt-5'>

     <form className='shadow py-3 px-4 mb-5 bg-body rounded'
      onSubmit={handleSubmit}
     >
      <h3 className='text-center'>Post Product</h3>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Name</label>
       <input type="text" class="form-control"
        name="fullname"
        value={seller.fullname}
        onChange={handleInputs}
        id="exampleFormControlInput1" placeholder="Enter product name" />
      </div>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Email</label>
       <input type="text" class="form-control"
        name='email'
        value={seller.email}
        onChange={handleInputs}
        id="exampleFormControlInput1" placeholder="Enter product Email" />
      </div>
      <div class="mb-4">
       <label for="exampleFormControlInput1" class="form-label">Price</label>
       <input type="text" class="form-control" id="exampleFormControlInput1"
        name='phone'
        value={seller.phone}
        onChange={handleInputs}
        placeholder="Enter product phone" />
      </div>
      <div class="mb-4">
       <label for="exampleFormControlInput1" class="form-label">Image URL</label>
       <input type="text" class="form-control" id="exampleFormControlInput1"
        name='imageURL'
        value={seller.imageURL}
        onChange={handleInputs}
        placeholder="Enter Image Url" />
      </div>
      <div class="d-grid gap-2 mb-4">
       <button class="btn btn-primary" type="submit">Submit</button>
      </div>
     </form>
    </div>
    <div class="col-md-5 offset-md-1 mt-5">
     <div><img class="post-img" src={seller.imageURL} alt="" width={400} height={400} />
     </div>
     <div class="post-list">
      <li>
       Name: {seller.fullname}
      </li>
      <li>
       Email: {seller.email}
      </li>
      <li>
       Price: {seller.phone}
      </li>
     </div>
    </div>
   </div>
  </div>)

}



export default EditSeller;