import React, { Component } from "react";
import { Poppins_600SemiBold, Poppins_400Regular } from "@expo-google-fonts/poppins";
import * as Font from "expo-font";

import BottomTabNavigator from "./components/BottomTabNavigator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Poppins_600SemiBold,
      PoppinsRegular: Poppins_400Regular,
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <BottomTabNavigator />;
    }
    return null;
  }
}
