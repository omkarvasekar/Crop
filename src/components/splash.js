import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
const HeroImg = { uri: ''}

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home');
        },2000)
    })

  return (
    <View style={styles.view}>
        <ImageBackground source={require('../../assets/veg.jpg')} resizeMode='stretch' style={styles.image}>
            <Animatable.Text style={[styles.text]} duration={2000} animation="fadeInDownBig">Farmify</Animatable.Text>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view:{
        flex: 1,
    },
    text: {
        fontWeight:'900',
        fontStyle:'normal',
        fontSize:50,
        backgroundColor: 'transparent',
        color:'green' // Make text transparent
        // Inherit font styles from parent (LinearGradient)
    },
})

export default Splash 
