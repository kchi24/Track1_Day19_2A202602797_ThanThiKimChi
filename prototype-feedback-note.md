# Prototype Feedback Note

> **Người thực hiện facilitate & ghi chép**: Facilitator (2A202602797)  
> **Tester tham gia**: Tester 1 — Nguyễn Hoàng Nam (21 tuổi, sinh viên năm 3 ngành Công nghệ Thông tin, đang tự học Machine Learning trực tuyến).  
> **Thời gian test**: 20 phút (tuân thủ timeline: 2 phút context + 12 phút test A/B/C + 4 phút compare + 2 phút ghi chép).  
> **Hình thức**: Trực tiếp 1-1 trên máy tính, quan sát màn hình và ghi chép hành vi.  

---

## 1. Kịch bản mở đầu, Context & Outcome Task

* **Tester / Context**:
  * *Facilitator*: “Gần đây bạn có từng đang tự học một bài học trực tuyến mới mà gặp một công thức toán hoặc khái niệm phức tạp khiến bạn nhận ra mình đã quên một phần kiến thức nền tảng từ trước không?”
  * *Tester 1*: “Có chứ, tuần trước mình đọc bài về Mạng nơ-ron tích chập (CNN), đến đoạn giải thích phép nhân ma trận trọng số và đạo hàm hàm mất mát thì mình khựng lại vì quên mất cách tính đạo hàm riêng nhiều biến từ hồi năm 2. Lúc đó mình đành phải mở YouTube xem lại cả bài giải tích dài 30 phút, rất oải.”
  * $\rightarrow$ **Xác nhận**: Tester 1 có context trùng khớp 100% với bài toán nghiên cứu.

* **Opening (Lời mở đầu trung lập)**:
  > “Chúng mình đang thử ba cách thiết kế, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn.”

* **Outcome Task (Nói kết quả cần đạt, không nói nút cần bấm)**:
  > “Trong tình huống này, hãy dùng từng phương án để **xác định xem ký hiệu $\frac{\partial L}{\partial w}$ trong công thức đòi hỏi kiến thức nền gì từ trước và làm sao để hiểu được nó để tiếp tục bài học**.”

---

## 2. Bảng Quan sát Hành vi (Observation Table)

| Tiêu chí quan sát | Ghi nhận thực tế từ Tester 1 (Raw Observation Note) |
| :--- | :--- |
| **First action** | • **Option A**: Nhìn lướt công thức 15s $\rightarrow$ Bấm ngay nút *"Tôi chưa hiểu đoạn này"* bên cạnh công thức.<br>• **Option B**: Dừng lại 10s nhìn tổng thể cây phả hệ $\rightarrow$ Bấm thẳng vào node có viền cam cảnh báo *"Đạo hàm riêng "*.<br>• **Option C**: Bấm trực tiếp vào cụm ký hiệu $\frac{\partial L}{\partial w}$ trong công thức bên trái $\rightarrow$ Kéo thanh trượt độ sâu. |
| **Chỗ dừng, do dự hoặc hiểu sai** | • **Option A**: Dừng lại 12s đọc kỹ 3 lựa chọn ở câu hỏi 1; ở câu hỏi 2 do dự 8s giữa phương án A và B (chọn nhầm phương án B).<br>• **Option B**: Lúng túng 10s trước các mũi tên phân cấp; nhận xét: *"Nếu không có ô màu cam thì mình không biết nên bấm ô nào trước"*, bấm nhảy qua lại giữa 3 node liên tục.<br>• **Option C**: Lúc đầu không để ý có câu trắc nghiệm mini ở dưới; sau khi kéo kịch thanh trượt sang Mức 3 mới thấy nút làm quiz. |
| **Evidence được đọc hay bỏ qua** | • **Option A**: Đọc rất chăm chú chỉ số *"Độ tin cậy: 88%"* và phần mini-refresher 1 phút (đọc trong 35s không rời mắt).<br>• **Option B**: Đọc kỹ phần đối chiếu *"Liên hệ bài mới"*, nhưng bỏ qua phần lý thuyết dài dòng của node Đạo hàm 1 biến cấp 3.<br>• **Option C**: Dừng lại lâu nhất ở **Mức 2 (So sánh cũ/mới)**: đối chiếu giữa $dy/dx$ thời phổ thông và $\partial L/\partial w$ hiện tại. |
| **Cách tester sửa hoặc lấy lại control** | • **Option A**: Nhìn thấy nút `↺ Chẩn đoán lại` và ` AI đoán sai? Tôi tự chọn bài ôn`, di chuột qua nhưng không bấm vì bảo: *"Nó chẩn đoán đúng chỗ mình đang lú rồi nên không cần sửa"*.<br>• **Option B**: Bấm nút `↺ Đặt lại bản đồ` sau khi bấm loạn xạ 3 node; bấm thử nút ` Đối chiếu ký hiệu trên công thức` để xem viền sáng.<br>• **Option C**: Kéo thanh trượt qua lại liên tục giữa Mức 1 $\leftrightarrow$ 2 $\leftrightarrow$ 3; làm xong mini-quiz bấm nút `Trở về mặc định` để tiếp tục đọc bài. |
| **Option được chọn** | **Option C (Ưu tiên số 1 cho học hàng ngày)** kết hợp **Option A (Khi hoàn toàn bế tắc)**. |
| **Lý do và trade-off** | • *Lý do*: Option C tiện nhất vì không ngắt mạch đọc, vừa đọc bài vừa mổ xẻ được công thức. Option A tốt nhất khi không biết mình dốt ở đâu.<br>• *Trade-off*: Option C bắt buộc tester phải tự khoanh vùng được ký hiệu gây nghẽn; Option A bắt buộc tester phải nhường quyền kiểm soát cho AI trong 45s. |
| **Evidence chống lại kỳ vọng của nhóm** | Nhóm từng kỳ vọng sơ đồ trực quan của **Option B** sẽ được người học yêu thích nhất vì tính tự do khám phá. Nhưng thực tế Tester 1 cảm thấy **Option B gây quá tải nhận thức** khi đang kẹt bài tập gấp: *"Lúc đang bí bài nhìn vào cây này thấy hơi ngợp, chỉ thích hợp để ôn thi tổng kết thôi"*. |

---

## 3. Phân tích 4 Lớp Chuyên Sâu

### 1. OBSERVED (Tester đã làm hoặc nói gì?)
* *Raw Quotes*:
  * *"Ủa, nó hỏi đúng chỗ ghê. Bình thường mình nhìn công thức này chỉ thấy sợ chứ không biết là do mình quên cái trò giữ một biến làm hằng số từ hồi giải tích 1."* (Option A)
  * *"Cái cây này nhìn tổng quan hay đấy, nhưng nếu mình là người mất gốc nặng thì mình không biết nên bấm cái nào trước nếu không có ô màu cam cảnh báo."* (Option B)
  * *"Cái này tiện nhất ở chỗ mình không có cảm giác bị ngắt mạch đọc. Vừa nhìn công thức vừa chỉnh được độ sâu giải thích."* (Option C)
* *Thao tác*: Tester dừng lại lâu nhất ở các phần so sánh giữa kiến thức cũ thời phổ thông và ký hiệu mới trong bài giảng Machine Learning.

### 2. INTERPRETED (Nhóm nghĩ điều đó có thể có nghĩa gì?)
* Học viên không hẳn là mất gốc toàn bộ môn toán, mà vấn đề cốt lõi là **không nhận ra toán cũ đang biến hình dưới ký hiệu mới**.
* Nhu cầu cốt lõi khi đang đọc bài là **duy trì sự liền mạch**. Mọi hình thức mở pop-up to hoặc chuyển màn hình đều tạo ra cảm giác bị ngắt quãng và khiến người học nản lòng.
* Tuy nhiên, khi học viên hoàn toàn "mù mờ" (không biết mình kẹt ở ký hiệu nào), tính năng inline của Option C bị tê liệt, và lúc đó câu hỏi gợi mở 2 bước của Option A trở thành chiếc phao cứu sinh.

### 3. DECIDED — NEXT CHANGE (Nhóm sẽ sửa, kết hợp hoặc test gì tiếp?)
* **Hợp nhất cơ chế chẩn đoán của A vào giao diện inline của C**:
  * Khi người học chọn một vùng công thức mà không rõ mình vướng ký hiệu nào, một nút nhỏ *"Chẩn đoán nhanh 2 câu"* sẽ xuất hiện ngay tại thanh công cụ inline của Option C thay vì mở khung chat riêng biệt.
* **Tái định vị Option B**:
  * Chuyển Bản đồ khái niệm (Concept Radar) thành tính năng hậu kỳ đặt ở cuối bài giảng phục vụ mục đích ôn tập tổng kết, thay vì hiển thị song song làm phân tâm người học.
* **Mở rộng Micro-Check**:
  * Giữ lại câu hỏi trắc nghiệm mini 1-click của Option C vì đây là điểm tạo ra sự tự tin lớn nhất cho học viên trước khi quay lại bài học chính.

### 4. STILL UNPROVEN (Điều gì chưa thể kết luận từ một người?)
* Chưa thể kết luận liệu câu trắc nghiệm mini 1 câu của Option C có đủ để đảm bảo học viên thực sự hiểu bản chất toán học lâu dài hay chỉ là giải pháp "chữa cháy" tạm thời.
* Cần kiểm chứng trên các bài học không phải toán học (như kiến thức lập trình, cấu trúc dữ liệu) xem thanh trượt 3 mức độ sâu có còn phát huy tác dụng tương tự hay không.
