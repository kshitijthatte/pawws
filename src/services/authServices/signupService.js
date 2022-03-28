import axios from "axios";

export const signupService = async (firstName, lastName, email, password) => {
  return await axios.post("/api/auth/signup", {
    email,
    password,
    firstName,
    lastName,
  });
};
