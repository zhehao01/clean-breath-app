import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray3,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: SIZES.small,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInput: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small + 3,
    backgroundColor: COLORS.gray4,
    borderRadius: SIZES.small,
    padding: 10,
    width: "70%",
  },
});

export default styles;
