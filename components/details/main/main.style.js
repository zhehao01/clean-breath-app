import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stateContainer: {
    maxWidth: "75%",
    paddingEnd: SIZES.xLarge,
  },
  headText: (color) => ({
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: color,
  }),
  locationText: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.black,
  },
  cityText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.black,
  },
  infoContainer: (color) => ({
    borderRadius: 50,
    width: 95,
    height: 95,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
  }),
  mainInfoText: {
    fontSize: SIZES.xLarge + 4,
    color: COLORS.black,
    fontFamily: FONT.bold,
  },
  regularText: {
    fontSize: SIZES.small + 2,
    color: COLORS.black,
    fontFamily: FONT.regular,
  },
});

export default styles;
