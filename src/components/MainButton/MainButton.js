import React from "react";
import { View,Text,StyleSheet, Pressable, ImageBackground} from "react-native";
import heart from "../../../assets/heart.png";


const MainButton= ({onPress,text}) =>{
    return(
        <Pressable onPress={onPress} style={styles.container} >
            <View style={styles.imageWrapper}>
            <ImageBackground source={heart} style={styles.image}>
           
                <Text style={styles.text}>{text}</Text>
            
            </ImageBackground>
            </View>
        </Pressable>
    )
};

const styles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:250,
        height:120,
        alignSelf:'center',
        top:150,
        borderRadius:20,
        borderColor:"#A46DDB",
        borderWidth:2,
        marginBottom:20,
        

    },

    imageWrapper: {
        height: 200,
        width: 200,
        overflow : "hidden"
    },

    image:{
        
        width: "75%",
        height: "75%",
        alignSelf:"center",
        top:10,
        left:40,

        
    },

    
    

    text:{
        color:'#000000',
        alignSelf:'center',
        top:30,
        fontWeight:'bold',
        right:15

    },

    
})

export default MainButton