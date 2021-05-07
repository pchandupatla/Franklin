import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImagePropTypes } from 'react-native';
import { useFonts } from 'expo-font';
import { Spartan_400Regular, Spartan_600SemiBold, Spartan_700Bold } from '@expo-google-fonts/spartan';
import { Amiri_400Regular } from '@expo-google-fonts/amiri'
import { AbhayaLibre_700Bold } from '@expo-google-fonts/abhaya-libre'
// import 
// import Browse from "./screens/lender/Browse"
// import { render } from 'react-dom';
import Navigation from "./screens/Navigation"


export default function Home() {
  return (
    <Navigation></Navigation>
  );
}

