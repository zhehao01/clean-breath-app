import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./savedlocationcard.style";

const SavedLocationCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container(item.aqi)}
      onPress={handleNavigate}
    >
      <View>
        <Text style={styles.locationText}>{item.location}</Text>
        <Text style={styles.cityText}>{item.city}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText(item.aqi)}>{item.aqi}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SavedLocationCard;
