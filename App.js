import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Spartan_400Regular, Spartan_600SemiBold} from '@expo-google-fonts/spartan';

export default function App() {
  let [fontsLoaded] = useFonts({
    Spartan_400Regular,
    Spartan_600SemiBold,
  });
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.causes}>CAUSES</TouchableOpacity>
        <TouchableOpacity style={styles.about}>About</TouchableOpacity>
        <TouchableOpacity style={styles.signin_text}>Sign in</TouchableOpacity>
        <View style={styles.signup_button}>
          <TouchableOpacity style = {styles.signup_text}>Sign up</TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topbar: {
    position:"absolute",
    top: "0px",
    left: "0px",

    fontFamily: "Spartan_600SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "36px",
    letterSpacing: "0.01em",
    color:"#2D407D"
  },

  causes: {
    position:"absolute",
    width:"128px",
    height:"27px",
    left:"172px",
    top: "57px"
  },

  about: {
    position:"absolute",
    width:"128px",
    height:"27px",
    left:"945px",
    top: "57px"
  },

  signup_button: {
    position:"absolute",
    width:"142px",
    height:"54px",
    left:"1247px",
    top: "48px",
    textAlign: "center",

    backgroundColor: "#5EB1FF",
    borderRadius: "7px"
  },

  signup_text: {
    position: "relative",
    top: "8px",
  },

  signin_text: {
    position:"absolute",
    width:"142px",
    height:"54px",
    left:"1105px",
    top: "57px",

    display: "flex",
    lineHeight: "36px",
    alignItems: "center",
    textAlign: "center"
  }
});
