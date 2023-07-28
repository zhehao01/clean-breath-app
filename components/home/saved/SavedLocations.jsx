import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./savedlocations.style";
import { COLORS } from "../../../constants";
import SavedLocationCard from "../../common/cards/saved/SavedLocationCard";
import useFetch from "../../../hook/useFetch";

const SavedLocations = () => {
  const router = useRouter();

  const data = [
    {
      location: "Politècnic",
      city: "València, Valencia, Spain",
      aqi: "29",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Penyeta",
      city: "Castelló, Valencia, Spain",
      aqi: "51",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "101",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "151",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "201",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "301",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "151",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "201",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
    {
      location: "Barcelona",
      city: "Catalunya, Spain",
      aqi: "301",
      pollutants: [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 20 },
        { name: "O3", value: 30 },
        { name: "NO2", value: 40 },
        { name: "SO2", value: 50 },
        { name: "CO", value: 60 },
      ],
    },
  ];

  return (
    <View style={styles.cardsContainer}>
      {false ? (
        <ActivityIndicator size="large" colors={COLORS.primary} />
      ) : false ? (
        <Text>Something went wrong</Text>
      ) : (
        data?.map((location) => (
          <SavedLocationCard
            item={location}
            handleNavigate={() => {
              console.log(location.aqi);
              router.push({
                pathname: `/details/${location.location}`,
                params: {
                  location: location.location,
                  city: location.city,
                  aqi: location.aqi,
                  pollutants: JSON.stringify(location.pollutants),
                },
              });
            }}
          />
        ))
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
  }
  */
