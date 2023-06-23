import { useFetch } from "../hook/useFetch";
import { convertToGlobalSchema } from "../hook/dataExtractor";

const getData = async (cities) => {
  const data = [];
  cities.forEach((city) => {
    useFetch(city).then((data) => {
      convertToGlobalSchema(data).then((filteredData) => {
        data.push(filteredData);
      });
    });
  });
  return data;
};

export default getData;
