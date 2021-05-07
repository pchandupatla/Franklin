import React, { Component } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import CreateAccount from "./login/create_an_account";
import Browse from "./lender/Browse";
import Business from "./lender/Business";
import Dashboard from "./lender/Dashboard";

const FullStack = createStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.FullNavigation = this.FullNavigation.bind(this);
  }

  FullNavigation = (props) => {
    return(
      <FullStack.Navigator initialRouteName = "Browse">
        <FullStack.Screen name="Home" component={Home} />
        <FullStack.Screen name="CreateAccount" component={CreateAccount} />
        <FullStack.Screen name="Browse" component={Browse} />
        <FullStack.Screen name="Business" component={Business} />
        <FullStack.Screen name="Dashboard" component={Dashboard} />
      </FullStack.Navigator>
    );
  };

  render() {
    return(
      <NavigationContainer>
        <this.FullNavigation></this.FullNavigation>
      </NavigationContainer>
    );
  }

}

