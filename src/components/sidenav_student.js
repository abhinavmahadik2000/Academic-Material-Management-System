/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
    import React from 'react';
    import { Link } from 'react-router-dom';
    import StudentDashboard from '../components/dashboard_student';
    import StudentProfile from '../components/userprofile_student';
    import StudentFeedback from '../components/feedback_student';
    import '../App.css';
    function SideNavStudent({ sectionName }) {
      
        return (
          <div>
            <div id="mySidenav_std" className="sidenav_std">
            
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/feedback">Feedback</Link>
            </div>
            <div className="content">
              {sectionName === 'Dashboard' && <StudentDashboard />}
              {sectionName === 'Feedback' && <StudentFeedback />}
              {sectionName === 'Userprofile' && <StudentProfile />}
            </div>
          </div>
        );
      }
      
    
    
    export default SideNavStudent;
    
    
