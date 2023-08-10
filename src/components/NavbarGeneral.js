import React from 'react';
import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarGeneral = () => {
 return (<>
  {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar scroll</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Link</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav> */}
  <div class="navbar-general">
   <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
     <a class="navbar-brand mt-2 mt-lg-0" >
      <img
       src=""
       height="15"
       alt="Logo"
       loading="lazy"
      />
     </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
     </button>

     <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
       <li class="nav-item">
        <Link to="/registeruser" className="nav-link active" aria-current="page" >SignUp</Link>
       </li>
       <li class="nav-item">
        <Link to="/login" className="nav-link active" aria-current="page" >Login</Link>
       </li>
       <li class="nav-item">
        <Link to="/registerseller" className="nav-link active" aria-current="page" >Register as a Seller</Link>
       </li>
       <li class="nav-item">
        <Link to="/loginseller" className="nav-link active" aria-current="page" >Login Seller</Link>
       </li>
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
      <div class="dropdown">
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
        {/* <FontAwesomeIcon icon="fa-duotone fa-user" beatFade style={{ "--fa-primary-color": "#05b9f5", "--fa-secondary-color": "#05b9f5", }} /> */}
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
      </div>
     </div>
    </div>
   </nav>
  </div>
 </>);
}


export default NavbarGeneral;