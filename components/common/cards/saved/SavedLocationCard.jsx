import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./savedlocationcard.style";

const SavedLocationCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(item.aqi)}
      onPress={handleCardPress}
    >
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {item.location}
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          {item.city}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 50,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color:
              item.aqi < 50
                ? "#00E400"
                : item.aqi < 100
                ? "#ffb55d"
                : item.aqi < 150
                ? "#FF7E00"
                : item.aqi < 200
                ? "#FF0000"
                : item.aqi < 300
                ? "#8F3F97"
                : "#7E0023",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {item.aqi}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SavedLocationCard;
