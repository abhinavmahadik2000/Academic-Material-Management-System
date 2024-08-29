/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */

import React from "react";
import { Link } from "react-router-dom";
import ManageUser from "./manage_user";
import "../css/admin.css";
import Dashboard from "./dashboard_admin";

function SideNav({ sectionName }) {
  return (
    <div>
      <div id="sideBar" className="sideBar">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/manage-user">Manage User</Link>
        <Link to="/admin/user-permission">User Permission</Link>
        <Link to="/admin/student">Students</Link>
        <Link to="/admin/instructor">Instructor</Link>
        <Link to="/admin/qao">QAO</Link>
        <Link to="/admin/program-coordinator">Program Coordinator</Link>
        <Link to="/admin/issue-resolution">Issue Resolution</Link>
      </div>
      <div className="content">
        {sectionName === "Dashboard" && <Dashboard/>}
        {sectionName === "Manage User" && <ManageUser />}
      </div>
    </div>
  );
}

export default SideNav;
