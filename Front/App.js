import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./pages/HomeScreen";
import { createBottomTabNavigator } from "react-navigation";
import { SearchScreen } from "./pages/SearchScreen";
import { LibraryScreen } from "./pages/LibraryScreen";
import { AlbumScreen } from "./pages/AlbumScreen";
import axios from "axios";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js on your app!</Text>
        <HomeScreen />
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Library: LibraryScreen,
  Album: AlbumScreen
});
