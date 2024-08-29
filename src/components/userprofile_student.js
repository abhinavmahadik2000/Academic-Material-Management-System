/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
    import React from 'react';
    import "../css/student.css";
    import Chat from '../chat';
import HeaderStudent from './header_student';
import SideNavStudent from './sidenav_student';

class StudentProfile extends React.Component{
    openForm1() {
        document.getElementById("myForm1_std").style.display = "block";
      }
      
    closeForm1() {
        document.getElementById("myForm1_std").style.display = "none";
      }
      render() {
        return(
            <div>
              <HeaderStudent/>
            <SideNavStudent/>
            <section class="dashboard_std">
    <div class="student-profile_std py-4">
      <div class="container_std">
        <div class="column-container_std">
          <div class="column_std">
            <div class="card_std shadow-sm">
              <div class="card-header_std bg-transparent text-center">
              <img src={require('../images/userimg.jpeg')} alt="user profile" className="Profile-Image_std" />
                <h3>User Name</h3>
              </div>
              <div class="card-body_std">
                <p class="mb-0"><strong>Student ID:</strong>1003473628</p>
                <p class="mb-0"><strong>Email:</strong>wsx2342@mavs.uta.edu</p>
                <p class="mb-0"><strong>Phone:</strong>+1 9423682719</p>
                <button className="open-button1_std" onClick={this.openForm1}>Edit</button>
              </div>
            </div>
          </div>
          <div class="column_std">
            <div class="card_std shadow-sm">
              <div class="card-header_std bg-transparent border-0">
                <h3>General Information</h3>
              </div>
              <div class="card-body_std pt-0">
                <table class="table_std table-bordered_std">
                  <tr>
                    <th width="30%">Degree</th>
                    <td width="2%">:</td>
                    <td>Masters</td>
                  </tr>
                  <tr>
                    <th width="30%">Academic Year </th>
                    <td width="2%">:</td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <th width="30%">Gender</th>
                    <td width="2%">:</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <th width="30%">Address</th>
                    <td width="2%">:</td>
                    <td>UTA blvd</td>
                  </tr>
                  <tr>
                    <th width="30%">Blood Group</th>
                    <td width="2%">:</td>
                    <td>B+</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="edit-popup_std" id="myForm1_std">
    <form action="/action_page.php" class="form-container1_std">
        <h1>Edit User</h1>

        <label for="name"><b>User Name</b></label>
        <input type="text" placeholder="Name" name="name" required></input>
        <label for="id"><b>Student ID</b></label>
        <input type="number" placeholder="100*******" name="id" maxlength="10" required></input>
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="@mavs.uta.edu" name="mail" required></input>
        <label for="phone"><b>Phone No</b></label>
        <input type="number" placeholder="+1 " name="phone" required maxlength="10"></input>
        <label for="address"><b>Address</b></label>
        <input type="textarea" placeholder="Address" name="address" required></input>

        <button type="submit" class="btn_std">Update</button>
        <button type="button" className="btn_std cancel" onClick={this.closeForm1}>Close</button>
    </form>
    </div>
    
  </section>
  <Chat/>
  </div>
        )
      }
}



export default StudentProfile;
