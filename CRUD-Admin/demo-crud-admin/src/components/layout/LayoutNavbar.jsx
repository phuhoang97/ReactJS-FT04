import React from "react";
import { NavLink } from "react-router-dom";

function LayoutNavbar() {
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
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LayoutNavbar;
