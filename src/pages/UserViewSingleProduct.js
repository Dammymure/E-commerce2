import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavbarUser from '../components/NavbarUser';
import axios from 'axios';
import swal from "sweetalert"

const UserViewSingleProduct = () => {
 const [product, setProduct] = useState([])
 const navigate = useNavigate()
 const { id } = useParams()

 // Fetch the API for individual product

 useEffect(() => {
  async function fetchSingleProduct() {
   const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
   const data = await response.json()
   setProduct(data)
   console.log(data);
  }
  fetchSingleProduct()
 }, [])

 return (<div>
  <NavbarUser />
  <div className='row justify-content-center'>
   <div className='col-md-5 offset-md-1'>
    <div class="card">
     <div class="card-body text-dark text-center">
      <img src={product.imageURL} alt='' width={400} height={400} />
      <h5 className='mt-3'>Name:  {product.name}</h5>
      <h5>Description: {product.description}</h5>
      <h5>Price:  {product.price}</h5>
      <div class="">
       <Link to={`/editproduct/${product._id}`} class="btn btn-warning text-white m-2">Edit Product</Link>


       {/* <button class="btn btn-danger m-2" onClick={() => deleteProduct(product._id)}>Delete</button> */}
      </div>

     </div>
    </div>
   </div>
   <div class="col-md-5 offset-md-1 mt-5">

   </div>
  </div>
 </div>);
}


export default UserViewSingleProduct;