import React, {useState} from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput, Pressable} from "react-native";
import image1 from "../../../assets/image1.png";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {firebase} from "../../../firebase";





const SignupScreen =()=>{

    // const [isSignedIn ,setisSignedIn] =useState('false');
    
    const [firstName ,setfirstName] = useState('')
    const [lastName , setlastName]  = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation =useNavigation();

    

    handleSignUp = async (email, password, firstName, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp : true,
                url:'https://charity-app-249f2.firebaseapp.com',
            })
            .then(()=>{
                navigation.navigate('MainScreen');
                alert('verification email sent')

            }).catch((error)=>{
                alert(error.message)
            })
            .then(()=>{
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName,
                    lastName,
                    email,

                })
            })
            .catch((error)=>{
                alert(error.message)
            })
           
          })
       
          .catch((error) => {
                alert(error.message)
            
        });
    
      }
    
    
    const SigninPressed=() =>{
        navigation.navigate('SigninScreen');
    }

    
        
    return(
        <View>
            <Image source={image1} style={[styles.image]} resizeMode='contain' />
            
            <View style={styles.container}>
                <TextInput 
                    placeholder="First Name" 
                    value={firstName}
                    onChangeText={firstName=>setfirstName(firstName)}
                    style={styles.input}
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                    placeholder="Last Name" 
                    value={lastName}
                    onChangeText={lastName=>setlastName(lastName)}
                    style={styles.input}
                />
            </View>
            
            
            
            
            <View style={styles.container}>
                <TextInput
                    style={styles.input} 
                    placeholder="Email Address" 
                    value={email}
                    onChangeText={email=>setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    
                />
            </View>

            <View style={styles.container}>
                <TextInput 
                    placeholder="Password" 
                    value={password}
                    secureTextEntry={true}
                    onChangeText={password=>setPassword(password)}
                    style={styles.input}
                />

            </View>

            <View style={{bottom:10}}>
                <CustomButton onPress={()=> handleSignUp(email,password,firstName,lastName)} text="SIGN UP"> </CustomButton>
            </View>
            
            {/* <CustomButton  onPress={this.InsertRecord}  text="LOGIN"></CustomButton> */}
            <Text style={styles.text1}>Have an account?</Text>
            
            <Pressable >
                <Text style={styles.link2} onPress={SigninPressed}>SIGN IN</Text>
            </Pressable>
            
        </View>

    
    );

}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:40,
    },
    image:{
        width: '70%',
        maxWidth:300,
        maxHeight:200,
        alignSelf:'center',
        top:100,
        
        
        
    },

    name:{
        width:'60%',
        alignSelf:'center',
        maxWidth:100,
        maxHeight:150,
        top:100,
    },

    container:{
        backgroundColor:'#EAE6E6',
        width:'80%',
        height:'10%',
        borderRadius:40,
        borderColor:'#A46DDB',
        borderWidth:2,
        top:100,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
    input:{
        paddingLeft:30,

    },

    link1:{
        top:130,
        alignSelf:"flex-end",
        paddingRight:30,
        fontWeight:"bold",

    },

    link2:{
        color:"#A46DDB",
        fontWeight:"bold",
        top:130,
        alignSelf:"flex-end",
        paddingRight:75,

    },

    text1:{
        alignSelf:"center",
        top:150,
        fontWeight:"bold",

    },
    
    
});

export default SignupScreen;


