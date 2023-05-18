import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Alert, Button } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
