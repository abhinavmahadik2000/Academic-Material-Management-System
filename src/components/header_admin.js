/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */

import React from 'react';
import '../css/admin.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo_navbar">
          <h2 className="logo_heading">Course Compass | Admin</h2>
        </div>
        <div>
        <button className="nav-button"><Link to="/admin" className="no-underline">Home</Link></button>
        <button className="nav-button"><Link to="/admin/" className="no-underline">Contact</Link></button>
        <button className="nav-button"><Link to="/admin/" className="no-underline">About</Link></button>
        <button className="nav-button"><Link to="/admin/qao" className="no-underline">Services</Link></button>
        <button className="nav-button"><Link to="/admin" className="no-underline">Logout</Link></button>
        </div>
      </header>
    );
  }
}

export default Header;
