import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/signup_candidate.css";
import Footer from "./components/footer_admin";
import HeaderSignUp from "./headerSignUp";

const SignupCandidate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  function handleSubmitCandidate(e) {
    e.preventDefault();
    let selection = document.querySelector("select");
    let selectedRole = selection.options[selection.selectedIndex].text;

    const id = data.length + 1;
    axios
      .post("http://localhost:3000/users/", {
        id: id,
        name: e.currentTarget[1].value,
        email: e.currentTarget[2].value,
        phoneNumber: e.currentTarget[3].value,
        role: selectedRole,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <HeaderSignUp />
      <main>
        <section id="signup">
          <div class="signup-container">
            <h2>Course Compass Sign up</h2>
            <form
              onSubmit={(e) => handleSubmitCandidate(e)}
              enctype="multipart/form-data"
              method="POST"
            >
              {/* <!-- Profile Info --> */}
              <div class="role-dropdown">
                <label for="role">Select Role:</label>
                <div class="input-group">
                  <select id="role" name="role" class="custom-select" required>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    <option value="program_coordinator">
                      Program Coordinator
                    </option>
                    <option value="quality_assurance">
                      Quality Assurance Officer
                    </option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div class="section">
                <h3>Profile Info</h3>
                <div class="input-container">
                  <label for="firstName">First Name:</label>
                  <input
                    id="firstName"
                    name="firstName"
                    required=""
                    type="text"
                  />
                </div>
                <div class="input-container">
                  <label for="lastName">Last Name:</label>
                  <input
                    id="lastName"
                    name="lastName"
                    required=""
                    type="text"
                  />
                </div>
                <div class="input-container">
                  <label for="phone">Phone Number:</label>
                  <input id="phone" name="phone" required="" type="tel" />
                </div>
                <div class="input-container">
                  <label for="address">Address:</label>
                  <input id="address" name="address" required="" type="text" />
                </div>
                <div class="input-container">
                  <label for="dob">Date of Birth:</label>
                  <input id="dob" name="dob" required="" type="date" />
                </div>
                <div class="input-container">
                  <label for="email">Email:</label>
                  <input id="email" name="email" required="" type="email" />
                </div>
                <div class="input-container">
                  <label for="password">Password:</label>
                  <input
                    id="password"
                    name="password"
                    required=""
                    type="password"
                  />
                </div>
                <div class="input-container">
                  <label for="confirmPassword">Confirm Password:</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    required=""
                    type="password"
                  />
                </div>
                <div class="input-container">
                  <label for="profilePicture">Profile Picture:</label>
                  <input
                    accept="image/*"
                    id="profilePicture"
                    name="profilePicture"
                    type="file"
                  />
                </div>
              </div>
              {/* <!-- Educational Info --> */}
              <div class="section">
                <h3>Educational Info</h3>
                <div class="input-container">
                  <label for="institution">Institution:</label>
                  <input
                    id="institution"
                    name="institution"
                    required=""
                    type="text"
                  />
                </div>
                <div class="input-container">
                  <label for="education">Education:</label>
                  <input
                    id="education"
                    name="education"
                    required=""
                    type="text"
                  />
                </div>
                <div class="input-container">
                  <label for="researchField">Research Field:</label>
                  <input
                    id="researchField"
                    name="researchField"
                    required=""
                    type="text"
                  />
                </div>
                <div class="input-container">
                  <label for="experience">Experience:</label>
                  <input
                    id="experience"
                    name="experience"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              {/* <!-- Demographic Info --> */}
              <div class="section">
                <h3>Demographic Info</h3>
                <div class="input-container">
                  <label for="race">Race:</label>
                  <input id="race" name="race" required="" type="text" />
                </div>
                <div class="input-container">
                  <label for="ethnicity">Ethnicity:</label>
                  <input
                    id="ethnicity"
                    name="ethnicity"
                    required=""
                    type="text"
                  />
                </div>
                <div class="input-container">
                  <label for="maritalStatus">Marital Status:</label>
                  <input
                    id="maritalStatus"
                    name="maritalStatus"
                    required=""
                    type="text"
                  />
                </div>
                <div class="input-container">
                  <label for="gender">Gender:</label>
                  <input id="gender" name="gender" required="" type="text" />
                </div>
              </div>
              <div class="section">
                <button class="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <p>
              Already have an account? <a href="signin">Log In</a>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default SignupCandidate;
