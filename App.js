
import React, { Component } from 'react';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import LaunchList from 'components/LaunchList';
import AboutApp from 'components/AboutApp';
import LaunchInfo from 'components/LaunchInfo'

const AppContainer = createStackNavigator({
  Home: { screen: LaunchList },
  Info: { screen: LaunchInfo }
}, {
    defaultNavigationOptions: {
      header: null
    }
  }
)

const TabNavigator = createBottomTabNavigator({
  Launchs: { screen: AppContainer },
  About: { screen: AboutApp }
}, {
    defaultNavigationOptions: ({ navigation }) => {
      const root = navigation.state.routeName;
      // debugger
      // console.log(root)
      return {
        tabBarIcon: () => {
          const name = {
            'Launchs': 'list',
            'About': 'info-circle'
          }[root]
          return <Icon name={name} size={15} />
        }
      }
    }
  })

const App = createStackNavigator({
  Tabs: { screen: TabNavigator }
}, {
    defaultNavigationOptions: {
      header: null
    }
  })

export default createAppContainer(App);
