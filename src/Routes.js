import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './Home';
import Sidebar from './Sidebar';
import ReadStory from './ReadStory';
import WriteStory from './WriteStory';
import Search from './Search';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Categories from './Categories';


const DrawerNavigator = createDrawerNavigator({
  Home: Home,
  ReadStory: ReadStory,
  WriteStory: WriteStory,
  Search: Search,
  Profile: Profile,
  EditProfile: EditProfile,
  Categories: Categories
},{
  initialRouteName: 'Categories',
  contentComponent: Sidebar,
  drawerWidth: 300
});

const StackNavigator = createStackNavigator({

  DrawerNavigator:{
      screen: DrawerNavigator
  }
},{
  navigationOptions: ({ navigation }) => ({
      header: null
  })
});

export default StackNavigator;