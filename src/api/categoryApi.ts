import axiosClient from "./axiosClient";

const CATEGORY_URL = "https://doodoocake-api.onrender.com/api/categories";

export const categoryApi = {
  // GET /categories
  getAll: () => {
    return axiosClient.get(CATEGORY_URL);
  },

  // POST /categories
  create: (data: any) => {
    return axiosClient.post(CATEGORY_URL, data);
  },

  // PUT /categories/:id
  update: (id: string, data: any) => {
    return axiosClient.put(`${CATEGORY_URL}/${id}`, data);
  },

  // DELETE /categories/:id
  delete: (id: string) => {
    return axiosClient.delete(`${CATEGORY_URL}/${id}`);
  },

  // GET /categories/:categoryId/products
  getProducts: (categoryId: string) => {
    return axiosClient.get(
      `${CATEGORY_URL}/${categoryId}/products`
    );
  },
};