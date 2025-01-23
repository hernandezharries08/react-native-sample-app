import * as React from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [btnDisabled, setBtnDisabled] = React.useState(true);

  const handlePress = () => {
    Alert.alert("Subscribed!", "You've successfully subscribed.");
    setEmail("");
    setBtnDisabled(true);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setBtnDisabled(!validateEmail(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("./../assets/little-lemon-logo-grey.png")}
        />
        <Text style={styles.text}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Type your email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={handleEmailChange}
      ></TextInput>
      <Pressable
        style={styles.btn}
        onPress={handlePress}
        disabled={btnDisabled ? true : false}
        backgroundColor={btnDisabled ? "grey" : "#3E514A"}
      >
        <Text style={styles.btnText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { height: 150, width: 150, marginTop: "20%", marginBottom: 40 },
  input: { height: 40, margin: 12, borderWidth: 1 },
  btn: {
    width: "90%",
    marginLeft: "5%",
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    width: "90%",
    textAlign: "center",
  },
});

export default SubscribeScreen;
