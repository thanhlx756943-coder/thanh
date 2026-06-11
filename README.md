# Todo List Application ✅

Một ứng dụng Todo List hiện đại với Local Storage, được thiết kế để giúp bạn quản lý các công việc hàng ngày một cách hiệu quả.

## 🌟 Tính Năng Chính

### 1. **Quản Lý Công Việc**
- ✅ Thêm công việc mới
- ✏️ Chỉnh sửa công việc
- 🗑️ Xóa công việc
- ☑️ Đánh dấu hoàn thành

### 2. **Lọc Công Việc**
- 📋 Xem tất cả công việc
- 🟡 Xem công việc đang làm (Active)
- ✔️ Xem công việc đã hoàn thành

### 3. **Ưu Tiên Công Việc**
- 🔴 **High Priority** - Công việc quan trọng
- 🟠 **Medium Priority** - Công việc bình thường
- 🟢 **Low Priority** - Công việc không gấp

### 4. **Thống Kê**
- 📊 Tổng số công việc
- 👷 Số công việc đang làm
- 🎉 Số công việc đã hoàn thành

### 5. **Local Storage**
- 💾 Tự động lưu tất cả công việc
- 🔄 Dữ liệu được giữ lại khi tắt/mở lại
- 🛡️ An toàn và bảo mật

### 6. **Giao Diện**
- 🎨 Dark mode hiện đại
- 📱 Responsive design
- ✨ Smooth animations
- 🌈 Gradient colors

## 🎯 Cách Sử Dụng

### 1. **Thêm Công Việc**
```
1. Nhập nội dung công việc vào ô input
2. Nhấn nút "Add" hoặc bấm Enter
3. Công việc sẽ được thêm vào danh sách
```

### 2. **Quản Lý Công Việc**
```
- ☑️ Click checkbox để đánh dấu hoàn thành
- ✏️ Click nút edit để sửa nội dung
- 🗑️ Click nút delete để xóa
- 🎯 Chọn mức ưu tiên từ dropdown
```

### 3. **Lọc Công Việc**
```
- "All" - Xem tất cả
- "Active" - Xem công việc chưa hoàn thành
- "Completed" - Xem công việc đã hoàn thành
```

### 4. **Xóa Công Việc**
```
- "Clear Completed" - Xóa tất cả công việc hoàn thành
- "Clear All" - Xóa tất cả công việc (không thể hoàn tác)
```

## 📁 Cấu Trúc File

```
todo-app/
├── index.html       # HTML chính
├── style.css        # CSS styling
├── script.js        # JavaScript logic
└── README.md        # Tài liệu
```

## 💻 Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc
- **CSS3** - Styling
  - Gradients
  - Flexbox & Grid
  - Smooth Transitions & Animations
- **JavaScript (ES6+)** - Logic
  - Object-Oriented Programming (OOP)
  - Local Storage API
  - DOM Manipulation
  - Event Handling
- **Font Awesome** - Icons

## 🚀 Cách Chạy

### Tùy chọn 1: Mở trực tiếp
```bash
Nhấp đúp vào file index.html
```

### Tùy chọn 2: Sử dụng Live Server
```bash
# Với VS Code Live Server extension
1. Cài đặt Live Server extension
2. Right-click vào index.html
3. Chọn "Open with Live Server"
```

### Tùy chọn 3: Sử dụng Python
```bash
# Python 3.x
python -m http.server 8000

# Sau đó mở: http://localhost:8000
```

## 💾 Lưu Trữ Dữ Liệu

### Local Storage
- Tất cả công việc được lưu tự động
- Dữ liệu không bị mất khi đóng trình duyệt
- Mỗi trình duyệt/máy có dữ liệu riêng
- Có thể xóa bằng cách xóa cache trình duyệt

### Cấu Trúc Dữ Liệu
```javascript
{
  id: 1234567890,              // Timestamp
  text: "Task description",     // Nội dung
  completed: false,            // Trạng thái
  priority: "medium",          // Mức ưu tiên
  createdAt: "01/01/2024..."   // Thời gian tạo
}
```

## 🎨 Giao Diện

### Color Scheme
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #ec4899 (Pink)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Amber)
- **Danger**: #ef4444 (Red)
- **Background**: Dark Mode

### Animations
- ⬇️ Slide Down - Header
- 🔄 Fade In - Input section
- ↙️ Slide In - Todo items
- 💫 Smooth Transitions - Hover effects

## 📊 Thống Kê

Ứng dụng hiển thị thống kê real-time:
- **Total**: Tổng số công việc
- **Active**: Số công việc chưa hoàn thành
- **Completed**: Số công việc đã hoàn thành

## 🔐 Bảo Mật

- ✅ Không gửi dữ liệu lên server
- ✅ Tất cả dữ liệu lưu cục bộ
- ✅ Không yêu cầu đăng nhập
- ✅ HTML escape để tránh XSS attacks

## 📱 Responsive

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (dưới 768px)

## 🐛 Troubleshooting

### Dữ liệu không được lưu
- Kiểm tra xem trình duyệt có hỗ trợ Local Storage
- Xóa cache và cookies
- Thử trình duyệt khác

### Icon không hiển thị
- Kiểm tra kết nối internet (Font Awesome CDN)
- Sử dụng unicode symbols thay thế

### Công việc không được thêm
- Kiểm tra console cho lỗi
- Đảm bảo trường input không trống
- Refresh lại trang

## 🔄 Cập Nhật Tương Lai

- [ ] Export/Import công việc (JSON, CSV)
- [ ] Tìm kiếm công việc
- [ ] Categories/Tags
- [ ] Due dates & reminders
- [ ] Dark/Light theme toggle
- [ ] Drag & drop reordering
- [ ] Cloud sync
- [ ] Collaboration features
- [ ] Mobile app
- [ ] API integration

## 📝 Ghi Chú

- Công việc được lưu tự động sau mỗi thay đổi
- Refresh trang không mất dữ liệu
- Xóa cache trình duyệt sẽ xóa tất cả dữ liệu
- Mỗi trình duyệt/máy tính có dữ liệu riêng

## 🤝 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra console (F12) cho lỗi
2. Xóa cache trình duyệt
3. Thử trình duyệt khác
4. Liên hệ support

## 📄 Giấy Phép

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại

---

**Tạo bởi**: Todo App Team
**Ngôn ngữ**: Vietnamese 🇻🇳
**Version**: 1.0.0
**Cập nhật**: 2024

**Happy Tasking! ✨**