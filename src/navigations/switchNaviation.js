import React, { Component } from 'react';
import {createSwitchNavigator} from 'react-navigation'
import SplashScreen from '../screens/SplashScreen'
import AuthMain from '../screens/AuthScreens/AuthMain'
import Home from '../screens/MainApp/Home'
import AuthStack from './AuthStack'
const Switch=createSwitchNavigator({

    SplashScreen:{screen:SplashScreen},
    AuthStack:{screen:AuthStack},
    MainApp:{screen:Home},


})


export default Switch;