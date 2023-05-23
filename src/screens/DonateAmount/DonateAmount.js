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
import CustomButton from "../../components/CustomButton/CustomButton";


  const DonateAmount =()=>{
    
    const navigation = useNavigation();
    const { setDonation } = useContext(PaymentContext);
    const [amount, setAmount] =useState('');

    const Next =()=>{
        setDonation(amount);
        navigation.navigate("Donation");
    }
    
    return(

        <View>
        <CustomHeader></CustomHeader>
        <View style={styles.column}>
        <View style={styles.row}>
        
            <Pressable onPress={()=>{
                setDonation(100);
                navigation.navigate("Donation")

      }} style={styles.container} >
            <Text style={styles.text}>100 LKR</Text>
            </Pressable>

            <Pressable onPress={()=>{
                setDonation(200);
                navigation.navigate("Donation")}} style={styles.container} >
            <Text style={styles.text}>200 LKR</Text>
            </Pressable>
        </View>

        <View style={styles.row}>
        
            <Pressable onPress={()=>{
                setDonation(500);
                navigation.navigate("Donation")}} style={styles.container1} >
            <Text style={styles.text}>500 LKR</Text>
            </Pressable>

            <Pressable onPress={()=>{
                setDonation(1000);
                navigation.navigate("Donation")}} style={styles.container1} >
            <Text style={styles.text}>1000 LKR</Text>
            </Pressable>
        </View>

        <View style={styles.row}>
        
            <Pressable onPress={()=>{
                setDonation(2000);
                navigation.navigate("Donation")}} style={styles.container2} >
            <Text style={styles.text}>2000 LKR</Text>
            </Pressable>

            <Pressable onPress={()=>{
                setDonation(5000);
                navigation.navigate("Donation")}} style={styles.container2} >
            <Text style={styles.text}>5000 LKR</Text>
            </Pressable>
        </View>

        </View> 

        <View style={styles.inputcontainer}>
                <TextInput 
                    placeholder="Enter Amount"
                    value={amount}
                    onChangeText={amount=>setAmount(amount)} 
                    style={styles.input}
                    
                />
        </View>
        <View style={{top:400}}>
        <CustomButton onPress={Next} text="Next"></CustomButton>
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



  export default DonateAmount;