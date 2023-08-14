import React from 'react';
import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarGeneral = () => {
    return (<>
        <div class="navbar-general">
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand mt-2 mt-lg-0" >
                        <img
                            src="https://img.icons8.com/?size=512&id=sFFBQN8kzSOS&format=png"
                            width="50px"
                            height="50px"
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


                    {/* <div class="d-flex align-items-center">
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
     </div> */}
                </div>
            </nav>
        </div>
    </>);
}


export default NavbarGeneral;