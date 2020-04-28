import L, { FeatureGroup } from "leaflet";
import base64 from "base-64";
import { Map, Popup, Polyline } from "react-leaflet";
import { Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Tilelayer from "../Component/Tilelayer";
import NavbarTracking from "../Component/NavbarTracking"
import "../Assets/css/navbar.css";
import React, { Component } from "react";
import Scrollpane from "../Component/Scrollpane";
import RotatedMarker from "react-leaflet-rotatedmarker";
import { Drawer, Button } from 'antd';
import { Redirect, BrowserRouter } from "react-router-dom";
import { addStyle } from "react-bootstrap/lib/utils/bootstrapUtils";
import SearchContainer from "./SearchContainer";
import SideBar from "./SideBar";
import Header from "./Header";
import { any } from "prop-types";

import 'antd/dist/antd.css';

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
      specificdevice: [],
      zoom: 8,
      minzoom: 4,
      c1: 22.690306666666665,
      c2: 75.92346333333333,

      displayscrollpane: false,
      visible:false,

    };
    
  }
  showDrawer =() =>{
    this.setState({visible:true});
  }
  onCLose =()=>{ 
    this.setState({visible:false});
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
        (this.state.positionData == null) ? this.setState({previouspositionData: JSON.parse(JSON.stringify(data)) })
          : this.setState({ previouspositionData: this.state.positionData });
          console.log("previous position",this.state.previouspositionData);
       
       this.setState({ positionData: JSON.parse(JSON.stringify(data))});
        console.log("current position",this.state.positionData);
         
      
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showAttributes = e => {
    this.setState({ zoom: 12 });
    this.setState({ c1: e.latitude });
    this.setState({ c2: e.longitude });
    this.setState({visible:true});
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/specificdevice?id=" + e.deviceId, {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ specificdevice: data });
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <div className="row">
          <NavbarTracking />
        </div>
        <div className="row">
          <div className="col-lg-2">
            <SideBar />
          </div>
          <div className="col-lg-10" style={{ marginTop: "3.5%" }}>
            <Map
              id="map"
              className="markercluster-map"
              zoom={this.state.zoom}
              minzoom={this.state.minzoom}
              center={[this.state.c1, this.state.c2]}
              // zoom ={5}
            >
              <Tilelayer />
              {/* <FeatureGroup></FeatureGroup> */}
              <MarkerClusterGroup>
                {this.state.positionData.map(positionData => (
                  <React.Fragment>
                    <RotatedMarker
                      position={[positionData.latitude, positionData.longitude]}
                      rotationAngle={positionData.course}
                      rotationOrigin={"center"}
                      icon={positionData.speed == 0.0 ? myicon2 : myicon}
                      onClick={() => this.showAttributes(positionData)}
                    ></RotatedMarker>
                   
                    {this.state.previouspositionData.map(
                      previouspositionData => (
                        positionData.deviceId ==
                        previouspositionData.deviceId ? (
                          <Polyline
                            color={"red"}
                            positions={
                              ([[
                                previouspositionData.latitude,
                                previouspositionData.longitude
                              ],
                              [positionData.latitude, positionData.longitude]])
                            }
                            //  positions={[[22.67825611111111,75.926], [22.86595, 76.2222], [23.9568, 78.2653], [24.00346, 79.956856]]}
                          ></Polyline>
                        ) : null
                      )
                    )}
                    {/*                     
                     <Polyline color={'red'} 
                 positions={[[22.67825611111111,75.926], [22.86595, 76.2222], [23.9568, 78.2653], [24.00346, 79.956856]]}/>  */}
                  </React.Fragment>
                ))}
              </MarkerClusterGroup>
            </Map>
            <div>
          
        {this.state.specificdevice.map(specificdevice => (
          <Drawer
            title="Object Details will be show here..."
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
        
          
            <p onClick={this.onCLose}>close</p>
            <p>Vehicle No  :{specificdevice.name}</p>
            <p>Speed :{specificdevice.speed}</p>
            <p>Distance :{specificdevice.distance}</p>
            <p>Total Distance :{specificdevice.totalDistance}</p>
            <p>Ignition :{specificdevice.ignition}</p>
            <p>Altitude :{specificdevice.altitude}</p>
            <p>Latitude :{specificdevice.latitude}</p>
            <p>Longitude :{specificdevice.longitude}</p> 
          </Drawer>
          ))}
        
        </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MapContainer;
