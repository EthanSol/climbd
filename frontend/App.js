import React from 'react';
import { AppRegistry, Stylesheet, TouchableOpacity, View, Text } from 'react-native';
import { HomeScreen } from './app/views/Home.js';
import { LeaderboardScreen } from './app/views/Leaderboard.js';
import { BrowseClimbsScreen } from './app/views/BrowseClimb.js';
import { ProfileScreen } from './app/views/ProfileInfo.js';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { EditClimbsScreen } from './app/views/EditClimbs.js';
import { ManageAccountsScreen } from './app/views/ManageAccounts.js';
import { ClimbInfoScreen } from './app/views/ClimbInfo.js';
import { Login } from './app/sections/LoginOverlay.js';

const MyRoutes = createStackNavigator({
  EditRoutes: {screen: EditClimbsScreen},
  ManageAccounts: {screen: ManageAccountsScreen},
  Leaderboard: {screen: LeaderboardScreen},
  BrowseClimbs: {screen: BrowseClimbsScreen},
  Profile: {screen: ProfileScreen},
  ClimbInfo: {screen: ClimbInfoScreen},
  Home: {screen: HomeScreen},
},
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerRight: (<Login />),
    },
  }
);


const App = createAppContainer(MyRoutes);
AppRegistry.registerComponent('main',() => App);
export default App;


// const SwipeTabs = createMaterialTopTabNavigator(
//   {
//     BrowseClimbs: { screen: BrowseClimbsScreen},
//     Leaderboards: { screen: LeaderboardScreen},
//     Profile: { screen: ProfileScreen}
//   },
//   {
//     initialRouteName: "Leaderboards",
//     animationEnabled: true,
//     defaultNavigationOptions: {
//        headerRight: (<Login />),
//      },
//     // tabBarOptions: {
//     //   showLabel: false,
//     //   showIcon: false,
//     //   style: { height: 0 }
//     // }
//   }
// );

// const App = createAppContainer(SwipeTabs);
// AppRegistry.registerComponent('main',() => App);
// export default App;