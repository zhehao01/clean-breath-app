import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.good3,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 40,
  },
  container2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  container3: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 30,
  },
  title: {
    fontSize: SIZES.xxLarge + 8,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  loginContainer: {
    height: "40%",
    width: "90%",
    marginTop: "5%",
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.xSmall,
    rowGap: 20,
  },
  textInput: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.gray3,
    borderRadius: SIZES.small,
    padding: 10,
    width: "70%",
  },
  button: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 10,
    width: "70%",
  },
  button2: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: COLORS.secondary,
    width: "70%",
  },
  buttonText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
    textAlign: "center",
  },
  buttonText2: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    textAlign: "center",
  },
  buttonText3: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.secondary,
    textAlign: "center",
  },
  text: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  errMsg: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small + 2,
    color: COLORS.red,
    textAlign: "center",
  },
});

export default styles;
