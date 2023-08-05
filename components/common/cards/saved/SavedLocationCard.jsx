import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

import styles from "./savedlocationcard.style";
import useFetch from "../../../../hook/useFetch";
import { convertToGlobalSchema } from "../../../../hook/dataExtractor";
import { COLORS } from "../../../../constants";

const SavedLocationCard = ({ city, handleNavigate }) => {
  const [info, setInfo] = useState({});

  const { data, isLoading, error, refetch } = useFetch(city);

  useEffect(() => {
    function getData() {
      let converted;
      if (data.length != 0 && !isLoading && !error) {
        converted = convertToGlobalSchema(data);
        setInfo(converted);
      } else if (isLoading) {
        refetch();
      }
    }
    getData();
  }, [data]);

  return (
    <View>
      {isLoading ? (
        <View style={{ padding: 25 }}>
          <ActivityIndicator size="large" color={COLORS.gray} />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {"Error inesperado. Por favor, intenta de nuevo más tarde."}
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.container(info.aqi)}
          onPress={handleNavigate}
        >
          <View>
            <Text style={styles.locationText}>{info.location}</Text>
            <Text style={styles.cityText}>{info.city}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText(info.aqi)}>{info.aqi}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SavedLocationCard;
