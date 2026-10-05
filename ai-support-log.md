# AI Support Log (Nhật Ký Sử Dụng AI Minh Bạch)

> **Mã học viên**: 2A202602797  
> **Dự án**: Track 1 — Day 18–19 Lab: Diagnostic Refresher  
> **Phần cá nhân phụ trách chính**: **Option B — Prerequisite Concept Radar**  
> **Cam kết học thuật**: Toàn bộ dữ liệu trích dẫn phỏng vấn, hành vi người dùng thật, sự đánh đổi và các quyết định thiết kế đều dựa trên tương tác thực tế từ Day 17 sang Day 18–19. AI chỉ đóng vai trò trợ lý hỗ trợ kỹ thuật, sinh prototype tương tác và cấu trúc hóa tài liệu theo chuẩn đề bài.

---

## 1. Bảng chi tiết sử dụng AI theo từng Chặng

| Chặng | Công cụ AI | AI đã giúp gì | Điểm hạn chế / Sơ sài của AI | Cách học viên đã tự sửa & hoàn thiện |
| :--- | :--- | :--- | :--- | :--- |
| **1. Tổng hợp Evidence** | Claude / Gemini Assistant | Gợi ý cấu trúc bảng đối chiếu 3 Practice Notes từ Day 17 và gợi ý mẫu câu Hypothesis Problem chuẩn 5 thành tố. | AI có xu hướng tổng quát hóa, diễn giải dài dòng và suy diễn vượt quá dữ liệu ghi nhận thực tế từ các bản ghi phỏng vấn. | Tự trích xuất chính xác các quote thô của User (về *"áp lực tiến độ"*, *"sợ bị quá tải nếu ôn lại cả bài"*, *"tốn công mớm prompt giải thích bối cảnh cho AI ngoài"*); chốt câu Hypothesis Problem sắc bén, đúng trọng tâm. |
| **2. Chọn 3 Solution Options** | Assistant | Hỗ trợ mở lại Solution Parking Lot của Day 17; brainstorm các hướng cơ chế Người – Máy; hỗ trợ dựng 3 câu kiểm tra khoảng cách (*Distance Checks*). | Ban đầu AI đề xuất các tính năng nghiêng về thay đổi giao diện (UI) hoặc màu sắc thay vì bản chất cơ chế phân chia quyền tự quyết (*Human–AI agency*). | Nhóm thống nhất giữ nguyên 70% Common Ground (bài học Gradient Descent); phân rõ phổ quyền lực: Option A (AI dẫn dắt phỏng vấn), Option B (User tự khám phá sơ đồ - cá nhân phụ trách), Option C (Co-pilot bóc tách tại chỗ). |
| **3. Human–AI Design Pass** | Assistant | Định hình bảng **Human–AI Decision Table** chuẩn format 5 câu hỏi trọng tâm của đề bài. | AI mặc định coi AI lúc nào cũng phải "Act" (hành động ngay) và hay bỏ quên điểm phục hồi (*Recovery*) khi AI đoán sai hoặc người học bối rối. | Xác định rõ cơ chế Act / Ask / Don't Act (Option B giữ trạng thái *Don't Act* tĩnh lặng, chỉ hiện đối chiếu khi click); bổ sung đầy đủ các nút phục hồi: Chẩn đoán lại, User Override (Option A), Đặt lại bản đồ & chế độ Danh sách phẳng (Option B), Reset slider (Option C). |
| **4. Build Micro-prototypes** | Claude Artifacts / Assistant | Hỗ trợ sinh mã nguồn cho các Claude Artifacts tương tác trực tuyến (Option A: `7H3kBwiWinyEqc4qwsrW9j`, Option B: `MH8uWoTmFY2CAVkGv67vmv`); xây dựng cấu trúc sơ đồ phả hệ cho Option B. | Nội dung toán học giải tích ban đầu AI sinh ra còn hàn lâm, bài ôn quá dài vượt xa tiêu chuẩn 1 phút của micro-refresher. | Tinh chỉnh nội dung trọng tâm vào ký hiệu $\frac{\partial L}{\partial w}$ trong công thức Gradient Descent; bổ sung nhãn rủi ro 85% ⚠️ và nút highlight đối chiếu công thức cho Option B; viết bộ Prototype Annotation chuẩn cho Facilitator. |
| **5. Chuẩn bị Kịch bản Test** | Assistant | Soạn thảo kịch bản lời mở đầu trung lập (*Neutral Briefing*) và gợi ý 5 tiêu chí quan sát hành vi (*Observation Focus*). | AI thường chèn các câu hỏi định hướng chủ quan hoặc mớm lời như *"Bạn thấy AI này có thông minh không?"*, *"Giao diện này có đẹp không?"*. | Cắt bỏ toàn bộ câu hỏi đánh giá cảm tính; tuân thủ nguyên tắc trung lập của The Mom Test — chỉ quan sát điểm click đầu tiên, thời gian dừng đọc, phản xạ phục hồi và sự đánh đổi giữa các cơ chế. |
| **6. Test & Tổng hợp Feedback** | Assistant | Hỗ trợ định dạng bảng Ma trận phản hồi 3 Tester và rà soát cấu trúc câu tuyên bố cải tiến *Group Next Change*. | AI có xu hướng kết luận thiên vị "giải pháp đã thành công vượt trội" hoặc "được chứng thực (validated)". | Tuyệt đối không dùng AI để bịa đặt dữ liệu test; ghi nhận trung thực 100% phản ứng của Tester 1; phân tích rõ hạn chế của Option B (dễ gây ngợp khi đang vội) để đưa ra quyết định: hợp nhất chẩn đoán của A vào thanh inline của C, chuyển bản đồ B về ôn tập cuối bài. |

---

## 2. Cam kết nguyên tắc của bài lab

- [x] **Không dùng AI để tạo quote hoặc bịa đặt dữ liệu thử nghiệm người dùng.**
- [x] **Không tuyên bố giải pháp đã được "validated" chỉ với 3 tester.**
- [x] **Bảo toàn tính liên tục từ Hypothesis Problem của Day 17 sang Day 18–19.**
- [x] **Nêu rõ sự đóng góp của cá nhân (Option B — Prerequisite Concept Radar) trong sản phẩm chung của nhóm.**
