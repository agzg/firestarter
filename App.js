import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Home from './components/Home';
import Meet from './components/Meet';
import Create from './components/Create';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='YOUnIte: Login' component={Login} />
        <Stack.Screen name='YOUnIte: Home' component={Home} />
        <Stack.Screen name='YOUnIte: New Meeting' component={Meet} />
        <Stack.Screen name='YOUnIte: Meeting Created!' component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}