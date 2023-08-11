import { useState } from "react";
import { View, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";
import * as Notifications from "expo-notifications";

import { COLORS, icons, SIZES } from "../../constants";
import { ScreenHeaderBtn, Filter, SavedLocations } from "../../components";

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
        seconds: 2,
        /*hour: 9,
        minute: 0,
        repeats: true,*/
      },
    });
  };

  const cityIDs = ["here", "@8387", "@6640", "@6669", "@5725"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => sendN()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.add}
              dimension="90%"
              handlePress={() => {
                router.push("/search");
              }}
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
          <SavedLocations cityIDs={cityIDs} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
