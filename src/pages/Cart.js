import React, { useState, useEffect } from 'react';

const Cart = ({ cart, setCart }) => {
 const [price, setPrice] = useState(0)

 const handleChange = (item, d) => {
  const ind = cart.indexOf(item);
  const arr = cart
  arr[ind].quantity += d;

  if (arr[ind].quantity === 0) arr[ind].quantity = 1;
  setCart([...arr])
 };


 const handleRemove = (id) => {
  const arr = cart.filter((item) => item._id !== id);

  setCart(arr)
  handlePrice()
 }

 const handlePrice = () => {
  let ans = 0;
  cart.map((item) => (
   ans += item.quantity * item.price));
  setPrice(ans);
 }

 useEffect(() => {
  handlePrice()
 })

 const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
 };

 useEffect(() => {
  saveCartToLocalStorage()
 })

 const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
   setCart(JSON.parse(savedCart));
  }
 };

 useEffect(() => {
  loadCartFromLocalStorage();
 }, []);

 // useEffect(() => {
 //  const handleBeforeUnload = (event) => {
 //   event.preventDefault();
 //   event.returnValue = '';
 //  };

 //  window.addEventListener('beforeunload', handleBeforeUnload);

 //  return () => {
 //   window.removeEventListener('beforeunload', handleBeforeUnload);
 //  };
 // }, []);

 return (<div>
  <article>
   {cart?.map((item) => (
    <div className="cart_box" key={item._id}>
     <div className="cart_img">
      <img src={item.imageURL} alt="" />
      <p>{item.description}</p>
      <p>{item.name}</p>
      <p>{item.quantity}</p>
     </div>
     <div>

      <button onClick={() => handleChange(item, 1)}>+</button>
      <button>{item.quantity}</button>
      <button onClick={() => handleChange(item, -1)}>-</button>
     </div>
     <div>
      <span>{item.price}</span>
      <button onClick={() => handleRemove(item._id)}>Remove</button>
     </div>
    </div>

   ))}
   <div className="total">
    <span>Total Price of your Cart</span>
    <span>Naira - {price}</span>
   </div>
   <div>
    <h2>{price} </h2>
   </div>
  </article>
 </div>);
}


export default Cart;