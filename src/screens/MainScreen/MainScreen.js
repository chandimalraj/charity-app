import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import MainButton from "../../components/MainButton";
import { firebase } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import {tabbar} from "../../../assets/tabbar.png";
import { ImageBackground } from "react-native";

const MainScreen = () => {
  const [name, setName] = useState("");

  // change the password

  // const changePassword = () =>{
  //     firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
  //     .then(()=>{
  //         alert("Password reset email sent")
  //     }).catch((error)=>{
  //         alert(error)

  //     })
  // }

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  const signOut = () => {
    firebase.auth().signOut();
    navigation.navigate("SigninScreen");
  };

  const navigation = useNavigation();

  const DonatePressed = () => {
    navigation.navigate("DonationBoard");
  };

  const SponsorPressed = () => {
    navigation.navigate("SponsorScreen");
  };

  return (
    <View>
      <CustomHeader>
       
      </CustomHeader>
      <Text style={styles.text}>Hello, {name.firstName}</Text>

      {/* <CustomButton onPress={SignOutUser} text="SIGN OUT"></CustomButton> */}
      <MainButton onPress={DonatePressed} text="DONATE" ></MainButton>
      
      <MainButton onPress={SponsorPressed} text="SPONSOR"></MainButton>
     

      
      <MainButton text="DONATION SLOTS"></MainButton>
      
      
      <CustomButton onPress={signOut} text="Logout"></CustomButton>

      
          <Image source={tabbar} style={styles.image} />
                
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    top: 200,
    fontWeight: "bold",
  },

  hamburger:{
    top:0,
  },

  backgroundContainer: {
    
    top: 50,
    
  },

  image:{
        
    
    top:250,
    

    
},
});



export default MainScreen;
