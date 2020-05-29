import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

function Greeting(props) {
  return (
    <View style = {styles.center}>
      <Text>Hello {props.name}</Text>
    </View>
  );
}

function LotsOfGreeting() {
  return (
    <View style = {[styles.center, {top: 50}]}>
      <Greeting name = 'Simran' />
      <Greeting name = 'Vivek' />
      <Greeting name = 'Mohit' />
    </View>
  );
}

export default LotsOfGreeting;