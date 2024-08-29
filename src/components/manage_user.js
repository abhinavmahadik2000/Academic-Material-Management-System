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

function ManageUser() {
  const user = [
    {
      id: "1",
      name: "Joseph",
      email: "p.maruthi@gmail.comm",
      phoneNumber: "214-226-3786",
      role: "Students 12",
    },
    {
      id: "2",
      name: "Joseph",
      email: "p.maruthi@gmail.comm",
      phoneNumber: "214-226-3786",
      role: "Students 12",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  const handleEdit = (item) => {
    alert("Approved " + item.name);
  };

  const handleDelete = (item) => {
    alert("Deleted  " + item.name + " from Course Compass");
  };

  return (
    <div>
      <Header />
      <SideNav />
      <h1 className="table-header">Manage Users</h1>
      <table id="customers" className="users-table">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.role}</td>
              <td>
                <button class="button button1" onClick={() => handleEdit(item)}>
                  Approve
                </button>
                <button
                  class="button button2"
                  onClick={() => handleDelete(item)}
                >
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Chat />
    </div>
  );
}

export default ManageUser;
