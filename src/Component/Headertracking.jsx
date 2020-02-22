import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function HeaderTracking() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Tracknovate</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="Tracking">Tracking</Nav.Link>
        <Nav.Link href="Reports">Reports</Nav.Link>
        <Nav.Link href="Graphics">Graphics</Nav.Link>
        <Nav.Link href="POI">POI</Nav.Link>
        <Nav.Link href="Geofence">Geofence</Nav.Link>
        <Nav.Link href="Fuel">Fuel</Nav.Link>
        <Nav.Link href="RPM">RPM</Nav.Link>
        <Nav.Link href="Alert">Alert</Nav.Link>
        <Nav.Link href="Advance">Advance</Nav.Link>
        <Nav.Link href="AppConfig">App Config</Nav.Link>
        <Nav.Link href="UserRights">User Rights</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}
