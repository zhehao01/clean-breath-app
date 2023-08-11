import React, { useState } from "react";
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

import styles from "./register.style";
import { COLORS } from "../../constants";

const Register = () => {
  const router = useRouter();

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const register = async () => {
    if (data.username === "" || data.password === "" || repeatPassword === "") {
      setErrMsg("*Por favor, rellene todos los campos");
      return;
    } else if (data.password !== repeatPassword) {
      setErrMsg("*Las contraseñas no coinciden");
      return;
    } else {
      setErrMsg("");
      try {
        const response = await axios.post(
          "http://192.168.0.18:3000/api/users/register",
          data
        );
        if (response.status === 200) {
          console.log("Registro correcto");
          //router.replace("/home");
        }
      } catch (error) {
        if (error.response.status === 422) {
          setErrMsg("*El usuario introducido no está disponible");
        }
        console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.title}>{"Crear nueva cuenta"}</Text>
      </View>
      <View style={styles.registerContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Usuario"
          placeholderTextColor={COLORS.gray}
          onChangeText={(text) => {
            setData({ ...data, username: text });
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Contraseña"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={true}
          onChangeText={(text) => {
            setData({ ...data, password: text });
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Repetir contraseña"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={true}
          onChangeText={(text) => {
            setRepeatPassword(text);
          }}
        />
        <Text style={styles.errMsg}>{errMsg}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            register();
          }}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.buttonText2}>
              ¿Ya tienes cuenta? Inicia sesión aquí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
