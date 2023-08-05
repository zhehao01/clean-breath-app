function getGlobalSchema() {
  return {
    location: "",
    city: "",
    dominant: "",
    aqi: 0,
    pollutants: [
      { name: "PM2.5", value: 0 },
      { name: "PM10", value: 0 },
      { name: "O3", value: 0 },
      { name: "NO2", value: 0 },
      { name: "SO2", value: 0 },
      { name: "CO", value: 0 },
    ],
  };
}

export function convertToGlobalSchema(data) {
  var global = getGlobalSchema();

  let fullLocation = data.city.name;

  global.location = fullLocation.split(",")[0];
  global.city = fullLocation.split(",").slice(1).join(",").trimStart();
  global.dominant = data.dominentpol;
  global.aqi = data.aqi;

  global.pollutants[0].value =
    data.iaqi.pm25 === undefined ? "-" : data.iaqi.pm25.v;
  global.pollutants[1].value =
    data.iaqi.pm10 === undefined ? "-" : data.iaqi.pm10.v;
  global.pollutants[2].value =
    data.iaqi.o3 === undefined ? "-" : data.iaqi.o3.v;
  global.pollutants[3].value =
    data.iaqi.no2 === undefined ? "-" : data.iaqi.no2.v;
  global.pollutants[4].value =
    data.iaqi.so2 === undefined ? "-" : data.iaqi.so2.v;
  global.pollutants[5].value =
    data.iaqi.co === undefined ? "-" : data.iaqi.co.v;

  return global;
}

/*
global.pollutants.pm25 =
    data.iaqi.pm25 === undefined ? "-" : data.iaqi.pm25.v;
  global.pollutants.pm10 =
    data.iaqi.pm10 === undefined ? "-" : data.iaqi.pm10.v;
  global.pollutants.o3 = data.iaqi.o3 === undefined ? "-" : data.iaqi.o3.v;
  global.pollutants.no2 = data.iaqi.no2 === undefined ? "-" : data.iaqi.no2.v;
  global.pollutants.so2 = data.iaqi.so2 === undefined ? "-" : data.iaqi.so2.v;
  global.pollutants.co = data.iaqi.co === undefined ? "-" : data.iaqi.co.v;
  */
