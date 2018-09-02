import React, {Component} from 'react';
import { Root } from 'native-base';
import { Router, Scene, Drawer, Actions, Stack } from 'react-native-router-flux';
import { createStackNavigator } from 'react-navigation';
import Sidebar from './src/Sidebar';
import Home from './src/Home';
import ReadStory from './src/ReadStory';
import WriteStory from './src/WriteStory';
import Profile from './src/Profile';
import EditProfile from './src/EditProfile';
import Search from './src/Search';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Write: WriteStory,
    Read: ReadStory
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <RootStack />
      </Root>
    );
  }
}
