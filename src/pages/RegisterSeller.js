import React, { useState } from 'react';
import NavbarGeneral from '../components/NavbarGeneral';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterSeller = () => {
  const [seller, setSeller] = useState({
    fullname: '',
    email: '',
    password: '',
    phone: '',
    imageURL: '',
  });

  // Create a function for the handle input
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSeller({ ...seller, [name]: value });
  };

  // Create a function for handling image upload
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSeller({ ...seller, imageURL: reader.result });
    };
  };

  // To navigate to login after registering
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      seller.fullname === '' ||
      seller.email === '' ||
      seller.password === '' ||
      seller.phone === '' ||
      seller.imageURL === ''
    ) {
      swal('Empty fields', 'Fill the required fields', 'error');
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/seller/create`, seller)
        .then((response) => {
          console.log(response);
          swal(
            response.data.msg === 'You have been registered'
              ? 'Successfully Registered'
              : 'Seller already exists',
            response.data.msg,
            response.data.msg === 'You have been registered' ? 'success' : 'error'
          );
          navigate('/loginseller');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <NavbarGeneral />
      <div className="container-fluid register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome, you can become a certified Seller!</h3>
            <p>Create an account under 30 seconds NOW!</p>
            <input type="submit" name="" value="Login" />
            <br />
          </div>
          <div className="col-md-9 register-right">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
              {/* ...existing code... */}
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Apply as a Seller</h3>
                <form className="row register-form" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fullname *"
                        name="fullname"
                        value={seller.fullname}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        name="password"
                        value={seller.password}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        name="email"
                        value={seller.email}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Phone *"
                        name="phone"
                        value={seller.phone}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group">
                      <label>Image URL or Upload *</label>
                      <input
                        type="file"
                        className="form-control"
                        name="imageURL"
                        // value={seller.imageURL}
                        onChange={handleImage}
                      />
                    </div>
                    <input type="submit" className="btnRegister" value="Register" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSeller;
