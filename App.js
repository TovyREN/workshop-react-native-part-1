import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';

export default function App() {
  useEffect(() => {    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E2E6E1',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    padding: 8,
  }
});
