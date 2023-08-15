import React, { useState } from 'react';
import NavbarGeneral from '../components/NavbarGeneral';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterUser = () => {
  const [user, setUser] = useState({
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
    setUser({ ...user, [name]: value });
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
      setUser({ ...user, imageURL: reader.result });
    };
  };

  // To navigate to login after registering
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.fullname === '' ||
      user.email === '' ||
      user.password === '' ||
      user.phone === '' ||
      user.imageURL === ''
    ) {
      swal('Empty fields', 'Fill the required fields', 'error');
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/create`, user)
        .then((response) => {
          swal(
            response.data.msg === 'You have been registered'
              ? 'Successfully Registered'
              : 'User already exists',
            response.data.msg,
            response.data.msg === 'You have been registered' ? 'success' : 'error'
          );
          navigate('/login');
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
            <h3>Welcome</h3>
            <p>Create an account under 30 seconds NOW!</p>
            <Link to="/login">
              <button className="log-btn">Login</button>
            </Link>
            <br />
          </div>
          <div className="col-md-9 register-right">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
              {/* ...existing code... */}
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Apply as a User</h3>
                <form className="row register-form" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fullname *"
                        name="fullname"
                        value={user.fullname}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        name="password"
                        value={user.password}
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
                        value={user.email}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Phone *"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="form-group">
                      <label>Image URL or Upload *</label>

                      <input
                        type="file"
                        className="form-control"
                        name="imageURL"
                        onChange={handleImage}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btnRegister">
                      Register
                    </button>
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

export default RegisterUser;
