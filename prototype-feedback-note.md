# Prototype Feedback Note (Phiên Test Do Thân Thị Kim Chi Facilitate)

> **Người thực hiện facilitate & ghi chép**: Thân Thị Kim Chi (2A202602797)  
> **Tester tham gia**: Tester 1 — Nguyễn Hoàng Nam (21 tuổi, sinh viên năm 3 ngành Công nghệ Thông tin, đang tự học môn Machine Learning trực tuyến).  
> **Thời gian test**: 25 phút.  
> **Hình thức**: Trực tiếp 1-1 trên máy tính, quan sát màn hình và ghi chép hành vi.  
> **Cam kết**: Facilitator tuân thủ nguyên tắc trung lập, không giải thích thay giao diện, không mớm lời, không hỏi *"Bạn có thích không?"*. Tester được trải nghiệm đầy đủ cả 3 Option A, B, C theo thứ tự luân phiên.

---

## 1. Kịch bản mở đầu & Outcome Task (Đã dùng trong buổi test)

* **Lời mở đầu trung lập**:
  > *"Cảm ơn Nam đã tham gia. Mình đang nghiên cứu cách học viên vượt qua các đoạn kiến thức khó khi tự học trực tuyến. Trước mặt bạn là một bài học mẫu về Gradient Descent. Trong bài có một công thức toán mà nhiều người thường bị khựng lại. Mình có 3 công cụ hỗ trợ khác nhau (Option A, B, C). Bạn hãy trải nghiệm từng công cụ để tìm hiểu xem công thức này đang đòi hỏi kiến thức nền tảng nào và vượt qua chỗ bế tắc đó nhé. Bạn cứ thoải mái thao tác và có thể nói to suy nghĩ trong đầu nếu muốn, không có thao tác nào là sai cả."*
* **Outcome Task**: *"Hãy xác định xem ký hiệu $\frac{\partial L}{\partial w}$ trong công thức đòi hỏi kiến thức nền gì từ trước và làm sao để hiểu được nó."*

---

## 2. Ghi nhận hành vi chi tiết theo từng Option

### Lượt 1: Trải nghiệm Option A — Socratic Diagnostic Chat
* **Hành vi quan sát được (Raw Behavior)**:
  * Tester đọc lướt công thức $w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w}$ trong khoảng 15 giây, nhíu mày ở ký hiệu $\partial$.
  * Di chuột đến nút *"Tôi chưa hiểu đoạn này (Khám phá lỗ hổng)"* và bấm ngay.
  * Khi cửa sổ chat bật lên câu hỏi 1, tester dừng lại đọc kỹ 3 lựa chọn mất 12 giây, sau đó chọn phương án: *"A. Mình chưa rõ ký hiệu cong ∂ khác gì chữ d trong đạo hàm dL/dw thông thường"*.
  * Đến câu hỏi 2 (về hàm 2 biến), tester phân vân giữa đáp án A và B trong 8 giây, sau đó bấm chọn B (đáp án sai).
  * Khi AI hiển thị thẻ kết luận chẩn đoán: *"Phát hiện lỗ hổng: Khái niệm Đạo hàm riêng (88% tin cậy)"* kèm phần ôn tập 1 phút, tester đọc chăm chú từ đầu đến cuối không rời mắt (khoảng 35 giây), gật đầu nhẹ.
  * Tester để ý thấy nút *"↺ Chẩn đoán lại"* và *"⚠️ AI đoán sai? Tôi tự chọn bài ôn"* ở phía dưới, có di chuột qua nhưng không bấm vì bảo: *"Nó chẩn đoán đúng chỗ mình đang lú rồi nên không cần sửa"*.
* **Quote nguyên văn của Tester 1**:
  * *"Ủa, nó hỏi đúng chỗ ghê. Bình thường mình nhìn công thức này chỉ thấy sợ chứ không biết là do mình quên cái trò giữ một biến làm hằng số từ hồi giải tích 1."*
  * *"Có cái chẩn đoán này đỡ phải ngồi nghĩ xem nên gõ từ khóa gì vào Google."*

---

### Lượt 2: Trải nghiệm Option B — Prerequisite Concept Radar
* **Hành vi quan sát được (Raw Behavior)**:
  * Khi chuyển sang Option B, tester nhìn vào cây phả hệ kiến thức bên phải mất 10 giây để định hình cấu trúc.
  * Ánh mắt tester bị hút ngay vào nút có viền cảnh báo màu cam: *"Đạo hàm riêng — Vùng dễ nhầm lẫn nhất ⚠️"*.
  * Tester bấm vào nút đó trước tiên, đọc phần giải thích và mối liên hệ với bài mới.
  * Sau đó, tester bấm tiếp sang nút *"Vector Gradient"*, rồi bấm ngược lại *"Đạo hàm 1 biến & Tiếp tuyến"*.
  * Tester dành khoảng 45 giây để nhảy qua lại giữa 3 nút khác nhau trên bản đồ trước khi quay lại đọc bài học chính.
* **Quote nguyên văn của Tester 1**:
  * *"Cái cây này nhìn tổng quan hay đấy, biết bài này nằm ở đâu trong bản đồ toán học."*
  * *"Nhưng mà nếu mình là người mất gốc nặng, nhìn vào 4 cái ô này mình cũng hơi hoang mang không biết nên bấm cái nào trước nếu không có cái ô màu cam cảnh báo."*

---

### Lượt 3: Trải nghiệm Option C — Inline Scaffolding Co-pilot
* **Hành vi quan sát được (Raw Behavior)**:
  * Tester bấm vào ký hiệu $\frac{\partial L}{\partial w}$ ở khung bên trái.
  * Tester lập tức kéo thanh trượt từ Mức 2 sang Mức 1, rồi kéo kịch sang Mức 3.
  * Tester dừng lại lâu nhất ở **Mức 2 (So sánh cũ/mới)**: *"Cũ (Cấp 3): dy/dx vs Mới (Bài này): ∂L/∂w"*.
  * Tester bấm thử nút *"✍️ Làm 1 câu trắc nghiệm nhanh"* và nhập đáp án "2", nhận được thông báo chúc mừng chính xác. Tester cười và tỏ ra rất hài lòng ở bước này.
* **Quote nguyên văn của Tester 1**:
  * *"Cái này tiện nhất ở chỗ mình không có cảm giác bị ngắt mạch đọc. Vừa nhìn công thức vừa chỉnh được độ sâu giải thích."*
  * *"Nhưng cái này giả định là mình đã biết bấm vào đâu. Giả sử cả công thức này mình đều mù mờ thì mình sẽ không biết nên kéo thanh trượt của cái nào."*

---

## 3. Tổng hợp so sánh & Đánh đổi (Trade-offs) từ góc nhìn Tester 1

| Tiêu chí | Option A (Socratic Chat) | Option B (Concept Radar) | Option C (Inline Scaffolding) |
| :--- | :--- | :--- | :--- |
| **Tốc độ gỡ kẹt** | Rất nhanh (~45 giây, chỉ cần trả lời 2 câu bấm chọn). | Trung bình (mất thời gian duyệt và đọc nhiều node). | Nhanh nhất nếu đã biết ký hiệu nào gây khó hiểu. |
| **Cảm giác kiểm soát** | Bị AI dẫn dắt, nhưng cảm thấy an tâm vì được "bắt bệnh". | Hoàn toàn tự do, nhưng dễ bị ngợp nếu có quá nhiều nhánh. | Kiểm soát cao nhất về độ nông/sâu của kiến thức. |
| **Bảo toàn mạch học** | Bị tách ngữ cảnh một chút (phải tập trung vào ô chat riêng). | Bị phân tâm vì phải đọc cả một cây sơ đồ lớn. | **Giữ mạch học tốt nhất** vì tương tác trực tiếp cạnh công thức. |
| **Sự lựa chọn ưu tiên của Tester 1** | **Xếp hạng 2**: Muốn dùng khi gặp công thức hoàn toàn mới và không biết mình dốt ở đâu. | **Xếp hạng 3**: Thích dùng để ôn tập cuối chương hơn là lúc đang kẹt bài. | **Xếp hạng 1**: Muốn dùng thường xuyên nhất khi đang đọc bài hàng ngày. |

> **Ghi chú của Facilitator (Kim Chi)**: Tester 1 không bác bỏ Option nào, nhưng chỉ ra rõ sự đánh đổi: Option A giải quyết triệt để rào cản *"không biết mình không biết cái gì"*, trong khi Option C lại vượt trội về mặt *"duy trì mạch đọc không bị ngắt quãng"*.
