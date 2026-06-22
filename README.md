# DooDooCake Frontend

Phần frontend của DooDooCake sử dụng React + TypeScript + Vite và kết nối với API backend để hiển thị sản phẩm, giỏ hàng, đặt hàng và quản trị.

# DooDooCake — Frontend

Frontend của DooDooCake được xây dựng bằng React + TypeScript + Vite. Ứng dụng cung cấp giao diện khách hàng và admin để xem sản phẩm, quản lý giỏ hàng, đặt hàng, và quản trị sản phẩm/đơn hàng.

Repository: https://github.com/phannhuquyen/FEDooDooCake.git

## Công nghệ chính

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios (kết nối API)
- Socket.io-client

## Yêu cầu

- Node.js >= 18
- npm hoặc yarn

## Cài đặt

Mở terminal tại thư mục `FE` và chạy:

```bash
npm install
```

## Biến môi trường

Tạo file `.env` trong thư mục `FE` (hoặc dùng `.env.local`) với biến:

```env
VITE_API_URL=http://localhost:5001/api
```

Thay `http://localhost:5001/api` bằng URL backend nếu cần (hoặc đường dẫn deploy).

## Chạy ứng dụng

- Chạy ở chế độ phát triển:

```bash
npm run dev
```

- Build production:

```bash
npm run build
```

- Xem bản build local:

```bash
npm run preview
```

## Cấu trúc chính

- `src/main.tsx` — entry
- `src/App.tsx` — route và layout
- `src/api/axiosClient.ts` — cấu hình axios dùng `import.meta.env.VITE_API_URL`
- `src/components` — component tái sử dụng
- `src/pages` — các trang chính (khách hàng và admin)

## Ghi chú

- Đảm bảo backend (BE) đang chạy và `VITE_API_URL` trỏ tới đúng endpoint.
- Nếu gặp cảnh báo liên quan tới dòng mới (LF/CRLF) trên Windows, xem README của repository gốc hoặc thêm `.gitattributes` để chuẩn hóa EOL.

## Backend repository

Backend của dự án: https://github.com/phannhuquyen/DooDooCake.git

---

Nếu bạn muốn tôi cập nhật thêm phần hướng dẫn deploy (Heroku/Vercel) hoặc thêm scripts tiện lợi, báo tôi biết.
