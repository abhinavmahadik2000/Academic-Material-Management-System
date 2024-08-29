/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
import React from 'react';
import Chat from '../chat';
import "../css/student.css";
import HeaderStudent from './header_student';
import SideNavStudent from './sidenav_student';

class StudentFeedback extends React.Component {
    render() {
        return(
            <><div>
            <HeaderStudent/>
            <SideNavStudent/>
                <div className='feedback_std'>
                <legend ><h3>Feedback Form</h3></legend>
                <label>Name:</label>
                <input type="text" name="User-Name" required />
                <label>Student ID:</label><br />
                <input type="number" name="id" required /><br />
                <label>Email:</label><br />
                <input type="Email" name="mail" required /><b />
                <label>Feedback:</label><br />
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                <input type="submit" value="Submit"/>
                    <input type="submit" value="Reset"></input>
                </div>
                
                <Chat/>
                </div></>
        )
    }
}
export default StudentFeedback;
