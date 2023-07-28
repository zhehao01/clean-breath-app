import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./recommendations.style";
import { icons, COLORS, SIZES } from "../../../constants";

const Recommendations = ({ aqi }) => {
  var recommendation = "";
  var recommendation2 = "";
  var recommendation3 = "";
  var color = "";
  var color2 = "";
  var color3 = "";

  const getColor = (aqi) => {
    if (aqi <= 50) {
      recommendation = "¡Disfrute de actividades al aire libre!";
      recommendation2 =
        "Abra las ventanas y deja que pase aire limpio y fresco al interior.";
      recommendation3 = "No es necesario el uso de mascarillas.";
      color = COLORS.good;
      color2 = COLORS.good2;
      color3 = COLORS.good3;
    } else if (aqi <= 100) {
      recommendation =
        "Los grupos sensibles deben evitar actividades prolongadas al aire libre.";
      recommendation2 =
        "Es generalmente seguro abrir las ventanas, las personas sensibles pueden optar por mantenerlas cerradas.";
      recommendation3 =
        "El uso de mascarillas es recomendable para las personas sensibles.";
      color = COLORS.moderate;
      color2 = COLORS.moderate2;
      color3 = COLORS.moderate3;
    } else if (aqi <= 150) {
      recommendation =
        "Los grupos sensibles deben evitar actividades prolongadas al aire libre.";
      recommendation2 =
        "Es generalmente seguro abrir las ventanas, las personas sensibles pueden optar por mantenerlas cerradas.";
      recommendation3 =
        "El uso de mascarillas es recomendable para las personas sensibles.";
      color = COLORS.unhealthySensitive;
      color2 = COLORS.unhealthySensitive2;
      color3 = COLORS.unhealthySensitive3;
    } else if (aqi <= 200) {
      recommendation = "Evite actividades prolongadas al aire libre.";
      recommendation2 =
        "Mantén las ventanas cerradas y limitar la exposición al aire exterior tanto como sea posible.";
      recommendation3 =
        "Es recomendable el uso de mascarilla FFP2 o similar en el exterior.";
      color = COLORS.unhealthy;
      color2 = COLORS.unhealthy2;
      color3 = COLORS.unhealthy3;
    } else if (aqi <= 300) {
      recommendation = "Evite actividades prolongadas al aire libre.";
      recommendation2 =
        "Mantén las ventanas cerradas y limitar la exposición al aire exterior tanto como sea posible.";
      recommendation3 =
        "Es recomendable el uso de mascarilla FFP2 o similar en el exterior.";
      color = COLORS.unhealthy;
      color = COLORS.veryUnhealthy;
      color2 = COLORS.veryUnhealthy2;
      color3 = COLORS.veryUnhealthy3;
    } else {
      recommendation = "Evite actividades al aire libre.";
      recommendation2 =
        "Mantén las ventanas cerradas y, si es posible, utilizar purificadores de aire para mejorar la calidad del aire interior";
      recommendation3 = "Utilice mascarillas FFP2 o similar en el exterior.";
      color = COLORS.hazardous;
      color2 = COLORS.hazardous2;
      color3 = COLORS.hazardous3;
    }
  };
  getColor(aqi);
  return (
    <>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Recomendaciones de salud</Text>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.imgContainer(color3)}>
            <Image
              source={icons.play}
              resizeMode="cover"
              style={styles.img(color2)}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.infoText}>{recommendation}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.imgContainer(color3)}>
            <Image
              source={icons.window}
              resizeMode="cover"
              style={styles.img(color2)}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.infoText}>{recommendation2}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.imgContainer(color3)}>
            <Image
              source={icons.no_mask}
              resizeMode="cover"
              style={styles.img(color2)}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.infoText}>{recommendation3}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Recommendations;
