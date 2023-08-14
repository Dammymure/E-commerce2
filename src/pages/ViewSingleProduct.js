import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavbarSeller from '../components/NavbarSeller';
import axios from 'axios';
import swal from "sweetalert"


const ViewSingleProduct = () => {
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


 const deleteProduct = (id) => {
  if (window.confirm("Are you sure you want to delete user?")) {
   axios.delete(`${process.env.REACT_APP_API_URL}/products/delete/${product._id}`)
    .then((response) => {
     console.log(response);
     navigate("/sellerdashboard")
     swal("Product deleted", response.data.msg, "success")
    })
    .catch((err) => {
     console.log(err);
    })
  }
 }

 return (
  <div>
   <NavbarSeller />
   <div className='row justify-content-center mt-5'>
    <div className='col-md-5'>
     <div class="card">
      <div class="card-body text-dark text-center">
       <img className='prod-img' src={product.imageURL} alt=''/>
       <h5 className='mt-3'>Name:  {product.name}</h5>
       <h5>Description: {product.description}</h5>
       <h5>Price:  {product.price}</h5>
       <div class="">
        <Link to={`/editproduct/${product._id}`} class="btn btn-warning text-white m-2">Edit Product</Link>


        <button class="btn btn-danger m-2" onClick={() => deleteProduct(product._id)}>Delete</button>
       </div>

      </div>
     </div>
    </div>
   </div>
  </div>);
}


export default ViewSingleProduct;