/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
import React from 'react';
import Chat from '../chat';
import HeaderStudent from './header_student';
import SideNavStudent from './sidenav_student';

    class StudentAssignment extends React.Component {
        
        openForm2() {
            document.getElementById("myForm1_std").style.display = "block";
          }
          
        closeForm2() {
            document.getElementById("myForm1_std").style.display = "none";
          }
        render() {
            return(
                <div>
                    <HeaderStudent/>
                    <SideNavStudent/>
                <section class="dashboard_std">
                    <h2>Assignments</h2>
                    <table id="customers_std" class="users-table_std">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Due</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Assignment-2</td>
                                <td> September 28 2023</td>
                                <td><button class="submit-button_std" onClick={this.openForm2}>Submit</button></td>
                            </tr>
                            <tr>
                                <td>Quiz-2</td>
                                <td>October 2 2023</td>
                                <td><button class="submit-button_std" onClick={this.openForm2}>Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Past Assignments</h2>
                    <table id="customers_std" class="users-table_std">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Due</th>
                             </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>Assignment-1</td>
                            <td> September 21 2023</td>
                        </tr>
                    </tbody>
                </table>

                <div class="submit-popup_std" id="myForm1_std">
                    <form action="/action_page.php" class="file-container_std">
                    <h1>File Upload</h1>
                        <label for="upload"><b>Upload File</b></label>
                        <input type="file" id="myFile_std" name="filename"/>
                        <button type="submit" class="btn">Send</button>
                        <button type='button' class="btn cancel" onClick={this.closeForm2}>Close</button>
                    </form>
                    
                </div>
                
            </section>
            <Chat/>
            </div>

            )
        }
    }
    export default StudentAssignment;
