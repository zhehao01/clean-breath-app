import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  headContainer: {
    marginBottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontSize: SIZES.medium + 4,
    fontFamily: FONT.medium,
  },
  bodyContainer: {
    paddingHorizontal: SIZES.xSmall - 2,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.medium,
  },
  infoText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  textContainer: {
    width: "80%",
    paddingLeft: SIZES.large,
  },
  imgContainer: (color) => ({
    width: 60,
    height: 60,
    backgroundColor: color,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  }),
  img: (color) => ({
    width: 40,
    height: 40,
    tintColor: color,
  }),
});

export default styles;
