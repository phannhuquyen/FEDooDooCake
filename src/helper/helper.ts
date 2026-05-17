export const auth = {
  getRole: () => {
    return localStorage.getItem("role");
  },

  isLogin: () => {
    return !!localStorage.getItem("userId");
  },
};