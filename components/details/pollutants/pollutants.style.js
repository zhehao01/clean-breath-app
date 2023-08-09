import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  itemContainer: {
    width: "80%",
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.medium,
    marginTop: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall - 4,
    marginBottom: SIZES.xSmall,
    ...SHADOWS.small,
  },
  headContainer: {
    marginBottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },

  headText: {
    fontSize: SIZES.medium + 4,
    fontFamily: FONT.medium,
    color: COLORS.black,
  },
  pollutantText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontFamily: FONT.medium,
  },
  valueText: {
    fontSize: SIZES.large,
    color: COLORS.black,
    fontFamily: FONT.bold,
  },
});

export default styles;
