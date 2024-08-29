/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
    import React from 'react';
    import { Link } from 'react-router-dom';
    import "../css/student.css"
    // import Homepage from './Home';
    // import Services from './OurServices';
    
    class HeaderStudent extends React.Component {
      render() {
        return (
          <header className="header_std" >
            <div className="logo_navbar_std">
              <h2 className="logo_heading_std">Course Compass | STUDENT</h2>
            </div>
            <div>
              <Link to={'/homepage'} className="nav-button_std">Home</Link>
              <Link to={'/services'} className="nav-button_std">Services</Link>
              <Link to="https://coursecompassgroup7.wordpress.com/" className='nav-button_std'>Blog</Link>
            </div>
          </header>
        );
      }
      
    }
    
    export default HeaderStudent;
    
