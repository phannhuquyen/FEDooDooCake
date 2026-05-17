import axiosClient from "./axiosClient";

const LOGIN_URL = "https://doodoocake-api.onrender.com/api/login";

export const loginApi = {
  // POST /login
  login: (data: {
    username: string;
    password: string;
  }) => {
    return axiosClient.post(
      LOGIN_URL,
      data
    );
  },
};