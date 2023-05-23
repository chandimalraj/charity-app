import React from "react";
import { View,Text,StyleSheet, Pressable} from "react-native";

const MainButton= ({onPress,text,type}) =>{
    return(
        <Pressable onPress={onPress} style={styles.container} >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
};

const styles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:180,
        height:60,
        alignSelf:'center',
        top:550,
        borderRadius:20,
        borderColor:"#A46DDB",
        borderWidth:2,

    },

    
    

    text:{
        color:'#000000',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
    },

    
})

export default MainButton