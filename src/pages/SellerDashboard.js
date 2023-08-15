import React, { useEffect, useState } from 'react';
import NavbarSeller from '../components/NavbarSeller';
import image1 from '../components/images/image1.jpg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Loader from '../components/Loader'; // Make sure to import the Loader component

const SellerDashboard = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
        let data = await response.json();
        setProduct(data);
        setIsLoading(false); // Set isLoading to false after data is fetched
        console.log(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <NavbarSeller />
        <div class='product-container container'>
          <div class='add-product'>
            <Link to='/addproduct' class='btn btn-warning text-white'>
              Add your Product
            </Link>
          </div>
          <div class={`${product.length ? "product" : ""}`}>
            {isLoading ? (
              <Loader /> 
            ) : (
              product.map((items) => {
                return (
                  <li
                    class='item'
                    onClick={() => {
                      navigate(`/viewsingleproduct/${items._id}`);
                    }}
                  >
                    <img class='product-img' src={items.imageURL} alt='' />
                    <div class='data'>
                      <h5 class='description'>{items.description}</h5>
                      <h5 class='name'>{items.name}</h5>
                      <h5 class='price'>{items.price}</h5>
                    </div>

                    <div class='view-add-btn'>
                      <button
                        class='btn btn-primary'
                        onClick={() => {
                          navigate(`/viewsingleproduct/${items._id}`);
                        }}
                      >
                        View
                      </button>
                      
                    </div>
                  </li>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
