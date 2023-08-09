import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Text,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./search.style";
import { COLORS, icons } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import { fetchLocations } from "../../hook/useFetch";

const Search = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  var timer = null;

  const handleSearch = () => {
    if (keyword.length >= 1) {
      fetchLocations({ keyword: keyword }).then(
        ({ data, isLoading, error }) => {
          setIsLoading(isLoading);
          setError(error);
          setSearchResults(data);
        }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <ScreenHeaderBtn iconUrl={icons.chevronLeft} dimension="60%" />
        <TextInput
          style={styles.textInput}
          placeholder="Introduzca el nombre de la ciudad"
          placeholderTextColor={COLORS.gray}
          value={keyword}
          onChangeText={(text) => {
            setKeyword(text);
          }}
        />
        <ScreenHeaderBtn
          iconUrl={icons.search}
          dimension="70%"
          handlePress={handleSearch}
        />
      </View>
      <View style={styles.searchResultsContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <TouchableOpacity
                key={index}
                style={styles.locationContainer(index)}
                onPress={() => {
                  console.log("ID: ", result?.uid);
                }}
              >
                <Text style={styles.locationText}>{result?.station.name}</Text>
              </TouchableOpacity>
            ))
          ) : keyword.length != 0 ? (
            <View style={styles.errMsgContainer}>
              <Text style={styles.errMsgText}>
                No se encontraron resultados.
              </Text>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
