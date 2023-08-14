import React, { useEffect, useState } from 'react';
import NavbarUser from '../components/NavbarUser';
import { Link, useParams, useNavigate } from "react-router-dom"
import Loader from '../components/Loader';


const UserDashboard = ({ handleClick, size }) => {
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
      <NavbarUser size={size} />
      <div class='product-container container'>
        <div class={`${product.length ?"product":""}`}>
          {
            product.length?product.map((items) => {
              return (
                <li class='item' handleClick={handleClick}>
                  <img class="product-img" src={items.imageURL} alt="" />
                  <div class="data">
                    <h5 class="description">{items.description}</h5>
                    <h5 class="name">{items.name}</h5>
                    <h5 class="price" id="price">{items.price}</h5>
                  </div>

                  <div class="view-add-btn">
                    <button class="btn btn-primary"
                      onClick={() => {
                        navigate(`/userviewsingleproduct/${items._id}`)
                      }}
                    >View
                    </button>
                    <button class="btn btn-dark" onClick={() => handleClick(items)}>Add to cart</button>
                  </div>

                </li> 
              )
            })
          :<Loader/>}




        </div>

      </div>
    </div>);
}

export default UserDashboard;