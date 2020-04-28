import React, { Component } from "react";
import base64 from "base-64";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Drawer } from 'antd';

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.handleRunning = this.handleRunning.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleIdle = this.handleIdle.bind(this);
    this.handleInactive = this.handleInactive.bind(this);
    this.handleNodata = this.handleNodata.bind(this);
    this.handleTotalDevices = this.handleTotalDevices.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.state = {
      Statuscount: [],
      RunningVehicle: [],
      StopVehicle: [],
      IdleVehicle: [],
      InactiveVehicle: [],
      NoDataVehicle: [],
      TotalVehicle: [],
      specificdevice: [],
      running: false,
      stop: false,
      idle: false,
      inactive: false,
      nodata: false,
      total: false,
      openSidebar: false,
      right: false
    };
  }
  showDrawer =() =>{
    this.setState({visible:true});
  }
  onCLose =()=>{ 
    this.setState({visible:false});
  }
  toggleDrawer = e => {
    console.log("my event", e);
    this.setState({ right: e });
  };

  componentDidMount() {
    this.getlatestposition();
    this.handleTotalDevices();
   
    this.interval = setInterval(() => {
      this.getlatestposition();
    }, 7000);
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
    fetch("http://localhost:8082/api/devices/statuscount", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ Statuscount: data });
      });
    });
   this.handleTotalDevices();
  }

  handleRunning(e) {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/running", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ RunningVehicle: data });
        this.setState({ running: true });
        this.setState({ stop: false });
        this.setState({ idle: false });
        this.setState({ inactive: false });
        this.setState({ nodata: false });
        this.setState({ total: false });
      });
    });
  }

  handleStop(e) {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/stop", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ StopVehicle: data });
        this.setState({ running: false });
        this.setState({ stop: true });
        this.setState({ idle: false });
        this.setState({ inactive: false });
        this.setState({ nodata: false });
        this.setState({ total: false });
      });
    });
  }

  handleIdle(e) {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/idle", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ IdleVehicle: data });
        this.setState({ running: false });
        this.setState({ stop: false });
        this.setState({ idle: true });
        this.setState({ inactive: false });
        this.setState({ nodata: false });
        this.setState({ total: false });
      });
    });
  }

  handleInactive(e) {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/inactive", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ InactiveVehicle: data });
        this.setState({ running: false });
        this.setState({ stop: false });
        this.setState({ idle: false });
        this.setState({ inactive: true });
        this.setState({ nodata: false });
        this.setState({ total: false });
      });
    });
  }

  handleNodata(e) {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/nodata", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ NodataVehicle: data });
        this.setState({ running: false });
        this.setState({ stop: false });
        this.setState({ idle: false });
        this.setState({ inactive: false });
        this.setState({ nodata: true });
        this.setState({ total: false });
      });
    });
  }

  handleTotalDevices(e) {
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/totaldevices", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        console.log(data);
        this.setState({ TotalVehicle: data });
        this.setState({ total: true });
        this.setState({ running: false });
        this.setState({ stop: false });
        this.setState({ idle: false });
        this.setState({ inactive: false });
        this.setState({ nodata: false });
        this.setState({ total: true });
      });
    });
  }

  sidebarShowAttributes = (e) => {
    
    
    var temprops = JSON.parse(JSON.stringify(this.props));

    temprops.zoom = 17;
    temprops.c1 = e.id;
    temprops.c2 = e.longitude;
    this.setState({visible:true});
    Object.preventExtensions(temprops);
    console.log(temprops);
    var email = JSON.parse(localStorage.getItem("email"));
    var password = JSON.parse(localStorage.getItem("password"));
    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set(
      "Authorization",
      "Basic " + base64.encode(email + ":" + password)
    );

    fetch("http://localhost:8082/api/devices/specificdevice?id=" + e.id, {
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
        <aside className="main-sidebar">
          <section className="sidebar">
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input
                  type="text"
                  name="q"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    name="search"
                    id="search-btn"
                    className="btn btn-flat"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </form>
            <ul className="sidebar-menu" data-widget="tree">
              {this.state.Statuscount.map(Statuscount => (
                <div style={{ padding: "10px 25px 10px 20px" }}>
                  <div
                    className="ui green circular label"
                    onClick={this.handleRunning}
                  >
                    {" "}
                    {Statuscount.RUNNING}
                  </div>
                  <div
                    className="ui orange circular label"
                    style={{ marginLeft: 22 }}
                    onClick={this.handleIdle}
                  >
                    {" "}
                    {Statuscount.IDLE}
                  </div>
                  <div
                    className="ui red circular label"
                    style={{ marginLeft: 20 }}
                    onClick={this.handleStop}
                  >
                    {" "}
                    {Statuscount.STOP}
                  </div>
                  <div
                    className="ui blue circular label"
                    style={{ marginLeft: 22 }}
                    onClick={this.handleInactive}
                  >
                    {" "}
                    {Statuscount.INACTIVE}
                  </div>
                  <div
                    className="ui black circular label"
                    style={{ marginLeft: 30 }}
                    onClick={this.handleNodata}
                  >
                    {" "}
                    {Statuscount.NODATA}
                  </div>
                  <div
                    className="ui purple circular label"
                    style={{ marginLeft: 26 }}
                    onClick={this.handleTotalDevices}
                  >
                    {" "}
                    {Statuscount.TOTAL}
                  </div>
                </div>
              ))}
              <div
                role="list"
                className="ui horizontal list"
                style={{ textDecorationStyle: "none", marginLeft: "5px" }}
              >
                <a role="listitem" className="item">
                  Running
                </a>
                <a role="listitem" className="item">
                  Idle
                </a>
                <a role="listitem" className="item">
                  Stop
                </a>
                <a role="listitem" className="item">
                  Inactive
                </a>
                <a role="listitem" className="item">
                  Nodata
                </a>
                <a role="listitem" className="item">
                  Total
                </a>
              </div>
              <div
                role="list"
                className="ui divided relaxed list"
                style={{ marginLeft: "10px" }}
              >
                {this.state.running == true
                  ? this.state.RunningVehicle.map(RunningVehicle => (
                      <div role="listitem" className="item">
                        <i
                          aria-hidden="true"
                          className="car large icon middle aligned"
                        ></i>

                        <div className="content">
                          <a
                            className="header"
                            onClick={() => this.showAttributes(RunningVehicle)}
                          >
                            {RunningVehicle.uniqueid}
                          </a>
                          <a className="description">{RunningVehicle.speed}</a>
                          <a className="servertime">
                            {RunningVehicle.servertime}
                          </a>
                        </div>
                      </div>
                    ))
                  : null}

                {this.state.stop == true
                  ? this.state.StopVehicle.map(StopVehicle => (
                      <div role="listitem" className="item">
                        <i
                          aria-hidden="true"
                          className="car large icon middle aligned"
                        ></i>
                        <div className="content">
                          <a
                            className="header"
                            onClick={() => this.showAttributes(StopVehicle)}
                          >
                            {StopVehicle.uniqueid}
                          </a>
                          <a className="description">{StopVehicle.speed}</a>
                          <a className="servertime">{StopVehicle.servertime}</a>
                        </div>
                      </div>
                    ))
                  : null}
                {this.state.idle == true
                  ? this.state.IdleVehicle.map(IdleVehicle => (
                      <div role="listitem" className="item">
                        <i
                          aria-hidden="true"
                          className="car large icon middle aligned"
                        ></i>
                        <div className="content">
                          <a
                            className="header"
                            onClick={() => this.showAttributes(IdleVehicle)}
                          >
                            {IdleVehicle.uniqueid}
                          </a>
                          <a className="description">{IdleVehicle.speed}</a>
                          <a className="servertime">{IdleVehicle.servertime}</a>
                        </div>
                      </div>
                    ))
                  : null}

                {this.state.inactive == true
                  ? this.state.InactiveVehicle.map(InactiveVehicle => (
                      <div role="listitem" className="item">
                        <i
                          aria-hidden="true"
                          className="car large icon middle aligned"
                        ></i>
                        <div className="content">
                          <a
                            className="header"
                            onClick={() => this.showAttributes(InactiveVehicle)}
                          >
                            {InactiveVehicle.uniqueid}
                          </a>
                          <a className="description">{InactiveVehicle.speed}</a>
                          <a className="servertime">
                            {InactiveVehicle.servertime}
                          </a>
                        </div>
                      </div>
                    ))
                  : null}

                {this.state.nodata == true
                  ? this.state.NodataVehicle.map(NodataVehicle => (
                      <div role="listitem" className="item">
                        <i
                          aria-hidden="true"
                          className="car large icon middle aligned"
                        ></i>
                        <div className="content">
                          <a className="header">{NodataVehicle.name}</a>
                        </div>
                      </div>
                    ))
                  : null}

                {this.state.total == true
                  ? this.state.TotalVehicle.map(TotalVehicle => (
                      <div role="listitem" className="item">
                        <i
                          aria-hidden="true"
                          className="car large icon middle aligned"
                        ></i>
                        <div className="content">
                          <a
                            className="header"
                            onClick={() => this.showAttributes(TotalVehicle)}
                          >
                            {TotalVehicle.name}
                          </a>
                          <a className="description">{TotalVehicle.speed}</a>
                          <a className="servertime">
                            {TotalVehicle.servertime}
                          </a>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </ul>
             
          </section>
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
        </aside>
       
      </React.Fragment>
    );
  }
}
