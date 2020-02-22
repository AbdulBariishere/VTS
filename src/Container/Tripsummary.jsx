import React, { Component } from "react";
import base64 from "base-64";
class Tripsummary extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      tripdata: [],
      email: "admin",
      password: "admin"
    };
}
componentDidMount(){
  var email =JSON.parse(localStorage.getItem('email'));
  var password =JSON.parse(localStorage.getItem('password'));
  let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + base64.encode(email + ":" + password));
  fetch("http://localhost:81/api/reports/summary?deviceId=2&type=allEvents&from=2020-02-20T13%3A37%3A35.000Z&to=2020-02-20T14%3A07%3A35.000Z&page=1&start=0&limit=25", {
    method: "GET",
    // body: data,
    headers:headers
  }).then(response => {
    response.json().then(data => {
      console.log("Successful" + data);
      this.setState({tripdata: data});
      console.log(this.state.tripdata)
   
    });
  });
}
    
  
  render() {
      
    return (
          <table className="table table table-bordered">
        <thead className="color">
          <tr>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Imeino</th>
            <th>Runnning</th>
            <th>Idle</th>
            <th>Stop</th>
            <th>Firstignitionon</th>
            <th>Lastignitionoff</th>
            <th>Avg</th>
            <th>Max</th>
            <th>Overspeed</th>
            <th>Alert</th>
            <th>NoofTrips</th>
            <th>distance</th>
          </tr>
        </thead>
        

        { this.state.tripdata.map(trip => (
          <tr key={trip.deviceId}>  
            <td>{trip.deviceId}</td>
            <td>{trip.deviceName}</td>
            <td>{trip.ImeiNo}</td>
            <td>{trip.spentFuel}</td>
            <td>{trip.Idle}</td>
            <td>{trip.Stop}</td>
            <td>{trip.startOdometer}</td>
            <td>{trip.endOdometer}</td>
            <td>{trip.averageSpeed}</td>
            <td>{trip.maxSpeed}</td>
            <td>{trip.Overspeed}</td>
            <td>{trip.Alert}</td>
            <td>{trip.engineHours}</td>
            <td>{trip.distance}</td>
            </tr>
              ))}
         
      
      </table>
     
           

    );
  }
}

export default Tripsummary;
