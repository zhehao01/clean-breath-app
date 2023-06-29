import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./savedlocations.style";
import { COLORS, SIZES } from "../../../constants";
import SavedLocationCard from "../../common/cards/saved/SavedLocationCard";
import useFetch from "../../../hook/useFetch";

const SavedLocations = () => {
  const router = useRouter();

  const data = [
    {
      location: "Politècnic",
      city: "València, Valencia, Spain",
      aqi: "29",
    },
    {
      location: "Penyeta",
      city: "Castelló, Valencia, Spain",
      aqi: "51",
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "101",
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "151",
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "201",
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "301",
    },
  ];

  return (
    <View style={styles.cardsContainer}>
      {false ? (
        <ActivityIndicator size="large" colors={COLORS.primary} />
      ) : false ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.city}
          renderItem={({ item }) => (
            <SavedLocationCard
              item={item}
              handleCardPress={() => {
                console.log(data);
              }}
            />
          )}
          contentContainerStyle={{
            rowGap: SIZES.xSmall,
            paddingBottom: SIZES.xxLarge,
            minHeight: "100%",
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default SavedLocations;

/*const { data, isLoading, error } = useFetch("here");
  var location = "Loading...";
  var city = "Loading...";
  if (!isLoading) {
    location = data.city.name.split(",")[0];
    city = data.city.name.split(",").slice(1).join(",").trimStart();
  }*/
