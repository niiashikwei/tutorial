import React from 'react'
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'

const App = (props) => {
  return (
      <View style = {styles.container}>
        <TouchableWithoutFeedback>
          <Text>
            Button
          </Text>
        </TouchableWithoutFeedback>
      </View>
  )
}
export default App

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red'
  }
})