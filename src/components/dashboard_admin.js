/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */

import React, { useEffect, useState } from "react";
import "../css/admin.css";
import axios from "axios";
import Header from "./header_admin";
import SideNav from "./sidenav_admin";
import Chat from "../chat";

function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [instructorData, setInstructorData] = useState([]);
  const [qaoData, setQAOData] = useState([]);
  const [programCoordinatorData, setProgramCoordinatorData] = useState([]);
  const [issueResolutionData, setIssueResolutionData] = useState([]);

  return (
    <div>
      <Header />
      <SideNav />

      <section class="dashboard second-section">
        <div class="dashboard-header">
          <h2>Dashboard</h2>
        </div>
        <div class="performance-metrics">
          <div class="metric">
            <h3>Total number of User</h3>
            <p>10</p>
          </div>
          <div class="metric">
            <h3>Number of Issues</h3>
            <p>13</p>
          </div>
        </div>

        <div class="performance-metrics">
          <div class="metric">
            <h3>Number of Students</h3>
            <p>125</p>
          </div>
          <div class="metric">
            <h3>Number of Instructors</h3>
            <p>70</p>
          </div>
        </div>

        <div class="performance-metrics">
          <div class="metric">
            <h3>Number of QAO</h3>
            <p>40</p>
          </div>
          <div class="metric">
            <h3>Number of Program Coordinator</h3>
            <p>10</p>
          </div>
        </div>
      </section>
      <Chat />
    </div>
  );
}

export default Dashboard;
