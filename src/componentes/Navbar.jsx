import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

<nav className=" navbar-expand-lg bg-info-subtle ">
  <div className="container-fluid p-4 fs-5">
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="nav">
        <li className="nav-item">
            <Link className='nav-link text-black fw-medium' to="/">
            <img width="45" height="45" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-VIP-Room-birthday-party-goofy-flat-kerismaker.png" alt="external-VIP-Room-birthday-party-goofy-flat-kerismaker"/>
                Home
            </Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link text-black fw-medium' to="/contacto">
        <img width="40" height="40" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-VIP-invitation-birthday-party-goofy-flat-kerismaker.png" alt="external-VIP-invitation-birthday-party-goofy-flat-kerismaker"/>
             Contacto
        </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>


  );
};

export default Navbar;