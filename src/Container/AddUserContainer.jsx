import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBInput } from 'mdbreact';
import "../Assets/css/addUser.css";
class AddUserConatiner extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            deviceLimitvalue : -1
        }
    }
    render() { 
        return (  
            <MDBContainer >
  <MDBRow id="formrow">
    <MDBCol md="6">
      <form>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Email
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
    
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
        password
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br/>
        <label htmlFor="defaultFormRegisterPhoneEx" className="grey-text">
        phone
        </label>
        <input type="Text" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br/>
        <MDBInput label="Disabled" type="checkbox" id="disabled" />
        <br/>
        <MDBInput label="Admin" type="checkbox" id="admin" />
        <br/>
        <MDBInput label="Readonly" type="checkbox" id="readonly" />
        <br/>
        <MDBInput label="Device Readonly" type="checkbox" id="deviceReadonly" />
        <br/>
        <MDBInput label="Limit Commands" type="checkbox" id="limitCommands" />
        <br/>
        <div className="text-center mt-4">
        <label htmlFor="defaultFormRegisterPhoneEx" defaultValue={this.state.deviceLimitvalue} className="grey-text">
        Device Limit 
        </label>
        <input type="Number" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br/>
        <label htmlFor="defaultFormRegisterPhoneEx" className="grey-text">
        User Limit 
        </label>
        <input type="Number" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br/>
          <MDBBtn color="dark" type="submit">
            Add User
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
        );
    }
}
 
export default AddUserConatiner;