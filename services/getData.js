import useFetch from "../hook/useFetch";
import { convertToGlobalSchema } from "../hook/dataExtractor";

const getData = (cities) => {
  const res = [];
  cities.forEach(async (city) => {
    const { data, isLoading, error, refetch } = useFetch(city);
  });

  return res;
};

export default getData;
