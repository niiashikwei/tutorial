import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'

const PresentationalComponent = (props) => {
    return (
        <View>
            <Text style = {styles.container}>
                {props.myState}
            </Text>
        </View>
    )
}
export default PresentationalComponent

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})
