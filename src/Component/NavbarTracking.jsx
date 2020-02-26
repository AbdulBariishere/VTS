import React from "react";
import "../Assets/css/navbar.css";

import {
  Route,
  BrowserRouter as Router,
  Switch,Link
} from "react-router-dom";


const NavbarTracking = props => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      style={{ fontWeight: 300, fontSize: "13pt" }}
    >
      <a className="navbar-brand" href="index.html">
        Tracknovate
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tracking
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="tracking.html">
                Advance Tracking
              </a>
              <a className="dropdown-item" href="detail_dashboard.html">
                Detail Dashboard
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="reports.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Reports
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="travel_summary.html">
                Travel Summary
              </a>
              <a className="dropdown-item" href="trip_summary.html">
                
                  <Link to="/tripsummary"> Trip Summary</Link>
                
              </a>
              <a className="dropdown-item" href="stopage_summary.html">
                Stopage Summary
              </a>
              <a className="dropdown-item" href="Inactive_summary.html">
                Inactive Summary
              </a>
              <a className="dropdown-item" href="vehicleStatus_summary.html">
                Vehicle Status
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Graphics
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Distance
              </a>
              <a className="dropdown-item" href="#">
                Duration
              </a>
              <a className="dropdown-item" href="#">
                Alerts
              </a>
              <a className="dropdown-item" href="#">
                Shedule Graphs
              </a>
              <a className="dropdown-item" href="#">
                Personal Graps
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Poi
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Add Poi
              </a>
              <a className="dropdown-item" href="#">
                Poi Summary-A
              </a>
              <a className="dropdown-item" href="#">
                Poi Summary-B
              </a>
              <a className="dropdown-item" href="#">
                Missed Poi
              </a>
              <a className="dropdown-item" href="#">
                Visited Poi
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Geofence
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Add Geofence
              </a>
              <a className="dropdown-item" href="#">
                Geofence Summary-A
              </a>
              <a className="dropdown-item" href="#">
                Geofence Summary-B
              </a>
              <a className="dropdown-item" href="#">
                Geofence Trip Summary
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Fuel
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Fuel Dashboards
              </a>
              <a className="dropdown-item" href="#">
                Fuel Chart
              </a>
              <a className="dropdown-item" href="#">
                Fuel Status
              </a>
              <a className="dropdown-item" href="#">
                Fuel Summary
              </a>
              <a className="dropdown-item" href="#">
                Fuel Calibration
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Temprature
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Temprature Dashboards
              </a>
              <a className="dropdown-item" href="#">
                Temprature Chart
              </a>
              <a className="dropdown-item" href="#">
                Temprature Status
              </a>
              <a className="dropdown-item" href="#">
                Temprature Summary
              </a>
              <a className="dropdown-item" href="#">
                Temprature Calibration
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Alert
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Vehicle alert
              </a>
              <a className="dropdown-item" href="#">
                Driver alert
              </a>
              <a className="dropdown-item" href="#">
                Add alert
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Advance
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Routh Path
              </a>
              <a className="dropdown-item" href="#">
                Routh Path Allocation
              </a>
              <a className="dropdown-item" href="#">
                General Reminder
              </a>
              <a className="dropdown-item" href="#">
                Vehicle Group
              </a>
              <a className="dropdown-item" href="#">
                Employee Group
              </a>
              <a className="dropdown-item" href="#">
                Driver Cleaner Allocation
              </a>
              <a className="dropdown-item" href="#">
                User Access
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              AppConfig
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Branch
              </a>
              <a className="dropdown-item" href="#">
                Vehicle
              </a>
              <a className="dropdown-item" href="#">
                Employee
              </a>
              <a className="dropdown-item" href="#">
                Master Data
              </a>
              <a className="dropdown-item" href="#">
                Distance
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              // href="service.html"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User rights
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
              <Link to="/adduser">Add User</Link>
             
              </a>
              <a className="dropdown-item" href="#">
              <Link to="/allusers">Show Users</Link>
              </a>
              <a className="dropdown-item" href="#" >
              <Link to="/logout">Logout</Link>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarTracking;
