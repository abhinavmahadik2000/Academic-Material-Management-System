/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
import React from 'react';
import Chat from '../chat';
import HeaderStudent from './header_student';
import SideNavStudent from './sidenav_student';

class StudentGrade extends React.Component {
    
    reportForm() {
        document.getElementById("repoform_std").style.display = "block";
      }
    closeForm1() {
        document.getElementById("repoform_std").style.display = "none";
      }
    render() {
        
        return(
            <><div>
                <HeaderStudent/>
            <SideNavStudent/>
            <section class="dashboard_std">
                <h2> Grades</h2>
                <table id="customers_std" class="users-table_std">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Due</th>
                            <th>Status</th>
                            <th>Score</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Assignment-1</td>
                            <td> September 21 2023</td>
                            <td>Submitted</td>
                            <td>10/10</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Assignment-2</td>
                            <td>October 2 2023</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Assignment-3</td>
                            <td>October 14 2023</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Assignment-4</td>
                            <td>October 30 2023</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td><h4><b>TOTAL</b></h4></td>
                            <td></td>
                            <td></td>
                            <td><h4><b>10/10</b></h4></td>
                            <td><h4><b>A</b></h4></td>
                        </tr>
                    </tbody>
                </table>
                <div class="report_std">
                <button className="report-button_std" onClick={this.reportForm}>Generate Report</button>
                </div>
                <div class="report-popup_std" id="repoform_std">
                    <div>
                        <img src={require('../images/graph.png')} alt="Graph" className="Graph-Image_std" />
                        <button type="button" className="btn cancel" onClick={this.closeForm1}>Close</button>
                        
                    </div>
                </div>
            </section>
            <Chat/>
            </div>
            </>
        )
    }
    
}
export default StudentGrade;
