/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */

import React, { useEffect, useState } from "react";
import "../css/admin.css";
import Header from "./header_admin";
import SideNav from "./sidenav_admin";
import Chat from "../chat";

function IssueResolutionAdmin() {
  const issueResolution = [
    {
      id: "5",
      name: "mm",
      email: "ponugupatimaruthi@gmail.com",
      subject: "hugj",
      message: "uigiugu",
      status: "Resolved",
    },
    {
      id: 4,
      name: "mm",
      email: "ponugupatimaruthi@gmail.com",
      subject: "num",
      message: "87897987",
      status: "Resolved",
    },
    {
      id: 3,
      name: "test123445",
      email: "ponugupatimaruthi@gmail.com",
      subject: "hugj",
      message: "87897987",
      status: "Pending",
    },
  ];

  const [data, setData] = useState(issueResolution);

  function handleReply(item) {
    alert("Succesfully Replied " + item.name);
    window.location.reload();
  }

  function handleResolve(item) {
    item.status = "Resolved";
    alert("Succesfully resolved " + item.name + " issue");
  }

  return (
    <div>
      <Header />
      <SideNav />
      <h1 className="table-header">Issue Resolution</h1>
      <table id="customers" className="users-table">
        <thead>
          <tr>
            <th>Issue Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody>
          {issueResolution.map((item, index) =>
            item.status === "Resolved" ? (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
                <td>Resolved</td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
                <td>
                  <button
                    class="button button1"
                    onClick={() => handleReply(item)}
                  >
                    Reply
                  </button>
                  <button
                    class="button button2"
                    onClick={() => handleResolve(item)}
                  >
                    Resolve
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

export default IssueResolutionAdmin;
