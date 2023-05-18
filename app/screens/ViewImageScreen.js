import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';


function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}><Text>X</Text></View>
      <Image resizeMode="contain" style={styles.image} source={require("../assets/zaku-diagram.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 40,
    height: 40,
    top: 20,
    left: 20,
    backgroundColor: 'gray',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ViewImageScreen;