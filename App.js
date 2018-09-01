import React, {Component} from 'react';
import { Root } from 'native-base';
import { Router, Scene, Drawer, Actions, Stack } from 'react-native-router-flux';
import Sidebar from './src/Sidebar';
import Home from './src/Home';
import ReadStory from './src/ReadStory';
import WriteStory from './src/WriteStory';
import Profile from './src/Profile';
import EditProfile from './src/EditProfile';
import Search from './src/Search';


export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <Router>
          <Stack key='root' hideNavBar='true'>
            <Scene key='search' component={Search} hideNavBar='true' />
            <Drawer key='drawer' contentComponent={Sidebar} hideDrawerButton='false' drawerWidth={300}>
              <Scene key='home' component={Home} hideNavBar='true' />
            </Drawer>
            <Scene key='writestory' component={WriteStory} hideNavBar='true' />
            <Scene key='readstory' component={ReadStory} hideNavBar='true' />
            <Scene key='profile' component={Profile} hideNavBar='true' />
            <Scene key='editprofile' component={EditProfile} hideNavBar='true' />
            
            
            
          </Stack>
        </Router>
      </Root>
    );
  }
}
