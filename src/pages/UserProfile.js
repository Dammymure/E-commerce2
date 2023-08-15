import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavbarUser from '../components/NavbarUser';
import Loader from '../components/Loader';

const UserProfile = () => {
 const [user, setUser] = useState(null); // Initialize user as null
 const [isLoading, setIsLoading] = useState(true); // Add isLoading state
 const navigate = useNavigate();
 const { id } = useParams();

 // Fetch the API for individual product
 useEffect(() => {
  async function fetchSingleUser() {
   try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`);
    const data = await response.json();
    setUser(data);
    setIsLoading(false); // Set isLoading to false after data is fetched
    console.log(data);
   } catch (error) {
    console.error('Error fetching user data:', error);
   }
  }
  fetchSingleUser();
 }, [id]); 

 return (
  <div>
   <NavbarUser />
   {isLoading ? (
    <Loader /> 
   ) : (
    <div className='row justify-content-center mt-5 container'>
     <div className='col-md-5'>
      <div class='card'>
       <div class='card-body text-dark text-center'>
        <img className='prof-img' src={user.imageURL} alt='' />
        <h5 className='mt-3'>Name: {user.fullname}</h5>
        <h5>Email: {user.email}</h5>
        <h5>Phone: {user.phone}</h5>
        <div class=''>
         <Link to={`/edituserprofile/${id}`} class='btn btn-warning text-white m-2'>
          Edit User Profile
         </Link>
        </div>
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default UserProfile;
