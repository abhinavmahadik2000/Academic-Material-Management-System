import React, { useEffect, useState } from "react";
import "./css/contactUs.css";
import axios from "axios";
import Footer from "./components/footer_admin";
import HeaderContactUs from "./header_contactUs";

function ContactUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/issueResolution")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  function handleContactUs(e) {
    const id = data.length + 1;
    axios
      .post("http://localhost:3000/issueResolution/", {
        id: id,
        name: e.currentTarget[0].value,
        email: e.currentTarget[1].value,
        subject: e.currentTarget[2].value,
        message: e.currentTarget[3].value,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <HeaderContactUs />
      <div class="container">
        <h2>Contact Us</h2>
        <form id="contactForm" onSubmit={(e) => handleContactUs(e)}>
          <div class="form-group">
            <label for="Name">Name:</label>
            <input type="text" id="Name" name="Name" required />
          </div>
          <div class="form-group">
            <label for="Email">Email:</label>
            <input type="email" id="Email" name="Email" required />
          </div>
          <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div class="form-group">
            <label for="Message">Message:</label>
            <input type="textarea" id="Message" name="Message" />
          </div>
          <div class="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
