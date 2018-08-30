import React, {Component} from 'react';
import { Root } from 'native-base';
import { Router, Scene, Drawer, Actions, Stack } from 'react-native-router-flux';
import Sidebar from './src/Sidebar';
import Home from './src/Home';
import ReadStory from './src/ReadStory';


export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <Router>
          <Stack key='root' hideNavBar='true'>
            <Drawer key='drawer' contentComponent={Sidebar} hideDrawerButton='false' drawerWidth={300}>
              <Scene key='home' component={Home} hideNavBar='true' />
            </Drawer>
            <Scene key='readstory' component={ReadStory} hideNavBar='true' />
            
          </Stack>
        </Router>
      </Root>
    );
  }
}
