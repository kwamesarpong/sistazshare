import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ChooseCats from './ChooseCats';
import Home from './Home';
import Sidebar from './Sidebar';
import ReadStory from './ReadStory';
import WriteStory from './WriteStory';
import Search from './Search';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Categories from './Categories';


const token = false;

const DrawerNavigator = createDrawerNavigator({

  Home: Home,
  Profile: Profile,
  Categories: Categories

},{
  initialRouteName: 'Home',
  contentComponent: Sidebar,
  drawerWidth: 300
});

const StackNavigator = createStackNavigator({

  DrawerNavigator: DrawerNavigator,
  ChooseCats: ChooseCats,
  ReadStory: ReadStory,
  WriteStory: WriteStory,
  Search: Search,
  EditProfile: EditProfile

},{
  initialRouteName:  `${token ? 'DrawerNavigator' : 'ChooseCats'}`,
  navigationOptions: ({ navigation }) => ({
      header: null
  })
});

export default StackNavigator;