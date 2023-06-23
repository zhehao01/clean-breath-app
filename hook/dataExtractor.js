function getGlobalSchema() {
  return {
    location: "",
    dominant: "",
    aqi: 0,
    pm25: 0,
    pm10: 0,
    o3: 0,
    no2: 0,
    so2: 0,
    co: 0,
  };
}

export async function convertToGlobalSchema(data) {
  var global = getGlobalSchema();
  global.location = data.city.name;
  global.dominant = data.dominentpol;
  global.aqi = data.aqi;
  global.pm25 = data.iaqi.pm25.v;
  global.pm10 = data.iaqi.pm10.v;
  global.o3 = data.iaqi.o3.v;
  global.no2 = data.iaqi.no2.v;
  global.so2 = data.iaqi.so2.v;
  global.co = data.iaqi.co.v;
  return global;
}
