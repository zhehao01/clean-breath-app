import { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

import { COLORS, icons, SIZES } from "../../constants";
import {
  ScreenHeaderBtn,
  Main,
  Pollutants,
  Recommendations,
} from "../../components";
import { fetchFeed } from "../../hook/useFetch";
import { convertToGlobalSchema } from "../../hook/dataExtractor";
import {
  GetCityIDs,
  AddToFavorites,
  DeleteFromFavorites,
} from "../../services/services";

const Details = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchFeed({ cityId: params.cityId }).then(({ data, isLoading, error }) => {
      setIsLoading(isLoading);
      setError(error);
      setInfo(convertToGlobalSchema(data));
    });
  }, []);

  useEffect(() => {
    if (!global.isGuest) {
      GetCityIDs(global.username).then((res) => {
        if (res.includes(params.cityId)) {
          setIsFavorite(true);
        }
      });
    }
  }, [isFavorite]);

  const changeFavorite = async () => {
    if (isFavorite) {
      if (params.cityId === "here") {
        Alert.alert(
          "Error",
          "No puedes eliminar la ubicación actual de favoritos",
          [{ text: "OK" }]
        );
      } else {
        await DeleteFromFavorites(global.username, params.cityId);
        setIsFavorite(false);
      }
    } else {
      await AddToFavorites(global.username, params.cityId);
      setIsFavorite(true);
    }
  };

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
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={isFavorite ? icons.heart_filled : icons.heart}
              dimension="70%"
              handlePress={() => {
                changeFavorite();
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
