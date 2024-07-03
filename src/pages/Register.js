// import React from 'react'
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom";
// import '../pages/Login.css'

// const Register = () => {

//     const navigate = useNavigate();

//     const registerUser = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.target);
//         const value = Object.fromEntries(data.entries());
//         if(value.username === "" || value.password === ""){
//             window.alert("Incomplete Details");
//             return;
//         }
//         axios.post("https://63efe6f6271439b7fe78057c.mockapi.io/user/", value)
//         .then((res) => navigate("/"))
//     }

//   return (

// <div className='top'>
//     <h4 class="form-outline mb-4 text-center">Register</h4>
// <form onSubmit={registerUser}>
//   <div class="form-outline mb-4 text-center">
//   <input id="outlined-basic" label="username" variant="outlined" name={"username"}/><br/>
//   </div>
//   <div class="form-outline mb-4 text-center">
//   <input id="outlined-basic" label="password" variant="outlined" name={"secret"} type={"password"}/><br/>
//   </div>
//   <div class="text-center">
//   <button variant="contained" type={"submit"} class="btn btn-primary btn-block mb-4">Sign Up</button>

//   </div>
//   <div class="text-center">
//     <p>
//       Existing member <Link to="/">SignIn</Link>
//     </p>
//   </div>
// </form>
// </div>
//   )
// }

// export default Register

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          password,
        }
      );
      if (response.status === 201) {
        alert("Registration successful! You can now log in.");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Registration error", error);
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
