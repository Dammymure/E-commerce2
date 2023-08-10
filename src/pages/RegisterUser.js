import React, { useState } from 'react';
import NavbarGeneral from '../components/NavbarGeneral';
import swal from "sweetalert"
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const RegisterUser = () => {

 const [user, setUser] = useState({
  fullname: "",
  email: "",
  password: "",
  phone: "",
  imageURL: "",
 })

 // Create a function for the handle input
 const handleInputs = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setUser({ ...user, [name]: value })
 }

 // To navigate to login in after registering
 const navigate = useNavigate()

 const handleSubmit = (e) => {
  e.preventDefault()

  if (user.fullname === "" || user.email === "" || user.password === "" || user.phone === "" || user.imageURL === "") {
   swal("Empty fields", "Fill the require fields", "error")
  }
  else {
   axios.post(`${process.env.REACT_APP_API_URL}/users/create`, user)
    .then((response) => {
     swal(response.data.msg === "You have been registered" ? "Succesfully Registered" : "Seller already exists",
      response.data.msg,
      response.data.msg === "You have been registered" ? "success" : "error")
     navigate("/login")
    }).catch((err) => {
     console.log(err)
    })
  }
 }


 return (<div>
  <NavbarGeneral />
  <div class="container-fluid register">
   <div class="row">
    <div class="col-md-3 register-left">
     <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
     <h3>Welcome</h3>
     <p>Create an account under 30 seconds NOW!</p>
     <input type="submit" name="" value="Login" /><br />
    </div>
    <div class="col-md-9 register-right">
     <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
     </ul>
     <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
       <h3 class="register-heading">Apply as a User</h3>

       <form class="row register-form" onSubmit={handleSubmit}>
        <div class="col-md-6">
         <div class="form-group">
          <input type="text" class="form-control" placeholder="Fullname *"
           name="fullname"
           value={user.fullname}
           onChange={handleInputs} />
         </div>
         <div class="form-group">
          <input type="password" class="form-control" placeholder="Password *"
           name="password"
           value={user.password}
           onChange={handleInputs} />
         </div>
        </div>
        <div class="col-md-6">
         <div class="form-group">
          <input type="email" class="form-control" placeholder="Your Email *"
           name="email"
           value={user.email}
           onChange={handleInputs} />
         </div>
         <div class="form-group">
          <input type="text" class="form-control" placeholder="Your Phone *"
           name="phone"
           value={user.phone}
           onChange={handleInputs} />
         </div>
         <div class="form-group">
          <input type="text" class="form-control" placeholder="Image URL *"
           name="imageURL"
           value={user.imageURL}
           onChange={handleInputs} />
         </div>
         <button type='submit' class="btn btn-primary btnRegister">Register</button>
         {/* <input type="submit" class="btnRegister" value="Register" /> */}
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>

  </div>
 </div>);
}


export default RegisterUser;