# AI Support Log (Nhật Ký Sử Dụng AI Minh Bạch)

> **Mã học viên**: 2A202602797  
> **Dự án**: Track 1 — Day 18–19 Lab: Diagnostic Refresher  
> **Cam kết liêm chính học thuật**: Toàn bộ dữ liệu phỏng vấn, quan sát hành vi người dùng thật, sự đánh đổi và các quyết định thiết kế đều dựa trên tương tác thực tế. AI chỉ đóng vai trò trợ lý hỗ trợ kỹ thuật, lập trình prototype và cấu trúc hóa tài liệu theo yêu cầu đề bài.

---

## 1. Bảng chi tiết sử dụng AI theo từng Chặng

| Chặng | Công cụ AI | AI đã giúp gì | Điểm hạn chế / Sơ sài của AI | Cách học viên đã tự sửa & hoàn thiện |
| :--- | :--- | :--- | :--- | :--- |
| **1. Tổng hợp Evidence** | Claude / Gemini Assistant | Gợi ý cấu trúc bảng đối chiếu 3 Practice Notes và mẫu chuẩn câu Hypothesis Problem 5 thành tố. | AI thường có xu hướng tổng hợp thành câu quá lý thuyết hoặc suy diễn vượt quá phạm vi dữ liệu ghi nhận từ Day 17. | Tự đưa các quote thật của User từ phỏng vấn Day 17 (về việc *"quên kiến thức cũ hay chưa biết cách áp dụng"*) vào làm bằng chứng cốt lõi. |
| **2. Chọn 3 Solution Options** | Assistant | Đề xuất ý tưởng về 3 cơ chế tương tác Người – Máy khác biệt (Socratic vs Visual Graph vs Inline Scaffolding). | Ban đầu AI đề xuất các tính năng hơi chung chung, thiên về giao diện thay vì phân định rõ ai nắm quyền quyết định (*agency*). | Nhóm đã cùng thống nhất phân rõ vai trò: Option A do AI dẫn nhịp, Option B do User tự khám phá, Option C là Co-pilot đồng sáng tạo. |
| **3. Human–AI Design Pass** | Assistant | Hỗ trợ lập khung bảng Human–AI 4 trụ cột (Expectation, Role & Agency, Evidence & Uncertainty, Control & Recovery). | AI hay bỏ qua cơ chế phục hồi (*Recovery*) khi AI chẩn đoán sai lệch. | Bổ sung bắt buộc các nút phục hồi: *"Chẩn đoán lại"*, *"User Override tự chọn khái niệm ôn"* và *"Trở về bài học ban đầu"*. |
| **4. Build Micro-prototypes** | Assistant | Sinh mã nguồn khung HTML/CSS/JS (`index.html`, `style.css`, `app.js`) với giao diện dark mode hiện đại và logic chuyển tab mượt mà. | Phần giải thích toán học ban đầu còn dài dòng, chưa giống ngữ cảnh thực tế của một micro-refresher trong 60 giây. | Tinh chỉnh lại nội dung hiển thị của từng Option ngắn gọn, tập trung chuẩn vào công thức Gradient Descent và đạo hàm riêng $\partial$. |
| **5. Chuẩn bị Kịch bản Test** | Assistant | Rà soát câu hỏi dẫn dắt để đảm bảo kịch bản trung lập, không "bán giải pháp". | AI hay có thói quen đưa vào câu hỏi thăm dò cảm xúc như *"Bạn thấy giao diện này có đẹp không?"*. | Cắt bỏ toàn bộ câu hỏi đánh giá chủ quan; giữ lại kịch bản thuần quan sát hành vi và thao tác gỡ bế tắc. |
| **6. Test & Tổng hợp Feedback** | Assistant | Hỗ trợ định dạng bảng Ma trận phản hồi và kiểm tra cấu trúc câu tuyên bố *Group Next Change*. | Tuyệt đối không dùng AI để tạo quote hoặc bịa đặt phản hồi của tester. | Nội dung ghi chép phiên test trong `prototype-feedback-note.md` phản ánh 100% lời nói và cử chỉ thực tế của Tester 1 (Nguyễn Hoàng Nam). |

---

## 2. Cam kết nguyên tắc của bài lab

- [x] **Không dùng AI để tạo quote hoặc bịa đặt dữ liệu thử nghiệm người dùng.**
- [x] **Không tuyên bố giải pháp đã được "validated" chỉ với 3 tester.**
- [x] **Bảo toàn tính liên tục từ Hypothesis Problem của Day 17 sang Day 18–19.**
- [x] **Nêu rõ sự đóng góp của cá nhân trong sản phẩm chung của nhóm.**
