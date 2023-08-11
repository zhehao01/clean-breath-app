import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./savedlocations.style";
import SavedLocationCard from "../../common/cards/saved/SavedLocationCard";

const SavedLocations = ({ cityIDs }) => {
  const router = useRouter();

  return (
    <View style={styles.cardsContainer}>
      {cityIDs?.map((id, index) => (
        <SavedLocationCard
          key={index}
          cityId={id}
          handleNavigate={() => {
            router.push({
              pathname: `/details/${id}`,
              params: {
                cityId: id,
              },
            });
          }}
        />
      ))}
    </View>
  );
};

export default SavedLocations;
