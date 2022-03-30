import axios from "axios";

export const signupService = (firstName, lastName, email, password) => {
  return axios.post("/api/auth/signup", {
    email,
    password,
    firstName,
    lastName,
  });
};
