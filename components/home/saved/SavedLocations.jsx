import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./savedlocations.style";
import { COLORS, SIZES } from "../../../constants";
import SavedLocationCard from "../../common/cards/saved/SavedLocationCard";
import useFetch from "../../../api/useFetch";

const SavedLocations = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("castellon");
  console.log(data);

  return (
    <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={[
            { aqi: data.aqi, city: data.city.name, dom: data.dominentpol },
          ]}
          renderItem={({ item }) => <SavedLocationCard item={item} />}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{ rowGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default SavedLocations;
