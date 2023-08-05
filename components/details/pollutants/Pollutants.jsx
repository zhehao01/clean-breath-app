import React from "react";
import { View, Text } from "react-native";

import styles from "./pollutants.style";
import GridView from "../../common/gridView/GridView";

const Pollutants = ({ pollutants }) => {
  return (
    <>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Contaminantes</Text>
      </View>
      <GridView
        data={pollutants}
        renderItem={(item) => (
          <View style={styles.itemContainer}>
            <Text style={styles.pollutantText}>{item.name}</Text>
            <Text style={styles.valueText}>{item.value}</Text>
          </View>
        )}
      />
    </>
  );
};

export default Pollutants;
