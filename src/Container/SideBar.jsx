import React, { Component } from "react";
import base64 from "base-64";
export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.handleRunning = this.handleRunning.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleIdle = this.handleIdle.bind(this);
    this.handleInactive = this.handleInactive.bind(this);
    this.handleNodata = this.handleNodata.bind(this);

    this.state = {
      Statuscount: [],
      RunningVehicle: [],
      StopVehicle: [],
      IdleVehicle: [],
      InactiveVehicle: [],
      NoDataVehicle: [],
      running: false,
      stop: false,
      idle: false,
      inactive: false,
      nodata: false
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
    fetch("http://localhost:8082/api/devices/statuscount", {
      method: "GET",
      // body: data,
      headers: headers
    }).then(response => {
      response.json().then(data => {
        this.setState({ Statuscount: data });
      });
    });
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
      });
    });
  }

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
            <ul
              className="sidebar-menu"
              data-widget="tree"
              style={{ overflowY: "scroll" }}
            >
              {this.state.Statuscount.map(Statuscount => (
                <div style={{ padding: "10px 25px 10px 20px" }}>
                  <div className="ui green circular label"
                    onClick={this.handleRunning}>
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
                    style={{ marginLeft: 24 }}
                    onClick={this.handleNodata}
                  >
                    {" "}
                    {Statuscount.NODATA}
                  </div>
                  <div
                    className="ui purple circular label"
                    style={{ marginLeft: 26 }}
                    onClick={this.handleNodata}
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
                 
                  <div className="content" >
                  
                        <a className="header">{RunningVehicle.uniqueid}</a>
                      <a className="description">{RunningVehicle.speed}</a>
                      <a className="servertime">{RunningVehicle.servertime}</a>
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
                        <div className="content" >
                    <a className="header">{StopVehicle.uniqueid}</a>
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
                        <div className="content" >
                        <a className="header">{IdleVehicle.uniqueid}</a>
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
                        <div className="content" >
                        <a className="header">{InactiveVehicle.uniqueid}</a>
                      <a className="description">{InactiveVehicle.speed}</a>
                      <a className="servertime">{InactiveVehicle.servertime}</a>
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
                        <div className="content" >
                        <a className="header">{NodataVehicle.name}</a>
                         </div>
                       </div>
                      ))
                    : null}
                        
                  
                </div>
           
            </ul>
          </section>
        </aside>
      </React.Fragment>
    );
  }
}
