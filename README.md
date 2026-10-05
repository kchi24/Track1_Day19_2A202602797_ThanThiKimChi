# Báo Cáo Thực Hành Cá Nhân — Track 1 Day 18–19 Lab
## AI Tutor: Diagnostic Refresher (Khám phá Solution Space & Thử nghiệm Micro-Prototypes Human–AI)

---

## 1. Thông tin cá nhân & Đội ngũ

| Mục | Thông tin chi tiết |
| :--- | :--- |
| **MHV** | 2A202602797 |
| **Họ tên** | Thân Thị Kim Chi |
| **Tên nhóm** | Nhóm HKT |
| **Thành viên** | Ngô Lê Thủy Tiên, Thân Thị Kim Chi, Nguyễn Khánh Linh |
| **Case đã chọn** | Case A — AI Tutor: Diagnostic Refresher |

* **Phân công trách nhiệm cá nhân**:
  * **Thân Thị Kim Chi (2A202602797 — Chủ Repository)**: Chịu trách nhiệm chính xây dựng **Option B (Prerequisite Concept Radar)**; đồng điều phối xây dựng 70% bối cảnh chung; trực tiếp điều phối (facilitate) Phiên thử nghiệm 1 với Tester ngoài nhóm (Nguyễn Thị Hồng Nhung).
  * **Ngô Lê Thủy Tiên**: Chịu trách nhiệm chính xây dựng **Option A (Socratic Diagnostic Chat)**; tham gia xây dựng kịch bản câu hỏi chẩn đoán và trực tiếp điều phối Phiên thử nghiệm 2.
  * **Nguyễn Khánh Linh**: Chịu trách nhiệm chính xây dựng **Option C (Inline Scaffolding Co-pilot)**; tham gia thiết kế thanh trượt độ sâu phân rã kiến thức và trực tiếp điều phối Phiên thử nghiệm 3.

---

## 2. Hypothesis Problem (Giả thuyết vấn đề)

### 2.1. Dấu vết thực chứng kế thừa từ Day 17 (Evidence Continuity)
Nhóm đối chiếu 3 bản ghi chép phỏng vấn thực tế từ Day 17 để tách biệt rõ rệt giữa lời nói/hành vi thật của người học và phỏng đoán chủ quan:

| Practice Note | Lời nói / Hành vi thực tế của User (Raw Quote / Action) | Nhóm diễn giải (Interpretation) |
| :---: | :--- | :--- |
| **Note 1**<br>*(P1 – 00:33)* | *“Không có đủ thời gian để mình ôn tập lại phải học thêm kiến thức mới nữa, cái kiến thức trước đấy mình không ôn tập thì cũng sẽ quên.”* | Nguyên nhân gốc rễ là **áp lực tiến độ** (bị dồn dập bài mới liên tục), khiến người học ngại phải học lại cả một khối kiến thức cũ. |
| **Note 2**<br>*(P2)* | • *“Chia bài thành từng bước nhỏ… do quên kiến thức cũ hay chưa hiểu cách áp dụng kiến thức mới”* (00:08).<br>• Khi bí: Mở video, tìm tài liệu trên mạng, hỏi bạn bè, tạm nghỉ vì *“càng cố khi đang quá căng thẳng thì mình càng khó tập trung”* (00:42).<br>• Hậu quả: *“Áp lực và dễ nản”*, *“chậm so với kế hoạch”* (01:22). | Người học có ý thức tự phân tách nguyên nhân, nhưng khi bế tắc thì **hành vi tra cứu rất phân tán**. Việc không rõ mình kẹt ở đâu gây căng thẳng tâm lý và làm đứt gãy nhịp học. |
| **Note 3**<br>*(Interview B1)* | • *“Ôn nhiều thì dễ bị quá tải, khiến mình không nhớ được hết kiến thức.”*<br>• Khi gặp từ khóa khó, B1 dùng ChatGPT: *“Mình chỉ không hiểu một vài phần thôi, chứ không thể nào là không hiểu cả bài được.”*<br>• *“Con AI không hiểu được bối cảnh mình đang học nên trả lời khá chung chung. Mình phải mất công lọc thông tin và viết prompt khá kỹ để nó hiểu, việc này rất tốn thời gian.”* | Nhu cầu trợ giúp **chỉ tập trung vào một vài mắt xích cụ thể** trên slide. Dùng AI ngoài (ChatGPT) giải quyết được phần nào nhưng phát sinh ma sát: **tốn công mớm prompt giải thích ngữ cảnh và lọc câu trả lời lan man**. |

* **Quy luật lặp lại**: Người học sợ bị **quá tải nhận thức** (*"chỉ không hiểu một vài phần chứ không phải cả bài"*, *"ôn nhiều dễ quá tải"*). Họ không cần một bài giảng dài mà cần tháo gỡ đúng điểm kẹt vi mô trong dưới 1 phút.
* **Cổng 1 Checklist (Evidence Continuity)**:
  - [x] Hypothesis Problem gắn kết chặt chẽ với dữ kiện thực chứng từ 3 Practice Notes của Day 17.
  - [x] Chỉ rõ ẩn số chưa biết: Cơ chế tương tác nào (Hỏi 2 câu Socratic, Xem sơ đồ Radar, hay Bóc tách Inline) giúp gỡ kẹt tức thời mà không bắt người học phải nỗ lực mớm prompt?

### 2.2. Câu phát biểu Giả thuyết vấn đề (Chuẩn 5 thành tố)
> **Khi** đang tự học một bài học hoặc khái niệm chuyên sâu mới qua slide bài giảng, **học viên tự học trực tuyến (PM / Data Science)** gặp khó khăn trong việc **nhanh chóng gỡ điểm nghẽn cục bộ để duy trì mạch bài học** vì **không tự cô lập được phần kiến thức nền tảng nào đang bị thiếu (và ngại bị quá tải nếu phải ôn lại toàn bộ, cũng như tốn quá nhiều công sức giải thích bối cảnh cho các công cụ tra cứu bên ngoài)**, dẫn đến **mất nhiều thời gian loay hoay lọc thông tin, phát sinh cảm giác mệt mỏi, áp lực tiến độ và dễ nản lòng bỏ dở khóa học**.

---

## 3. Three Solution Options (Ba phương án giải pháp)

### 3.1. 70% Ngữ cảnh dùng chung (Comparison Contract)
Để đảm bảo so sánh công bằng và khoa học giữa 3 phương án (Cổng 2: Meaningful Options), cả 3 nguyên mẫu dùng chung 70% bối cảnh:
* **Target User**: Học viên Product Management / Data Science tự học trực tuyến các môn chuyên ngành AI/Data.
* **Situation**: Đang tự học bài giảng mới qua slide, bắt gặp các thuật ngữ chuyên môn lạ/nền tảng và bị khựng lại vì hổng kiến thức nền.
* **Task**: Nhanh chóng xác định phần kiến thức nền tảng đang thiếu hụt và gỡ kẹt để tiếp tục học.
* **Desired Outcome**: Hiểu được mắt xích kiến thức bị thiếu trong dưới 1 phút mà không bị quá tải hay đứt mạch học.
* **Content / Data Fixture**: Slide bài giảng *"Day 10 - Data Pipeline & Observability"*. Điểm kẹt: Các thuật ngữ *"agent RAG"*, *"vector store"*, *"data cascades"*, *"observability"*.

### 3.2. Mô tả cơ chế hoạt động của Option A, B, C & Link trải nghiệm

| Tiêu chí | Option A: Socratic Diagnostic Chat | Option B: Prerequisite Concept Radar *(Cá nhân phụ trách)* | Option C: Inline Scaffolding Co-pilot |
| :--- | :--- | :--- | :--- |
| **Cơ chế cốt lõi (Mechanism)** | **Turn-based Socratic Interview**: AI chủ động phỏng vấn chẩn đoán từng bước qua câu hỏi trắc nghiệm ngắn để khoanh vùng lỗ hổng. | **Visual Map Exploration**: Hệ thống trực quan hóa cây phả hệ kiến thức tiên quyết; User tự nhìn bản đồ và định vị vùng hoang mang. | **Inline Deconstruction**: Bóc tách tức thì ngay tại dòng chữ/thuật ngữ trên slide thành các tầng kiến thức ngầm định. |
| **User làm gì?** | Bấm *"Tôi chưa hiểu"* $\rightarrow$ Chọn đáp án cho 2 câu hỏi $\rightarrow$ Đọc kết luận chẩn đoán. | Duyệt cây kiến thức $\rightarrow$ Bấm vào node nghi ngờ $\rightarrow$ Đọc đối chiếu lý thuyết cũ/mới. | Bấm vào thuật ngữ gây bế tắc $\rightarrow$ Kéo thanh trượt độ sâu (1, 2, 3) $\rightarrow$ Làm thử câu test mini. |
| **AI làm gì?** | Phân tích đáp án, suy luận xác suất lỗ hổng (88%) và sinh thẻ ôn tập cấp tốc 1 phút. | Phân loại độ rủi ro của các node (*Nền tảng* vs *Vùng dễ nhầm lẫn 85%*) và hiển thị giải thích liên hệ. | Phân giải cấu trúc thuật ngữ theo thời gian thực tương ứng với mức độ sâu người dùng chọn. |
| **Trigger** | Nút *"Tôi chưa hiểu đoạn này"* bên cạnh slide bài giảng. | Tab/Menu *"Bản đồ kiến thức tiên quyết"* ở cạnh bài. | Thao tác click/chọn trực tiếp vào các thuật ngữ lạ (*RAG*, *vector store*). |
| **Trade-off chính** | Được dẫn dắt chính xác, nhưng phải nhường quyền điều khiển cho AI và tạm tách khỏi bài đọc. | Có bức tranh tổng quan, nhưng đòi hỏi nỗ lực nhận thức cao (dễ ngợp nếu không biết bấm node nào). | Giữ mạch đọc hoàn hảo, nhưng giả định user đã khoanh vùng được thuật ngữ nào gây bối rối. |
| **Đường link Prototype** | [Trải nghiệm Option A trực tuyến](https://claude.site/artifacts/7H3kBwiWinyEqc4qwsrW9j) | [Trải nghiệm Option B trực tuyến](https://claude.site/artifacts/MH8uWoTmFY2CAVkGv67vmv) | [Trải nghiệm Option C trực tuyến](https://claude.site/artifacts/c4a9d7eb-6c19-4f7d-a2f0-18e0018f6c32) |

#### Distance Check (Khoảng cách giữa 3 phương án):
* **A khác B vì:** Option A đặt quyền dẫn dắt vào tay **AI** (AI chủ động đặt câu hỏi chẩn đoán để tìm lỗ hổng cho user), trong khi Option B đặt quyền chủ động hoàn toàn vào tay **User** (User tự nhìn bản đồ phả hệ kiến thức và tự quyết định xem nhánh nào).
* **B khác C vì:** Option B tách kiến thức ra thành một **sơ đồ phả hệ vĩ mô độc lập** (Macro Graph), trong khi Option C **can thiệp vi mô ngay tại dòng chữ/thuật ngữ** (Micro Inline) với thanh trượt độ sâu tùy biến.
* **A khác C vì:** Option A là quá trình **hội thoại tương tác hai chiều từng bước** (Turn-based Socratic) tập trung vào việc "bắt bệnh", trong khi Option C là công cụ **co-pilot đồng sáng tạo tại chỗ** (On-demand Deconstruction) tập trung vào việc "mổ xẻ cấu trúc" mà không làm gián đoạn dòng đọc.

```
[OPTION B: User-led]           [OPTION C: Co-pilot]          [OPTION A: AI-led Probe]
User tự duyệt bản đồ    ──►    User chọn độ sâu phân rã  ──►   AI đặt câu hỏi chẩn đoán
& tự định vị lỗ hổng           & AI mổ xẻ thuật ngữ            & User duyệt kết luận
```

### 3.3. Human–AI Decision Table (Bảo đảm quyền kiểm soát của người dùng — Cổng 3)
Cả 3 phương án đều tuân thủ 4 trụ cột tương tác Human–AI: Expectation, Agency, Evidence và Recovery:

| Trụ cột quyết định | Option A (Socratic Chat) | Option B (Concept Radar) *(Cá nhân)* | Option C (Inline Scaffolding) |
| :--- | :--- | :--- | :--- |
| **AI Act / Ask / Don't Act? Vì sao?** | **Ask $\rightarrow$ Act**:<br>AI hỏi 2 câu trước để xác định chính xác chỗ nghẽn, sau đó mới Act (sinh bài ôn). Tránh Act ngay gây quá tải như Note 1 & Note 3. | **Don't Act (trừ khi User yêu cầu)**:<br>AI giữ trạng thái tĩnh, chờ đợi người dùng click để nhường không gian tự nhận thức (metacognition). | **Act on Request (Co-pilot)**:<br>AI phản ứng tức thì theo từng thao tác kéo slider của User để phục vụ nhu cầu bóc tách tức thời. |
| **User hiểu capability / limit bằng gì?** | Thông báo rõ trước chat: *"AI hỏi 2 câu ngắn (30s) để tìm lỗ hổng"*; giới hạn trong mini-refresher 1 phút, không giải bài hộ. | Thấy rõ phạm vi các mắt xích tiên quyết (Database $\rightarrow$ Vector Store); giới hạn: không tự phán đoán nếu user không click. | 3 nấc slider (Nhắc nhanh 30s $\leftrightarrow$ So sánh cũ/mới $\leftrightarrow$ Ví dụ chi tiết); giới hạn: chỉ bóc tách thuật ngữ được chọn. |
| **Evidence / Uncertainty thể hiện thế nào?** | Chỉ số xác suất và căn cứ: *"Phát hiện lỗ hổng: Vector Store & Embeddings (Độ tin cậy: 88%)"* từ 2 câu trả lời vừa chọn. | Gắn nhãn trạng thái rủi ro trực quan trên các node: *[Nền tảng căn bản]* vs *[Vùng dễ nhầm lẫn nhất 85%]*. | Màu sắc đối chiếu: Thuật ngữ mới (xanh lá) phân rã thành khái niệm quen thuộc (Database, Index) kèm nhãn mức độ sâu. |
| **User kiểm soát và recovery thế nào?** | Tự do chọn đáp án; có nút `↺ Chẩn đoán lại` và nút `AI đoán sai? Tôi tự chọn bài ôn` (User Override). | Toàn quyền click chọn/bỏ chọn; có nút `↺ Đặt lại bản đồ` và chuyển đổi chế độ xem danh sách phẳng. | Thanh trượt kéo thả tự do; có nút `Trở về mặc định` để đóng panel và trả lại giao diện nguyên bản slide. |

---

## 4. Đóng góp cụ thể của tôi trong sản phẩm nhóm

Trong suốt quá trình triển khai từ Day 18 đến Day 19, cá nhân tôi (**Thân Thị Kim Chi — MSSV: 2A202602797**) đã thực hiện các phần việc then chốt sau:

1. **Chịu trách nhiệm chính xây dựng Option B (Prerequisite Concept Radar)**:
   * Trực tiếp lên cấu trúc kiến trúc thông tin (Information Architecture) cho cây phả hệ kiến thức tiên quyết, phân định rõ giữa các khái niệm nền tảng (*Relational Database, Indexing, Vector Search*) và kiến trúc bài học mới (*Vector Store, Agent RAG, Observability*).
   * Thiết kế và mã hóa giao diện trực quan cho Option B, bổ sung cơ chế mã hóa rủi ro bằng thị giác (*[Vùng dễ nhầm lẫn nhất 85%]*), nút `Đối chiếu thuật ngữ trên slide` (đồng bộ tương tác giữa 2 bên màn hình) và nút `↺ Đặt lại bản đồ` để người dùng phục hồi quyền kiểm soát bất kỳ lúc nào.
2. **Đóng góp xây dựng 70% Bối cảnh dùng chung (Common Context)**:
   * Tham gia cùng nhóm phân tích dữ liệu thực chứng từ Day 17 để chốt Data Fixture chuẩn: Bài giảng *"Day 10 - Data Pipeline & Observability"*.
   * Định hình bộ thuật ngữ gây kẹt điển hình (*agent RAG*, *vector store*, *data cascades*) để cả 3 thành viên sử dụng nhất quán trong quá trình code prototype A, B, C.
3. **Xây dựng bảng Human–AI Decision Table**:
   * Đề xuất và hoàn thiện phân tích cơ chế *Don't Act* cho Option B và các cơ chế phục hồi (*Recovery / Escape Hatches*) cho cả 3 phương án để đáp ứng nghiêm ngặt Cổng 3 (Human Control).
4. **Trực tiếp điều phối và ghi chép Phiên thử nghiệm 1 (Facilitation)**:
   * Trực tiếp mời và tiến hành buổi test 1-1 kéo dài 20 phút với Tester ngoài nhóm: **Nguyễn Thị Hồng Nhung (Mã SV: 2A202602557)**.
   * Nghiêm túc tuân thủ 6 nguyên tắc điều phối chuẩn The Mom Test (để tester tự thao tác, không giải thích hộ, không mớm lời khen chê cảm tính).
   * Hoàn thành phiếu ghi chép thực địa độc lập [`prototype-feedback-note.md`](file:///d:/Track1_Day19_2A202602797_ThanThiKimChi/prototype-feedback-note.md) với đầy đủ 4 lớp quan sát chuyên sâu (Observed, Interpreted, Decided, Still Unproven).
5. **Tổng hợp và đúc kết quyết định cải tiến của nhóm (Group Next Change)**:
   * Mang kết quả của Phiên test 1 vào buổi họp nhóm, đối chiếu với 2 phiên test của 2 bạn cùng nhóm để xây dựng ma trận tổng hợp tại [`group-feedback-synthesis.md`](file:///d:/Track1_Day19_2A202602797_ThanThiKimChi/group-feedback-synthesis.md) và chốt một Next Change duy nhất.

---

## 5. Dữ liệu kiểm thử & Bài học (Testing Data & Learnings)

### 5.1. Tóm tắt dữ kiện quan sát từ Phiên test cá nhân do tôi dẫn dắt
*(Chi tiết đầy đủ xem tại tệp [`prototype-feedback-note.md`](file:///d:/Track1_Day19_2A202602797_ThanThiKimChi/prototype-feedback-note.md))*
* **Tester tham gia**: Nguyễn Thị Hồng Nhung — MSSV: 2A202602557 (Học viên có background học Data/PM, từng kẹt thực tế khi tự học slide AI).
* **Hành vi thực tế ghi nhận**:
  * **Option A**: Đọc lướt slide 12s $\rightarrow$ Bấm nút *"Tôi chưa hiểu đoạn này"*. Đắn đo 14s ở câu hỏi 1 và 9s ở câu hỏi 2. Đọc chăm chú kết luận tin cậy 88% và bài ôn 1 phút trong 32s.
  * **Option B**: Dừng lại nhìn sơ đồ 10s $\rightarrow$ Bấm vào ô viền cam *“Vector Store — Vùng dễ nhầm lẫn 85%”*. Nhận xét: *“Cây pipeline này nhìn thì tổng quan thật, nhưng thú thật nếu không có ô màu cam thì mình chẳng biết bấm vào đâu trước. Luồng data nhiều nhánh quá thấy hơi áp lực.”* Bấm nút `↺ Đặt lại bản đồ` sau khi bấm thử vài ô bị rối.
  * **Option C**: Bấm trực tiếp vào từ `agent RAG` trên slide $\rightarrow$ Kéo thanh trượt qua các mức 1, 2, 3. Dừng lâu nhất ở Mức 2 (So sánh cũ/mới). Làm thử câu trắc nghiệm mini 1-click và tỏ ra rất tự tin khi làm đúng.
* **Option được chọn & Trade-off**: Nhung chọn kết hợp **Ưu tiên Option C cho việc đọc slide hàng ngày, nhưng cần Option A làm "phao cứu sinh" khi bế tắc hoàn toàn**.
  * *Trade-off chấp nhận*: Option C giữ mạch đọc hoàn hảo nhưng đòi hỏi user phải tự biết mình kẹt ở đâu; Option A gỡ kẹt chính xác nhưng mất 45s làm quiz và tạm đứt mạch đọc.
* **Evidence chống lại kỳ vọng ban đầu (Negative Evidence)**: Nhóm từng nghĩ sinh viên chuyên ngành sẽ thích Option B vì sơ đồ bài bản. Nhưng thực tế Nhung phản ứng ngược lại: *“Lúc mình đang bí bài tập gấp mà quăng cái cây này ra là mình tắt web luôn á, nhìn ngợp lắm!”*.

### 5.2. Bảng tổng hợp 3 phiên của cả nhóm
*(Chi tiết đối chiếu xem tại tệp [`group-feedback-synthesis.md`](file:///d:/Track1_Day19_2A202602797_ThanThiKimChi/group-feedback-synthesis.md))*

| Nội dung | Feedback 1 (Tester 1 — Tôi dẫn dắt)<br>*(Tester: Nguyễn Thị Hồng Nhung)* | Feedback 2 (Tester 2)<br>*(Tester: Chuyển ngành Data Science)* | Feedback 3 (Tester 3)<br>*(Tester: Học viên AI Engineering)* | Pattern hành vi nhận diện được |
| :--- | :--- | :--- | :--- | :--- |
| **First action** | Nhìn lướt slide 12s $\rightarrow$ Bấm nút chẩn đoán ở A; ở B bấm ngay vào nút cam cảnh báo 85%. | Bấm vào nút chat ngay khi thấy thuật ngữ lạ; ở C bấm trực tiếp vào thuật ngữ `agent RAG`. | Dừng lại đọc slide 30s trước khi bấm; ở C thử kéo ngay thanh trượt sang Mức 2. | **Pattern**: Cả 3 tester đều phản xạ bấm vào các điểm có gợi ý thị giác mạnh nhất (nút cam cảnh báo, thuật ngữ lạ) thay vì đọc tuần tự. |
| **Breakdown chính** | Bị ngợp trước các luồng sơ đồ pipeline của B nếu không có nút cảnh báo; phân vân ở câu 2 của A. | Thừa nhận không đủ kiên nhẫn đọc sơ đồ B khi đang theo dõi luồng pipeline gấp; nhận xét C Mức 3 hơi dài. | Lúng túng bấm nhầm nhánh không liên quan ở B; ban đầu sợ bị AI "dạy đời" bài dài ở A. | **Pattern**: Option B gây ra **Breakdown nhận thức lớn nhất** (quá tải thông tin, ngợp trước cây phả hệ khi đang cần gỡ kẹt nhanh trong 1 phút). |
| **Cách lấy lại control** | Thử nút `↺ Đặt lại bản đồ` ở B; kéo thanh trượt qua lại ở C; làm câu quiz để tự kiểm tra. | Sử dụng nút `Trở về mặc định` ở C để quay lại bài đọc slide; không bấm nút override của A vì thấy AI đoán trúng. | Chuyển sang xem danh sách phẳng ở B; kéo Mức 2 ở C rồi đóng panel để tiếp tục học. | **Pattern**: Tester chủ động dùng các cơ chế phục hồi (slider, nút reset, đóng panel) để bảo toàn nhịp học cá nhân. |
| **Option được chọn** | **Option C (học hàng ngày)** kết hợp **Option A (khi hoàn toàn bế tắc)**. | **Option C** kết hợp **Option A**. | **Option C** (tiện nhất, không muốn mở cửa sổ chat phụ). | **Pattern**: **100% Tester ưu tiên Option C** vì tính liền mạch, nhưng đều thừa nhận **vẫn cần Option A** làm phao cứu sinh khi mất gốc hoàn toàn. |
| **Trade-off** | Đánh đổi giữa việc *"giữ mạch đọc slide tại chỗ"* (C) và *"được dẫn dắt khi không biết mình hổng cái gì"* (A). | Đánh đổi giữa tốc độ tra cứu tức thời trong 30s (C) và bức tranh phả hệ tổng thể nhưng tốn thời gian đọc (B). | Đánh đổi giữa cảm giác tự chủ không bị AI can thiệp (C) và việc phải tự mò thuật ngữ gây nghẽn. | **Pattern**: Đánh đổi cốt lõi là **Mạch đọc liền mạch (Continuity)** đối đầu với **Độ sâu chẩn đoán (Diagnostic Depth)**. |

### 5.3. Quyết định Cải tiến Nhóm (Group Next Change)
Tuân thủ nghiêm ngặt nguyên tắc **Cổng 5: Learning, not praise** (không vội vã tuyên bố giải pháp đã thành công hay đã "validated"), nhóm chốt đúng một quyết định cải tiến lặp:

> **“Với Hypothesis Problem này (học viên bế tắc cục bộ khi gặp thuật ngữ khó trên slide, ngại quá tải khi ôn lại cả bài và tốn công mớm prompt bối cảnh cho AI ngoài), nhóm đã thử nghiệm ba cách giải (A, B, C).**  
> **Tester đã có xu hướng ưu tiên sự liền mạch của Option C (Inline Scaffolding) để không làm đứt gãy dòng đọc bài, nhưng vẫn cần cơ chế gợi mở và khoanh vùng lỗ hổng tự động của Option A khi hoàn toàn bế tắc.**  
>  
> **Vì vậy, ở iteration tiếp theo, nhóm quyết định thực hiện đúng một thay đổi cải tiến:**  
> 1. **Hợp nhất cơ chế chẩn đoán nhanh 2 câu của Option A trực tiếp vào thanh công cụ Inline của Option C**: Khi người học bôi đen một vùng thuật ngữ trên slide mà không rõ mình vướng khái niệm nào, một nút nhỏ *"Chẩn đoán nhanh 2 câu"* sẽ xuất hiện ngay tại chỗ thay vì mở khung chat riêng biệt.  
> 2. **Chuyển Option B (Bản đồ khái niệm) thành tính năng hậu kỳ**: Đặt Bản đồ kiến thức ở cuối bài học dưới dạng *"Tóm tắt các mắt xích pipeline đã học"* phục vụ ôn tập trước kỳ thi, thay vì hiển thị song song gây nhiễu lúc đang đọc slide.  
> 3. **Nâng cấp tính năng Micro-Check**: Giữ lại câu hỏi trắc nghiệm mini 1-click của Option C và biến nó thành tính năng mặc định sau mỗi lần bóc tách kiến thức để học viên tự kiểm chứng độ hiểu bài trước khi quay lại slide.”

### 5.4. Những ẩn số Still Unproven (Chưa thể kết luận chỉ từ 1 buổi test)
* **Khả năng duy trì kiến thức lâu dài**: Buổi test 20 phút mới chỉ chứng minh tester vượt qua được điểm nghẽn tức thời và làm đúng câu trắc nghiệm ngay lúc đó. Nhóm chưa chứng minh được liệu 3 ngày sau người học có còn nhớ cách vận hành của Vector Store khi gặp lại kiến trúc khác hay không.
* **Độ bao phủ trên các dạng nội dung khác**: Bài test mới chỉ thực hiện trên một slide kiến trúc cụ thể (*Data Pipeline & Observability*). Chưa thể kết luận thanh trượt 3 mức độ sâu của Option C có phát huy hiệu quả tương tự khi áp dụng vào các đoạn mã nguồn cấu hình phức tạp hay không.

---

## 6. AI Support Log (Tóm tắt ứng dụng AI minh bạch)
*(Xem nhật ký đầy đủ từng chặng tại tệp [`ai-support-log.md`](file:///d:/Track1_Day19_2A202602797_ThanThiKimChi/ai-support-log.md))*

* **Các công cụ AI đã sử dụng**: Claude (Anthropic), Gemini Assistant / Antigravity IDE.
* **AI đã hỗ trợ hiệu quả khâu nào**:
  * Hỗ trợ định hình và chuẩn hóa cấu trúc tài liệu theo các cổng kiểm định chất lượng (GATE 1 $\rightarrow$ GATE 5).
  * Hỗ trợ sinh mã nguồn HTML/CSS/JS cho các Claude Artifacts tương tác trực tuyến (Option A, Option B, Option C).
  * Brainstorm các câu hỏi chẩn đoán logic và phân cấp độ sâu thuật ngữ kỹ thuật.
* **Học viên đã tự tay chỉnh sửa những điểm sai sót / thiên vị của AI**:
  * **Sửa nội dung dữ liệu mẫu**: Ban đầu AI sinh dữ liệu toán vi tích phân và bài học chung chung; học viên đã tự tay viết lại toàn bộ nội dung sang slide thực tế *"Data Pipeline & Observability"* với các thuật ngữ chuyên sâu (*agent RAG*, *vector store*, *data cascades*).
  * **Chấn chỉnh thiên vị tự khen ngợi**: AI thường tự động kết luận "giải pháp đã thành công vượt trội" hoặc "được chứng thực (validated)"; học viên đã kiên quyết loại bỏ và thay bằng phân tích hành vi khách quan, nhận diện breakdown ngợp của Option B và chốt một Next Change khiêm tốn.
  * **Bổ sung cơ chế phục hồi (Recovery)**: AI ban đầu bỏ quên các nút thoát hiểm; học viên đã trực tiếp bổ sung nút `↺ Đặt lại bản đồ` và chuyển đổi xem danh sách cho Option B, nút `User Override` cho Option A.
  * **Loại bỏ câu hỏi mớm lời**: Cắt bỏ các câu hỏi cảm tính do AI đề xuất (*"Giao diện này có đẹp không?"*) để áp dụng nghiêm ngặt kịch bản The Mom Test quan sát hành vi thuần túy.

---

## Bảng Kiểm Tra Trước Khi Nộp Bài (Pre-flight Checklist)
- [x] Tên thư mục Repository tuân thủ chính xác định dạng: `Track1_Day19_2A202602797_ThanThiKimChi`.
- [x] Tệp `README.md` có đầy đủ 6 phần nội dung và nêu bật rõ rệt Đóng góp cụ thể của tôi trong sản phẩm nhóm.
- [x] Mọi đường liên kết (Link Prototype Claude artifacts, link file nội bộ) đều mở công khai và truy cập được.
- [x] Cả ba nguyên mẫu A, B, C dùng chung 70% bối cảnh (cùng đối tượng, cùng tình huống, cùng nhiệm vụ, cùng dữ liệu mẫu).
- [x] Đã hoàn thành phiên kiểm thử độc lập với tester bên ngoài nhóm; tệp `prototype-feedback-note.md` là sản phẩm của chính phiên tôi chủ trì.
- [x] Tệp `group-feedback-synthesis.md` bóc tách rõ ràng: Quy luật hành vi, Quyết định Next Change và Ẩn số Still Unproven.
- [x] Tệp `ai-support-log.md` phản ánh chân thực, minh bạch quá trình sử dụng công cụ AI của chính người nộp bài.
