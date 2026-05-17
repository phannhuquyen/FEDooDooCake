import axiosClient from "./axiosClient";

const PRODUCT_URL = "https://doodoocake-api.onrender.com/api/products";

export const productApi = {
  // GET /products
  getAll: () => {
    return axiosClient.get(PRODUCT_URL);
  },

  // GET /products/featured
  getFeatured: () => {
    return axiosClient.get(`${PRODUCT_URL}/featured`);
  },

  // GET /products/:id
  getById: (id: string) => {
    return axiosClient.get(`${PRODUCT_URL}/${id}`);
  },

  // POST /products
  create: (data: any) => {
    return axiosClient.post(PRODUCT_URL, data);
  },

  // PUT /products/:id
  update: (id: string, data: any) => {
    return axiosClient.put(`${PRODUCT_URL}/${id}`, data);
  },

  // DELETE /products/:id
  delete: (id: string) => {
    return axiosClient.delete(`${PRODUCT_URL}/${id}`);
  },

  updateFeatured: (id: string, isFeatured: boolean) => {
    return axiosClient.patch(`${PRODUCT_URL}/${id}/featured`, {
      isFeatured,
    });
  },
};
