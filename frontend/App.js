import { AppRegistry, Button } from 'react-native';
import { HomeScreen } from './app/views/Home.js';
import { LeaderboardScreen } from './app/views/Leaderboard.js';
import { BrowseClimbsScreen } from './app/views/BrowseClimb.js';
import { LoginScreen } from './app/views/Login.js';
import { ProfileScreen } from './app/views/ProfileInfo.js';
import { createStackNavigator, createAppContainer, NavigationEvents } from 'react-navigation';
import { EditClimbsScreen } from './app/views/EditClimbs.js';
import { AddRouteScreen } from './app/views/AddRoute.js';
import { ClearSectionScreen } from './app/views/ClearSection.js';
import { ClimbInfoScreen } from './app/views/ClimbInfo.js';


let username = 'Login';

updateUsername = (name) => {username = name}

const MyRoutes = createStackNavigator({
  EditRoutes: {screen: EditClimbsScreen},
  ClearSection: {screen: ClearSectionScreen},
  Leaderboard: {screen: LeaderboardScreen},
  BrowseClimbs: {screen: BrowseClimbsScreen},
  Login: {screen: LoginScreen},
  Profile: {screen: ProfileScreen},
  ClimbInfo: {screen: ClimbInfoScreen},
  Home: {screen: HomeScreen},
},
  {
    initialRouteName: 'Home',
  }
);


const App = createAppContainer(MyRoutes);
AppRegistry.registerComponent('main',() => App);
export default App;