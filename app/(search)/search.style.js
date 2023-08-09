import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

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
    ...SHADOWS.small,
  },
  searchResultsContainer: {
    height: "95%",
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.xSmall,
  },
  locationContainer: (index) => ({
    width: "100%",
    paddingTop: SIZES.xSmall,
    paddingHorizontal: SIZES.small,
    marginBottom: SIZES.xSmall,
    borderTopWidth: index === 0 ? 0 : 1,
    borderColor: COLORS.gray2,
  }),
  locationText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium + 2,
    color: COLORS.black,
  },
  errMsgContainer: {
    marginTop: SIZES.large,
  },
  errMsgText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small + 3,
    color: COLORS.black,
  },
});

export default styles;
