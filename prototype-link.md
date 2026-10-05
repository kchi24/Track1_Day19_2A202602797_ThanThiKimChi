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

---

## 3. Prototype Annotation (Ghi chú kịch bản quan sát cho Facilitator)

> *Đặt ngoài frame kiểm thử, chỉ dành cho người điều phối quan sát (không hiện cho tester):*

### OPTION A: Socratic Diagnostic Chat
* **We expect the tester to**: Bấm nút *"Tôi chưa hiểu đoạn này"* bên cạnh công thức, đọc 2 câu hỏi gợi mở của AI và bấm chọn đáp án, xem kết luận chẩn đoán và bấm quay lại bài học hoặc thử override.
* **Watch for**: Tester có đọc kỹ 2 câu hỏi chẩn đoán không hay bấm bừa? Có nhận ra độ tin cậy 88% không? Có để ý thấy nút *"AI đoán sai? Tôi tự chọn bài ôn"* không?
* **Do not explain**: Không giải thích công thức toán hộ tester; không chỉ trước nút *"Tôi chưa hiểu"*; không giải thích câu hỏi chẩn đoán nghĩa là gì.

### OPTION B: Prerequisite Concept Radar
* **We expect the tester to**: Mở tab Option B, nhìn vào cây sơ đồ phả hệ kiến thức, tự click vào node được cảnh báo hoặc các node khác, đọc phần đối chiếu liên hệ với bài mới.
* **Watch for**: Tester bị thu hút bởi node nào trước tiên? Có bị ngợp trước các mũi tên phân cấp không? Có hiểu tại sao node Đạo hàm riêng lại có viền màu cam cảnh báo không?
* **Do not explain**: Không chỉ tester bấm vào ô màu cam; không giải thích cấu trúc cây phả hệ; không đọc hộ phần đối chiếu.

### OPTION C: Inline Scaffolding Co-pilot
* **We expect the tester to**: Mở tab Option C, click vào ký hiệu $\frac{\partial L}{\partial w}$ hoặc các thành phần khác của công thức, kéo thanh trượt độ sâu qua các mức 1, 2, 3 và thử làm câu trắc nghiệm nhanh.
* **Watch for**: Tester dừng lại ở mức độ sâu nào lâu nhất (Mức 1, 2 hay 3)? Có phát hiện ra câu hỏi mini-quiz không? Thao tác kéo trượt có tự nhiên không?
* **Do not explain**: Không hướng dẫn tester phải kéo slider; không nhắc tester làm quiz; không giải thích ý nghĩa các mức 1, 2, 3.

---

## 4. GATE 4 — Test-Ready Checklist

- [x] **Tester tự thao tác A/B/C**: Chạy trực tiếp trên trình duyệt qua file [`index.html`](file:///d:/Track1_Day19_2A202602797_ThanThiKimChi/index.html).
- [x] **Cùng 1 context và task**: Khung bên trái cố định bài giảng Machine Learning và công thức Gradient Descent.
- [x] **Không cần narration**: Các bước hướng dẫn và nút bấm tự giải thích.
- [x] **Nội dung thực tế**: Toán giải tích và logic chẩn đoán chân thực.
- [x] **Control & Recovery**: Nút Chẩn đoán lại, Nút User Override, Reset radar, Reset slider.
- [x] **Reset path**: Luôn có nút quay lại mạch học ban đầu.
