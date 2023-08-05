import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";
import * as Notifications from "expo-notifications";

import { COLORS, icons, images, SIZES } from "../../constants";
import { ScreenHeaderBtn, Filter, SavedLocations } from "../../components";
import styles from "../../components/common/header/screenheader.style";

const home = () => {
  const router = useRouter();

  const sendN = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail!",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: {
        hour: 9,
        minute: 0,
        repeats: true,
      },
    });
  };

  const cityIDs = ["8387", "6640", "6669", "5725"];
  const cities = ["Castellon", "Valencia", "Alicante", "Madrid"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.add}
              dimension="90%"
              handlePress={() => sendN()}
            />
          ),
          headerTitle: "Clean Breath",
        }}
      />
      {/*<View
        style={{
          paddingHorizontal: SIZES.medium,
          paddingBottom: SIZES.xSmall,
        }}
      >
        <Filter />
      </View>*/}
      <ScrollView indicatorStyle="black" scrollIndicatorInsets={{ right: 2 }}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <SavedLocations cityIDs={cities} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
