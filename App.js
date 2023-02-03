import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const { width, height } = Dimensions.get("window");
import Button from './Button'

export default function App() {
  function SvgTop() {
    return (
      <Svg
      width={377}
      height={330}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0h377v324C260.672 206.052 0 324 0 324V0Z" fill="url(#a)" />
      <Defs>
        <LinearGradient
          id="a"
          x1={0}
          y1={162}
          x2={377}
          y2={162}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#CC2B5E" />
          <Stop offset={1} stopColor="#753A88" />
        </LinearGradient>
      </Defs>
    </Svg>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign In to your account</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email address"
        />
        <TextInput style={styles.textInput} 
        placeholder="Enter your password" 
        secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}> Forgot your password ?</Text>
        <Button />
        <Text style={styles.forgotPassword}> Don't have an account ?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    color: "#34434d",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    paddingStart: 30,
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  }
});
