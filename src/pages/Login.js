// import React from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import '../pages/Login.css'
// const LogIn = () => {

//   const regUser = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const value = Object.fromEntries(data.entries());

//     sessionStorage.setItem("username", value.username);
//     sessionStorage.setItem("password", value.secret);

//     console.log(value);

//     axios
//       .get("https://63efe6f6271439b7fe78057c.mockapi.io/user/")
//       .then((res) => {
//         if (
//           res.data[0].username === value.username &&
//           res.data[0].secret === value.secret
//         ) {
//           window.alert("Login Successful");
//           Navigate("/Dashboard");
//         } else window.alert("Login Failed");
//       });
//   };
//   return (
//     <div className="top">
//           <h4 class="form-outline mb-4 text-center">SignIn</h4>

//       <form  method={"POST"} onSubmit={regUser}>
//         <div class="form-outline mb-4 text-center">
//           <input type="text" name="username" placeholder="User Name" />
//         </div>
//         <div class="form-outline mb-4 text-center">
//           <input type="password" name="secret" placeholder="Password" />
//         </div>
//         <div class="text-center">
//           <button type={"submit"} class="btn btn-primary btn-block mb-4">
//             Sign in
//           </button>
//         </div>
//         <div class="text-center">
//           <p>
//             Not a member? <Link to="/Register">Register</Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LogIn;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      if (response.data.token) {
        // setToken(response.data.token);
        Navigate("/Dashboard");
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
      }
    } catch (error) {
      console.error("Login error", error);
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="text-center" style={{ marginTop: "50px", gap: "2px" }}>
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
        <button type="submit">Login</button>
        <p>
          Not a member? <Link to="/Register">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default LogIn;
