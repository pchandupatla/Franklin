import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImagePropTypes, requireNativeComponent } from 'react-native';
import { useFonts } from 'expo-font';
import { Spartan_400Regular, Spartan_600SemiBold, Spartan_700Bold } from '@expo-google-fonts/spartan';
import { Amiri_400Regular } from '@expo-google-fonts/amiri'
import { AbhayaLibre_700Bold } from '@expo-google-fonts/abhaya-libre'

export default function Business(props) {
  let [fontsLoaded] = useFonts({
    Spartan_400Regular,
    Spartan_600SemiBold,
    Spartan_700Bold,
    Amiri_400Regular,
    AbhayaLibre_700Bold,
  });

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.logo}><Image style={styles.logo_image} source ={require('../../assets/logo.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.causes}>CAUSES</TouchableOpacity>
        <TouchableOpacity style={styles.about}>ABOUT</TouchableOpacity>
        {/* social media icons */}
        <TouchableOpacity style={styles.facebook}><Image style={styles.facebook_img} source ={require('../../assets/facebook.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.instagram}><Image style={styles.instagram_img} source ={require('../../assets/insta.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.twitter}><Image style={styles.twitter_img} source ={require('../../assets/twitter.png')}></Image></TouchableOpacity>
        <TouchableOpacity style ={styles.profile_pic}><Image style={styles.profile_img} source={require('../../assets/profile.png')}></Image><Text style={styles.profile_txt}>James</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <View style = {styles.textbox}>
        <Text style={{
          position: 'relative',
          top: '48px',
          left: '39px',
          fontFamily: 'Amiri_400Regular',
          fontWeight: 'bold',
          fontSize: '48px',
          lineHeight: '36px',
          letterSpacing: '-0.015em',
          color: '#212E59',
        }}>
          Sweetpop Treats
        </Text>
        <Text style={{
          position: 'relative',
          width: '650px',
          top: '95px',
          left: '39px',
          fontFamily: 'Spartan_400Regular',
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: '36px',
          alignItems: 'center',
          letterSpacing: '0.02em',
          color: '#212e59',
        }}>
          Sample text about your business here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <Image style={{
        width: '569px',
        height: '353px',
        position: 'absolute',
        top: '159px',
        left: '807px',
      }} source={require('../../assets/sweetpoptreats.png')}></Image>
      <View style={{
        width: 'auto',
        position: 'absolute',
        top: '545px',
        left: '820px',
        flexDirection: 'row',
      }}>
        <ContributionButton value={25}/>
        <ContributionButton value={100}/>
        <ContributionButton value={1000}/>
        <ContributionButton value='CUSTOM' custom={true}/>
      </View>
      <TouchableOpacity style={{
        position: 'absolute',
        width: '524px',
        height: '76px',
        left: '830px',
        top: '687px',

        backgroundColor: '#A3De84',
        borderRadius: '5px',
      }} onPress ={() => props.navigation.navigate("Dashboard")}>
        <Text style = {{
          position: 'relative',
          top: '23px',
          alignSelf: 'center',
          fontFamily: 'Spartan_400Regular',
          fontWeight: 'bold',
          fontSize: '22px',
          lineHeight: '36px',
          letterSpacing: '0.02em',
          color: '#fff'
        }}>
          CHECKOUT NOW
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const ContributionButton = (props) => {
  var text;

  if(props.custom)
  {
    text = <Text>{props.value}</Text>
  }
  else
  {
    text = <Text>${props.value}</Text>
  }
  return (
    <View style={{
      margin: '10px'
    }}>
      <TouchableOpacity style={{
        width: 'auto',
        height: '56px',
        backgroundColor: '#5eb1ff',
        borderRadius: '10px',
      }}>
        <Text style={{
          position: 'relative',
          bottom: '9px',
          width: 'auto',
          padding: '20px',
          fontFamily: 'Spartan_400Regular',
          fontWeight: '600',
          fontSize: '22px',
          lineHeight: '36px',
          alignSelf: 'center',
          letterSpacing: '0.02em',
          color: '#fff'
        }}>
          {text}
        </Text>
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

  textbox: {
    position: 'absolute',
    width: '697px',
    height: '813px',
    left: '66px',
    top: '159px',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderRadius: '10px',
  },

  about: {
    position:"absolute",
    width:"128px",
    height:"27px",
    left:"960px",
    top: "57px"
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

});
