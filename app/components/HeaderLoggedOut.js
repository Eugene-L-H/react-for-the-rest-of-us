import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import DispatchContext from "../DispatchContext";

const HeaderLoggedOut = function (props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const appDispatch = useContext(DispatchContext);

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", {
        username,
        password
      });

      if (response.data) {
        // localStorage.setItem("complexAppToken", response.data.token);
        // localStorage.setItem("complexAppUsername", response.data.username);
        // localStorage.setItem("complexAppAvatar", response.data.avatar);
        appDispatch({ type: "login", data: response.data });
      } else {
        console.log("Incorrect username or password");
      }
    } catch (err) {
      console.log("There was an error: ", err.message);
    }
  };

  return (
    <form className="mb-0 pt-2 pt-md-0" onSubmit={handleSubmit}>
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default HeaderLoggedOut;
