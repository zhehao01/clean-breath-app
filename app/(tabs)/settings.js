import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const settings = () => {
  const router = useRouter();
  return (
    <View>
      <Text>settings</Text>
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            height: 40,
            width: 100,
          }}
          onPress={() => {
            console.log("logout");
            global.username = "";
            global.isGuest = true;
            router.replace("/login");
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default settings;
