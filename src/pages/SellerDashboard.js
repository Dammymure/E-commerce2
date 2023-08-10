import React, { useEffect, useState } from 'react';
import NavbarSeller from '../components/NavbarSeller';
import image1 from "../components/images/image1.jpg"
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios';
import swal from "sweetalert"

const SellerDashboard = () => {
 const [product, setProduct] = useState([])
 const { id } = useParams()
 const navigate = useNavigate()

 useEffect(() => {
  async function fetchProducts() {
   let response = await fetch(`${process.env.REACT_APP_API_URL}/products`)
   let data = await response.json()
   setProduct(data)
   console.log(data);
  }
  fetchProducts();
 }, [])

 return (
  <div>
   <div>
    <NavbarSeller />
    <div class='product-container container'>
     <div class="add-product">
      <Link to="/addproduct" class="btn btn-warning text-white">Add your Product</Link>
     </div>
     <div class="product">
      {
       product.map((items) => {
        return (
         <li class='item' onClick={() => {
          navigate(`/viewsingleproduct/${items._id}`)
         }}>
          <img class="product-img" src={items.imageURL} alt="" />
          <div class="data">
           <h5 class="description">{items.description}</h5>
           <h5 class="name">{items.name}</h5>
           <h5 class="price">{items.price}</h5>
          </div>

          <div class="view-add-btn"><button class="btn btn-primary"
           onClick={() => {
            navigate(`/viewsingleproduct/${items._id}`)
           }}
          >View
          </button>
           {/* <button class="btn btn-dark">Add</button> */}
          </div>

         </li>
        )
       })
      }


      {/* <li class=''>
      1
     </li>
     <li class=''>
      1
     </li>
     <li class=''>
      1
     </li> */}
     </div>

    </div>


   </div>
  </div>)

}


export default SellerDashboard;

// {/* <div className='row justify-content-center mt-5'> */}
 // <div className='col-md-5'>
 //  <div class="card">
 //   <div class="card-body text-dark text-center">
 //    <h4 class="card-title text-black text-center mb-4">Welcome to your Dashboard, {seller.fullname}</h4>
 //    <img src={seller.imageURL} alt='' width={400} height={400} />
 //    <h5 className='mt-3'>FULLNAME:  {seller.fullname}</h5>
 //    <h5 className='mt-3'>PHONE:  {seller.phone}</h5>
 //    <h5>EMAIL:  {seller.email}</h5>
 //    {/* <Link to={`/editadminprofile/${adminUser._id}`} class="btn btn-primary">Edit Profile</Link> */}
 //   </div>
 //  </div>
 // </div>
// {/* </div> */}