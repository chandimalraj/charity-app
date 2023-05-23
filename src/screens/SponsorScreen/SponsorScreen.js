import React, {useState, useEffect} from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput, Pressable} from "react-native";
import CustomButton from "../../components/CustomButton";
import MainButton from "../../components/MainButton";
import { db } from "../../../config";
import { ref, onValue } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import SecondaryButton from "../../components/SecondaryButton";

const SponsorScreen =()=>{
    const navigation = useNavigation();
    const [todoData, setTodoData] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, "children/");
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

      onsponsor=()=>{
        navigation.navigate("SponsorAmount");

      }
    return(
        <View>
            <CustomHeader></CustomHeader>
            <View style={styles.column}>
                <View style={styles.row}>
                <View style={styles.container1}>
                    <Text> Total Children</Text>
            
                    {
                        todoData.map((item, index)=>{
                            return(
                                <View key={index}>
                                    
                                    <Text style={styles.itemText}>{item.Total}</Text>
                                </View>
                            )
                        })
                    }
            </View>

            <View style={styles.container1}>
                    <Text> Sponsored Children</Text>
            
                    {
                        todoData.map((item, index)=>{
                            return(
                                <View key={index}>
                                    
                                    <Text style={styles.itemText}>{item.Sponsored}</Text>
                                </View>
                            )
                        })
                    }
            </View>

                </View>
            </View>

            <SecondaryButton onPress={onsponsor} text="Sponsor a Child"></SecondaryButton>

            
        </View>
    )

}

const styles = StyleSheet.create({
    container1: {
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

    
  row: {
    flex: 2,
    flexDirection: "row",
  },

  column: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  itemText: {
    fontWeight: "bold",
  },
})

export default SponsorScreen;