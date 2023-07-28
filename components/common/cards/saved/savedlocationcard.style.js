import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (aqi) => ({
    flexDirection: "row",
    width: "100%",
    padding: SIZES.medium,
    backgroundColor:
      aqi <= 50
        ? COLORS.good
        : aqi <= 100
        ? COLORS.moderate
        : aqi <= 150
        ? COLORS.unhealthySensitive
        : aqi <= 200
        ? COLORS.unhealthy
        : aqi <= 300
        ? COLORS.veryUnhealthy
        : COLORS.hazardous,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),

  infoContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  infoText: (aqi) => ({
    color:
      aqi < 50
        ? "#00E400"
        : aqi < 100
        ? "#ffb55d"
        : aqi < 150
        ? "#FF7E00"
        : aqi < 200
        ? "#FF0000"
        : aqi < 300
        ? "#8F3F97"
        : "#7E0023",
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  }),

  locationText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.black,
  },

  cityText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
});

export default styles;
