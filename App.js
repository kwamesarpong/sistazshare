import React, {Component} from 'react';
import { Root } from 'native-base';
import { Router, Scene, Drawer, Actions } from 'react-native-router-flux';
import Sidebar from './src/Sidebar';
import Home from './src/Home';


export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <Router>
          <Scene key='root' hideNavBar='true'>
            <Drawer key='drawer' contentComponent={Sidebar} hideDrawerButton='false' drawerWidth={300}>
              <Scene key='home' component={Home} hideNavBar='true' />
            </Drawer>
            
          </Scene>
        </Router>
      </Root>
    );
  }
}
