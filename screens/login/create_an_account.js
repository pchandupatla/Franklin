import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
// import grass from "./grass.png"
//import Navigation from "../../Navigation";

export default function CreateAccount() {
  return (
    <View style={styles.container}>
      <View style={styles.container_1}>
      </View>
      <View style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <View style={{display:"flex",flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700", color: "#273978", marginRight: 10, marginBottom: 0, padding: 0 }}>FRANKLIN</Text>
          <Text style={{color: "white", fontSize: 20, fontWeight: "400", color: "#273978", marginBottom: 0, padding: 0}}>Lender</Text>
        </View>
        <TextInput style={styles.textInput} placeholder="Username"></TextInput>
        <TextInput style={styles.textInput} placeholder="Password"></TextInput>
        <TouchableOpacity
          style={styles.loginButtonContainer}
          // onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 10, fontWeight: "300", color: "#273978", alignSelf: "center"}}>Forgot username or password?</Text>
      </View>
      <View style={styles.container_2}>
        <Image source={require("../../assets/grass.jpg")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    display: "flex"
  },

  container_1: { //signup
    backgroundColor: "white",
    alignSelf: "flex-end",
  },

  container_2: { //grass
    backgroundColor: "white",
    alignSelf: "flex-end",
  },

  loginButtonContainer: {
    backgroundColor: "#83C2FC",
    borderRadius: 50,
    width: 250,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  signupButtonContainer: {
    backgroundColor: "#83C2FC",
    borderRadius: 50,
    width: 250,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  signupButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },

  textInput: {
    width: 250,
    height: 40,
    margin: 10,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },

  logo_image: {
    width: '100%',
    height: '100%',
  },

});