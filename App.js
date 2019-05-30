import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from "./PresentationalComponent";

export default class App extends React.Component {
  state = {
    myState: 'This is my state'
  }

  render() {
    return (
      <View>
        <PresentationalComponent myState = {this.state.myState} />
      </View>
    );
  }
}
