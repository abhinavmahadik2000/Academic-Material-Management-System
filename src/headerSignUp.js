import React from 'react';
import { Link } from 'react-router-dom';
import QAO from './components/qao_admin';
import Student from './components/students_admin';


class HeaderSignUp extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo_navbar">
          <h2 className="logo_heading">Course Compass | Sign Up</h2>
        </div>
        <div>
        <button className="nav-button"><Link to="/admin/student" className="no-underline">Home</Link></button>
            <button className="nav-button"><Link to="/admin/qao" className="no-underline">Services</Link></button>
            <button className="nav-button"><Link to="/admin/qao" className="no-underline">Login</Link></button>
        </div>
      </header>
    );
  }
}

export default HeaderSignUp;
