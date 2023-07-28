const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#EFEFF1",

  white: "#FFFFFF",
  lightWhite: "#FAFAFC",

  black: "#000000",

  good: "#B0D2A0",
  good2: "#68CD38",
  good3: "#C5E8B5",

  moderate: "#F9E79F",
  moderate2: "#FFC700",
  moderate3: "#F9E79F",

  unhealthySensitive: "#F5B7B1",
  unhealthySensitive2: "#F1948A",
  unhealthySensitive3: "#FADBD8",

  unhealthy: "#EC7063",
  unhealthy2: "#E74C3C",
  unhealthy3: "#F5B7B1",

  veryUnhealthy: "#A569BD",
  veryUnhealthy2: "#8E44AD",
  veryUnhealthy3: "#BB8FCE",

  hazardous: "#9f717e",
  hazardous2: "#723446",
  hazardous3: "#9f717e",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
