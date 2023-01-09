/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Shorts from '../Screens/Shorts';
import Post from '../Screens/Post';
import Subscribe from '../Screens/Subscribe';
import Library from '../Screens/Library';
import Video from '../Screens/Video';

const Stack = createNativeStackNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Shorts" component={Shorts} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
