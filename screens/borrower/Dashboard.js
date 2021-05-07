import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImagePropTypes } from 'react-native';
import { useFonts } from 'expo-font';
import { Spartan_400Regular, Spartan_600SemiBold, Spartan_700Bold } from '@expo-google-fonts/spartan';
import { Amiri_400Regular } from '@expo-google-fonts/amiri'
import { LinearGradient } from 'expo-linear-gradient'

export default function Dashboard() {
  let [fontsLoaded] = useFonts({
    Spartan_400Regular,
    Spartan_600SemiBold,
    Spartan_700Bold,
    Amiri_400Regular,

  });

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.logo}><Image style={styles.logo_image} source ={require('./assets/logo.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.causes}>CAUSES</TouchableOpacity>
        <TouchableOpacity style={styles.about}>ABOUT</TouchableOpacity>
        {/* social media icons */}
        <TouchableOpacity style={styles.facebook}><Image style={styles.facebook_img} source ={require('./assets/facebook.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.instagram}><Image style={styles.instagram_img} source ={require('./assets/insta.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.twitter}><Image style={styles.twitter_img} source ={require('./assets/twitter.png')}></Image></TouchableOpacity>
        <TouchableOpacity style ={styles.profile_pic}><Image style={styles.profile_img} source={require('./assets/profile.png')}></Image><Text style={styles.profile_txt}>Tommy</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <Text style={styles.dash_text}>BORROWER DASHBOARD</Text>
      <Text style={styles.status_text}>Check how much you have repaid.</Text>
      <View style={styles.white_bar}>
        <View>
          <LinearGradient colors={['#F3C5B9','#FAE99E']} start={[0.0, 0.0]} end={[1.0, 1.0]} style={styles.gradient_bar}>
          </LinearGradient>
        </View>
      </View>
      <Text style={styles.begin}>$0</Text>
      <Text style={styles.middle}>$1,066</Text>
      <Text style={styles.end}>$1,600</Text>
      <Text style={styles.summary_text}>Your have currently repaid $1066 of your loan. You have $534 left to go. You can do it!</Text>
      {/* <Text style={styles.allocation}>YOUR ALLOCATIONS</Text> */}
      <BorrowerStatus top='950px' values={[375, 375]}/>
    </View>
  );
}

const BorrowerStatus = (props) => {
  var total = props.values[0] + props.values[1];
  var gradient_height = props.values[0]/total * 240;
  var view_pos = 240 - gradient_height;

  return (
  <View style={{
    position: 'absolute',
    height: '480px',
    width: '250px',
    alignSelf: 'center',
    top: props.top,
  }}>
    <Text style={{
      position: 'absolute',
      alignSelf: 'center',
      width: 'auto',
      height: '36px',

      fontFamily: 'Amiri_400Regular',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '36px',
      letterSpacing: '-0.015em',

      color: '#212E59',
    }}>Lender 1</Text>
    <View style ={{
      position: 'absolute',
      top: '50px',
      backgroundColor: '#B6B6B6',
      width: '250px',
      height: '240px',
      borderRadius: '50px'
    }}>
      <View style={{position:'absolute', top: view_pos}}>
        <Text style={{
          position: 'relative',
          alignSelf: 'center',
          bottom: gradient_height / 2,

          fontFamily: 'Spartan_400Regular',
          fontSize: '22px',
          lineHeight: '36px',
          letterSpacing: '0.02em',
          color: '#000'
        }}>${props.values[1]}</Text>
        <LinearGradient colors={['#F3C5B9','#FAE99E']} start={[0.0, 0.0]} end={[1.0, 1.0]} style={{
            width: '250px',
            height: gradient_height,
            borderBottomLeftRadius: '50px',
            borderBottomRightRadius: '50px'
          }}>
            <Text style={{
              position: 'relative',
              alignSelf: 'center',
              fontFamily: 'Spartan_400Regular',
              width: 'auto',
              top: gradient_height / 2,
              fontSize: '22px',
              lineHeight: '36px',
              letterSpacing: '0.02em',
              color: '#000'

            }}>${props.values[0]}</Text>
        </LinearGradient>
      </View>
    </View>
          <Text style={{
            fontFamily: 'Spartan_400Regular',
            fontSize: '22px',
            lineHeight: '36px',
            letterSpacing: '0.02em',
            color: '#000',
            alignSelf: 'center',
            position: 'absolute',
            top: '350px'
          }}>${total}</Text>
          <TouchableOpacity style={{
            position: 'absolute',
            alignSelf: 'center',
            top: '400px',
            width: '250px',
            height: '58px',
            backgroundColor: '#2D407D',
            borderRadius: '10px'
          }}>
            <Text style={{
              position: 'absolute',
              alignSelf: 'center',
              padding: '5px',
              width: 'auto',
              top: '5px',
              fontFamily: 'Spartan_400Regular',
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '36px',
              letterSpacing: '0.01em',
              color: "#FFF"
            }}>
              REPAY
            </Text>
          </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'y-scroll',
    flex: 1,
    backgroundColor: '#FFF',
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

  logo: {
    position: 'absolute',
    left: '36px',
    top: '35px',
    width: '73px',
    height: '73px',
  },

  logo_image: {
    width: '100%',
    height: '100%',
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
  },

  profile_txt : {
    position: 'absolute',
    left: '40px',
    fontFamily: 'Spartan_700Bold',
    fontSize: '15px',
    lineHeight: '36px',
    letterSpacing: '0.01em',
    color: '#212E59',
  },

  profile_pic : {
    position: 'absolute',
    left: '1241px',
    top: '57px',
  },

  profile_img: {
    width: '30px',
    height: '30px',
  },  
  gradient_bar: { 
    width: '727px',
    height: '192px',
    borderRadius: '50px'
  },

  white_bar: {
    position: 'absolute',
    top: '512px',
    left: '189px',
    width: '1086px',
    height: '192px',
    backgroundColor: '#BDBDBD',
    borderRadius: '50px'
  },

  bar: {
    position: 'absolute',
    top: '512px',
    left: '189px',
    width: '1086px',
    height: '262px',
    backgroundColor: '#5eb1ff'
  },

  summary_text: {
    position: 'absolute',
    width: '707px',
    height: '100px',
    left: '355px',
    top: '808px',

    fontFamily: 'Spartan_400Regular',
    fontSize: '22px',
    lineHeight: '36px',
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#212E59',
    // backgroundColor: '#5eb1ff'
  },

  status_text: {
    position: 'absolute',
    width: 'auto',
    height: '36px',
    left: '320px',
    top: '355px',

    fontFamily: 'Amiri_400Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '36px',
    letterSpacing: '-0.015em',
    color: '#212E59',
  },

  dash_text: {
    position: 'absolute',
    width: 'auto',
    height: '37px',
    left: '587px',
    top: '281px',

    fontFamily: 'Spartan_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '36px',
    letterSpacing: '0.02em',
    color: '#212E59'
  },
  allocation: {
    position: 'absolute',
    width: 'auto',
    height: '37px',
    left: '177px',
    top: '984px',

    fontFamily: 'Spartan_400Regular',
    fontSize: '22px',
    lineHeight: '36px',
    letterSpacing: '0.02em',

    color: '#212E59',
  },

  begin: {
    position: 'absolute',
    width: 'auto',
    height: '36px',
    left:'189px',
    top: '738px',

    fontFamily: 'Spartan_600SemiBold',
    fontSize: '24px',
    lineHeight: '36px',
    letterSpacing: '0.02em',
    color: '#212E59'
  },

  middle: {
    position: 'absolute',
    width: 'auto',
    height: '36px',
    left:'868px',
    top: '738px',

    fontFamily: 'Spartan_600SemiBold',
    fontSize: '24px',
    lineHeight: '36px',
    letterSpacing: '0.02em',
    color: '#212E59'
  },

  end: {
    position: 'absolute',
    width: 'auto',
    height: '36px',
    left:'1180px',
    top: '738px',

    fontFamily: 'Spartan_600SemiBold',
    fontSize: '24px',
    lineHeight: '36px',
    letterSpacing: '0.02em',
    color: '#212E59'
  },
});
