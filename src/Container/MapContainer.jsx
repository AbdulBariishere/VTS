import L from "leaflet";
import { Map,  Popup } from "react-leaflet";
import { Marker  } from "react-leaflet";
import Tilelayer from "../Component/Tilelayer";
import NavbarTracking from "../Component/NavbarTracking";
import "../Assets/css/navbar.css";
import React, { Component } from "react";
import Scrollpane from "../Component/Scrollpane";
import Sidebar from "../Component/Sidebar";
import { Redirect, BrowserRouter } from "react-router-dom";
const myicon = new L.Icon({
  iconUrl: require("../Assets/images/car.png"),
  iconSize: new L.Point(35, 50),
  className: "leaflet-div-icon"
});

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12]
];

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
    this.displayScrollpane = this.displayScrollpane.bind(this);
    this.state = {
      coords: [
        { lat: 41.19197, lng: 25.33719 },
        { lat: 41.26352, lng: 25.1471 },
        { lat: 41.26365, lng: 25.24215 },
        { lat: 41.26369, lng: 25.33719 },
        { lat: 41.26365, lng: 25.43224 },
        { lat: 41.26352, lng: 25.52728 },
        { lat: 41.2633, lng: 25.62233 },
        { lat: 41.263, lng: 25.71737 },
        { lat: 41.3082, lng: 22.95892 },
        { lat: 41.31041, lng: 23.054 }
      ],
      zoom: 10,
      displayscrollpane: false
    };
  }
  displayScrollpane(e) {
    let value = true;
    this.setState(
      prevState => ({
        ...prevState.displayscrollpane,
        displayscrollpane: value
      }),
      () => console.log(this.state.displayscrollpane)
    );

    return <Scrollpane />;
  }

  render() {
    const { coords, zoom } = this.state;

    return (
      <React.Fragment>
      <div className="container-fluid">
        <NavbarTracking />
        <div className="row">
          <div className="col-md-2">
            <Sidebar handleChange={this.displayScrollpane} />
          </div>
          <div className="col-lg-10 col-md-10">
            <Map
              className="map"
              center={[42.733883, 25.48583]}
              zoom={this.state.zoom}
            >
              <Tilelayer />
              
              {coords.map(({ lat, lng }, index) => (
                <Marker position={[lat, lng]} icon={myicon} key={index}>
                  <Popup>
                    {index + 1} is for popup with lat: {lat} and lon {lng}
                  </Popup>
                </Marker>
              ))}
            </Map>
          </div>
        </div>
        <div className="row" id="scrollpane">
          <Scrollpane />
        </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MapContainer;
