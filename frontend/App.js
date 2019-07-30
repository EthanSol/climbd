import React from 'react';
import { AppRegistry } from 'react-native';
import { HomeScreen } from './app/views/Home.js';
import { LeaderboardScreen } from './app/views/Leaderboard.js';
import { BrowseClimbsScreen } from './app/views/BrowseClimb.js';
import { LoginScreen } from './app/views/Login.js';
import { ProfileScreen } from './app/views/ProfileInfo.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';




const MyRoutes = createStackNavigator({
  Leaderboard: {screen: LeaderboardScreen},
  BrowseClimbs: {screen: BrowseClimbsScreen},
  Login: {screen: LoginScreen},
  Profile: {screen: ProfileScreen},
  Home: {screen: HomeScreen},

},
  {
    initialRouteName: 'Home'
  }
);


const App = createAppContainer(MyRoutes);
AppRegistry.registerComponent('main',() => App);
export default App;