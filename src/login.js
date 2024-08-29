import React, { useEffect, useState } from "react";
import "./css/login.css";

function Login() {
  return (
    <div class="login-container">
      <h2>Sign in to your account</h2>
      <form id="loginForm">
        <div class="form-group">
          <label for="username">
            <i class="fa-solid fa-envelope"></i>Email
          </label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="form-group">
          <label for="password">
            <i class="fa-solid fa-lock"></i> Password
          </label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-group">
          <button type="submit">Login</button>
        </div>
        <a id="forgetPassword" href="forgetPassword.html">
          Forgot Password?
        </a>
        <p>
          Don't have an account?{" "}
          <a id="forgetPassword" href="registration.html">
            Create
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
