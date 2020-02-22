import React from "react";
import "../Assets/css/sidebar.css";
import "../Assets/images/Car_InActive_NORTH.png" ; 
const Sidebar = props => {
    return (
        <div id="clearfix">
        {/* start left side bar */}
        <div id="sidebar">
          <span id="position" />
          <div className="row">
            <div >
              <div id="style"> Vehicle List</div>
              <div className="sidebar">
                <ul style={{marginLeft:20}}>
                  <a href="#">
                    <li className="llist"
                      onClick={props.handleChange}><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" 
                    
                    /> MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                  <a href>
                    <li className="llist"><img src={require("../Assets/images/Car_InActive_NORTH.png")} className="imgsize" />  MP0712345</li>
                  </a>
                </ul>
              </div>
            </div>
          </div></div></div>
    );
  };
  export default Sidebar;