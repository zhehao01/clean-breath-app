import axios from "axios";

export async function SignIn(data) {
  try {
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}
