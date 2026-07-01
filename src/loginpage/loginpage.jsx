import React from "react";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login button clicked!");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;


