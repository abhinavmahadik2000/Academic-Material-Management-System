import React from 'react';
import { Link } from 'react-router-dom';
import "../css/student.css";
import Chat from '../chat';
import HeaderStudent from './header_student';
import SideNavStudent from './sidenav_student';
class StudentDashboard extends React.Component {
    
  render() {
    return(
    	<div>
            <HeaderStudent/>
            <SideNavStudent/>
        <div class="dropdown_std">
            <label for="terms">Select Term:</label>
            <select name="terms" id="term">
                <option value="fall22">Fall 2022</option>
                <option value="spring23">Spring 2023</option>
                <option value="summer23">Summer 2023</option>
                <option value="fall23">Fall 2023</option>
            </select>
        </div><div class="column-container_std">
                <div class=" column_std">
                    <div class="box_std">
                        <div class="box1_std">
                            <h3>CSE 5335 001<div>WEB DATA MANAGEMENT</div></h3>
                            <Link to="/Syllabus">
                            <button type='button' className='button1_std'>Syllabus</button>
                            </Link>
                            <Link to="/Assignment">
                            <button className='button1_std'>Assignments</button>
                            </Link>
                            <Link to="/Grade">
                            <button type='button' className='button1_std' >Grade</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div class=" column_std">
                    <div class="box_std">
                        <div class="box1_std" >
                            <h3>CSE 5336 004<div> DATA MINING </div></h3>
                            <Link to="/Syllabus">
                            <button type='button' className='button1_std'>Syllabus</button>
                            </Link>
                            <Link to="/Assignment">
                            <button className='button1_std'>Assignments</button>
                            </Link>
                            <Link to="/Grade">
                            <button type='button' className='button1_std' >Grade</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="column_std">
                    <div class="box_std">
                        <div class="box1_std">
                            <h3>CSE 6335 001<div>SOFTWARE DESIGN PATTERNS</div></h3>
                            <Link to="/Syllabus">
                            <button type='button' className='button1_std'>Syllabus</button>
                            </Link>
                            <Link to="/Assignment">
                            <button className='button1_std'>Assignments</button>
                            </Link>
                            <Link to="/Grade">
                            <button type='button' className='button1_std' >Grade</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Chat/>
            </div>
        )
    }
}
export default StudentDashboard;
