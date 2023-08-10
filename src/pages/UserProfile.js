import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavbarUser from '../components/NavbarUser';

const UserProfile = () => {

 const [user, setUser] = useState([])
 const navigate = useNavigate()
 const { id } = useParams()

 // Fetch the API for individual product

 useEffect(() => {
  async function fetchSingleUser() {
   const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
   const data = await response.json()
   setUser(data)
   console.log(data);
  }
  fetchSingleUser()
 }, [])

 return (<div>
  <NavbarUser />
  <div className='row justify-content-center mt-5'>
   <div className='col-md-5'>
    <div class="card">
     <div class="card-body text-dark text-center">
      <img src={user.imageURL} alt='' width={400} height={400} />
      <h5 className='mt-3'>Name:  {user.fullname}</h5>
      <h5>Email: {user.email}</h5>
      <h5>Phone:  {user.phone}</h5>
      <div class="">
       <Link to={`/edituserprofile/${id}`} class="btn btn-warning text-white m-2">Edit User Profile</Link>


       {/* <button class="btn btn-danger m-2" onClick={() => deleteProduct(product._id)}>Delete
       </button> */}
      </div>

     </div>
    </div>
   </div>
  </div>
 </div>)
}


export default UserProfile;