import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./savedlocationcard.style";

const SavedLocationCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text>{item.city}</Text>
      <Text>{item.aqi}</Text>
      <Text>{item.dom}</Text>
    </TouchableOpacity>
  );
};

export default SavedLocationCard;
