import React from "react";
import { View,Text,StyleSheet, Pressable} from "react-native";

const CustomButton= ({onPress,text,type}) =>{
    return(
        <Pressable onPress={onPress} style={styles.container} >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
};

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#A46DDB',
        width:120,
        height:60,
        alignSelf:'center',
        top:150,
        borderRadius:40,

    },

    
    

    text:{
        color:'#FFFFFF',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
    },

    
})

export default CustomButton