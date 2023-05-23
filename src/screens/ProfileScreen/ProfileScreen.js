import React, {useState} from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput, Pressable, SafeAreaView} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {db} from "../../../firebase"; 
import {collection,addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";


const ProfileScreen = () =>{

  const navigation =useNavigation();

  const [addData, setAddData] = useState('');
  const [lname, setlname] =useState('');
  const [uname, setuname] = useState ('');
  const [address, setaddress] = useState('');
  const [age, setage] = useState('');
  const [email, setemail] =useState('');
  const [mobile, setmobile] = useState('');
  
  const dbRef = collection(db,"users");
  const addField = ()=>{
    // if(addData && addData.length > 0){
      //get the timestamp
      // const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        firstname :addData,
        lastname : lname,
        Username : uname,
        Address  : address,
        Age : age,
        Email :email,
        Mobilenumber:mobile
        // createdAt: timestamp
      };

      addDoc(dbRef,data)
          // .add(data)
          .then(()=>{
            // setAddData('');
            navigation.navigate('MainScreen');
            
          })

          .catch((error)=>{
            alert(error);
          })


    // }

  }
  return(
      <SafeAreaView>
          <ScrollView>
          
          {/* <Image
              style={styles.userImg}
              source={require('../../../assets/profile.jpg')}/> */}

          <Text style={styles.text1}>First Name</Text>
          <View style={styles.container}>
          <TextInput 
              placeholder="" 
              style={styles.input}
              value={addData}
              onChangeText={(firstname)=> setAddData(firstname)}
              />
          </View>

          <Text style={styles.text1}>Last Name</Text>
          <View style={styles.container}>
          <TextInput 
              placeholder="" 
              style={styles.input}
              value={lname}
              onChangeText={(lastname)=> setlname(lastname)}
              />
              
          </View>

          <Text style={styles.text1}>Username</Text>
          <View style={styles.container}>
          <TextInput 
              placeholder="" 
              style={styles.input}
              value={uname}
              onChangeText={(Username)=> setuname(Username)}
              />
              
          </View>

          <Text style={styles.text1}>Address</Text>
          <View style={styles.container}>
          <TextInput 
              placeholder="" 
              style={styles.input}
              value ={address}
              onChangeText={(Address)=> setaddress(Address)}
              />
              
          </View>

          <Text style={styles.text1}>Age</Text>
          <View style={styles.container}>
          <TextInput 
              placeholder="" 
              style={styles.input}
              value={age}
              onChangeText={(Age)=> setage(Age)}

              />
              
          </View>

          

          <Text style={styles.text1}>Email</Text>
          <View style={styles.container}>
          <TextInput 
              placeholder="" 
              style={styles.input}
              value={email}
              onChangeText={(Email)=> setemail(Email)}
              />
              
          </View>

          <Text style={styles.text1}>Mobile Number</Text>
          <View style={styles.container}>
          <TextInput 
              placeholder="" 
              style={styles.input}
              value={mobile}
              onChangeText={(Mobilenumber)=> setmobile(Mobilenumber)}
              />
              
          </View>
          
          <Pressable>
              <Text onPress={addField}>Save</Text>
          </Pressable>

          </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
      backgroundColor:'ivory',
      width:'65%',
      borderRadius:40,
      borderColor:'#83C882',
      borderWidth:2,
      
      paddingHorizontal:10,
      alignSelf:'center',
      marginVertical:5,
  },
 
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});


export default ProfileScreen;

   