import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import NavbarSeller from '../components/NavbarSeller';
import Loader from '../components/Loader';

const SellerProfile = () => {
 const [seller, setSeller] = useState(null); 
 const [isLoading, setIsLoading] = useState(true); 
 
 const navigate = useNavigate();
 const { id } = useParams();

 // Fetch the API for individual seller
 useEffect(() => {
  async function fetchSingleSeller() {
   try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/seller/${id}`);
    const data = await response.json();
    setSeller(data);
    setIsLoading(false);
    console.log(data);
   } catch (error) {
    console.error('Error fetching seller data:', error);
   }
  }
  fetchSingleSeller();
 }, [id]); 

 return (
  <div>
   <NavbarSeller />
   {isLoading ? ( 
    <Loader /> 
   ) : (
    <div className='row justify-content-center mt-5'>
     <div className='col-md-5'>
      <div class='card'>
       <div class='card-body text-dark text-center'>
        <img src={seller.imageURL} alt='' className='prod-img' />
        <h5 className='mt-3'>Name: {seller.fullname}</h5>
        <h5>Email: {seller.email}</h5>
        <h5>Phone: {seller.phone}</h5>
        <div class=''>
         <Link to={`/editseller/${id}`} class='btn btn-warning text-white m-2'>
          Edit Seller Profile
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

export default SellerProfile;
