import React, { Component } from 'react';
import Drawer from 'react-toolbox/lib/drawer';
import { Button} from 'react-bootstrap'
 

export default class TemproraryDrawer extends Component {
     
    state = {
        active: false
      };
    
      handleToggle = () => {
        this.setState({active: !this.state.active});
      };
    
      render () {
        return (
          <React.Fragment>     
            <Button raised accent label='Show Drawer' onClick={this.handleToggle} />
            <Drawer active={this.state.active} onOverlayClick={this.handleToggle} type="right">
              <h5>This is your Drawer.</h5>
              <p>You can embed any content you want, for example a Menu.</p>
            </Drawer>
            </React.Fragment>

        );
      }
    }
    
 

