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

function QAO() {
  const instructor = [
    {
      id: "1",
      name: "Joseph",
      email: "p.maruthi@gmail.comm",
      phoneNumber: "214-226-3786",
      role: "QAO",
    },
    {
      id: "2",
      name: "John",
      email: "p.maruthi@gmail.comm",
      phoneNumber: "214-226-3786",
      role: "QAO",
    },
    {
      id: "3",
      name: "Vicky",
      email: "p.maruthi@gmail.comm",
      phoneNumber: "214-226-3786",
      role: "QAO",
    },
    {
      id: "4",
      name: "Kushal",
      email: "p.maruthi@gmail.comm",
      phoneNumber: "214-226-3786",
      role: "QAO",
    },
  ];

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [editId, setEditId] = useState(-1);

  const handleEdit = (item) => {
    setEditId(item.id);
    setName(item.name);
  };

  const handleUpdate = () => {
    alert("Succesfully updated " + name);
    window.location.reload();
  };

  const handleDelete = (id) => {
    alert("Succesfully Deleted " + name + "from Course Compass");
  };

  return (
    <div>
      <Header />
      <SideNav />
      <h1 className="table-header">QAO</h1>
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
          {instructor.map((item, index) =>
            item.id === editId ? (
              <tr>
                <td>{item.id}</td>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={handleUpdate}>Update</button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.role}</td>
                <td>
                  <button
                    class="button button1"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    class="button button2"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <Chat />
    </div>
  );
}

export default QAO;
