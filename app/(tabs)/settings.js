import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { COLORS, SIZES, FONT } from "../../constants";

const settings = () => {
  const router = useRouter();

  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [time, setTime] = useState(new Date());

  const toggleSwitch = (alert) => {
    if (alert) {
      setAlertEnabled((previousState) => !previousState);
    } else {
      setNotificationEnabled((previousState) => !previousState);
    }
  };

  const showPicker = () => {
    setPickerVisibility(true);
  };

  const hidePicker = () => {
    setPickerVisibility(false);
  };

  const handleConfirm = (time) => {
    setTime(time);
    hidePicker();
  };

  const formattedMinutes = (minutes) => {
    return minutes < 10 ? "0" + minutes : minutes;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "Ajustes",
        }}
      />

      <View style={styles.container}>
        <Text style={styles.headerText}>NOTIFICACIONES</Text>
        <View style={styles.componentContainer}>
          <View>
            <Text style={styles.text}>
              {"Recibir avisos de cambios importantes"}
            </Text>
          </View>
          <Switch
            trackColor={{ false: COLORS.gray3, true: COLORS.good2 }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              toggleSwitch(true);
            }}
            value={alertEnabled}
          />
        </View>
        <View style={styles.componentContainer}>
          <View>
            <Text style={styles.text}>Recibir notificación diaria</Text>
          </View>
          <Switch
            trackColor={{ false: COLORS.gray3, true: COLORS.good2 }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              toggleSwitch(false);
            }}
            value={notificationEnabled}
          />
        </View>
        {notificationEnabled ? (
          <View style={styles.componentContainer}>
            <View>
              <Text style={styles.text}>Hora de la notificación</Text>
            </View>
            <TouchableOpacity style={{ paddingRight: 8 }} onPress={showPicker}>
              <Text style={styles.buttonText}>
                {time.getHours() + ":" + formattedMinutes(time.getMinutes())}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isPickerVisible}
              mode="time"
              is24Hour={true}
              onConfirm={handleConfirm}
              onCancel={hidePicker}
            />
          </View>
        ) : null}
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            console.log("logout");
            global.username = "";
            global.isGuest = true;
            router.replace("/login");
          }}
        >
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.large,
    gap: SIZES.medium,
  },
  container2: {
    marginTop: SIZES.small,
    padding: SIZES.small,
    gap: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  componentContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.bold,
  },
  text: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.medium,
  },

  buttonContainer: {
    padding: SIZES.small,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: SIZES.medium,
    width: "70%",
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
});

export default settings;
