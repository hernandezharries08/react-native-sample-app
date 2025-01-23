import * as React from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={require("./../assets/little-lemon-logo.png")}
        />
        <Text style={styles.text}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.btnText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { height: 250, width: 300, marginTop: "20%", marginBottom: 40 },
  btn: {
    backgroundColor: "#3E514A",
    width: "90%",
    bottom: 40,
    position: "absolute",
    marginLeft: "5%",
    padding: 5,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    width: "50%",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
