export const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPING: "shipping",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const;

export const ORDER_FLOW = {
  [ORDER_STATUS.PENDING]: ORDER_STATUS.CONFIRMED,
  [ORDER_STATUS.CONFIRMED]: ORDER_STATUS.SHIPPING,
  [ORDER_STATUS.SHIPPING]: ORDER_STATUS.COMPLETED,
};

export const getNextStatusLabel = (status: string) => {
  switch (status) {
    case ORDER_STATUS.PENDING: return "Xác nhận đơn hàng";
    case ORDER_STATUS.CONFIRMED: return "Giao cho đơn vị vận chuyển";
    case ORDER_STATUS.SHIPPING: return "Xác nhận đã giao hàng";
    default: return null;
  }
};