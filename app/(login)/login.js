import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

import styles from "./login.style";
import { COLORS } from "../../constants";

const Login = () => {
  const router = useRouter();

  const [fData, setFdata] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const login = async () => {
    if (fData.username === "" || fData.password === "") {
      setErrMsg("*Por favor, rellene todos los campos");
      return;
    } else {
      setErrMsg("");
      try {
        const response = await axios.post(
          "http://192.168.0.18:3000/api/users/login",
          fData
        );
        if (response.status === 200) {
          console.log("Login correcto");
          //router.replace("/home");
        }
      } catch (error) {
        if (error.response.status === 422) {
          setErrMsg("*Usuario o contraseña incorrectos");
        }
        console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error.response.data.error);
      }
    }
  };

  const loginAsGuest = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("guest-accessToken");
      if (accessToken) {
        const response = await axios.post(
          "http://192.168.0.18:3000/api/users/login-guest",
          { token: accessToken }
        );
        if (response.status === 200) {
          console.log("Login guest correcto");
        }
      } else {
        const response = await axios.post(
          "http://192.168.0.18:3000/api/users/register-guest"
        );
        if (response.status === 200) {
          await AsyncStorage.setItem("guest-accessToken", response.data);
          console.log("Register guest correcto");
        }
      }
    } catch (error) {
      console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.title}>Clean Breath</Text>
      </View>
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Usuario"
          placeholderTextColor={COLORS.gray}
          onChangeText={(text) => {
            setFdata({ ...fData, username: text });
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Contraseña"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={true}
          onChangeText={(text) => setFdata({ ...fData, password: text })}
        />
        <Text style={styles.errMsg}>{errMsg}</Text>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              login();
            }}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText3}>¿Has olvidado tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={styles.buttonText3}>
              ¿No tienes cuenta? Regístrate aquí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text}>Ó</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            loginAsGuest();
          }}
        >
          <Text style={styles.buttonText2}>Continuar como invitado</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
