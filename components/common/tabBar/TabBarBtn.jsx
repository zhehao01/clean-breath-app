import React from "react";
import { View, Image } from "react-native";

import styles from "./tabBar.style";

const TabBarBtn = ({ focused, iconUrl, filled_iconUrl, dimension }) => {
  return (
    <View style={styles.btnContainer}>
      <Image
        source={focused ? filled_iconUrl : iconUrl}
        resizemode="cover"
        style={styles.btnImg(dimension)}
      />
    </View>
  );
};

export default TabBarBtn;
