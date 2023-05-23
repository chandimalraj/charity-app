import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import image1 from "../../../assets/image1.png";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../firebase";

const SigninScreen = () => {
    
  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);

    if (currentUser != null) {
      navigation.navigate("MainScreen");
    }
  }, []);

  // const [isSignedIn ,setisSignedIn] =useState('false');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("MainScreen");
    } catch (error) {
      alert(error.message);
    }
  };

  //forget password

  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  // const SignOutUser=()=>{
  //     signOut(authentication)
  //     .then((re)=>{
  //         setisSignedIn(false);
  //     })
  //     .catch((err)=>{
  //         console.log(err);

  //     })
  // }

  const SignupPressed = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <View>
      <Image source={image1} style={[styles.image]} resizeMode="contain" />

      <View style={styles.container}>
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          style={styles.input}
        />
      </View>
      <Pressable>
        <Text style={styles.link1} onPress={() => forgetPassword()}>
          Forgot password?
        </Text>
      </Pressable>
      <CustomButton
        onPress={() => handleSignIn(email, password)}
        text="LOGIN"
      ></CustomButton>
      <Text style={styles.text1}>Don't have an account?</Text>

      <Pressable>
        <Text style={styles.link2} onPress={SignupPressed}>
          SIGN UP
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
  },
  image: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    alignSelf: "center",
    top: 100,
  },

  name: {
    width: "60%",
    alignSelf: "center",
    maxWidth: 100,
    maxHeight: 150,
    top: 100,
  },

  button: {
    backgroundColor: "#EAE6E6",
    width: "50%",
    height: "30%",
  },

  container: {
    backgroundColor: "#EAE6E6",
    width: "80%",
    height: "10%",
    borderRadius: 40,
    borderColor: "#A46DDB",
    borderWidth: 2,
    top: 140,
    paddingHorizontal: 10,
    alignSelf: "center",
    marginVertical: 5,
  },
  input: {
    paddingLeft: 30,
  },

  link1: {
    top: 130,
    alignSelf: "flex-end",
    paddingRight: 30,
    fontWeight: "bold",
  },

  link2: {
    color: "#A46DDB",
    fontWeight: "bold",
    top: 130,
    alignSelf: "flex-end",
    paddingRight: 75,
  },

  text1: {
    alignSelf: "center",
    top: 150,
    fontWeight: "bold",
  },
});
export default SigninScreen;
