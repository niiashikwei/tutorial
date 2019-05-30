import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
  }
  state = {
    myState: 'I like green eggs and ham.'
  }

  updateState() {
    this.setState({myState: 'The state is updated'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress = {this.updateState}> {this.state.myState} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;