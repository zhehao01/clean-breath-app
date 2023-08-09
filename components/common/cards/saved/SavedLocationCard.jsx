import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

import styles from "./savedlocationcard.style";
import { fetchFeed } from "../../../../hook/useFetch";
import { convertToGlobalSchema } from "../../../../hook/dataExtractor";
import { COLORS } from "../../../../constants";

const SavedLocationCard = ({ cityId, handleNavigate }) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeed({ cityId: cityId }).then(({ data, isLoading, error }) => {
      setIsLoading(isLoading);
      setError(error);
      setInfo(convertToGlobalSchema(data));
    });
  }, []);

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
