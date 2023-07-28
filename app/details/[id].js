import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  StatusBar,
} from "react-native";
import {
  Stack,
  useLocalSearchParams,
  useRouter,
  useSearchParams,
} from "expo-router";
import { useCallback, useState } from "react";

import { COLORS, icons, SIZES } from "../../constants";
import {
  ScreenHeaderBtn,
  Main,
  Pollutants,
  Recommendations,
} from "../../components";

const Details = ({}) => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);
  const isLoading = false;
  const data = [];
  const error = false;

  const onRefresh = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray3 }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.gray3 },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "Clean Breath",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.chevronLeft}
              dimension="60%"
              handlePress={() => {
                console.log(params.pollutants);
              }}
            />
          ),
        }}
      />
      <>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : false ? (
            <Text>No data found</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Main
                location={params.location}
                city={params.city}
                aqi={params.aqi}
              />
              <View
                style={{
                  marginVertical: SIZES.xxLarge + 6,
                  marginHorizontal: SIZES.medium,
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  borderBottomColor: COLORS.white,
                }}
              />
              <Recommendations aqi={params.aqi} />
              <View
                style={{
                  marginVertical: SIZES.xxLarge + 6,
                  marginHorizontal: SIZES.medium,
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  borderBottomColor: COLORS.white,
                }}
              />
              <Pollutants pollutants={params.pollutants} />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Details;
