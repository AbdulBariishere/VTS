import React, { Component } from "react";
import base64 from "base-64";
import { Table, Button } from "react-bootstrap";

class SearchContainer extends Component {
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

    fetch("http://localhost:8082/api/devices/running", {
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

    fetch("http://localhost:8082/api/devices/running", {
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
        <div id="style">
          <div
            className="icon-search"
            id="final"
            style={{ transition: "0.5s", paddingRight: "0px" }}
          >
            {/* <span className="icon-search">
              <img
                border={0}
                width={25}
                height={25}
                src="./images/search.png"
                valign="absmiddle"
                style={{ marginTop: "7px" }}
              />
            </span> */}
            <div id="map_search_box_container">
              <input
                type="text"
                className="TitleFrame"
                id="search"
                placeholder="Search Vehicle"
              />
            </div>
            <div className="col-sm-4 search">
              <table
                className="tblside"
                style={{ fontSize: "16px" }}
                cellPadding={0}
                cellSpacing={0}
              >
                <tbody>
                  {this.state.Statuscount.map(Statuscount => (
                    <tr>
                      <td className="tdstyle"></td>
                      <td
                        align="center"
                        width="4%"
                        className="TitleFrame"
                        style={{
                          borderRight: "0px solid gray",
                          background: "none"
                        }}
                        valign="middle"
                      >
                        <div
                          id="outrun"
                          className="outer"
                          style={{ cursor: "pointer" }}
                          onClick={this.handleClick}
                        >
                          <div
                            id="running"
                            className="inner-title"
                            style={{ color: "#1ca415" }}
                            onClick={this.handleRunning}
                          >
                            {Statuscount.RUNNING}
                          </div>
                          <small style={{ fontSize: "12px" }}>Running</small>
                          {/*Running*/}
                        </div>
                      </td>
                      <td className="tdstyle"></td>
                      <td
                        align="center"
                        width="4%"
                        className="TitleFrame"
                        style={{ borderRight: "0px solid gray" }}
                        valign="middle"
                      >
                        <div
                          id="outidle"
                          className="outer"
                          style={{ cursor: "pointer" }}
                          onClick={this.handleIdle}
                        >
                          <div
                            id="idle"
                            className="inner-title"
                            style={{ color: "#ff8d20" }}
                            onClick={this.handleIdle}
                          >
                            {Statuscount.IDLE}
                          </div>
                          <small style={{ fontSize: "12px" }}>Idle</small>
                          {/*Idle*/}
                        </div>
                      </td>
                      <td className="tdstyle"></td>
                      <td
                        align="center"
                        width="4%"
                        className="TitleFrame"
                        style={{
                          borderRight: "0px solid gray",
                          background: "none"
                        }}
                        valign="middle"
                      >
                        <div
                          id="outstopped"
                          className="outer"
                          style={{ cursor: "pointer" }}
                          onClick={this.handleStop}
                        >
                          <div
                            id="stopped"
                            className="inner-title"
                            style={{ color: "#ff2c2c" }}
                            onClick={this.handleStop}
                          >
                            {Statuscount.STOP}
                          </div>
                          <small style={{ fontSize: "12px" }}>Stopped</small>
                          {/*Stopped*/}
                        </div>
                      </td>
                      <td className="tdstyle"></td>
                      <td
                        align="center"
                        width="4%"
                        className="TitleFrame"
                        style={{ borderRight: "0px solid gray" }}
                        valign="middle"
                      >
                        <div
                          id="outinactive"
                          className="outer"
                          style={{ cursor: "pointer" }}
                          onClick={this.handleInactive}
                        >
                          <div
                            id="inactive"
                            className="inner-title"
                            style={{ color: "#0772E4" }}
                            onClick={this.handleInactive}
                          >
                            {Statuscount.INACTIVE}
                          </div>
                          <small style={{ fontSize: "12px" }}>Offline</small>
                          {/*Inactive*/}
                        </div>
                      </td>
                      <td className="tdstyle"></td>
                      <td
                        align="center"
                        width="4%"
                        className="TitleFrame"
                        style={{ borderRight: "0px solid gray" }}
                        valign="middle"
                      >
                        <div className="outer">
                          <div
                            id="nodata"
                            className="inner-title"
                            style={{ color: "#969696" }}
                            onClick={this.handleNodata}
                          >
                            {Statuscount.NODATA}
                          </div>
                          <small style={{ fontSize: "12px" }}>NoData</small>
                          {/*Nodata*/}
                        </div>
                      </td>
                      <td className="tdstyle"></td>
                      <td
                        align="center"
                        width="4%"
                        className="TitleFrame"
                        valign="middle"
                      >
                        <div
                          id="outtotal"
                          className="outer"
                          style={{
                            cursor: "pointer",
                            fontWeight: "bold",
                            borderBottom: "1px solid black"
                          }}
                          onclick="showFilterData('Total')"
                        >
                          <div
                            id="total"
                            className="inner-title"
                            style={{ color: "#111111" }}
                            onClick={this.handleClick}
                          >
                            {Statuscount.TOTAL}
                          </div>
                          <div className="inner-content" id="vehicletotal">
                            {/*Total*/}
                            <small style={{ fontSize: "4px" }}>All</small>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Speed</th>
                    <th>Time</th>
                    <th>Angle</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.running == true
                    ? this.state.RunningVehicle.map(RunningVehicle => (
                        <tr>
                          <td>{RunningVehicle.uniqueid}</td>
                          <td>{RunningVehicle.speed}</td>
                          <td>{RunningVehicle.servertime}</td>
                          <th>{RunningVehicle.course}</th>
                        </tr>
                      ))
                    : null}
                  {this.state.stop == true
                    ? this.state.StopVehicle.map(StopVehicle => (
                        <tr>
                          <td>{StopVehicle.uniqueid}</td>
                          <td>{StopVehicle.speed}</td>
                          <td>{StopVehicle.servertime}</td>
                          <th>{StopVehicle.course}</th>
                        </tr>
                      ))
                    : null}
                  {this.state.idle == true
                    ? this.state.IdleVehicle.map(IdleVehicle => (
                        <tr>
                          <td>{IdleVehicle.uniqueid}</td>
                          <td>{IdleVehicle.speed}</td>
                          <td>{IdleVehicle.servertime}</td>
                          <th>{IdleVehicle.course}</th>
                        </tr>
                      ))
                    : null}
                  {this.state.inactive == true
                    ? this.state.InactiveVehicle.map(InactiveVehicle => (
                        <tr>
                          <td>{InactiveVehicle.uniqueid}</td>
                          <td>{InactiveVehicle.speed}</td>
                          <td>{InactiveVehicle.servertime}</td>
                          <th>{InactiveVehicle.course}</th>
                        </tr>
                      ))
                    : null}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchContainer;
