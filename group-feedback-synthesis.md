# Group Feedback Synthesis (Tổng Hợp Phản Hồi Nhóm & Group Next Change)

> **Case**: Case A — AI Tutor: Diagnostic Refresher  
> **Nhóm thực hiện**: Nhóm 3 thành viên (Thân Thị Kim Chi và các cộng sự)  
> **Mục tiêu**: Đối chiếu kết quả thử nghiệm chéo của 3 Tester độc lập trên cả 3 Option (A, B, C) để rút ra các mẫu hành vi chung, sự đánh đổi và xác định bước lặp tiếp theo (*Next Change*).

---

## 1. Ma trận tổng hợp 3 Feedback Notes của Nhóm

Cả 3 thành viên trong nhóm đã tiến hành facilitate độc lập với 3 tester ngoài nhóm. Dưới đây là bảng đối chiếu hành vi thực tế:

| Thành viên / Tester | Hành vi với Option A (Socratic Chat) | Hành vi với Option B (Concept Radar) | Hành vi với Option C (Inline Scaffolding) | Lựa chọn & Đánh đổi chính |
| :--- | :--- | :--- | :--- | :--- |
| **Tester 1**<br>*(Kim Chi facilitate)*<br>SV CNTT năm 3 | Trả lời nhanh 2 câu hỏi, đọc chăm chú kết quả chẩn đoán 88%; đánh giá cao việc AI "bắt đúng bệnh" không cần gõ từ khóa. | Chú ý ngay vào nút cam cảnh báo; bấm lướt qua 3 nút khác nhau; cảm thấy cây sơ đồ hơi nhiều thông tin nếu đang bị rối. | Kéo thanh trượt qua cả 3 mức; thích nhất Mức 2 (So sánh cũ/mới); làm câu trắc nghiệm nhanh và hào hứng khi đúng. | **Chọn C cho việc học hàng ngày**, nhưng **chọn A khi hoàn toàn bế tắc**. Đánh đổi giữa việc *"giữ mạch đọc"* (C) và *"được định hướng khi mất gốc"* (A). |
| **Tester 2**<br>*(Thành viên 2 facilitate)*<br>Người đi làm chuyển ngành Data | Bấm vào nút chat ngay khi thấy công thức dài; trả lời sai câu 1 nhưng AI điều chỉnh câu 2 phù hợp; cảm thấy nhẹ nhõm vì không phải tự tìm tài liệu cũ. | Dành nhiều thời gian đọc phần đối chiếu lý thuyết; khen bản đồ giúp hiểu logic bài học, nhưng thừa nhận *"lúc đang làm bài tập gấp thì không có kiên nhẫn đọc cây này"*. | Thử bấm vào từng ký hiệu; nhận xét thanh trượt Mức 1 hơi ngắn, Mức 3 hơi dài; Mức 2 là vừa vặn nhất. Thích tính năng inline vì không làm che mất bài giảng. | **Thích kết hợp A và C**. Nhận xét: Option B phù hợp để review trước kỳ thi, còn khi đang kẹt bài thì muốn thao tác nhanh trong 30 giây. |
| **Tester 3**<br>*(Thành viên 3 facilitate)*<br>Học viên khóa học Python online | Ban đầu e ngại bấm vào nút trợ giúp vì sợ bị AI "dạy đời" bài giảng dài; sau khi thấy chỉ có 2 câu trắc nghiệm ngắn thì hoàn thành rất nhanh. | Lúng túng khi nhìn vào các mũi tên của cây kiến thức; bấm nhầm sang nhánh không liên quan trước khi tìm thấy nút đạo hàm riêng. | Rất thích việc bôi đen/chọn thẳng vào ký hiệu $\partial$; kéo thanh trượt sang Mức 2 để xem giải thích rồi đóng lại tiếp tục đọc bài ngay. | **Chọn C là giải pháp tiện nhất**. Nhận xét: Không muốn mở cửa sổ chat phụ vì cảm giác như bị gián đoạn và thừa nhận mình "kém cỏi". |

---

## 2. Các phát hiện cốt lõi từ 3 buổi Test

### 1. Hành vi và Pattern xuất hiện xuyên suốt
* **Nhu cầu đối chiếu "Cũ $\leftrightarrow$ Mới"**: Ở cả 3 option, các tester đều dừng lại lâu nhất ở phần nội dung so sánh giữa kiến thức phổ thông quen thuộc và kiến thức mới của bài học (ví dụ: $dy/dx$ so với $\partial L/\partial w$). Học viên không hẳn quên sạch toán, mà là **không nhận ra toán cũ đang biến hình trong bài mới**.
* **Tâm lý sợ gián đoạn mạch đọc**: Cả 3 tester đều đánh giá cao Option C vì nó nằm ngay tại chỗ (*inline*). Việc mở một pop-up to hoặc chuyển tab khiến họ cảm thấy việc học bị đứt gãy.
* **Giá trị của việc "Bắt bệnh giùm"**: Option A tạo ra sự giải tỏa tâm lý lớn nhất khi học viên thực sự không biết mình kẹt ở đâu. Họ thích việc chỉ cần click chọn đáp án A/B/C thay vì phải tự diễn đạt câu hỏi cho chatbot.

### 2. Sự đánh đổi (Trade-offs) người dùng bộc lộ
* **Tự do khám phá (Option B) vs. Được dẫn dắt chính xác (Option A)**: Bản đồ tri thức (B) cho người học bức tranh lớn nhưng đòi hỏi nỗ lực nhận thức cao (cognitive load). Socratic Chat (A) ít tốn sức hơn nhưng người học phải nhường quyền điều khiển cho AI trong 60 giây.
* **Ngữ cảnh tại chỗ (Option C) vs. Chiều sâu chẩn đoán (Option A)**: Option C giải thích rất nhanh tại chỗ nhưng giả định người học đã khoanh vùng được ký hiệu gây khó hiểu. Nếu người học bối rối toàn diện cả đoạn văn, Option C trở nên vô dụng và họ cần Option A.

### 3. Điều nhóm bất ngờ
* Nhóm từng nghĩ học viên sẽ thích tự do bấm vào Bản đồ khái niệm (Option B) nhất vì nó trực quan, nhưng thực tế cả 3 tester đều cảm thấy Bản đồ gây choáng ngợp lúc đang bế tắc và chỉ phù hợp cho mục đích ôn tập tổng kết.

### 4. Điều vẫn chưa được chứng minh
* Ba buổi thử nghiệm micro-prototype mới chỉ kiểm tra hành vi phản xạ trước một công thức toán cụ thể trong 25 phút.
* Nhóm **chưa chứng minh được**: Liệu sau khi vượt qua điểm kẹt bằng công cụ này, học viên có thực sự nhớ lâu hơn và tự giải được các bài tập tiếp theo mà không cần phụ thuộc vào AI nữa hay không.

---

## 3. Group Next Change (Hành động cải tiến tiếp theo của Nhóm)

Tuân thủ nghiêm ngặt quy tắc bài lab — **Không tuyên bố solution đã validated**, nhóm đúc kết tuyên ngôn lặp (iteration statement) chuẩn mực như sau:

> **“Với Hypothesis Problem này (học viên bế tắc cục bộ, ngại quá tải khi ôn lại cả bài và tốn công giải thích bối cảnh cho AI ngoài), chúng tôi đã thử ba cách giải (A, B, C).**  
> **Tester đã có xu hướng ưu tiên sự liền mạch của Option C (Inline Scaffolding) để không làm đứt gãy dòng đọc bài, nhưng vẫn cần cơ chế gợi mở và khoanh vùng lỗ hổng tự động của Option A khi hoàn toàn bế tắc.**  
>  
> **Vì vậy, ở iteration tiếp theo, chúng tôi sẽ:**  
> 1. **Hợp nhất cơ chế chẩn đoán nhanh của Option A trực tiếp vào thanh công cụ Inline của Option C**: Khi người dùng bôi đen một vùng công thức mà không rõ mình vướng ký hiệu nào, một nút nhỏ *"Chẩn đoán nhanh 2 câu"* sẽ xuất hiện ngay tại chỗ thay vì mở khung chat riêng biệt.  
> 2. **Chuyển Option B (Bản đồ khái niệm) thành tính năng hậu kỳ**: Đặt Bản đồ kiến thức ở cuối bài học dưới dạng *"Tóm tắt các mắt xích đã học"* phục vụ ôn tập, thay vì hiển thị song song gây nhiễu lúc đang đọc bài.  
> 3. **Bổ sung tính năng Kiểm tra củng cố (Micro-Check)**: Mở rộng tính năng câu hỏi trắc nghiệm mini 1-click sau mỗi lần bóc tách kiến thức để người học tự tin rằng mình đã thực sự hiểu trước khi quay lại bài giảng chính.”
