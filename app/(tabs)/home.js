import { useCallback, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import * as Notifications from "expo-notifications";

import { COLORS, icons, SIZES } from "../../constants";
import { ScreenHeaderBtn, Filter, SavedLocations } from "../../components";
import { GetCityIDs } from "../../services/services";

const home = () => {
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);
  const [cityIDs, setCityIDs] = useState(["here"]);
  const [refreshSaved, setRefreshSaved] = useState(false);

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
        repeats: true,
        */
      },
    });
  };

  useEffect(() => {
    if (!global.isGuest) {
      GetCityIDs(global.username).then((res) => {
        setCityIDs(res);
      });
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    if (!global.isGuest) {
      GetCityIDs(global.username).then((res) => {
        setCityIDs(res);
        setRefreshSaved(!refreshSaved);
      });
    }
    setRefreshing(false);
  }, [refreshSaved]);

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
      <ScrollView
        indicatorStyle="black"
        scrollIndicatorInsets={{ right: 2 }}
        refreshControl={
          <RefreshControl
            tintColor={COLORS.gray2}
            colors={[COLORS.gray2]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <SavedLocations cityIDs={cityIDs} key={refreshSaved} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

{
  /*<View
        style={{
          paddingHorizontal: SIZES.medium,
          paddingBottom: SIZES.xSmall,
        }}
      >
        <Filter />
      </View>*/
}
