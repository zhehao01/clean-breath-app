import { SafeAreaView, TouchableOpacity, View, TextInput } from "react-native";
import { useRouter } from "expo-router";

import styles from "./search.style";
import { COLORS, icons } from "../../constants";
import { ScreenHeaderBtn } from "../../components";

const Search = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <ScreenHeaderBtn iconUrl={icons.chevronLeft} dimension="60%" />
        <TextInput
          placeholder="Introduzca el nombre de la ciudad"
          placeholderTextColor={COLORS.gray}
          style={styles.textInput}
        />
        <ScreenHeaderBtn iconUrl={icons.search} dimension="80%" />
      </View>
    </SafeAreaView>
  );
};

export default Search;
