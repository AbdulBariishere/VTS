import React, { Component } from "react";
import base64 from "base-64";
class AllusersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allusers: []
    };
  }
  componentDidMount() {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );
    fetch("http://localhost:81/api/users", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
        this.setState({ allusers: data });
        console.log(this.state.allusers);
      });
    });
  }
  render() {
    return (
      <table className="table table table-bordered">
        <thead className="color">
          <tr>
          <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Readonly</th>
            <th>Device Readonly</th>
            <th>Disabled</th>
            <th>Expiration</th>
          </tr>
        </thead>

        {this.state.allusers.map(user => (
          <tr key={user.id}>
          <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.administrator? "Yes" : "No"}</td>
            <td>{user.readonly? "Yes" : "No"}</td>
            <td>{user.deviceReadonly? "Yes" : "No"}</td>
            <td>{user.disabled? "Yes" : "No"}</td>
            <td>{user.expiration? "Yes" : "No"}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default AllusersContainer;
