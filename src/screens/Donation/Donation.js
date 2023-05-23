import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";

import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { CardField, confirmPayment } from "@stripe/stripe-react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { PaymentContext } from "../../context/PaymentContext";

const Donation = () => {
  const navigation = useNavigation();

  const { donation, setStatus } = useContext(PaymentContext);
  const [cardDetails, setCardDetails] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const fetchPaymentTest = async () => {
    console.log(donation);
  };

  const fetchPaymentIntentClientSecret = async () => {
    const url = `https://monumental-tiramisu-3a03b9.netlify.app/create-payment-intent`;
    const newurl =
      "https://brilliant-halva-4976a4.netlify.app/create-payment-intent";
    const response = await fetch(
      `https://charity-app-backend.netlify.app/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: donation,
        }),
      }
    );

    const res = await response.json();
    return res.client_secret;
  };

  const handlePayPress = async () => {
    // if (!card) {
    //   return;
    // }

    // Fetch the intent client secret from the backend.
    const clientSecret = await fetchPaymentIntentClientSecret();

    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      paymentMethodData: {
        email: "customer@email.com",
      },
    });

    if (error) {
      console.log("Payment confirmation error", error);
      setSuccess("");
      setError("Error with Transaction");
      setStatus("Error with Transaction");
    } else if (paymentIntent) {
      console.log("Success from promise", paymentIntent);
      setError("");
      setSuccess("Your Donation Have Been Completed.");
      setStatus("Donation Have Been Completed.");
    }
  };

  return (
    <View>
      <CustomHeader></CustomHeader>
      <View style={styles.title}>
        <Text style={styles.titleText}>Donate {donation} LKR</Text>
      </View>
      <View style={{ marginTop: 70 }}>
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
      <View style={styles.paymentMsg}>
        {error && <Text style={styles.errorText}>{error}</Text>}
        {success && <Text style={styles.successText}>{success}</Text>}
      </View>
      <CustomButton onPress={handlePayPress} text="Donate"></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B58DDD",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    top: 150,
    width: 160,
    height: 130,
    left: 20,
  },

  title: {
    marginTop: 117,
    alignItems: "center",
  },

  paymentMsg: {
    marginTop: 27,
    alignItems: "center",
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 27,
  },

  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },

  heading: {
    fontWeight: "bold",
    left: 85,
    fontSize: 20,
    top: 150,
  },

  errorText: {
    color: "red",
    fontWeight: "700",
  },

  successText: {
    color: "green",
    fontWeight: "700",
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
});

export default Donation;
