import React from "react";
import { View,Image,Text,StyleSheet, Pressable, ImageBackground} from "react-native";
import header from '../../../assets/header.png';
import hamburger from "../../../assets/hamburger.png";
// import logo from '../../../assets/images/logo.png'

const CustomHeader=() =>{
    return(
        <View>
            <View style={styles.backgroundContainer}>
                <Image source={header} style={styles.image} />
                <Image source={hamburger} style={styles.hamburger}></Image>
            </View>
            {/* <View style={styles.overlay}>
                <Image source={logo} styles={styles.lg} />
            </View> */}


        </View>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity:0.9,
    },

    image:{
        height:100,
        
        
        
    },

    overlay:{
        alignSelf:"center",

    },
    lg:{
        alignSelf:"center",

    },

    hamburger:{
        top:-45,
        left:310,

    }

})


export default CustomHeader