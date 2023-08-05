import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./savedlocations.style";
import { COLORS } from "../../../constants";
import SavedLocationCard from "../../common/cards/saved/SavedLocationCard";

const SavedLocations = ({ cityIDs }) => {
  const router = useRouter();

  return (
    <View style={styles.cardsContainer}>
      {cityIDs?.map((cityName, index) => (
        <SavedLocationCard
          key={index}
          city={cityName}
          handleNavigate={() => {
            console.log(cityName);
            router.push({
              pathname: `/details/${cityName}`,
              params: {
                city: cityName,
              },
            });
          }}
        />
      ))}
    </View>
  );
};

export default SavedLocations;
