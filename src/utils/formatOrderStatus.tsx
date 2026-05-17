export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipping"
  | "completed"
  | "cancelled";

export const formatOrderStatus = (status: OrderStatus) => {
  switch (status) {
    case "pending":
      return "Chờ xác nhận";
    // xanh dương   
//       style = "bg-blue-100 text-blue-800 hover:bg-blue-200";

    case "confirmed":
      return "Đã xác nhận";
    // vàng
//       style = "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    case "shipping":
      return "Đang giao";
    // vàng
//       style = "bg-green-100 text-green-800 hover:bg-green-200";
    case "completed":
      return "Hoàn thành";
    // xanh lá
//       style = "bg-green-100 text-green-800 hover:bg-green-200";
    case "cancelled":
      return "Đã hủy";
    //   đỏ
    // lấy màu error
  }
};


//   function styleStatus() {
//     switch (order.status) {
//       case "pending":
//         return "bg-blue-100 text-blue-800 ";
//       case "confirmed":
//         return "bg-yellow-100 text-yellow-800 ";
//       case "shipping":
//         return "bg-yellow-100 text-yellow-800 ";
//       case "completed":
//         return "bg-green-100 text-green-800 ";
//       case "cancelled":
//         return "bg-error-bg text-error-text";
//       default:
//         "";
//         break;
//     }
//   }