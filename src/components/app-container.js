'use strict';

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/home.js';
import Profile from './screens/profile.js';
import CreatePost from './screens/create-post.js';
import LoginView from './screens/login.js';
import RegisterView from './screens/register.js';
import HomePost from './screens/home-post.js';

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  CreatePost: { screen: CreatePost },
  HomePost: { screen: HomePost }
});

// const PostStack = createStackNavigator({
//   CreatePost: { screen: CreatePost },
//   HomePost: { screen: HomePost }
// });
const ProfileStack = createStackNavigator({
  Profile: { screen: Profile }
});

const LoginStack = createStackNavigator({
  LoginView: { screen: LoginView },
  RegisterView: { screen: RegisterView }
  // Home: { screen: Home },
  // CreatePost: { screen: CreatePost },
  // HomePost: { screen: HomePost }
});

// const RegisterStack = createStackNavigator({
//   LoginView: { screen: LoginView },
//   RegisterView: { screen: RegisterView }
// });

const MainNavigator = createBottomTabNavigator({
  LoginView: LoginStack,
  Home: HomeStack,
  Profile: ProfileStack
  // RegisterView: RegisterView
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
