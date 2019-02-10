import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ExploreScreen from '../screens/ExploreScreen';
import JourneysScreen from '../screens/JourneysScreen';
import ProfilesScreen from '../screens/ProfilesScreen';

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : ''}`
          : 'md-information-circle'
      }
    />
  ),
};

const JourneysStack = createStackNavigator({
  Journeys: JourneysScreen,
});

JourneysStack.navigationOptions = {
  tabBarLabel: 'Journeys',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-leaf' : 'md-link'}
    />
  ),
};

const ProfilesStack = createStackNavigator({
  Profles: ProfilesScreen,
});

ProfilesStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ExploreStack,
  JourneysStack,
  ProfilesStack,
});
