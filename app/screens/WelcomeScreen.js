import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Image } from 'react-native';
import colors from '../config/colors.js'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/gundam-logo.webp')}/>
        <Text>WokkieTalkie</Text>
      </View>
      <View style={styles.loginButton}><Text>Log In</Text></View>
      <View style={styles.registerButton}><Text>Register</Text></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  loginButton: {
    width: '100%',
    height: '10%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: '10%',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 83,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  }
})

export default WelcomeScreen;