import React from "react";
import { View, Image } from "react-native";

import styles from "./gridView.style";

const GridView = (props) => {
  const { data, renderItem, col = 2 } = props;

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.cell(col)}>
            {renderItem(item)}
          </View>
        );
      })}
    </View>
  );
};

export default GridView;
