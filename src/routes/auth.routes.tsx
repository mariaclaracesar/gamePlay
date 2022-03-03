import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Background } from '../components/Background';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false
      }}
    >
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}