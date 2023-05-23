import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import SecondaryButton from "../../components/SecondaryButton";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { db } from "../../../config";
import { ref, onValue } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import {tabbar} from "../../../assets/tabbar.png";
import { PaymentContext } from "../../context/PaymentContext";

const DonationBoard = () => {
  const [todoData, setTodoData] = useState([]);
  // const todoRef = firebase.firestore().collection('todos');
  const navigation = useNavigation();
  // const { setDonation } = useContext(PaymentContext);

  useEffect(() => {
    const starCountRef = ref(db, "expenses/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log(newPosts);
      setTodoData(newPosts);
    });
  }, []);

  //     useEffect(()=>{

  //         todoRef
  //         .onSnapshot(
  //             querySnapshot =>{
  //                 const users = []
  //                 querySnapshot.forEach((doc)=>{
  //                     const{heading, text} = doc.data()
  //                     users.push({
  //                         id:doc.id,
  //                         heading,
  //                         text,
  //                     })
  //                 })
  //                 setUsers(users)
  //             }
  //         )

  // },[])

  // function fetch(){

  // getDoc(collection(db, "users")).then(docSnap=>{
  //     let users = [];
  //     docSnap.forEach((doc)=>{
  //         users.push({ ...doc.data(), id:doc.id})
  //     });
  //         console.log("Document data", users);
  // });

  // }

  const DonatePressed=() =>{
    navigation.navigate('DonateAmount');
}

  return (
    <View>
      <CustomHeader></CustomHeader>
      <Text style={styles.heading}>Organization Expenses</Text>
      
      <View style={styles.column}>
        <View style={styles.row}>
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("Donation")}
          >
            <Text> Electricity (LKR)</Text>

            {todoData.map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.itemText}>{item.electricity}</Text>
                </View>
              );
            })}
          </Pressable>

          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("Donation")}
          >
            <Text> Food (LKR)</Text>

            {todoData.map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.itemText}>{item.food}</Text>
                </View>
              );
            })}
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.container2}>
            <Text> Education (LKR)</Text>
            
            {
                todoData.map((item, index)=>{
                    return(
                        <View key={index}>
                            
                            <Text style={styles.itemText}>{item.education}</Text>


                            

                        </View>

                        
                    )
                })

                
            }
            
            
            
        </View>

        <View style={styles.container2}>
            <Text> Other Essentials (LKR)</Text>
            
            {
                todoData.map((item, index)=>{
                    return(
                        <View key={index}>
                            
                            <Text style={styles.itemText}>{item.essentials}</Text>


                            

                        </View>

                        
                    )
                })

                
            }
            
            
            </View> 
        </View>
      {/* <SecondaryButton onPress={()=>{
        console.log("transaction done");
        setDonation(5000);
      }} text="Donate"></SecondaryButton> */}
      <SecondaryButton onPress={DonatePressed} text="Donate"></SecondaryButton>
      <View style={styles.con}>
        <Image source={tabbar} style={styles.image} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  con:{
    top:600,

  },
  container: {
    backgroundColor: "#B58DDD",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    top: 180,
    width: 160,
    height: 130,
    left: 20,
  },

  container2:{
    backgroundColor:"#B58DDD",
    padding:15,
    borderRadius:15,
    margin:5,
    marginHorizontal:10,
    top:350,
    width:160,
    height:130,
    left:20,
},

  text: {
    color: "#000000",
    alignSelf: "center",
    top: 20,
    fontWeight: "bold",
  },

  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },

  heading: {
    fontWeight: "bold",
    left: 85,
    fontSize: 20,
    top: 120,
  },

  itemText: {
    fontWeight: "bold",
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

  image:{
    
    width:'100%',
    height:'100%'
  }
});

export default DonationBoard;
