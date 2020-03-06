import L from "leaflet";
import base64 from "base-64";
import { Map, Popup, Polyline } from "react-leaflet";
import { Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Tilelayer from "../Component/Tilelayer";
import NavbarTracking from "../Component/NavbarTracking";
import "../Assets/css/navbar.css";
import React, { Component } from "react";
import Scrollpane from "../Component/Scrollpane";
import RotatedMarker from "react-leaflet-rotatedmarker";

import { Redirect, BrowserRouter } from "react-router-dom";
import { addStyle } from "react-bootstrap/lib/utils/bootstrapUtils";
import SearchContainer from "./SearchContainer";
import SideBar from "./SideBar";
import Header from "./Header"
import { any } from "prop-types";

const myicon = new L.Icon({
  iconUrl: require("../Assets/images/runningcar.png"),
  iconSize: new L.Point(25, 35)
});

const myicon2 = new L.Icon({
  iconUrl: require("../Assets/images/Bus_Stopped_NORTH.png"),
  iconSize: new L.Point(25, 35)
});

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12]
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06]
  ]
];

class MapContainer extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      positionData: [],
      previouspositionData: [],
      deviceData: [],
      specificdevice:[],
      zoom: 8,
      minzoom:2,
      c1:22.690306666666665,
      c2: 75.92346333333333,
    
      displayscrollpane: false,
      polyline: [
        [41.19197, 25.33719],
        [41.26352, 25.1471],
        [41.26365, 25.24215],
        [41.26369, 25.33719],
        [41.26352, 25.52728]
      ]
    };
  }

  componentDidMount() {
    this.getlatestposition();
    this.interval = setInterval(() => {
      this.getlatestposition();
    }, 10000);
  }
  getlatestposition() {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );
    fetch("http://localhost:8082/api/positions", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState(
          prevState => {
            return {
              previouspositionData: prevState.positionData
            };
          },
          () => console.log(this.state)
        );
        this.setState({ positionData: JSON.parse(JSON.stringify(data)) });
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

 showAttributes =(e)=>{
  
    this.setState({zoom:17});
    this.setState({c1:e.latitude});
    this.setState({c2:e.longitude});
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/specificdevice?id="+(e.deviceId), {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ specificdevice: data });
       
      });
    });
   
  }

  render() {
    return (
      <React.Fragment>
      
          <Header />
       
              <SideBar />
          
        
              <Map
                id="map"
                className="markercluster-map"
                zoom={this.state.zoom}
                minzoom={this.state.minzoom}
                
                center={[this.state.c1,this.state.c2]}
                // zoom ={5}
              >
                <Tilelayer />
                {/* <Polyline color="red" positions={this.state.polyline} /> */}
                */}
                <MarkerClusterGroup>
                  {this.state.positionData.map(positionData => (
                    <React.Fragment>
                      <RotatedMarker
                        position={[
                          positionData.latitude,
                          positionData.longitude
                        ]}
                        rotationAngle={positionData.course}
                        rotationOrigin={"center"}
                        icon={positionData.speed == 0.0 ? myicon2 : myicon}
                        onClick={()=>this.showAttributes(positionData)}
                        
                      ></RotatedMarker>
                    
                      {/* { this.state.previouspositionData.map(previouspositionData => (
                    <Polyline
                     positions={[positionData.latitude, positionData.longitude], [previouspositionData.latitude, previouspositionData.longitude]}
                    >

                  
                  </Polyline>
                   ))} */}
                    </React.Fragment>
                  ))}
                </MarkerClusterGroup>
                {/* <Marker position ={[22.690306666666665, 75.92346333333333]} icon={myicon}></Marker> */}
              </Map>
           
       
          {/* <div className="row" id="scrollpane">
          <Scrollpane />
        </div> */}
      
      </React.Fragment>
    );
  }
}
export default MapContainer;
