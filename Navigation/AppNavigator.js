import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import LoginScreen from "../Components/Login/LoginScreen";
import HomeScreen from "../Components/Home/HomeScreen";

const AppNavigator = createStackNavigator({
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions:{
                header: null,
            }
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions:{
                header: null,
            }
        }},
            {
                initialRouteName: "HomeScreen",
            })

export default AppNavigator