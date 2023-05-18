import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require("../assets/zaku-diagram.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
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