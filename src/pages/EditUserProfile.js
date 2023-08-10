import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert"
import { useNavigate, useParams } from 'react-router-dom';
import NavbarUser from '../components/NavbarUser';

const EditUserProfile = () => {

 const [user, setUser] = useState({
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
  setUser({ ...user, [name]: value })
 }

 // Create a function for handle submit
 const handleSubmit = (e) => {
  e.preventDefault()
  console.log("YES");

  async function updateUser() {
   await axios.put(`${process.env.REACT_APP_API_URL}/users/update/${id}`, user)
    .then((response) => {
     if (response.data.msg === "record successfully updated") {
      console.log("YES");
      swal("Successfully updated", response.data.msg, "success")
      navigate(`/userprofile/${user._id}`)
     }
    })
  }
  updateUser()
 }

 // Fetch data for single product
 useEffect(() => {
  async function fetchUser() {
   await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
    .then((response) => {
     setUser(response.data)
     console.log(response.data);
    })
  }
  fetchUser()
 }, [])


 return (<div>
  <NavbarUser />
  EditUserProfile
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
       value={user.fullname}
       onChange={handleInputs}
       id="exampleFormControlInput1" placeholder="Enter product name" />
     </div>
     <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <input type="text" class="form-control"
       name='email'
       value={user.email}
       onChange={handleInputs}
       id="exampleFormControlInput1" placeholder="Enter product Email" />
     </div>
     <div class="mb-4">
      <label for="exampleFormControlInput1" class="form-label">Price</label>
      <input type="text" class="form-control" id="exampleFormControlInput1"
       name='phone'
       value={user.phone}
       onChange={handleInputs}
       placeholder="Enter product phone" />
     </div>
     <div class="mb-4">
      <label for="exampleFormControlInput1" class="form-label">Image URL</label>
      <input type="text" class="form-control" id="exampleFormControlInput1"
       name='imageURL'
       value={user.imageURL}
       onChange={handleInputs}
       placeholder="Enter Image Url" />
     </div>
     <div class="d-grid gap-2 mb-4">
      <button class="btn btn-primary" type="submit">Submit</button>
     </div>
    </form>
   </div>
   <div class="col-md-5 offset-md-1 mt-5">
    <div><img class="post-img" src={user.imageURL} alt="" width={400} height={400} />
    </div>
    <div class="post-list">
     <li>
      Name: {user.fullname}
     </li>
     <li>
      Email: {user.email}
     </li>
     <li>
      Price: {user.phone}
     </li>
    </div>
   </div>
  </div>
 </div>)
}


export default EditUserProfile;