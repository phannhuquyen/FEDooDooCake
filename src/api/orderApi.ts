import axiosClient from "./axiosClient";

const ORDER_URL = "https://doodoocake-api.onrender.com/api/orders";

// của BE
// interface itemProps {
//   productId: string;
//   name: string;
//   images: string[];
//   quantity: number;
//   price: number;
// }

export interface dataCreateOrder {
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  items: any;
  fee: number;
  promotion: number;
  paymentMethod: string;
  totalPrice: number;
}
export const orderApi = {
  // POST /orders
  create: (data: dataCreateOrder) => {
    return axiosClient.post(ORDER_URL, data);
  },

  // GET /orders/users/:userId
  getByUser: (userId: string) => {
    return axiosClient.get(`${ORDER_URL}/users/${userId}`);
  },

  // GET /orders
  getAll: () => {
    return axiosClient.get(ORDER_URL);
  },

  getById: (id: string) => {
    return axiosClient.get(`${ORDER_URL}/${id}`);
  },

  // PUT /orders/:id
  update: (id: string, data: any) => {
    return axiosClient.put(`${ORDER_URL}/${id}`, data);
  },

  //cancel order
  cancel: (id: string) => {
    return axiosClient.patch(`${ORDER_URL}/${id}/cancel`);
  },
};
