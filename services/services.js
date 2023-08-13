import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function SignIn(data) {
  try {
    const response = await axios.post(
      "http://192.168.0.18:3000/api/users/login",
      data
    );
    if (response.status === 200) {
      return "OK";
    }
  } catch (error) {
    console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error.response.data.error);
    if (error.response.status === 422) {
      return "KO";
    } else {
      return "ERROR";
    }
  }
}

export async function SignUp(data) {
  try {
    const response = await axios.post(
      "http://192.168.0.18:3000/api/users/register",
      data
    );
    if (response.status === 200) {
      return "OK";
    }
  } catch (error) {
    console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error.response.data.error);
    if (error.response.status === 422) {
      return "KO";
    } else {
      return "ERROR";
    }
  }
}

export async function SignInGuest() {
  try {
    const accessToken = await AsyncStorage.getItem("guest-accessToken");
    if (accessToken) {
      const response = await axios.post(
        "http://192.168.0.18:3000/api/users/login-guest",
        { token: accessToken }
      );
      if (response.status === 200) {
        return "OK";
      }
    } else {
      return "KO";
    }
  } catch (error) {
    console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error);
    return "ERROR";
  }
}

export async function SignUpGuest() {
  try {
    const response = await axios.post(
      "http://192.168.0.18:3000/api/users/register-guest"
    );
    if (response.status === 200) {
      await AsyncStorage.setItem("guest-accessToken", response.data);
      return "OK";
    }
  } catch (error) {
    console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error);
    return "ERROR";
  }
}

export async function GetCityIDs(username) {
  try {
    const response = await axios.get("http://192.168.0.18:3000/api/cities", {
      params: { username: username },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error);
  }
}

export async function AddToFavorites(username, cityId) {
  try {
    const response = await axios.post("http://192.168.0.18:3000/api/cities", {
      username: username,
      cityId: cityId,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error);
  }
}

export async function DeleteFromFavorites(username, cityId) {
  try {
    const response = await axios.delete("http://192.168.0.18:3000/api/cities", {
      data: { username: username, cityId: cityId },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("\x1b[41m%s\x1b[0m", "ERROR: " + error);
  }
}
