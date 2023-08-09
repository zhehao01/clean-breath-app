import { View, Text } from "react-native";

import styles from "./main.style";
import { icons, COLORS, SIZES } from "../../../constants";

const Main = ({ location, city, aqi }) => {
  var state = "";
  var color = "";
  var color2 = "";
  var color3 = "";

  const getColor = (aqi) => {
    if (aqi < 50) {
      state = "Buena";
      color = COLORS.good;
      color2 = COLORS.good2;
      color3 = COLORS.good3;
    } else if (aqi < 100) {
      state = "Moderada";
      color = COLORS.moderate;
      color2 = COLORS.moderate2;
      color3 = COLORS.moderate3;
    } else if (aqi < 150) {
      state = "Dañina a la salud de los grupos sensibles";
      color = COLORS.unhealthySensitive;
      color2 = COLORS.unhealthySensitive2;
      color3 = COLORS.unhealthySensitive3;
    } else if (aqi < 200) {
      state = "Dañina a la salud";
      color = COLORS.unhealthy;
      color2 = COLORS.unhealthy2;
      color3 = COLORS.unhealthy3;
    } else if (aqi < 300) {
      state = "Muy dañina a la salud";
      color = COLORS.veryUnhealthy;
      color2 = COLORS.veryUnhealthy2;
      color3 = COLORS.veryUnhealthy3;
    } else {
      state = "Peligrosa";
      color = COLORS.hazardous;
      color2 = COLORS.hazardous2;
      color3 = COLORS.hazardous3;
    }
  };
  getColor(aqi);

  return (
    <View style={styles.container}>
      <View style={styles.stateContainer}>
        <Text style={styles.headText(color2)}>{state}</Text>
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.cityText}>{city}</Text>
      </View>
      <View style={styles.infoContainer(color)}>
        <Text style={styles.mainInfoText}>{aqi}</Text>
        <Text style={styles.regularText}>AQI</Text>
      </View>
    </View>
  );
};

export default Main;
