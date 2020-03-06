import React, { useState } from "react";
import { Redirect, BrowserRouter } from "react-router-dom";
import { history } from "react-router";
import { createBrowserHistory } from "history";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../Assets/css/Session.css";
import MapContainer from "./MapContainer";

export default function LoginContainer(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    //   alert(email+" "+password);
    var data = new URLSearchParams();
    data.append("email", email);
    data.append("password", password);

    fetch("http://localhost:8082/api/session", {
      method: "POST",
      body: data,
      headers: {
        // Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
        // alert(JSON.stringify(email, password));
        // window.location='/tracking'
        localStorage.setItem('email',JSON.stringify(email));
        localStorage.setItem('password',JSON.stringify(password));
        props.history.push("/tracking");
      });
    });
  }

  return (
    <div className="Login">
      <section className="container-fluid bg">
        <div className="imgeset">
          <img src={require("../Assets/images/tracknovate_logo263x59.png")} />
        </div>
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form className="form-container" onSubmit={handleSubmit}>
              <p className="h4 mb-4" style={{ textAlign: "center" }}>
                Sign in to GPS System
              </p>
              <div className="form-group">
                {/* <label for="exampleInputEmail1">Email address</label> */}

                <input
                  className="form-control"
                  autoFocustype="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                {/*   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
                <br />
                <span>
                  <a href="#">Forgot password</a>
                </span>
              </div>
              <button
                disabled={!validateForm()}
                type="submit"
                className="btn btn-primary btn-block"
              >
                {" "}
                SIGN IN
              </button>
              <div style={{ textAlign: "center" }}>
                {" "}
                <span>
                  Not a member?<a href="#">Register</a>
                </span>
              </div>
            </form>
          </section>
        </section>
      </section>
    </div>
  );
}
