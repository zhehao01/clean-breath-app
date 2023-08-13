import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  StatusBar,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./login.style";
import { COLORS } from "../../constants";
import { SignIn, SignInGuest, SignUpGuest } from "../../services/services";

const Login = () => {
  const router = useRouter();

  const [fData, setFdata] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const login = () => {
    if (fData.username === "" || fData.password === "") {
      setErrMsg("*Por favor, rellene todos los campos");
      return;
    } else {
      setErrMsg("");
      SignIn(fData).then((response) => {
        if (response === "OK") {
          global.username = fData.username;
          global.isGuest = false;
          router.replace("/home");
        } else if (response === "KO") {
          setErrMsg("*Usuario o contraseña incorrectos");
        } else {
          Alert.alert(
            "Error",
            "Ha ocurrido un error inesperado. Intente de nuevo más tarde."
          );
        }
      });
    }
  };

  const loginAsGuest = () => {
    SignInGuest().then((response) => {
      if (response === "OK") {
        global.isGuest = true;
        router.replace("/home");
      } else {
        SignUpGuest().then((response) => {
          if (response === "OK") {
            global.isGuest = true;
            router.replace("/home");
          } else {
            Alert.alert(
              "Error",
              "Ha ocurrido un error inesperado. Intente de nuevo más tarde."
            );
          }
        });
      }
    });
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
