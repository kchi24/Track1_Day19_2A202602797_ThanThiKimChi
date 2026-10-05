# Prototype Link & Hướng Dẫn Trải Nghiệm Micro-Prototype

> **Dự án**: AI Tutor — Diagnostic Refresher  
> **Mã học viên**: 2A202602797  
> **Thành viên nhóm**: Nhóm 3 người (Case A)  

---

## 1. Link / Vị trí chạy Micro-Prototype

Prototype được xây dựng dưới dạng ứng dụng Web chạy ngay trên trình duyệt (Vanilla HTML5 / CSS3 / JavaScript hiện đại), không phụ thuộc vào thư viện bên thứ ba và đã được lưu trữ trực tiếp trong thư mục dự án:

* **File khởi chạy cục bộ**: [`index.html`](file:///d:/Track1_Day19_2A202602797_ThanThiKimChi/index.html)
* **Đường dẫn tuyệt đối trên máy tính**: `d:\Track1_Day19_2A202602797_ThanThiKimChi\index.html`
* **Cách mở**: Nhấp đúp chuột vào file `index.html` hoặc mở bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Firefox, Brave).

*(Đối với phiên bản demo trực tuyến của nhóm trên Vercel / GitHub Pages / Figma: cập nhật link deploy hoặc link Figma chung của nhóm tại đây).*

---

## 2. Hướng dẫn các bước trải nghiệm dành cho Tester

Cả 3 Option đều dùng **chung 70% ngữ cảnh** (Bài đọc về *"Thuật toán Gradient Descent & Chain Rule"* ở khung bên trái). Điểm bế tắc là công thức:
$$w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w}$$

Tester có thể dễ dàng chuyển đổi qua lại giữa 3 Option bằng thanh điều hướng ở góc trên bên phải màn hình:

### 🔹 Thử nghiệm Option A: Socratic Diagnostic Chat
1. Trên thanh điều hướng trên cùng, chọn nút **Option A — Socratic Diagnostic Chat**.
2. Nhìn vào khung công thức bên trái, bấm nút: **"Tôi chưa hiểu đoạn này (Khám phá lỗ hổng)"**.
3. Khung chat bên phải sẽ mở ra. Đọc câu hỏi 1 của AI và bấm chọn một trong các phương án trả lời.
4. Trả lời tiếp câu hỏi 2 của AI.
5. Quan sát thẻ **"Kết quả chẩn đoán của AI"** (Độ tin cậy 88%, chỉ rõ lỗ hổng Đạo hàm riêng và tóm tắt cấp tốc).
6. Thử nghiệm cơ chế phục hồi (Recovery): Thử bấm nút **"↺ Chẩn đoán lại từ đầu"** hoặc **"⚠️ AI đoán sai? Tôi tự chọn bài ôn"**.

---

### 🔹 Thử nghiệm Option B: Prerequisite Concept Radar
1. Trên thanh điều hướng trên cùng, bấm chuyển sang tab **Option B — Prerequisite Concept Radar**.
2. Nhìn sang khung bên phải: Cây phả hệ kiến thức nền tảng chia theo 2 tầng (Nền tảng Cấp 3 $\rightarrow$ Giải tích đa biến).
3. Bấm vào nút màu cam được cảnh báo: **"Đạo hàm riêng (Partial Derivative $\partial$) — Vùng dễ nhầm lẫn nhất ⚠️"**.
4. Đọc thẻ phân tích đối chiếu: AI giải thích khái niệm cũ và cách nó được áp dụng vào công thức bài học hiện tại.
5. Thử bấm sang các nút khác (như *Vector Gradient*, *Đạo hàm 1 biến*) hoặc bấm **"↺ Đặt lại bản đồ"**.

---

### 🔹 Thử nghiệm Option C: Inline Scaffolding Co-pilot
1. Trên thanh điều hướng trên cùng, bấm chuyển sang tab **Option C — Inline Scaffolding Co-pilot**.
2. Nhìn vào khung công thức bên trái: Bấm trực tiếp vào nút ký hiệu $\frac{\partial L}{\partial w}$ hoặc $\eta$ hoặc dấu $-$.
3. Nhìn sang khung bên phải: Kéo thanh trượt **Mức độ bóc tách (Depth Slider)**:
   * *Mức 1*: Nhắc nhanh (30 giây).
   * *Mức 2*: So sánh kiến thức cũ $\leftrightarrow$ kiến thức mới.
   * *Mức 3*: Đào sâu kèm ví dụ bài toán cụ thể.
4. Bấm nút **"✍️ Làm 1 câu trắc nghiệm nhanh để kiểm tra hiểu chưa"** để thử nghiệm tính năng xác nhận độ thông suốt.
