import React from "react";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register button clicked!");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <div>
        <label>First Name:</label>
        <input type="text" placeholder="Enter your first name" />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" placeholder="Enter your last name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>
       
      <div>
        <label>Password:</label>
        <input type="password" placeholder="Set your password" />
      </div>
      <div>
        <label>RetypePassword:</label>
        <input type="text" placeholder="Retype your password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default Register;