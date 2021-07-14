import React, {useContext, useState, useEffect} from 'react';
import {
  NavigationContainer,
  navigation,
  BottomTabBar,
  route,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

// import auth from '@react-native-firebase/auth';
// import {AuthContext, AuthProvider} from './AuthProvider';

import Chat from './Chat';
import Search from './Search';
import Details from './Details';
import Login from './Login';
import SplashScreen from './SplashScreen';
import {BottomTabView} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        lazy
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Chat') {
              iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'medical' : 'medical-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarButton: ['Details', 'SplashScreen', 'Login'].includes(
            route.name,
          )
            ? () => {
                return null;
              }
            : undefined,
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
          color: 'blue',
          upperCaseLabel: true,
        }}>
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="SplashScreen" component={SplashScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
