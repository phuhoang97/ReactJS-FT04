import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function LayoutNavbar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand'>Navbar</a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link active' aria-current='page'>
                  Home Page
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  About Page
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className='nav-link'>
                  Contact Page
                </NavLink>
              </li>
            </ul>
            <Link to='/user/add' style={{ marginRight: "50px" }}>
              <Button variant='outline-success'>Add User</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LayoutNavbar;
