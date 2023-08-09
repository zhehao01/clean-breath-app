import axios from "axios";

import { apiKey } from "../constants";

const feedEndpoint = (params) =>
  `https://api.waqi.info/feed/${params.cityId}/?token=${apiKey}`;

const searchEndpoint = (params) =>
  `https://api.waqi.info/v2/search/?token=${apiKey}&keyword=${params.keyword}`;

const apiCall = async (endpoint) => {
  var data = [];
  var isLoading = false;
  var error = null;

  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    isLoading = true;
    const response = await axios.request(options);
    data = response.data.data;
    isLoading = false;
  } catch (err) {
    console.log("ERROR: ", err);
    error = err;
  } finally {
    isLoading = false;
  }

  return { data, isLoading, error };
};

export const fetchLocations = (params) => {
  return apiCall(searchEndpoint(params));
};
export const fetchFeed = (params) => {
  return apiCall(feedEndpoint(params));
};
