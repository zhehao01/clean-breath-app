import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: (col) => ({
    width: `${100 / col}%`,
    justifyContent: "center",
    alignItems: "center",
  }),
  bodyContainer: {
    paddingHorizontal: SIZES.xSmall - 2,
  },
});

export default styles;
