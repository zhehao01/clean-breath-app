import { useState, useEffect } from "react";
import { Alert } from "react-native";
import axios from "axios";

const aqiApiKey = "b07386949217a8169fe2ce72362c82227aedc727";

const useFetch = (city) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.waqi.info/feed/${city}/?token=${aqiApiKey}`,
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("ERROR: ", error);
      Alert.alert("Error", "Ha ocurrido un error. Intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
