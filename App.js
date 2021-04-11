import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImagePropTypes } from 'react-native';
import { useFonts } from 'expo-font';
import { Spartan_400Regular, Spartan_600SemiBold, Spartan_700Bold } from '@expo-google-fonts/spartan';
// import {AbhayaLibre_700Bold} from '@expo-google-fonts/abhaya-libre';

export default function App() {
  let [fontsLoaded] = useFonts({
    Spartan_400Regular,
    Spartan_600SemiBold,
    Spartan_700Bold,
  });

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.causes}>CAUSES</TouchableOpacity>
        <TouchableOpacity style={styles.about}>ABOUT</TouchableOpacity>
        <TouchableOpacity style={styles.facebook}><Image style={styles.facebook_img} source ={require('./assets/facebook.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.instagram}><Image style={styles.instagram_img} source ={require('./assets/insta.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.twitter}><Image style={styles.twitter_img} source ={require('./assets/twitter.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.signin_text}>Sign in</TouchableOpacity>
        <View style={styles.signup_button}>
          <TouchableOpacity style = {styles.signup_text}>Sign up</TouchableOpacity>
        </View>
      </View>
      <Image style={styles.secfi_image} source={require('./assets/secfi.png')}></Image>
      <Text style={styles.franklin_txt}>FRANKLIN </Text>
      <View style={styles.middle_container}>
        <Text style={styles.middle_txt}>
          YOUR LOAN, THEIR WORLD.
        </Text>
        <Text style={styles.bottom_txt}>
          Franklin can help connect small businesses to those who are willing to lend a helping hand by operating as a guarantor for crowdfunding
        </Text>
      </View>
      <TouchableOpacity style={styles.green_button_one}>
          Become a lender
      </TouchableOpacity>
      <TouchableOpacity style={styles.green_button_two}>
        Become a borrower
      </TouchableOpacity>
      {/* <View style={styles.how_it_works}>
        <Text>HOW FRANKLIN WORKS</Text>
      </View> */}
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
    color:"#2D407D",
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
    left:"960px",
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
    fontFamily: "Spartan_700Bold",
    position: "relative",
    top: "8px",
  },

  signin_text: {
    position:"absolute",
    width:"142px",
    height:"54px",
    left:"1105px",
    top: "57px",
    fontFamily: "Spartan_700Bold",
    display: "flex",
    lineHeight: "36px",
    alignItems: "center",
    textAlign: "center"
  },

  secfi_image: {
    position: 'absolute',
    width: '1289px',
    height: '877px',
    left: '-656px',
    top: '167px'
  },

  franklin_txt: {
    position: 'absolute',
    width: '125px',
    height: '36px',
    left: '670px',
    top: '282px',

    fontFamily: 'Spartan_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '36px',
    /* identical to box height, or 200% */

    letterSpacing: '0.15em',

    color: '#3B4F91',
  },

  middle_container:
  {
    position: 'absolute',
    width: '624px',
    height: '321px',
    left: '670px',
    top: '363px',
  },

  middle_txt: {
    fontFamily: 'Spartan_700Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '70px',
    lineHeight: '70px',
    /* or 52% */

    letterSpacing: '-0.015em',

    color: '#2D407D',
  },

  bottom_txt: {
    position: 'absolute',
    left: '0px',
    top: '220px',
    fontFamily: 'Spartan_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '36px',
    letterSpacing: '0.02em',
    color: '#3B4F91',
  },

  green_button: {
    backgroundColor: '#B1E397',
    borderRadius: '7px',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Spartan_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '36px',
    /* or 200% */
    letterSpacing: '0.01em',

    color: '#FFFFFF',
  },

  green_button_one: {
    position: 'absolute',
    width: '233px',
    height: '76px',
    left: '669px',
    top: '729px',

    backgroundColor: '#B1E397',
    borderRadius: '7px',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Spartan_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '36px',
    /* or 200% */
    letterSpacing: '0.01em',

    color: '#FFFFFF',
  },

  green_button_two: {
    position: 'absolute',
    width: '233px',
    height: '76px',
    left: '956px',
    top: '729px',

    backgroundColor: '#B1E397',
    borderRadius: '7px',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Spartan_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '36px',
    /* or 200% */
    letterSpacing: '0.01em',

    color: '#FFFFFF',
  },

  how_it_works: {

  },

  facebook: {
    position: 'absolute',
    left: '814px',
    top: '63px',
  },

  facebook_img: {
    height: '20px',
    width: '20px',
  },

  instagram: {
    position: 'absolute',
    left: '852px',
    top: '63px',
  },

  instagram_img: {
    height: '20px',
    width: '20px'
  },

  twitter: {
    position: 'absolute',
    left: '890px',
    top: '63px',
  },

  twitter_img: {
    height: '20px',
    width: '24px'
  }

});
