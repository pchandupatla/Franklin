import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImagePropTypes } from 'react-native';
import { useFonts } from 'expo-font';
import { Spartan_400Regular, Spartan_600SemiBold, Spartan_700Bold } from '@expo-google-fonts/spartan';
import { Amiri_400Regular } from '@expo-google-fonts/amiri'
import { AbhayaLibre_700Bold } from '@expo-google-fonts/abhaya-libre'
// import Browse from "./screens/lender/Browse"
// import { render } from 'react-dom';
import Navigation from "./Navigation"

export default function Home() {
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
        <TouchableOpacity style={styles.logo}><Image style={styles.logo_image} source ={require('../assets/logo.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.causes}>CAUSES</TouchableOpacity>
        <TouchableOpacity style={styles.about}>ABOUT</TouchableOpacity>
        {/* social media icons */}
        <TouchableOpacity style={styles.facebook}><Image style={styles.facebook_img} source ={require('../assets/facebook.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.instagram}><Image style={styles.instagram_img} source ={require('../assets/insta.png')}></Image></TouchableOpacity>
        <TouchableOpacity style={styles.twitter}><Image style={styles.twitter_img} source ={require('../assets/twitter.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.signin_text} >Sign in</TouchableOpacity>
        <View style={styles.signup_button}>
          <TouchableOpacity style = {styles.signup_text}>Sign up</TouchableOpacity>
        </View>
      </View>
      <Image style={styles.secfi_image} source={require('../assets/secfi.png')}></Image>
      <Text style={styles.franklin_txt}>FRANKLIN </Text>
      <View style={styles.middle_container}>
        <Text style={styles.middle_txt}>
          YOUR LOAN, OUR WORLD.
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
      <Text style={styles.how_it_works}>HOW FRANKLIN WORKS</Text>
      <View style={styles.green_circles}>
        <Ellipse left='0px'/>
        <Ellipse left='387px'/>
        <Ellipse left='774px'/>
      </View>
      <StatusBar style="auto" />
      <View style={styles.dollars_invested}>
        <Text style={styles.total_dollars}>TOTAL DOLLARS INVESTED IN OUR BUSINESSES</Text>
        <Text style={styles.amiri}>$432,101</Text>
        <Text style={styles.spartan_bel_am}>We are committed to making large impacts on small businesses. We work with small business owners to achieve lasting success.</Text>
      </View>

      <View style={styles.causes_section}>
        <Text style = {{
          fontFamily: 'Spartan_600SemiBold',
          fontSize: '48px',
          lineHeight: '36px',
          color: '#2D407D',
        }}>CAUSES</Text>
        <View style={styles.causes_images}>
          <Image style={{
            width: '400px',
            height: '388px',
            position: 'relative',
            top: '50px'
          }}source={require('../assets/zhu-hongzhi-RZdPw7eIkdk-unsplash.jpg')}></Image>
          <CausesText text="MINORITIES" left='80px' />
          <Image style={{
            width: '400px',
            height: '388px',
            position: 'relative',
            top: '50px',
            left: '63px'
          }}source={require('../assets/dollar-gill-Kyoshy7BJIQ-unsplash.jpg')}></Image>
          <CausesText text="STUDENT-OWNED" left='542px'/>
          <Image style={{
            width: '400px',
            height: '388px',
            position: 'relative',
            top: '50px',
            left: '126px'
          }}source={require('../assets/jeff-siepman-kyuPjZudBKs-unsplash.jpg')}></Image>
          <CausesText text="WOMEN-OWNED" left= '1005px'/>
          {/* <BrowseSquare /> */}
        </View>
      </View>
    </View>
  );
}

const Ellipse = (props) => {
  return (
    <Image style={{
      width: '250px',
      height: '250px',
      position: 'absolute',
      left: props.left,
    }}
    source={require('../assets/ellipse.png')}></Image>
  )
}

const CausesText = (props) => {
  return (
    <View style={{
      position: 'absolute',
      width: '241px',
      height: '77px',
      left: props.left,
      top: '206px',
      textAlign: 'center',
      alignContent: 'center'
    }}>
      <Text style ={{
      fontFamily: 'Spartan_600SemiBold',
      fontSize: '18px',
      lineHeight: '36px',
      letterSpacing: '0.01em',
      backgroundColor: '#fff',
      padding: '10px'
    }}>
      {props.text}
    </Text>
  </View>  
  )
}

const BrowseSquare = (props) => {
  return (
    <View style ={{
      position:'absolute',
      width: '232px',
      height: '274px',
      backgroundColor: 'grey',
      textAlign: 'center',
      alignContent: 'center'
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
      }}>
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
    fontFamily: 'AbhayaLibre_700Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    width: '624px',
    fontSize: '96px',
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
    position: 'absolute',
    width: '670px',
    height: '36px',
    left: '388px',
    top: '1100px',

    fontFamily: 'Spartan_600SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    // lineHeight: '36px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#2d407d'
  },

  green_circles: {
    position: 'absolute',
    left: '208px',
    top: '1186px',
    borderColor: 'red',
    width: '1024px',
    height: '250px',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },

  ellipse: {
    width: '250px',
    height: '250px',
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

  dollars_invested: {
    position: 'absolute',
    left: '283px',
    top: '1600px',
    alignContent: 'center',
    textAlign: 'center',
    width: '873px',
    height: '400px'
  },

  total_dollars: {
    // position: 'absolute',
    fontFamily: 'Spartan_700Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '36px',
    letterSpacing: '0.15em',
    color: '#2b4f91',
  },

  amiri: {
    fontFamily: 'Amiri_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '120px',
    lineHeight: '36px',
    color: '#273978',
    position: 'relative',
    top: '90px',
  },

  spartan_bel_am: {
    fontFamily: 'Spartan_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '36px',
    letterSpacing: '0.02em',

    position: 'relative',
    top: '160px'
  },

  causes_section: {
    position: 'absolute',
    left: '57px',
    top: '2050px',
    width: '1326px',
    height: '548px',
    textAlign: 'center',
    alignContent: 'center',
  },
  
  causes_images: {
    flexDirection: 'row'
  }

});
