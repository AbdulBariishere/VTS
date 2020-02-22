import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class  LogoutContainer  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            logout :[]
         }
    }
    componentDidMount() {
        var email = JSON.parse(localStorage.getItem("email"));
        var password = JSON.parse(localStorage.getItem("password"));
        console.log("visited");
       // let headers = new Headers();
       let a = this.state.logout.slice(); //creates the clone of the state
        a[1] = email;
        a[2]=password;
        this.setState({logout: a});
      
        //headers.append('Content-Type', 'text/json');
     
        fetch("http://localhost:81/api/session", {
          method: "DELETE",
           body: this.state.logout,
           headers: {
            // Accept: "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

    render() { 
        return ( 
            <Redirect to ="/" />
         );
    }
}
 
export default LogoutContainer;