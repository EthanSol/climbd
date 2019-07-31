import React from 'react';
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


let username = 'Login';

updateUsername = (name) => {username = name}

const MyRoutes = createStackNavigator({
  EditRoutes: {screen: EditClimbsScreen},
  AddRoute: {screen: AddRouteScreen},
  ClearSection: {screen: ClearSectionScreen},
  Leaderboard: {screen: LeaderboardScreen},
  BrowseClimbs: {screen: BrowseClimbsScreen},
  Login: {screen: LoginScreen},
  Profile: {screen: ProfileScreen},
  Home: {screen: HomeScreen},

},
  {
    initialRouteName: 'Home',

    // defaultNavigationOptions: {
    //   headerRight: (
    //     <Button
    //       title = {username}
    //       onPress = {() => NavigationEvents.navigation('Login')}
    //     />
    //   ),
    // },
  }
);


const App = createAppContainer(MyRoutes);
AppRegistry.registerComponent('main',() => App);
export default App;