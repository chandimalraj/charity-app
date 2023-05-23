import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { PaymentContext } from "../../context/PaymentContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import {
  CardField,
  confirmPayment,
  useStripe,
} from "@stripe/stripe-react-native";
import axios from "axios";
import { firebase } from "../../../firebase";

// import Stripe from "stripe";

const RecurringScreen = () => {
  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser.email);
    setEmail(currentUser.email)
  },[]);

  const { createPaymentMethod } = useStripe();
  const [cardDetails, setCardDetails] = useState(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success,setSuccess] = useState("")
  const [error, setError] = useState("");

  const createSubscription = async () => {

    try {
      const saveResponse = await axios.post(
        "https://charity-app-backend.netlify.app/save",
        {
          email: email,
          name : email
        }
      );
      const customerId = saveResponse.data.data.id;
      console.log(customerId)

      const paymentResponse = await axios.post(
        "https://charity-app-backend.netlify.app/payment",
        {
          cardNo:4242424242424242,
          expMonth:12,
          expYear:25,
          cvc:123
        }
      );
     
      const paymentMethodId = paymentResponse.data.data.id
      console.log(paymentMethodId)
      const attachResponse = await axios.post(
        "https://charity-app-backend.netlify.app/attach",
        {
          customerId:customerId,
          paymentMethod:paymentMethodId
        }
      );

      console.log(attachResponse)

      const subscribeResponse = await axios.post(
        "https://charity-app-backend.netlify.app/subscribe",
        {
          customerId:customerId,
          priceId:'price_1NAHIKEyrZyjTHe0DqiXyG8D',
          paymentMethod:paymentMethodId
        }
      );

      if(subscribeResponse.status == 200){
        setSuccess("Your Donation Have Been Completed.");
        setError("");
      }


    } catch (error) {
      console.log(error)
      setError("Error with Transaction");
      setSuccess("");
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader></CustomHeader>
      <Text style={styles.headtext}>Recurring Payments</Text>

      {/* <Text style={styles.text1}>Select your time period</Text> */}

      {/* <Text style={styles.text2}>Select the amount</Text> */}

      <View style={{ marginTop: 20 }}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 50,
          }}
          onCardChange={(cardDetails) => {
            setCardDetails(cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log("focusField", focusedField);
          }}
        />
      </View>

      <View
      // style={{ top: 400 }}
      >
        <CustomButton
          text="Subscribe"
          onPress={createSubscription}
        ></CustomButton>
      </View>

      <View style={styles.paymentMsg}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        {success && <Text style={styles.successText}>{success}</Text>}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headtext: {
    color: "#000000",
    alignSelf: "center",
    marginTop: 120,
    fontWeight: "bold",
    fontSize: 20,
  },

  text1: {
    color: "#000000",
    // top: 200,
    left: 20,
    fontWeight: "bold",
    fontSize: 15,
  },

  text2: {
    color: "#000000",
    top: 400,
    fontWeight: "bold",
    left: 20,
    fontSize: 15,
  },
  errorText: {
    color: "red",
    fontWeight: "700",
  },

  successText: {
    color: "green",
    fontWeight: "700",
  },
  paymentMsg: {
    marginTop: 27,
    alignItems: "center",
  },
});

export default RecurringScreen;
