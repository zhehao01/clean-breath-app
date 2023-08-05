import { useCallback, useState, useEffect } from "react";
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

import { COLORS, icons, SIZES } from "../../constants";
import {
  ScreenHeaderBtn,
  Main,
  Pollutants,
  Recommendations,
} from "../../components";
import useFetch from "../../hook/useFetch";
import { convertToGlobalSchema } from "../../hook/dataExtractor";

const Details = ({}) => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [info, setInfo] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const { data, isLoading, error, refetch } = useFetch(params.city);

  useEffect(() => {
    function getData() {
      let converted;
      if (data.length != 0 && !isLoading && !error) {
        converted = convertToGlobalSchema(data);
        setInfo(converted);
      } else if (isLoading) {
        refetch();
      }
    }
    getData();
  }, [data]);

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
                console.log(info.pollutants);
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
            <ActivityIndicator size="large" color={COLORS.gray} />
          ) : error ? (
            <Text>
              {"Error inesperado. Por favor, intenta de nuevo más tarde."}
            </Text>
          ) : false ? (
            <Text>No data found</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Main location={info.location} city={info.city} aqi={info.aqi} />
              <View
                style={{
                  marginVertical: SIZES.xxLarge + 6,
                  marginHorizontal: SIZES.medium,
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  borderBottomColor: COLORS.white,
                }}
              />
              <Recommendations aqi={info.aqi} />
              <View
                style={{
                  marginVertical: SIZES.xxLarge + 6,
                  marginHorizontal: SIZES.medium,
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  borderBottomColor: COLORS.white,
                }}
              />
              <Pollutants pollutants={info.pollutants} />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Details;
