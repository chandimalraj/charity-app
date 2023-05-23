import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    TextInput,
    Pressable,
  } from "react-native";
import React, { useContext, useState} from "react";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { PaymentContext } from "../../context/PaymentContext";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import CustomButton from "../../components/CustomButton/CustomButton";

  const SponsorAmount =()=>{
    
    const navigation = useNavigation();
    const { setDonation } = useContext(PaymentContext);
    const [amount, setAmount] =useState('');

    const Next =()=>{
        setDonation(amount);
        navigation.navigate("Donation");
    }

    const onpayment =()=>{
        
        navigation.navigate("RecurringScreen");
    }
    
    return(

        <View>
        <CustomHeader></CustomHeader>
        <Text style={styles.headtext}>One Time Sponsoring</Text>
        <View style={styles.column}>
        <View style={styles.row}>
        
            <Pressable onPress={()=>{
                setDonation(10000);
                navigation.navigate("Donation")

      }} style={styles.container} >
            <Text style={styles.text}>10000 LKR</Text>
            </Pressable>

            <Pressable onPress={()=>{
                setDonation(15000);
                navigation.navigate("Donation")}} style={styles.container} >
            <Text style={styles.text}>15000 LKR</Text>
            </Pressable>
        </View>

        <View style={styles.row}>
        
        <Pressable onPress={()=>{
            setDonation(20000);
            navigation.navigate("Donation")

  }} style={styles.container1} >
        <Text style={styles.text}>20000 LKR</Text>
        </Pressable>

        <Pressable onPress={()=>{
            setDonation(25000);
            navigation.navigate("Donation")}} style={styles.container1} >
        <Text style={styles.text}>25000 LKR</Text>
        </Pressable>
    </View>

    

        

        

        </View>

        <Text style={styles.nexttext}>Recurring Sponsoring</Text> 

        
        <View style={{bottom:100}}>
        <SecondaryButton onPress={onpayment} text="Do Recurring Payment"></SecondaryButton>
        </View>
        </View>       
    )

  };

  const styles =StyleSheet.create({
    inputcontainer:{
        backgroundColor:'#EAE6E6',
        width:250,
        height:50,
        borderRadius:40,
        borderColor:'#A46DDB',
        borderWidth:2,
        top:500,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },

    container:{
        backgroundColor:'white',
        width:150,
        height:60,
        alignSelf:'center',
        top:200,
        marginHorizontal:10,
        borderRadius:20,
        borderColor:"#A46DDB",
        borderWidth:2,
        left:20

    },

    container1:{
        backgroundColor:'white',
        width:150,
        height:60,
        alignSelf:'center',
        top:300,
        marginHorizontal:10,
        borderRadius:20,
        borderColor:"#A46DDB",
        borderWidth:2,
        left:20

    },

    container2:{
        backgroundColor:'white',
        width:150,
        height:60,
        alignSelf:'center',
        top:400,
        marginHorizontal:10,
        borderRadius:20,
        borderColor:"#A46DDB",
        borderWidth:2,
        left:20

    },

    headtext:{
        color:'#000000',
        alignSelf:'center',
        top:140,
        fontWeight:'bold',

    },

    nexttext:{
        color:'#000000',
        alignSelf:'center',
        top:400,
        fontWeight:'bold',

    },


    text:{
        color:'#000000',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
    },

    row: {
        flex: 2,
        flexDirection: "row",
      },
    
      column: {
        flex: 4,
        flexDirection: "column",
        justifyContent: "space-between",
      },
})



  export default SponsorAmount;