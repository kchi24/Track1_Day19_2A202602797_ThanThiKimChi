# Track1_Day19_2A202602797

> **Dự án**: AI Tutor — Diagnostic Refresher (Khám phá Solution Space & Thử nghiệm Micro-Prototypes Human–AI)  
> **Mã học viên**: 2A202602797  
> **Case nghiên cứu**: Case A — AI Tutor: Diagnostic Refresher (Tiếp nối trực tiếp từ Day 17)  
> **Phân công cá nhân**: Chịu trách nhiệm chính **Option B (Prerequisite Concept Radar)**; đồng thời tham gia thiết kế khung dùng chung 70% context, chuẩn hóa prototype A/B/C và trực tiếp facilitate thử nghiệm với 1 tester ngoài nhóm.

---

## 1. Tóm tắt 6 Chặng triển khai

### Chặng 1 — Tổng hợp Evidence & Chốt Hypothesis Problem

#### 1. Evidence Huddle (Đối chiếu bằng chứng thực tế từ Day 17)
Nhóm đặt 3 Practice Notes cạnh nhau để tách biệt rõ giữa lời nói/hành vi thực tế của User và suy đoán của nhóm:

| Practice Note | User đã thực sự làm/nói gì? (Raw Quote / Hành vi) | Điều nhóm đang diễn giải (Interpretation) |
| :---: | :--- | :--- |
| **Note 1**<br>*(P1 – 00:33)* | *"không có đủ thời gian để mình ôn tập lại phải học thêm kiến thức mới nữa, cái kiến thức trước đấy mình không ôn tập thì cũng sẽ quên"* | Nguyên nhân chính là **áp lực tiến độ** (học dồn dập kiến thức mới) chứ không hẳn là việc không nhận ra mình hổng chỗ nào. |
| **Note 2**<br>*(P2)* | • *“Chia bài thành từng bước nhỏ… do quên kiến thức cũ hay chưa hiểu cách áp dụng kiến thức mới”* (00:08).<br>• Khi bí: mở tìm video, tài liệu trên mạng, hỏi bạn bè/giảng viên, tạm nghỉ vì *“càng cố khi đang quá căng thẳng thì mình càng khó tập trung”* (00:42).<br>• Hậu quả: *“áp lực và dễ nản”*, *“chậm so với kế hoạch”* (01:22). | User có ý thức tự phân tách nguyên nhân, nhưng khi bế tắc thì **hành vi tra cứu rất phân tán** (tự mò video, hỏi nhiều nguồn). Việc không rõ mình kẹt ở đâu gây căng thẳng tâm lý và làm đứt gãy mạch học. |
| **Note 3**<br>*(Interview B1)* | • *“Ôn nhiều thì dễ bị quá tải, khiến mình không nhớ được hết kiến thức.”*<br>• Khi đọc slide gặp từ khóa khó, B1 dùng ChatGPT: *“mình chỉ không hiểu một vài phần thôi, chứ không thể nào là không hiểu cả bài được.”*<br>• *“Con AI không hiểu được bối cảnh mình đang học hay tình huống của mình nên trả lời khá chung chung. Mình phải mất công lọc thông tin và đặt câu lệnh (prompt) khá kỹ để nó hiểu, việc này rất tốn thời gian.”*<br>• Chatbot hiệu quả hơn tra cứu Google từ quá nhiều nguồn. | Việc cần trợ giúp **chỉ tập trung vào một vài phần cụ thể** trong bài chứ không phải cả bài. Học viên đã chủ động dùng AI ngoài (ChatGPT), nhưng việc **tự chuyển ngữ cảnh, mớm prompt và lọc câu trả lời làm phát sinh nhiều công sức**. Việc ôn quá nhiều và chi tiết cũng gây quá tải nhận thức. |

* **Thảo luận nhanh**:
  * *Hành vi lặp lại*: Tra cứu phân tán hoặc dùng ChatGPT bên ngoài, nhưng gặp rào cản lớn: mất công viết prompt cung cấp bối cảnh và lọc câu trả lời chung chung.
  * *Evidence bất ngờ*: Học viên sợ bị **quá tải kiến thức** (*"chỉ không hiểu một vài phần chứ không thể không hiểu cả bài"*, *"ôn nhiều dễ bị quá tải"*). Họ không cần một bài giảng dài mà cần tháo gỡ đúng điểm kẹt vi mô trong dưới 1 phút.
  * *Điều chưa chứng minh*: Cơ chế nào (hỏi 2 câu Socratic, xem sơ đồ Radar, hay bóc tách Inline) giúp gỡ kẹt tức thời mà không đòi hỏi học viên phải nỗ lực viết prompt?

#### 2. Chốt Hypothesis Problem (Chuẩn cấu trúc 5 thành tố)
> **Khi** đang tự học một bài học hoặc khái niệm chuyên sâu mới, **học viên tự học trực tuyến** gặp khó khăn trong việc **nhanh chóng gỡ điểm nghẽn cục bộ để duy trì mạch bài học** vì **không tự cô lập được phần kiến thức nền tảng nào đang bị thiếu (và ngại bị quá tải nếu phải ôn lại toàn bộ, cũng như tốn quá nhiều công sức giải thích bối cảnh cho các công cụ tra cứu bên ngoài)**, dẫn đến **mất nhiều thời gian loay hoay lọc thông tin, phát sinh cảm giác mệt mỏi, áp lực tiến độ và dễ nản lòng bỏ dở khóa học**.

---

### Chặng 2 — Chọn ba Solution Options (20 phút)

#### 1. Mở lại Solution Parking Lot (từ Day 17)
Nhóm đọc lại 5 hướng đã park ở Day 17 và kế thừa trực tiếp:
1. *Chatbot chẩn đoán lỗ hổng và giải thích 1-1 ngay tại chỗ* (AI) $\rightarrow$ Nâng cấp thành **Option A**: Socratic Diagnostic Chat.
2. *Bài mini-test đầu mỗi chương để kiểm tra kiến thức cũ* (Không AI).
3. *Knowledge graph (bản đồ khái niệm) đính kèm mỗi bài* (Không AI) $\rightarrow$ Nâng cấp thành **Option B**: Prerequisite Concept Radar.
4. *Highlight thuật ngữ/khái niệm khó, hiện popup định nghĩa ngắn (tooltip)* (Không AI) $\rightarrow$ Nâng cấp thành **Option C**: Inline Scaffolding Co-pilot.
5. *Nút "Trợ giúp" gợi ý hỏi bạn bè/mentor đang online* (Không AI).

#### 2. Chọn ba cách giải (Comparison Contract)

**Những thứ PHẢI GIỮ NGUYÊN (70% Common Ground):**
| Thành phần | Quyết định chung cho A / B / C |
| :--- | :--- |
| **Target user** | Học viên Product Management / Data Science tự học trực tuyến các khóa về AI/Data. |
| **Situation** | Đang tự học bài mới qua slide, gặp các thuật ngữ chuyên ngành lạ/nền tảng và bị khựng lại vì hổng kiến thức nền. |
| **Task** | Nhanh chóng xác định phần kiến thức nền tảng đang thiếu hụt và gỡ kẹt để tiếp tục học. |
| **Desired outcome** | Hiểu được mắt xích kiến thức bị thiếu trong dưới 1 phút mà không bị quá tải hay đứt mạch học. |
| **Content/data fixture** | Bài giảng: *"Day 10 - Data Pipeline & Observability"*. Điểm kẹt: Các thuật ngữ chuyên môn như *"agent RAG"*, *"vector store"*, *"data cascades"*, *"observability"* trên slide. |

**Những thứ ĐƯỢC PHÉP KHÁC (Solution Mechanisms):**
| Thành phần | Option A<br>**Socratic Diagnostic Chat** | Option B *(Cá nhân phụ trách)*<br>**Prerequisite Concept Radar** | Option C<br>**Inline Scaffolding Co-pilot** |
| :--- | :--- | :--- | :--- |
| **Solution mechanism** | **Turn-based Socratic Interview**: AI chủ động hỏi 2 câu ngắn để chẩn đoán và tóm tắt cấp tốc. | **Visual Map Exploration**: Hệ thống trực quan hóa cây phả hệ kiến thức; User tự nhìn bản đồ để định vị chỗ kẹt. | **Inline Deconstruction**: Bóc tách tức thì tại chỗ thuật ngữ/câu phức tạp thành các tầng kiến thức ngầm định qua thanh trượt. |
| **User làm gì?** | Bấm *"Tôi chưa hiểu"* $\rightarrow$ Chọn đáp án cho 2 câu hỏi $\rightarrow$ Đọc kết luận. | Duyệt cây kiến thức (hoặc danh sách phẳng) $\rightarrow$ Bấm vào node nghi ngờ $\rightarrow$ Đọc đối chiếu lý thuyết cũ/mới. | Bấm vào thuật ngữ/câu gây bế tắc $\rightarrow$ Kéo thanh trượt độ sâu (1, 2, 3) $\rightarrow$ Làm thử câu test mini. |
| **AI làm gì?** | Phân tích câu trả lời, suy luận xác suất lỗ hổng (88%) và sinh thẻ ôn tập cấp tốc. | Phân loại độ rủi ro của các node (*Nền tảng* vs *Vùng dễ nhầm lẫn 85%*) và hiển thị giải thích liên hệ. | Phân giải cấu trúc thuật ngữ theo thời gian thực tương ứng với mức độ sâu người dùng chọn. |
| **Trigger** | Nút *"Tôi chưa hiểu đoạn này"* bên cạnh slide. | Tab/Menu *"Bản đồ kiến thức tiên quyết"* ở cạnh bài. | Thao tác bấm/chọn trực tiếp vào các thuật ngữ lạ (*RAG*, *vector store*). |
| **Trade-off chính** | Được dẫn dắt chính xác, nhưng phải nhường quyền điều khiển cho AI và tạm tách khỏi bài đọc. | Có bức tranh tổng quan, nhưng đòi hỏi nỗ lực nhận thức cao (dễ ngợp nếu không biết bấm node nào). | Giữ mạch đọc hoàn hảo, nhưng giả định user đã khoanh vùng được thuật ngữ nào gây bối rối. |

#### Distance Check (Ba câu kiểm tra khoảng cách bắt buộc):
* **A khác B vì:** Option A đặt quyền dẫn dắt vào tay **AI** (AI chủ động đặt câu hỏi chẩn đoán để tìm lỗ hổng cho user), trong khi Option B đặt quyền chủ động hoàn toàn vào tay **User** (User tự nhìn bản đồ phả hệ kiến thức và tự quyết định xem nhánh nào).
* **B khác C vì:** Option B tách kiến thức ra thành một **sơ đồ phả hệ vĩ mô độc lập** (Macro Graph), trong khi Option C **can thiệp vi mô ngay tại dòng chữ/thuật ngữ** (Micro Inline) với thanh trượt độ sâu tùy biến.
* **A khác C vì:** Option A là quá trình **hội thoại tương tác hai chiều từng bước** (Turn-based Socratic) tập trung vào việc "bắt bệnh", trong khi Option C là công cụ **co-pilot đồng sáng tạo tại chỗ** (On-demand Deconstruction) tập trung vào việc "mổ xẻ cấu trúc" mà không làm gián đoạn dòng đọc.

#### Spectrum Human–AI:
```
[OPTION B: User-led]           [OPTION C: Co-pilot]          [OPTION A: AI-led Probe]
User tự duyệt bản đồ    ──►    User chọn độ sâu phân rã  ──►   AI đặt câu hỏi chẩn đoán
& tự định vị lỗ hổng           & AI mổ xẻ thuật ngữ            & User duyệt kết luận
```

#### GATE 2 — Meaningful options:
- [x] Cả 3 options cùng chung target user, situation, task, desired outcome và content fixture.
- [x] Khác nhau rõ rệt ở cơ chế tương tác và mức độ phân chia quyền tự quyết giữa User và AI.
- [x] Không có option nào là "vật tế thần" (cả 3 đều chạy test-ready trên micro-prototype).

---

### Chặng 3 — Human–AI Design Pass (30 phút)

Nhóm chi tiết hóa 4 trụ cột tương tác cho cả 3 Option trong **Human–AI Decision Table**:

| Human–AI decision | Option A<br>**Socratic Diagnostic Chat** | Option B *(Cá nhân phụ trách)*<br>**Prerequisite Concept Radar** | Option C<br>**Inline Scaffolding Co-pilot** |
| :--- | :--- | :--- | :--- |
| **User làm gì? AI làm gì?** | • **User**: Bấm *"Tôi chưa hiểu"* $\rightarrow$ Chọn đáp án cho 2 câu hỏi $\rightarrow$ Đọc kết quả chẩn đoán và bài ôn 1 phút.<br>• **AI**: Đặt 2 câu hỏi gợi mở $\rightarrow$ Phân tích lựa chọn $\rightarrow$ Sinh thẻ ôn tập cấp tốc đúng lỗ hổng phát hiện. | • **User**: Duyệt cây phả hệ kiến thức $\rightarrow$ Bấm vào node nghi ngờ $\rightarrow$ Đọc thẻ đối chiếu.<br>• **AI**: Trực quan hóa cấu trúc tiên quyết $\rightarrow$ Hiển thị tóm tắt và liên hệ với bài mới khi được click. | • **User**: Bấm vào ký hiệu công thức gây bế tắc $\rightarrow$ Kéo thanh trượt điều chỉnh độ sâu (Mức 1, 2, 3).<br>• **AI**: Bóc tách cấu trúc công thức tức thời $\rightarrow$ Sinh nội dung giải phẫu tương ứng với độ sâu được chọn. |
| **AI Act / Ask / Don't Act? Vì sao?** | **Ask $\rightarrow$ Act**:<br>AI chọn **Ask** (hỏi 2 câu) trước để xác định chính xác chỗ nghẽn, sau đó mới **Act** (sinh bài ôn tập). Vì nếu Act ngay (tự giải thích dài dòng) sẽ gây quá tải nhận thức như phản ánh ở Note 1 & Note 3. | **Don't Act (trừ khi User yêu cầu)**:<br>AI giữ trạng thái tĩnh, chờ đợi người dùng click. Vì User cần không gian tự do định vị lỗ hổng (metacognition) mà không bị AI can thiệp làm phiền. | **Act on Request (Co-pilot)**:<br>AI phản ứng tức thì theo từng thao tác kéo trượt của User. Vì User muốn kiểm soát độ sâu bóc tách trực tiếp tại chỗ mà không bị gián đoạn mạch đọc. |
| **User hiểu capability/limit bằng gì?** | • **Capability**: Thông báo rõ ràng trước khi chat: *"AI hỏi 2 câu ngắn (30s) để tìm lỗ hổng"*, tập trung gỡ đúng 1 điểm kẹt.<br>• **Limit**: AI không giải bài hộ hay thay thế bài giảng chính; giới hạn trong mini-refresher 1 phút. | • **Capability**: Nhìn thấy toàn bộ phạm vi các mắt xích tiên quyết (Cấp 3 $\rightarrow$ Đại học) trên bản đồ.<br>• **Limit**: Bản đồ chỉ cung cấp đối chiếu, không tự biết người học yếu ở đâu nếu người học không tự click. | • **Capability**: 3 nấc trên thanh trượt (Nhắc nhanh 30s $\leftrightarrow$ So sánh cũ/mới $\leftrightarrow$ Ví dụ chi tiết) thể hiện rõ biên độ hỗ trợ.<br>• **Limit**: Chỉ bóc tách ký hiệu công thức cụ thể, không giải thích thay văn bản lý thuyết chung. |
| **Evidence/uncertainty được thể hiện thế nào?** | Thể hiện bằng chỉ số xác suất và bằng chứng rõ ràng: *"Phát hiện lỗ hổng: Khái niệm Đạo hàm riêng (Độ tin cậy: 88%)"* dựa trên 2 câu trả lời vừa chọn. | Gắn nhãn trạng thái rủi ro trực quan trên các node: *[Nền tảng căn bản]* vs *[Vùng dễ nhầm lẫn nhất 85%]*, giúp user biết nhánh nào có nguy cơ cao nhất. | Mã hóa màu sắc tương phản: Ký hiệu mới (xanh lá) phân rã thành các phép toán quen thuộc (cam/xanh lam) kèm nhãn "Phân rã Mức 1/2/3". |
| **User kiểm soát và recovery thế nào?** | • **Kiểm soát**: Tự do chọn đáp án, bấm quay lại bài học bất kỳ lúc nào.<br>• **Recovery**: Có sẵn nút `↺ Chẩn đoán lại từ đầu` và nút `AI đoán sai? Tôi tự chọn bài ôn` (User Override để tự chọn chủ đề). | • **Kiểm soát**: Toàn quyền click chọn hoặc bỏ chọn các node trên cây kiến thức.<br>• **Recovery**: Nút `↺ Đặt lại bản đồ` giúp xóa các lựa chọn đã click; hiển thị danh sách phẳng nếu user không quen nhìn sơ đồ. | • **Kiểm soát**: Thanh trượt kéo thả tự do để tăng/giảm độ sâu; nút mini-quiz để tự kiểm tra.<br>• **Recovery**: Nút `Trở về mặc định` để đóng phần phân rã và trả lại giao diện nguyên bản của công thức. |

---

### Chặng 4 — Build ba micro-prototype (80 phút)

#### 1. Scope chuẩn (Luồng 3 trạng thái & 70% Common Context)
Mỗi option được thiết kế tinh gọn theo đúng luồng 3 bước quanh điểm tương tác then chốt (*Critical Interaction*):
```
COMMON CONTEXT (70% bài giảng chung)
                 ↓
CRITICAL INTERACTION (Điểm can thiệp riêng của A / B / C)
                 ↓
RESULT / USER DECISION (Kết quả gỡ kẹt & Quyền tự quyết / Recovery)
```

* **70% dùng chung (Common Ground)**:
  * *Context screen*: Giao diện bài học trực tuyến khóa *Nhập môn Machine Learning · Bài 4*.
  * *Content/data fixture*: Bài giảng *"Thuật toán Gradient Descent & Quy tắc Chuỗi (Chain Rule)"*.
  * *Critical point*: Công thức cập nhật trọng số gây bế tắc:
    $$w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w}$$
  * *Task & Desired outcome*: Tìm ra phần kiến thức nền tảng đang thiếu hụt và gỡ kẹt trong dưới 1 phút.
* **30% khác biệt ở Critical Interaction**:
  * **Option A**: Nút *"Tôi chưa hiểu đoạn này"* kích hoạt Socratic Diagnostic Chat 2 bước.
  * **Option B *(Cá nhân phụ trách)*: Bản đồ Concept Radar trực quan hóa các mắt xích kiến thức (Cấp 3 $\rightarrow$ Đại học) kèm chế độ Danh sách phẳng.
  * **Option C**: Inline Scaffolding bóc tách công thức tại chỗ với thanh trượt 3 mức độ sâu.

---

#### 2. Definition of Testable (Tiêu chí sẵn sàng kiểm thử)
- [x] **Tự chủ tác vụ**: Tester có thể tự mở link trực tuyến tại [`prototype-link.md`](prototype-link.md) và tự do thao tác trên cả 3 option mà không cần cài đặt.
- [x] **Khởi đầu nhất quán**: Cả 3 option đều bắt đầu từ cùng một bài giảng và công thức toán thực tế.
- [x] **Tự giải thích (Self-explanatory)**: Giao diện và các nút bấm rõ ràng, không cần facilitator dẫn dắt hay thuyết minh hộ.
- [x] **Dữ liệu thật (Realistic Canned Output)**: Kiến thức toán học, câu hỏi chẩn đoán và nội dung ôn tập chính xác về mặt giải tích, đủ thật để tester ra quyết định.
- [x] **Điểm phục hồi quyền kiểm soát (Control & Recovery)**: Có đủ nút `↺ Reset`, `User Override` (tự chọn bài ôn), chuyển đổi chế độ xem (Tree/List) và `Trở về mặc định`.
- [x] **Đường quay về context ban đầu**: Luôn có nút quay lại đọc tiếp bài học sau khi gỡ rối xong.


---

#### 4. Prototype Annotation (Ghi chú kịch bản quan sát cho Facilitator)

> *Đặt ngoài frame kiểm thử, chỉ dành cho người điều phối quan sát:*

```
[OPTION A: Socratic Diagnostic Chat]
• We expect the tester to: Bấm nút "Tôi chưa hiểu đoạn này" bên cạnh công thức, đọc 2 câu hỏi gợi mở của AI và bấm chọn đáp án, xem kết luận chẩn đoán và bấm quay lại bài học hoặc thử override.
• Watch for: Tester có đọc kỹ 2 câu hỏi chẩn đoán không hay bấm bừa? Có nhận ra độ tin cậy 88% không? Có để ý thấy nút "AI đoán sai? Tôi tự chọn bài ôn" không?
• Do not explain: Không giải thích công thức toán hộ tester; không chỉ trước nút "Tôi chưa hiểu"; không giải thích câu hỏi chẩn đoán nghĩa là gì.
```

```
[OPTION B: Prerequisite Concept Radar - Cá nhân phụ trách]
• We expect the tester to: Mở tab Option B, nhìn vào cây sơ đồ phả hệ kiến thức (hoặc đổi sang dạng danh sách phẳng), tự click vào node được cảnh báo hoặc các node khác, đọc phần đối chiếu liên hệ với bài mới và bấm nút đối chiếu công thức.
• Watch for: Tester bị thu hút bởi node nào trước tiên? Có bị ngợp trước các mũi tên phân cấp không? Có thử bấm đổi giữa Sơ đồ và Danh sách không? Có hiểu tại sao node Đạo hàm riêng lại có nhãn "Vùng dễ nhầm lẫn nhất 85% " không?
• Do not explain: Không chỉ tester bấm vào ô màu cam; không giải thích cấu trúc cây phả hệ; không đọc hộ phần đối chiếu.
```

```
[OPTION C: Inline Scaffolding Co-pilot]
• We expect the tester to: Mở tab Option C, click vào ký hiệu ∂L/∂w hoặc các thành phần khác của công thức, kéo thanh trượt độ sâu qua các mức 1, 2, 3 và thử làm câu trắc nghiệm nhanh.
• Watch for: Tester dừng lại ở mức độ sâu nào lâu nhất (Mức 1, 2 hay 3)? Có phát hiện ra câu hỏi mini-quiz không? Thao tác kéo trượt có tự nhiên không?
• Do not explain: Không hướng dẫn tester phải kéo slider; không nhắc tester làm quiz; không giải thích ý nghĩa các mức 1, 2, 3.
```
---

### Chặng 5 — Chuẩn bị Test Prompt & Tiêu chí quan sát (15 phút)

#### 1. Chốt Context và Outcome Task
* **Relevant Context (Câu hỏi sàng lọc ngữ cảnh — tối đa 2 phút trước khi test)**:
  > *“Gần đây bạn có từng đang tự học một bài học trực tuyến mới (như Machine Learning, Toán giải tích hay Lập trình) mà gặp một công thức toán hoặc khái niệm phức tạp khiến bạn nhận ra mình đã quên một phần kiến thức nền tảng từ trước không?”*  
  *(Lưu ý: Nếu tester chưa từng gặp bối cảnh này, buổi test vẫn hữu ích để phát hiện interaction breakdown nhưng nhóm không dùng để đưa ra kết luận value claim mạnh).*

* **Outcome Task (Tập trung vào kết quả cần đạt, tuyệt đối không chỉ dẫn nút cần bấm)**:
  > *“Trong tình huống này, hãy dùng từng phương án (A, B, C) để **xác định xem ký hiệu $\frac{\partial L}{\partial w}$ trong công thức Gradient Descent đòi hỏi kiến thức nền tảng gì từ trước và vượt qua chỗ bế tắc đó để tiếp tục bài học**.”*

* **Observation Focus (5 tiêu chí quan sát hành vi cốt lõi)**:
  1. **First action (Thao tác đầu tiên)**: Khi vừa nhìn vào màn hình bài học và công thức, tester click vào đâu trước tiên (bấm nút chat ở A, nhìn vào cây sơ đồ ở B, hay click vào ký hiệu ở C)?
  2. **Hesitation (Điểm ngập ngừng / Bối rối)**: Họ khựng lại ở đâu lâu nhất (đắn đo chọn đáp án chẩn đoán ở A, bị ngợp trước các mũi tên sơ đồ ở B, hay loay hoay tìm thanh trượt ở C)?
  3. **Evidence read / ignored (Bằng chứng được đọc hay bị bỏ qua)**: Họ có nhận ra chỉ số tin cậy 88% ở A không? Có chú ý đến nhãn cảnh báo *"Vùng dễ nhầm lẫn nhất 85% "* ở B không? Có đọc tầng so sánh cũ/mới ở C không?
  4. **Correction / Recovery (Phản xạ sửa sai và lấy lại quyền kiểm soát)**: Khi nhận được kết quả từ hệ thống, tester quay lại bài học ngay hay tìm cách sửa? Họ có nhận ra nút `↺ Chẩn đoán lại`, `User Override` (A), `↺ Đặt lại bản đồ` (B), hay `Trở về mặc định` (C)?
  5. **Option được chọn & Trade-off (Đánh đổi thực tế của người dùng)**: Họ chấp nhận đánh đổi giữa sự tiện lợi không gián đoạn mạch đọc (Inline C) và nhu cầu được "bác sĩ bắt đúng bệnh" khi hoàn toàn bế tắc (Socratic A) như thế nào?

---

#### 2. Bộ Luật Facilitation (6 Nguyên tắc thép & 3 Câu cứu hộ)
* **6 Nguyên tắc điều phối**:
  1. **Tester tự điều khiển**: Tester toàn quyền cầm chuột và thao tác trên prototype; facilitator không chạm vào máy.
  2. **Nhất quán một task**: Dùng chính xác cùng một Outcome Task cho cả 3 option A, B, C.
  3. **Không giải thích hộ**: Không giải thích ý nghĩa công thức toán, không chỉ trước icon hay nút bấm.
  4. **Không lấp im lặng**: Chấp nhận khoảng lặng khi tester đang đọc tài liệu hoặc suy nghĩ.
  5. **Không hỏi câu hỏi khen chê cảm tính**: Tuyệt đối không hỏi *“Bạn có thích tính năng này không?”* hay *“Bạn thấy cái nào đẹp hơn?”*.
  6. **Phản hồi bằng câu hỏi ngược**: Khi tester hỏi *“Cái này dùng thế nào?”*, facilitator hỏi lại: *“Theo bạn, nó nên hoạt động như thế nào?”*.

* **Ba câu cứu hộ chuẩn The Mom Test (Dùng khi tester bị kẹt hoặc im lặng quá lâu)**:
  * **Câu 1**: *“Bạn cứ nói to suy nghĩ trong đầu của mình nhé.”*
  * **Câu 2**: *“Bạn sẽ làm gì tiếp theo?”*
  * **Câu 3**: *“Theo bạn, nó nên hoạt động như thế nào?”*

---

### Chặng 6 — Kiểm thử chéo & Tổng hợp Next Change (20 phút)

#### 1. Ma trận Tổng hợp 3 Feedback Notes của Nhóm
| Nội dung | Feedback 1<br>*(Tester 1: SV CNTT năm 3)* | Feedback 2<br>*(Tester 2: Chuyển ngành Data)* | Feedback 3<br>*(Tester 3: Học viên Python online)* | Pattern hoặc khác biệt |
| :--- | :--- | :--- | :--- | :--- |
| **First action** | Nhìn lướt công thức 15s $\rightarrow$ Bấm nút chẩn đoán ở Option A; ở Option B bấm ngay vào nút cam cảnh báo. | Bấm vào nút chat ngay khi thấy công thức dài; ở Option C bấm trực tiếp vào ký hiệu $\partial$ đầu tiên. | Dừng lại đọc bài 30s trước khi bấm; ở Option C thử kéo ngay thanh trượt sang Mức 2. | **Pattern**: Cả 3 tester đều phản xạ bấm vào các điểm có gợi ý thị giác mạnh nhất (nút cam cảnh báo, ký hiệu lạ) thay vì đọc tuần tự. |
| **Breakdown chính** | Bị ngợp trước các mũi tên sơ đồ của Option B nếu không có nút cảnh báo màu cam; phân vân ở câu hỏi 2 của Option A. | Thừa nhận không đủ kiên nhẫn đọc sơ đồ Option B khi đang làm bài tập gấp; nhận xét Option C Mức 3 hơi dài. | Lúng túng bấm nhầm nhánh không liên quan ở Option B; ban đầu sợ bị AI "dạy đời" bài dài ở Option A. | **Pattern**: Option B gây ra **Breakdown nhận thức lớn nhất** (quá tải thông tin, ngợp trước cây phả hệ khi đang cần gỡ kẹt nhanh trong 1 phút). |
| **Cách lấy lại control** | Thử nút `↺ Đặt lại bản đồ` ở B; kéo thanh trượt qua lại giữa Mức 1 $\leftrightarrow$ 2 $\leftrightarrow$ 3 ở C; làm câu quiz để tự kiểm tra. | Sử dụng nút `Trở về mặc định` ở C để quay lại bài đọc; không bấm nút override của A vì thấy AI đoán trúng. | Chuyển sang xem danh sách phẳng ở B; kéo Mức 2 ở C rồi đóng panel để tiếp tục đọc bài. | **Pattern**: Tester chủ động dùng các cơ chế phục hồi (slider, nút reset, đóng panel) để bảo toàn nhịp học cá nhân. |
| **Option được chọn** | **Option C (cho học hàng ngày)** kết hợp **Option A (khi hoàn toàn bế tắc)**. | **Option C** kết hợp **Option A**. | **Option C** (tiện nhất, không muốn mở cửa sổ chat phụ). | **Pattern**: **100% Tester ưu tiên Option C** vì tính liền mạch, nhưng đều thừa nhận **vẫn cần Option A** làm phao cứu sinh khi mất gốc hoàn toàn. |
| **Trade-off** | Đánh đổi giữa việc *"giữ mạch đọc tại chỗ"* (C) và *"được dẫn dắt khi không biết mình hổng cái gì"* (A). | Đánh đổi giữa tốc độ tra cứu tức thời trong 30s (C) và bức tranh phả hệ tổng thể nhưng tốn thời gian đọc (B). | Đánh đổi giữa cảm giác tự chủ không bị AI can thiệp (C) và việc phải tự mò ký hiệu gây nghẽn. | **Pattern**: Đánh đổi cốt lõi là **Mạch đọc liền mạch (Continuity)** đối đầu với **Độ sâu chẩn đoán (Diagnostic Depth)**. |

#### 2. Group Next Change Statement (Tuyên bố cải tiến nhóm)
Tuân thủ nghiêm ngặt quy định: **Không tuyên bố solution đã validated**, nhóm đúc kết tuyên bố lặp chuẩn mực:

> **“Với Hypothesis Problem này (học viên bế tắc cục bộ, ngại quá tải khi ôn lại cả bài và tốn công giải thích bối cảnh cho AI ngoài), chúng tôi đã thử ba cách giải (A, B, C).**  
> **Tester đã có xu hướng ưu tiên sự liền mạch của Option C (Inline Scaffolding) để không làm đứt gãy dòng đọc bài, nhưng vẫn cần cơ chế gợi mở và khoanh vùng lỗ hổng tự động của Option A khi hoàn toàn bế tắc.**  
>  
> **Vì vậy, ở iteration tiếp theo, chúng tôi sẽ:**  
> 1. **Hợp nhất cơ chế chẩn đoán nhanh của Option A trực tiếp vào thanh công cụ Inline của Option C**: Khi người dùng bôi đen một vùng công thức mà không rõ mình vướng ký hiệu nào, một nút nhỏ *"Chẩn đoán nhanh 2 câu"* sẽ xuất hiện ngay tại chỗ thay vì mở khung chat riêng biệt.  
> 2. **Chuyển Option B (Bản đồ khái niệm) thành tính năng hậu kỳ**: Đặt Bản đồ kiến thức ở cuối bài học dưới dạng *"Tóm tắt các mắt xích đã học"* phục vụ ôn tập, thay vì hiển thị song song gây nhiễu lúc đang đọc bài.  
> 3. **Bổ sung tính năng Kiểm tra củng cố (Micro-Check)**: Mở rộng tính năng câu hỏi trắc nghiệm mini 1-click sau mỗi lần bóc tách kiến thức để người học tự tin rằng mình đã thực sự hiểu trước khi quay lại bài giảng chính.”

* **Evidence dẫn tới quyết định này**: Cả 3 Tester đều ưu tiên Option C vì không ngắt mạch đọc nhưng đều thừa nhận điểm mù khi không biết mình kẹt ở đâu; Option B gây ngợp khi đang đọc dở nhưng phù hợp để tổng kết.
* **Still Unproven**: Chưa thể kết luận học viên có thực sự nhớ lâu hơn và tự giải bài tập mới được hay không nếu chỉ thử nghiệm trong 25 phút.

#### GATE 5 — Learning, not Praise Confirmation:
- [x] Nhóm có đủ 3 Feedback Notes độc lập từ 3 tester khác nhau ngoài nhóm.
- [x] Chỉ ra được các Pattern hành vi và sự đánh đổi (Trade-off) cụ thể, không dùng lời khen cảm tính.
- [x] Chốt một Group Next Change rõ ràng, có căn cứ từ bằng chứng thực tế.
- [x] Nêu rõ điều vẫn chưa được chứng minh (Still Unproven).

---

