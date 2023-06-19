import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./tabBar.style";

const TabBarBtn = ({ focused, iconUrl, filled_iconUrl, dimension }) => {
  return (
    <Image
      source={focused ? filled_iconUrl : iconUrl}
      resizemode="cover"
      style={styles.btnImg(dimension)}
    />
  );
};

export default TabBarBtn;
