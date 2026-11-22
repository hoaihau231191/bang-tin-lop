# Website bảng tin lớp học

Website tĩnh dùng HTML, CSS, JavaScript; hỗ trợ nhiều lớp. Nội dung bài đăng nằm trong `posts.js`.

## 1. Chạy thử trên máy tính

Mở `index.html` bằng trình duyệt. Nếu trình duyệt chặn một số tài nguyên khi mở file trực tiếp, hãy dùng VS Code với tiện ích Live Server.

## 2. Thêm lớp mới

Mở `posts.js`, tìm `classes` và thêm một phần tử:

```js
{ id: "7-5", name: "Lớp 7/5", homeroomTeacher: "Giáo viên chủ nhiệm" }
```

`id` nên viết không dấu, không khoảng trắng và không trùng với lớp khác.

## 3. Thêm bài đăng

Thêm đối tượng vào đầu mảng `posts`:

```js
{
  id: "lich-hop-phu-huynh-2026",
  classId: "7-5",
  title: "Thông báo họp phụ huynh",
  date: "2026-11-25",
  category: "Thông báo",
  important: true,
  excerpt: "Thông tin ngắn hiển thị ở trang danh sách.",
  content: "Nội dung chi tiết bài đăng.\nCó thể xuống dòng bằng \\n.",
  file: "documents/thong-bao-hop-phu-huynh.pdf"
}
```

- `id`: mã bài viết duy nhất.
- `classId`: phải khớp `id` của lớp.
- `date`: định dạng `YYYY-MM-DD`.
- `important`: `true` nếu muốn đánh dấu nổi bật.
- `file`: để trống `""` nếu không có tệp.

Đưa tài liệu vào thư mục `documents`. Đưa ảnh vào `images`; nếu muốn hiển thị ảnh trong bài, thêm `image: "images/ten-anh.jpg"`.

## 4. Đưa website lên GitHub và Cloudflare Pages

1. Tạo tài khoản GitHub và tạo repository mới, ví dụ `bang-tin-lop`.
2. Tải toàn bộ nội dung thư mục này lên repository (giữ nguyên cấu trúc).
3. Đăng nhập Cloudflare, vào **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Chọn repository `bang-tin-lop`.
5. Cấu hình:
   - Framework preset: `None`
   - Build command: để trống
   - Build output directory: `/` (hoặc thư mục gốc theo giao diện Cloudflare)
6. Nhấn **Save and Deploy**.
7. Cloudflare cấp địa chỉ dạng `ten-du-an.pages.dev`.

Khi muốn cập nhật website:
1. Sửa `posts.js` trên máy.
2. Commit/push thay đổi lên GitHub (hoặc chỉnh trực tiếp file trên GitHub).
3. Cloudflare tự động build và cập nhật website trên cùng địa chỉ `*.pages.dev`.

## 5. Lưu ý

- Không đổi tên project Cloudflare Pages nếu muốn giữ nguyên địa chỉ `*.pages.dev`.
- Không xóa hoặc đổi tên repository nếu chưa điều chỉnh kết nối.
- Mỗi lần cập nhật chỉ cần sửa dữ liệu và đẩy lên GitHub; không tạo project Pages mới.
- Đây là website công khai, không có đăng nhập hoặc phân quyền. Không đưa thông tin cá nhân nhạy cảm của học sinh lên đây.
- Nên kiểm tra quyền sử dụng hình ảnh và tài liệu trước khi công khai.
