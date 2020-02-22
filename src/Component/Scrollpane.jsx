import React from "react";
import "../Assets/css/scrollpane.css";
const Scrollpane = props => {
  return (
    <div id="main" className="tablehide">
      {/* datatable start */}
      <div className="row">
        <div id="container-fluid">
          <div className="scroll-pane">
            <table className="table table table-bordered">
              <thead className="color">
                <tr>
                  <th>Status</th>
                  <th>Vehicle Number</th>
                  <th>Add trip</th>
                  <th>Last Updated time</th>
                  <th>Dauration</th>
                  <th>Speed</th>
                  <th>Location</th>
                  <th>POI</th>
                  <th>Geofence</th>
                  <th>
                    <img
                      src={require("../Assets/images/power_status.png")}
                      style={{
                        height: "20px",
                        width: "20px",
                        color: "lightblue",
                        marginLeft: "20px"
                      }}
                    />
                    <br />
                    <span>Power</span>
                  </th>
                  <th>
                    <img
                      src={require("../Assets/images/ignition_status.png")}
                      style={{
                        height: "20px",
                        width: "20px",
                        color: "lightblue",
                        marginLeft: "20px"
                      }}
                    />
                    <br />
                    <span>Ignition</span>
                  </th>
                  <th>
                    <img
                      src={require("../Assets/images/ac_status.png")}
                      style={{
                        height: "20px",
                        width: "20px",
                        color: "lightblue",
                        marginLeft: "20px"
                      }}
                    />
                    <br />
                    <span style={{ marginLeft: "20px" }}>AC</span>
                  </th>
                  <th>
                    <img
                      src={require("../Assets/images/gps_status.png")}
                      style={{
                        height: "25px",
                        width: "25px",
                        color: "blue",
                        marginLeft: "18px"
                      }}
                    />
                    <br />
                    <span style={{ marginLeft: "18px" }}>Gps</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={require("../Assets/images/Car_InActive_NORTH.png")}
                      className="imgsize"
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../Assets/images/Car_InActive_NORTH.png")}
                      className="imgsize"
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../Assets/images/Car_InActive_NORTH.png")}
                      className="imgsize"
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../Assets/images/Car_InActive_NORTH.png")}
                      className="imgsize"
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../Assets/images/Car_InActive_NORTH.png")}
                      className="imgsize"
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../Assets/images/Car_InActive_NORTH.png")}
                      className="imgsize"
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../Assets/images/Car_InActive_NORTH.png")}
                      className="imgsize"
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scrollpane;
