# Three Option Design Sheet (Bảng Thiết Kế 3 Solution Options)

> **Case**: Case A — AI Tutor: Diagnostic Refresher  
> **Hypothesis Problem**: Khi đang tự học một bài học hoặc khái niệm chuyên sâu mới, học viên tự học trực tuyến gặp khó khăn trong việc nhanh chóng gỡ điểm nghẽn cục bộ để duy trì mạch bài học vì không tự cô lập được phần kiến thức nền tảng nào đang bị thiếu (và ngại bị quá tải nếu phải ôn lại toàn bộ, cũng như tốn quá nhiều công sức giải thích bối cảnh cho các công cụ tra cứu bên ngoài), dẫn đến mất nhiều thời gian loay hoay lọc thông tin, phát sinh cảm giác mệt mỏi, áp lực tiến độ và dễ nản lòng bỏ dở khóa học.  
> **Ngữ cảnh bài học dùng chung (70% Common Context)**: Bài học *"Thuật toán Gradient Descent & Quy tắc Chuỗi (Chain Rule)"* trong Machine Learning. Điểm kẹt nghiêm trọng: Công thức cập nhật trọng số chứa đạo hàm riêng $\frac{\partial L}{\partial w}$.

---

## 1. Comparison Contract (Hợp đồng so sánh 3 Solution Options)

Nhóm cam kết xây dựng 3 giải pháp khác biệt về **cơ chế tương tác Human–AI (Solution Mechanism)**, không phải 3 biến thể màu sắc hay giao diện:

| Tiêu chí so sánh | Option A<br>**Socratic Diagnostic Chat** | Option B<br>**Prerequisite Concept Radar** | Option C<br>**Inline Scaffolding Co-pilot** |
| :--- | :--- | :--- | :--- |
| **Cơ chế cốt lõi (Mechanism)** | **Turn-based Socratic Interview**: AI chủ động phỏng vấn chẩn đoán từng bước qua câu hỏi trắc nghiệm ngắn để khoanh vùng lỗ hổng. | **Visual Map Exploration**: Hệ thống biểu diễn cây phả hệ kiến thức tiên quyết; User tự nhìn bản đồ và định vị vùng hoang mang. | **Inline Deconstruction**: Bóc tách tức thì ngay tại dòng chữ/công thức thành các tầng kiến thức ngầm định. |
| **Điểm kích hoạt (Trigger)** | Bấm nút *"Tôi chưa hiểu đoạn này"* bên cạnh công thức khó. | Bấm vào biểu tượng/tab *"Bản đồ kiến thức tiên quyết"* ở cạnh bài. | Bấm/chọn trực tiếp vào các ký hiệu công thức đang gây bế tắc ($\partial$, $\eta$, $-$). |
| **Vai trò của AI (AI Role)** | **Bác sĩ chẩn đoán (Diagnostic Agent)**: Dẫn dắt đặt câu hỏi, phân tích câu trả lời và kết luận lỗ hổng. | **Thủ thư tổ chức (Visual Organizer)**: Trực quan hóa cấu trúc kiến thức và hiển thị tóm tắt khi được gọi. | **Trợ lý giải phẫu (Co-pilot Scaffolder)**: Phân rã cấu trúc logic công thức theo độ sâu mà người dùng chọn. |
| **Vai trò của User (User Agency)** | Người trả lời câu hỏi và kiểm duyệt kết luận của AI. | Người chủ động điều hướng, tự chọn nhánh khái niệm để đối chiếu. | Người kiểm soát độ sâu bóc tách thông qua thanh trượt (Slider). |
| **Dạng kết quả trả về** | Thẻ tóm tắt cấp tốc (Micro-refresher) tập trung duy nhất 1 lỗ hổng vừa phát hiện. | Thẻ đối chiếu khái niệm (Lý thuyết cũ cấp 3 $\leftrightarrow$ Cách áp dụng vào bài mới). | Tầng phân rã kiến thức (Nhắc nhanh 30s $\leftrightarrow$ So sánh cũ/mới $\leftrightarrow$ Ví dụ chi tiết). |
| **Giả định then chốt cần test** | Học viên sẵn sàng trả lời 2 câu hỏi của AI để tìm ra lỗ hổng thay vì muốn đọc đáp án ngay. | Học viên có khả năng tự nhận thức (metacognition) khi nhìn vào cây khái niệm trực quan. | Học viên thích vừa đọc bài vừa mổ xẻ công thức mà không muốn chuyển sang khung chat riêng. |

---

## 2. Human–AI Decision Table (Bảng thiết kế Human–AI 4 trụ cột)

### Trụ cột 1: Expectation (Thiết lập kỳ vọng)
* **Option A**: 
  * *AI làm gì*: Đặt kỳ vọng rõ ràng trước khi chat: *"AI sẽ hỏi 2 câu ngắn (khoảng 30 giây) để tìm xem bạn đang quên kiến thức nào"*.
  * *AI KHÔNG làm gì*: Không giải bài tập thay, không viết code hộ, không đưa ra bài giảng dài dòng hàng chục trang.
* **Option B**: 
  * *Kỳ vọng*: Đây là bản đồ tham chiếu các viên gạch nền tảng; không phải bài kiểm tra chấm điểm. User biết mình có thể tra cứu nhanh bất kỳ lúc nào.
* **Option C**: 
  * *Kỳ vọng*: AI hoạt động như một kính lúp phân giải; giải thích từng ký tự toán học từ mức đơn giản nhất mà không làm gián đoạn dòng chảy bài đọc.

---

### Trụ cột 2: Role & Agency (Vai trò & Quyền tự quyết)
* **Option A (AI chủ động dẫn dắt)**:
  * *Khởi xướng*: User bấm *"Tôi chưa hiểu đoạn này"*.
  * *Dẫn dắt*: AI nắm quyền điều phối (chọn câu hỏi 1, câu hỏi 2).
  * *Quyết định cuối*: User quyết định có bấm *"Đã hiểu, quay lại bài học"* hay chọn tự sửa.
* **Option B (User chủ động khám phá)**:
  * *Khởi xướng*: User mở bản đồ.
  * *Dẫn dắt*: User toàn quyền chọn nút kiến thức nào mình muốn xem trước/sau.
  * *AI*: Đóng vai trò cung cấp dữ liệu theo yêu cầu (On-demand).
* **Option C (Đồng sáng tạo / Co-pilot)**:
  * *Tương tác song hành*: User chọn đối tượng (ký hiệu) và biên độ phân tích (thanh trượt 1-2-3); AI tính toán và dựng nội dung bóc tách tương ứng trong thời gian thực.

---

### Trụ cột 3: Evidence & Uncertainty (Bằng chứng & Sự không chắc chắn)
* **Option A**:
  * AI không khẳng định tuyệt đối. Kết quả hiển thị: *"Dựa trên lựa chọn của bạn ở câu 1 và 2, AI nhận diện 88% khả năng bạn đang nhầm lẫn ở khái niệm Đạo hàm riêng"*.
  * Đưa ra lý giải vì sao đoán như vậy (bằng chứng từ câu trả lời của user).
* **Option B**:
  * Các nút trên bản đồ được gắn thẻ trạng thái dựa trên mức độ rủi ro thông thường: *[Nền tảng căn bản]* vs *[Vùng 85% học viên dễ nhầm lẫn nhất ⚠️]*.
* **Option C**:
  * Đánh dấu màu sắc tương ứng: Màu xanh lá cho phần kiến thức mới của bài học, màu cam/xanh lam cho phần kiến thức nền cũ từ cấp 3.

---

### Trụ cột 4: Control & Recovery (Quyền kiểm soát & Phục hồi sai sót)
* **Option A**:
  * *Khi AI chẩn đoán sai*: Luôn có nút cứu cánh cố định:
    1. `↺ Chẩn đoán lại từ đầu`: Cho phép làm lại lượt hỏi-đáp.
    2. `⚠️ AI đoán sai? Tôi tự chọn bài ôn`: Cho phép người dùng gõ hoặc chọn trực tiếp khái niệm mình muốn ôn tập mà không bị bó buộc vào suy luận của AI.
    3. Nút quay lại bài học bất kỳ lúc nào.
* **Option B**:
  * Nút `↺ Đặt lại bản đồ` giúp xóa các lựa chọn đã click; hiển thị danh sách phẳng nếu user không quen nhìn dạng cây.
* **Option C**:
  * Nút `Trở về mặc định` khôi phục văn bản nguyên bản; tính năng `Kiểm tra nhanh 1 câu trắc nghiệm` giúp user tự xác nhận mình đã thực sự hiểu chưa trước khi đóng thanh công cụ.
