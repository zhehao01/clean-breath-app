import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Filter,
  SavedLocations,
} from "../../components";
import styles from "../../components/common/header/screenheader.style";

const home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar barStyle="dark-content" />
      <Stack.Screen
        options={{
          headerstyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.add} dimension="90%" />
          ),
          headerTitle: "Clean Breath",
        }}
      />
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Filter />
        <SavedLocations />
      </View>
    </SafeAreaView>
  );
};

export default home;
