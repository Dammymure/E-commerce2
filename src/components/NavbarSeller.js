import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const NavbarSeller = () => {
 const navigate = useNavigate()
 const seller = JSON.parse(localStorage.getItem("seller"));
 // console.log(seller);
 const { id } = useParams()
 return (
  <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
     <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
     >
      <i class="fas fa-bars"></i>
     </button>

     <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0" >
       <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="15"
        alt="MDB Logo"
        loading="lazy"
       />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       {/* <li class="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
            </li> */}
       {/* <li class="nav-item">
              <Link to="/registeruser" className="nav-link active" aria-current="page" >SignUp</Link>
            </li> */}
       {/* <li class="nav-item">
              <Link to="/login"
                className="nav-link active"
                aria-current="page"
              >Login as User</Link>
            </li> */}

      </ul>
     </div>

     <div class="d-flex align-items-center">
      <a class="text-reset me-3" >
       <i class="fas fa-shopping-cart"></i>
      </a>

      <div class="dropdown">
       <a
        class="text-reset me-3 dropdown-toggle hidden-arrow"

        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
       >
        <i class="fas fa-bell"></i>
        <span class="badge rounded-pill badge-notification bg-danger">1</span>
       </a>
       <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
       >
        <li>
         <a class="dropdown-item" >Some news</a>
        </li>
        <li>
         <a class="dropdown-item" >Another news</a>
        </li>
        <li>
         <a class="dropdown-item" >Something else here</a>
        </li>
       </ul>
      </div>

      <div class="btn-group dropstart">
       <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        data-bs-toggle="dropdown"
        id="navbarDropdownMenuAvatar"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
       >
        <img
         src={seller.imageURL}
         class="rounded-circle"
         height="25"
         alt="Black and White Portrait of a Man"
         loading="lazy"
        />
       </a>
       <ul class="dropdown-menu">
        <li>
         <Link to={`/sellerprofile/${seller._id}`} class="dropdown-item">Profile</Link>
        </li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <hr />
        <li
         onClick={() => {
          localStorage.removeItem("seller")
          navigate("/")
         }}>
         <a class="dropdown-item" href="#">Log out</a>
        </li>
       </ul>
      </div>
      {/* <div class="dropdown">
      <a
       class="dropdown-toggle d-flex align-items-center hidden-arrow"

       id="navbarDropdownMenuAvatar"
       role="button"
       data-mdb-toggle="dropdown"
       aria-expanded="false"
      >
       <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-circle"
        height="25"
        alt="Black and White Portrait of a Man"
        loading="lazy"
       />
      </a>
      <ul
       class="dropdown-menu dropdown-menu-end"
       aria-labelledby="navbarDropdownMenuAvatar"
      >
       <li>
        <a class="dropdown-item" >My profile</a>
       </li>
       <li>
        <a class="dropdown-item" >Settings</a>
       </li>
       <li>
        <a class="dropdown-item" >Logout</a>
       </li>
      </ul>
     </div> */}
     </div>
    </div>
   </nav>
  </div>);
}



export default NavbarSeller;