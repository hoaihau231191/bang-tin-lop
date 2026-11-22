/*
  DỮ LIỆU BÀI ĐĂNG
  - Thêm bài mới vào đầu mảng posts để bài xuất hiện trước.
  - classId phải trùng với id trong danh sách classes.
  - date dùng định dạng YYYY-MM-DD.
  - content hỗ trợ văn bản thường; xuống dòng bằng \n.
  - file là đường dẫn tương đối, ví dụ: "documents/lich-kiem-tra.pdf".
*/
window.SITE_DATA = {
  siteTitle: "Bảng tin lớp học lớp 7/4",
  schoolYear: "2026 – 2027",
  classes: [
    { id: "7-4", name: "Lớp 7/4", homeroomTeacher: "Giáo viên chủ nhiệm" },
    { id: "6-1", name: "Lớp 6/1", homeroomTeacher: "Giáo viên chủ nhiệm" },
    { id: "6-2", name: "Lớp 6/2", homeroomTeacher: "Giáo viên chủ nhiệm" },
    { id: "8-1", name: "Lớp 8/1", homeroomTeacher: "Giáo viên chủ nhiệm" }
  ],
  posts: [
    {
      id: "thong-bao-mau-01",
      classId: "7-4",
      title: "Chào mừng đến với bảng tin lớp 7/4",
      date: "2026-11-22",
      category: "Thông báo",
      important: true,
      excerpt: "Đây là bài đăng mẫu. Giáo viên có thể thay nội dung này bằng thông báo thực tế.",
      content: "Chào các em học sinh và quý phụ huynh!\n\nBảng tin lớp được xây dựng để cập nhật những thông báo, nội dung học tập và hoạt động của lớp.\n\nThầy/cô sẽ thường xuyên cập nhật thông tin tại đây. Kính mong phụ huynh và học sinh theo dõi bảng tin.",
      file: ""
    },
    {
      id: "huong-dan-mau-02",
      classId: "7-4",
      title: "Hướng dẫn theo dõi thông tin lớp",
      date: "2026-11-21",
      category: "Hướng dẫn",
      important: false,
      excerpt: "Một vài lưu ý khi xem thông báo và tài liệu trên website.",
      content: "1. Chọn đúng lớp ở thanh điều hướng.\n2. Đọc nội dung bài đăng.\n3. Nếu bài có tài liệu đính kèm, nhấn vào liên kết tải tài liệu.\n\nWebsite chỉ dùng để cung cấp thông tin; khi có nội dung cần xác nhận, phụ huynh vui lòng liên hệ giáo viên chủ nhiệm qua kênh liên lạc chính thức.",
      file: ""
    },
    {
      id: "hoat-dong-mau-03",
      classId: "6-1",
      title: "Tin hoạt động lớp 6/1",
      date: "2026-11-20",
      category: "Hoạt động",
      important: false,
      excerpt: "Bài đăng minh họa cho một lớp khác trong hệ thống nhiều lớp.",
      content: "Đây là nội dung mẫu dành cho lớp 6/1. Bạn có thể xóa bài mẫu hoặc thay bằng tin hoạt động thực tế.",
      file: ""
    }
  ]
};
