# Group Feedback Synthesis (Tổng Hợp Phản Hồi Nhóm & Group Next Change)

> **Case nghiên cứu**: Case A — AI Tutor: Diagnostic Refresher  
> **Nhóm thực hiện**: Nhóm 3 thành viên (Case A)  
> **Nguyên tắc cốt lõi**: GATE 5 — *Learning, not praise*. Tổng hợp dựa trên hành vi thực tế và sự đánh đổi của 3 Tester độc lập, tuyệt đối không đưa ra kết luận "được kiểm chứng (validated)".

---

## 1. Ma trận Tổng hợp 3 Feedback Notes của Nhóm

| Nội dung | Feedback 1<br>*(Tester 1: SV CNTT năm 3)* | Feedback 2<br>*(Tester 2: Chuyển ngành Data)* | Feedback 3<br>*(Tester 3: Học viên Python online)* | Pattern hoặc khác biệt |
| :--- | :--- | :--- | :--- | :--- |
| **First action** | Nhìn lướt công thức 15s $\rightarrow$ Bấm nút chẩn đoán ở Option A; ở Option B bấm ngay vào nút cam cảnh báo. | Bấm vào nút chat ngay khi thấy công thức dài; ở Option C bấm trực tiếp vào ký hiệu $\partial$ đầu tiên. | Dừng lại đọc bài 30s trước khi bấm; ở Option C thử kéo ngay thanh trượt sang Mức 2. | **Pattern**: Cả 3 tester đều phản xạ bấm vào các điểm có gợi ý thị giác mạnh nhất (nút cam cảnh báo, ký hiệu lạ) thay vì đọc tuần tự. |
| **Breakdown chính** | Bị ngợp trước các mũi tên sơ đồ của Option B nếu không có nút cảnh báo màu cam; phân vân ở câu hỏi 2 của Option A. | Thừa nhận không đủ kiên nhẫn đọc sơ đồ Option B khi đang làm bài tập gấp; nhận xét Option C Mức 3 hơi dài. | Lúng túng bấm nhầm nhánh không liên quan ở Option B; ban đầu sợ bị AI "dạy đời" bài dài ở Option A. | **Pattern**: Option B gây ra **Breakdown nhận thức lớn nhất** (quá tải thông tin, ngợp trước cây phả hệ khi đang cần gỡ kẹt nhanh trong 1 phút). |
| **Cách lấy lại control** | Thử nút `↺ Đặt lại bản đồ` ở B; kéo thanh trượt qua lại giữa Mức 1 $\leftrightarrow$ 2 $\leftrightarrow$ 3 ở C; làm câu quiz để tự kiểm tra. | Sử dụng nút `Trở về mặc định` ở C để quay lại bài đọc; không bấm nút override của A vì thấy AI đoán trúng. | Chuyển sang xem danh sách phẳng ở B; kéo Mức 2 ở C rồi đóng panel để tiếp tục đọc bài. | **Pattern**: Tester chủ động dùng các cơ chế phục hồi (slider, nút reset, đóng panel) để bảo toàn nhịp học cá nhân. |
| **Option được chọn** | **Option C (cho học hàng ngày)** kết hợp **Option A (khi hoàn toàn bế tắc)**. | **Option C** kết hợp **Option A**. | **Option C** (tiện nhất, không muốn mở cửa sổ chat phụ). | **Pattern**: **100% Tester ưu tiên Option C** vì tính liền mạch, nhưng đều thừa nhận **vẫn cần Option A** làm phao cứu sinh khi mất gốc hoàn toàn. |
| **Trade-off** | Đánh đổi giữa việc *"giữ mạch đọc tại chỗ"* (C) và *"được dẫn dắt khi không biết mình hổng cái gì"* (A). | Đánh đổi giữa tốc độ tra cứu tức thời trong 30s (C) và bức tranh phả hệ tổng thể nhưng tốn thời gian đọc (B). | Đánh đổi giữa cảm giác tự chủ không bị AI can thiệp (C) và việc phải tự mò ký hiệu gây nghẽn. | **Pattern**: Đánh đổi cốt lõi là **Mạch đọc liền mạch (Continuity)** đối đầu với **Độ sâu chẩn đoán (Diagnostic Depth)**. |

---

## 2. Quyết định Cải tiến Nhóm (Group Next Change)

* **Một Next Change nhóm chốt**:  
  > **Hợp nhất cơ chế chẩn đoán 2 câu của Option A trực tiếp vào thanh công cụ Inline của Option C**: Khi người học bôi đen một vùng công thức mà không rõ mình vướng ký hiệu nào, một nút nhỏ *"Chẩn đoán nhanh 2 câu"* sẽ xuất hiện ngay tại chỗ thay vì mở khung chat riêng biệt. Đồng thời, **chuyển Option B (Bản đồ khái niệm) thành tính năng hậu kỳ** ở cuối bài học phục vụ ôn tập tổng kết trước kỳ thi, thay vì hiển thị song song gây nhiễu lúc đang đọc bài.

* **Evidence nào dẫn tới quyết định này**:  
  1. Cả 3 Tester đều ưu tiên Option C vì không làm đứt gãy dòng đọc bài (*“không có cảm giác bị ngắt mạch đọc”*, *“vừa nhìn công thức vừa chỉnh độ sâu”*).
  2. Tuy nhiên, cả 3 Tester đều chỉ ra điểm mù của Option C: *"Nó giả định mình đã biết bấm vào đâu, nếu cả công thức đều mù mờ thì chịu"*. Lúc này, cơ chế đặt 2 câu hỏi của Option A được đánh giá là cứu cánh giải tỏa tâm lý tốt nhất.
  3. Cả 3 Tester đều ngập ngừng và cảm thấy quá tải trước cây sơ đồ phả hệ của Option B khi đang kẹt bài tập, nhưng đều đồng thuận rằng sơ đồ này rất có giá trị nếu dùng để ôn tập tổng quan sau khi học xong cả chương.

* **Still Unproven sau ba feedback**:  
  * Sau 3 buổi test (20 phút/phiên), nhóm **chưa thể chứng minh được**: Liệu sau khi vượt qua điểm kẹt bằng công cụ này, học viên có thực sự nhớ lâu hơn và tự giải được các bài tập tiếp theo mà không bị phụ thuộc vào AI nữa hay không.
  * Cần tiếp tục kiểm chứng cơ chế này trên các dạng bài học phi toán học (như code thuật toán, lý thuyết hệ thống) xem tính hiệu quả có suy giảm hay không.

---

## 3. GATE 5 — Learning, not Praise Checklist

- [x] **Ba Feedback Notes độc lập**: Nhóm có đủ 3 bản ghi nhận từ 3 tester khác nhau ngoài nhóm.
- [x] **Chỉ ra Pattern và Sự khác biệt rõ ràng**: Tổng hợp được cả điểm đồng thuận (thích Inline C) và điểm ngập ngừng (ngợp trước sơ đồ B).
- [x] **Chốt một Next Change cụ thể**: Có kế hoạch hợp nhất cơ chế A vào C và dời B về cuối bài.
- [x] **Nêu rõ điều chưa chứng minh**: Không ngộ nhận giải pháp đã hoàn hảo hay "validated".
- [x] **Tuyệt đối không có lời khen sáo rỗng**: Mọi nhận định đều đi kèm hành vi đo đếm được (thời gian ngập ngừng, click đầu tiên) và sự đánh đổi cụ thể.
