import axiosClient from "./axiosClient";

const USER_URL = "https://doodoocake-api.onrender.com/api/users";

export const userApi = {
  // GET /users
  getAll: () => {
    return axiosClient.get(USER_URL);
  },

  // POST /users
  create: (data: any) => {
    return axiosClient.post(USER_URL, data);
  },

  // PUT /users/:id
  update: (id: string, data: any) => {
    return axiosClient.put(`${USER_URL}/${id}`, data);
  },

  // PUT /users/:id/password
  updatePassword: (
    id: string,
    data: {
      oldPassword: string;
      newPassword: string;
    },
  ) => {
    return axiosClient.put(`${USER_URL}/${id}/password`, data);
  },

  // DELETE /users/:id
  delete: (id: string) => {
    return axiosClient.delete(`${USER_URL}/${id}`);
  },

  // ========================
  // Auth (reset password)
  // ========================

  // POST /auth/send-reset-otp
  sendResetOtp: (data: { username: string; email: string }) => {
    return axiosClient.post(`/auth/send-reset-otp`, data);
  },

  // POST /auth/reset-password
  resetPassword: (data: { username: string; email: string; otp: string; newPassword: string }) => {
    return axiosClient.post(`/auth/reset-password`, data);
  },

  // GET /users/profile/:userId
  getById: (userId: string) => {
    return axiosClient.get(`${USER_URL}/profile/${userId}`);
  },

  // ========================
  // Wishlist
  // ========================

  // POST /users/wishlist
  getWishlist: (data: { userId: string }) => {
    return axiosClient.post(`${USER_URL}/wishlist`, data);
  },

  // POST /users/wishlist/toggle
  toggleWishlist: (data: { userId: string; productId: string }) => {
    return axiosClient.post(`${USER_URL}/wishlist/toggle`, data);
  },

  // ========================
  // Cart
  // ========================

  // GET /users/:userId/cart
  getCart: (userId: string) => {
    return axiosClient.get(`${USER_URL}/${userId}/cart`);
  },

  // POST /users/:userId/cart
  addToCart: (
    userId: string,
    data: {
      productId: string;
      quantity: number;
    },
  ) => {
    return axiosClient.post(`${USER_URL}/${userId}/cart`, data);
  },

  // DELETE /users/:userId/cart/:productId
  deleteCartItem: (userId: string, productId: string) => {
    return axiosClient.delete(`${USER_URL}/${userId}/cart/${productId}`);
  },

  changePassword: (
    id: string,
    data: {
      oldPassword: string;
      newPassword: string;
    },
  ) => {
    return axiosClient.patch(`${USER_URL}/change-password/${id}`, data);
  },
};
