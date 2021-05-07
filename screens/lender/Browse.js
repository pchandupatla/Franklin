import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImagePropTypes, ProgressViewIOSComponent, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Spartan_400Regular, Spartan_600SemiBold, Spartan_700Bold } from '@expo-google-fonts/spartan';
import { Amiri_400Regular } from '@expo-google-fonts/amiri'

export default function Browse(props) {
  let [fontsLoaded] = useFonts({
    Spartan_400Regular,
    Spartan_600SemiBold,
    Spartan_700Bold,
    Amiri_400Regular,
  });

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.causes}>CAUSES</TouchableOpacity>
        <TouchableOpacity style={styles.about}>ABOUT</TouchableOpacity>
        {/* social media icons */}
        <TouchableOpacity style={styles.facebook}><Image style={styles.facebook_img} source ={require('../../assets/facebook.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.instagram}><Image style={styles.instagram_img} source ={require('../../assets/insta.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.twitter}><Image style={styles.twitter_img} source ={require('../../assets/twitter.png')}></Image></TouchableOpacity>
        <TouchableOpacity style ={styles.profile_pic}><Image style={styles.profile_img} source={require('../../assets/profile.png')}></Image><Text style={styles.profile_txt}>James</Text></TouchableOpacity>
      </View>
      <Text style={styles.browse_txt}>
        If you need help finding a business that resonates with you...
      </Text>
      <BrowseRow top='280px' text='Minority-owned Businesses' inheritence = {props}/>
      <BrowseRow top ='651px' text='Women-owned Businesses' inheritence = {props}/>
    </View>
  );
}

const BrowseSquare = (props) => {
  return (
    <View style ={{
      position:'absolute',
      left: props.left,
      top: props.top,
      width: '232px',
      height: '274px',
      backgroundColor: 'grey',
      textAlign: 'center',
      alignContent: 'center'
    }}>
      <ImageBackground source={"../../assets/sweetpoptreats.png"} style={{
        width: '232px',
        height: '274px',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}>
        <TouchableOpacity style={{
          position: 'absolute',
          left: '26px',
          top: '207px',
          width: '180px',
          height: '48px',
          backgroundColor: '#B1E397',
          borderRadius: '7px',
          textAlign:'center',
          fontSize: '18px',
          padding: '10px',
        }} onPress={() => props.inheritence.navigation.navigate("Business")}>
          <Text style={{
            position: 'relative',
            top: '12px',
            fontFamily: 'Spartan_700Bold',
            fontWeight: 'bold',
            lineHeight: '0.08em',
            letterSpacing: '0.08em',
            color: '#FFFFFF'
          }}>LEND
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}


const BrowseRow = (props) =>
{
  return(
    <View style={{
      position: 'absolute',
      width: '1135px',
      height: '350px',
      left: '172px',
      top: props.top,
    }}>
      <Text style ={{
        fontFamily: 'Spartan_600SemiBold',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '36px',
        letterSpacing: '0.01em',
        color: '#2D407D'
      }}>
        {props.text}
      </Text>
      <BrowseSquare top = '50px' inheritence = {props.inheritence} image = "../../assets/sweetpoptreats.png"/>
      <BrowseSquare top = '50px' left='271px' inheritence = {props.inheritence}/>
      <BrowseSquare top = '50px' left = '542px' inheritence = {props.inheritence}/>
      <BrowseSquare top = '50px' left = '813px' inheritence = {props.inheritence}/>
      <TouchableOpacity style={{
        position: 'absolute',
        width: '60px',
        height: '274px',
        top: '51px',
        left: '1084px',
      }}>
        <Image style={{
          width: '100%',
          height: '100%'
        }}source={require('../../assets/arrowbox.png')}></Image>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

  browse_txt: {
    position: 'absolute',
    width: '600px',
    height: '36px',
    left: '172px',
    top: '202px',

    fontFamily: 'Spartan_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '36px',
    lineHeight: '36px',
    letterSpacing: '0.02em',
    color: '#2D407D',
  },
});
