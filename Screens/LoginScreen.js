import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  // Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [state, setState] = useState(initialState);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onShowPassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  const onLogin = () => {
    setIsShowKeyboard(false);
    console.log("state", state);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/Photo-BG.jpg")}
        >
          <View style={styles.box}>
            <Text style={styles.title}>Log in</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.form,
                  // marginBottom: isShowKeyboard ? 0 : 43,
                }}
              >
                <TextInput
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  style={{
                    ...styles.input,
                    borderColor: "#E8E8E8",
                  }}
                  placeholder="Email"
                  placeholderTextColor="#BDBDBD"
                  keyboardType="email-address"
                />
                <View style={styles.passwordBox}>
                  <TextInput
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    onFocus={() => setIsShowKeyboard(true)}
                    style={{
                      ...styles.input,
                      borderColor: "#E8E8E8",
                    }}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={isPasswordHidden}
                  />
                  <TouchableOpacity
                    style={styles.showButton}
                    onPress={onShowPassword}
                  >
                    <Text style={styles.showText}>
                      {isPasswordHidden ? "Show" : "Hide"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signup}
              onPress={() => navigation.navigate("Sign up")}
            >
              <Text style={styles.signupText}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // justifyContent: "center",
  },
  box: {
    // flex: 1,
    //     alignItems: "center",
    // justifyContent: "center",
    position: "relative",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  //   photoBox: {
  //     position: "absolute",
  //     top: -60,
  //     left: 131,
  //     width: 120,
  //     height: 120,
  //     backgroundColor: "#F6F6F6",
  //     borderRadius: 16,
  //   },
  //   photoIcon: {
  //     position: "absolute",
  //     bottom: 14,
  //     right: -12,
  //   },
  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 32,
    marginBottom: 32,
  },
  form: {
    //   flex: 0.4,
    gap: 16,
    // backgroundColor: "#fff",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 19,
  },

  passwordBox: {
    position: "relative",
  },
  showButton: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  showText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    backgroundColor: "#ff6c00",
    borderRadius: 100,
    marginTop: 43,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 93.5,
    paddingRight: 93.5,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  signup: {
    marginTop: 16,
    marginBottom: 111,
  },
  signupText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default LoginScreen;
