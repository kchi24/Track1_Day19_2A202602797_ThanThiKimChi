// State Management for Micro-Prototypes
let currentOption = 'A';

// Data for Option A: Socratic Diagnostic Chat
const diagStepData = [
  {
    step: 1,
    aiMsg: "Chào bạn, mình thấy bạn đang khựng lại ở công thức Gradient Descent. Hãy để mình kiểm tra nhanh nhé:\n\nKhi bạn nhìn vào ký hiệu ∂L/∂w, bạn cảm thấy mình đang băn khoăn nhất ở điểm nào?",
    choices: [
      { text: "A. Mình chưa rõ ký hiệu cong ∂ khác gì chữ d trong đạo hàm dL/dw thông thường.", target: "gap_partial" },
      { text: "B. Mình không hiểu tại sao lại lấy dấu trừ (-) phía trước Learning Rate.", target: "gap_minus" },
      { text: "C. Mình hiểu công thức nhưng không biết tại sao cần dùng Chain Rule ở đây.", target: "gap_chain" }
    ]
  },
  {
    step: 2,
    aiMsg: "Rất tốt! Câu hỏi thứ 2 để khoanh vùng chính xác:\n\nGiả sử hàm L(w1, w2) = w1^2 + 3*w2. Khi tính đạo hàm theo w1, biến w2 sẽ được đối xử như thế nào?",
    choices: [
      { text: "A. Coi w2 như một hằng số (bằng số 0 khi lấy đạo hàm).", correct: true, next: "result_good" },
      { text: "B. Đạo hàm cả w1 lẫn w2 cùng một lúc.", correct: false, next: "result_gap_found" },
      { text: "C. Mình thật sự không nhớ quy tắc này.", correct: false, next: "result_gap_found" }
    ]
  }
];

let chatHistory = [];
let currentStep = 0;

// Switch between Options A, B, and C
function switchOption(opt) {
  currentOption = opt;
  
  // Update nav buttons
  document.getElementById('btn-opt-a').classList.toggle('active', opt === 'A');
  document.getElementById('btn-opt-b').classList.toggle('active', opt === 'B');
  document.getElementById('btn-opt-c').classList.toggle('active', opt === 'C');

  // Update views
  document.getElementById('view-opt-a').classList.toggle('hidden', opt !== 'A');
  document.getElementById('view-opt-b').classList.toggle('hidden', opt !== 'B');
  document.getElementById('view-opt-c').classList.toggle('hidden', opt !== 'C');

  // Update triggers on left panel
  document.getElementById('trigger-opt-a').classList.toggle('hidden', opt !== 'A');
  document.getElementById('trigger-opt-c').classList.toggle('hidden', opt !== 'C');

  // Update banner explanation
  const bannerRole = document.getElementById('banner-role');
  const bannerText = document.getElementById('banner-text');

  if (opt === 'A') {
    bannerRole.textContent = 'AI dẫn dắt (Socratic)';
    bannerRole.style.background = '#4f46e5';
    bannerText.innerHTML = '<strong>Option A:</strong> AI chủ động hỏi 2 câu ngắn để chẩn đoán chính xác lỗ hổng kiến thức nền, sau đó sinh bài ôn tập cấp tốc ngay tại chỗ.';
  } else if (opt === 'B') {
    bannerRole.textContent = 'User chủ động (Visual Radar)';
    bannerRole.style.background = '#06b6d4';
    bannerText.innerHTML = '<strong>Option B:</strong> Toàn bộ cây kiến thức tiên quyết được trải ra trước mắt. Bạn tự bấm vào khái niệm mình còn mơ hồ để xem đối chiếu giải thích.';
  } else if (opt === 'C') {
    bannerRole.textContent = 'Đồng sáng tạo (Inline Co-pilot)';
    bannerRole.style.background = '#10b981';
    bannerText.innerHTML = '<strong>Option C:</strong> Bấm trực tiếp vào các ký hiệu của công thức bên trái. Dùng thanh trượt để điều khiển AI bóc tách giải thích từ ngắn (30s) đến chuyên sâu.';
  }
}

// ================= OPTION A LOGIC =================
function openOptionA() {
  document.getElementById('chat-empty-state').classList.add('hidden');
  const messagesBox = document.getElementById('chat-messages');
  messagesBox.classList.remove('hidden');
  document.getElementById('chat-footer').classList.remove('hidden');
  
  if (chatHistory.length === 0) {
    currentStep = 0;
    renderStep(0);
  }
}

function renderStep(stepIndex) {
  const messagesBox = document.getElementById('chat-messages');
  const step = diagStepData[stepIndex];
  
  // AI message
  const aiRow = document.createElement('div');
  aiRow.className = 'msg-row msg-ai';
  aiRow.innerHTML = `
    <div class="msg-meta">🤖 AI Tutor · Chẩn đoán bước ${stepIndex + 1}/2</div>
    <div class="msg-bubble">${step.aiMsg.replace(/\n/g, '<br>')}</div>
    <div class="choice-list" id="choices-step-${stepIndex}">
      ${step.choices.map((c, i) => `
        <button class="choice-btn" onclick="selectChoice(${stepIndex}, ${i})">${c.text}</button>
      `).join('')}
    </div>
  `;
  messagesBox.appendChild(aiRow);
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

function selectChoice(stepIndex, choiceIndex) {
  const choicesContainer = document.getElementById(`choices-step-${stepIndex}`);
  if (choicesContainer) {
    const btns = choicesContainer.querySelectorAll('.choice-btn');
    btns.forEach(b => b.disabled = true);
  }

  const selectedChoice = diagStepData[stepIndex].choices[choiceIndex];
  
  // Render user message
  const messagesBox = document.getElementById('chat-messages');
  const userRow = document.createElement('div');
  userRow.className = 'msg-row msg-user';
  userRow.innerHTML = `
    <div class="msg-meta" style="justify-content: flex-end;">Học viên</div>
    <div class="msg-bubble">${selectedChoice.text}</div>
  `;
  messagesBox.appendChild(userRow);

  // Next step or diagnosis result
  setTimeout(() => {
    if (stepIndex === 0) {
      renderStep(1);
    } else {
      renderDiagnosisResult();
    }
  }, 400);
}

function renderDiagnosisResult() {
  const messagesBox = document.getElementById('chat-messages');
  const resultRow = document.createElement('div');
  resultRow.className = 'msg-row msg-ai';
  resultRow.innerHTML = `
    <div class="msg-meta">🎯 Kết quả chẩn đoán của AI</div>
    <div class="diag-result-card">
      <div class="diag-header">
        <span class="diag-title">Phát hiện lỗ hổng: Khái niệm Đạo hàm riêng (Partial Derivative)</span>
        <span class="confidence-pill">Độ tin cậy: 88%</span>
      </div>
      <p style="font-size: 0.82rem; color: #cbd5e1; margin-bottom: 8px;">
        AI nhận diện: Bạn đang nhầm lẫn giữa đạo hàm toàn phần và đạo hàm riêng nhiều biến.
      </p>
      <div class="refresher-content">
        <strong>Ôn tập cấp tốc (1 phút):</strong><br>
        • Trong hàm nhiều biến L(w1, w2), ký hiệu ∂L/∂w1 có nghĩa: <em>"Hãy tính tốc độ thay đổi của L khi CHỈ CÓ w1 thay đổi, còn tất cả biến khác (w2) bị đóng băng như hằng số."</em><br>
        • <strong>Áp dụng vào bài này:</strong> Mỗi lần cập nhật, ta chỉ tính riêng mức độ ảnh hưởng của trọng số w lên sai số của mạng.
      </div>
      <button class="btn-help-primary" style="font-size: 0.78rem; padding: 6px 12px;" onclick="returnToLesson()">
        ✓ Đã hiểu! Quay lại tiếp tục bài học
      </button>
    </div>
  `;
  messagesBox.appendChild(resultRow);
  messagesBox.scrollTop = messagesBox.scrollHeight;

  document.getElementById('opt-a-status').textContent = 'Trạng thái: Đã hoàn tất chẩn đoán';
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('hidden'), 2800);
}

function flashLessonFormula() {
  const card = document.getElementById('target-formula-card');
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.classList.add('flash');
  setTimeout(() => card.classList.remove('flash'), 1600);
}

// Recovery path shared by A/B/C: user is done and goes back to the lesson.
function returnToLesson() {
  showToast('Bạn đã thông suốt điểm kẹt. Tiếp tục mạch bài học nhé!');
  flashLessonFormula();
}

// Reset path: clear every option's state and return to the common context.
function resetAll() {
  resetOptionA();
  switchRadarMode('tree');
  resetRadar();
  resetScaffold();
  switchOption('A');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Đã đặt lại: quay về bài học ban đầu.');
}

function resetOptionA() {
  document.getElementById('chat-messages').innerHTML = '';
  document.getElementById('chat-empty-state').classList.remove('hidden');
  document.getElementById('chat-messages').classList.add('hidden');
  document.getElementById('chat-footer').classList.add('hidden');
  document.getElementById('opt-a-status').textContent = 'Trạng thái: Sẵn sàng chẩn đoán';
  chatHistory = [];
}

function overrideDiagnosisA() {
  const chosen = prompt("AI chẩn đoán chưa đúng? Hãy gõ phần kiến thức bạn nghĩ mình đang quên (VD: Quy tắc chuỗi, Đạo hàm cấp 3, Vector):", "Quy tắc chuỗi");
  if (chosen) {
    const messagesBox = document.getElementById('chat-messages');
    const overrideRow = document.createElement('div');
    overrideRow.className = 'msg-row msg-ai';
    overrideRow.innerHTML = `
      <div class="msg-meta">🔄 Phục hồi quyền kiểm soát (User Override)</div>
      <div class="msg-bubble" style="border-left: 3px solid #f59e0b;">
        Đã chuyển sang bài ôn theo yêu cầu của bạn: <strong>${chosen}</strong>.<br>
        Nội dung cốt lõi: Đạo hàm hàm hợp (f(g(x)))' = f'(g(x)) * g'(x). Khi nhân chuỗi nhiều lớp, các đạo hàm nhân dồn với nhau.
      </div>
    `;
    messagesBox.appendChild(overrideRow);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }
}

// ================= OPTION B LOGIC =================
const conceptDatabase = {
  'deriv-1': {
    title: 'Đạo hàm 1 biến & Tiếp tuyến (Cấp 3)',
    status: 'Nền tảng căn bản',
    explanation: 'Cho hàm y = f(x), đạo hàm f\'(x) biểu diễn hệ số góc của tiếp tuyến tại điểm x, tức là tỷ lệ biến thiên tức thời của y theo x.',
    connection: 'Liên hệ bài mới: Gradient Descent kế thừa trực tiếp ý tưởng này — đi ngược dấu đạo hàm để tìm điểm cực tiểu.'
  },
  'chain-1': {
    title: 'Quy tắc Đạo hàm hàm hợp (Chain Rule 1D)',
    status: 'Nền tảng căn bản',
    explanation: 'Công thức: (f(g(x)))\' = f\'(g(x)) * g\'(x).',
    connection: 'Liên hệ bài mới: Mạng nơ-ron nhiều lớp thực chất là một chuỗi các hàm hợp lồng nhau. Muốn tính đạo hàm lớp đầu tiên, ta phải nhân dồn đạo hàm qua các lớp sau.'
  },
  'partial': {
    title: 'Đạo hàm riêng (Partial Derivative ∂)',
    status: 'Lỗ hổng trọng yếu (85% học viên kẹt tại đây)',
    explanation: 'Khi hàm số có nhiều biến L(w1, w2), ký hiệu ∂ dùng để nhấn mạnh ta chỉ đạo hàm theo một biến duy nhất, các biến còn lại xem là số thực cố định.',
    connection: 'Liên hệ bài mới: Trong công thức w_new = w_old - η * (∂L/∂w), ta cập nhật độc lập từng trọng số w theo độ dốc riêng của nó.'
  },
  'gradient': {
    title: 'Vector Gradient (∇L)',
    status: 'Khái niệm liên kết',
    explanation: 'Vector tập hợp tất cả các đạo hàm riêng: ∇L = [∂L/∂w1, ∂L/∂w2, ...]^T. Vector này luôn chỉ về hướng hàm số tăng nhanh nhất.',
    connection: 'Liên hệ bài mới: Đó là lý do ta đặt dấu trừ (-) phía trước để đi theo hướng giảm nhanh nhất.'
  }
};

function selectNode(nodeId) {
  document.querySelectorAll('.node-card, .list-item-card').forEach(n => n.classList.remove('selected'));
  
  const targetNode = document.getElementById(`node-${nodeId}`);
  if (targetNode) targetNode.classList.add('selected');

  const data = conceptDatabase[nodeId];
  const detailBox = document.getElementById('concept-detail-box');
  if (!data || !detailBox) return;
  
  detailBox.innerHTML = `
    <div style="margin-bottom: 8px;">
      <span class="node-badge ${nodeId === 'partial' ? 'suspect' : 'basic'}">${data.status}</span>
      <h4 style="color: #38bdf8; margin: 4px 0;">${data.title}</h4>
    </div>
    <p style="color: #cbd5e1; font-size: 0.84rem; margin-bottom: 10px; line-height: 1.5;">${data.explanation}</p>
    <div style="background: rgba(6, 182, 212, 0.1); border-left: 3px solid #06b6d4; padding: 8px 12px; border-radius: 4px; font-size: 0.8rem; color: #a5f3fc;">
      <strong>📌 Mối liên hệ với bài học hiện tại:</strong><br>${data.connection}
    </div>
  `;
}

function switchRadarMode(mode) {
  const treeView = document.getElementById('radar-tree-view');
  const listView = document.getElementById('radar-list-view');
  const btnTree = document.getElementById('btn-mode-tree');
  const btnList = document.getElementById('btn-mode-list');

  if (mode === 'tree') {
    treeView.classList.remove('hidden');
    listView.classList.add('hidden');
    btnTree.classList.add('active');
    btnList.classList.remove('active');
  } else {
    treeView.classList.add('hidden');
    listView.classList.remove('hidden');
    btnTree.classList.remove('active');
    btnList.classList.add('active');
  }
}

function highlightFormulaFromRadar() {
  const formulaBox = document.querySelector('.formula-display');
  if (formulaBox) {
    formulaBox.style.outline = '2px solid #06b6d4';
    formulaBox.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.6)';
    formulaBox.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      formulaBox.style.outline = 'none';
      formulaBox.style.boxShadow = 'none';
    }, 1500);
  }
}

function resetRadar() {
  document.querySelectorAll('.node-card, .list-item-card').forEach(n => n.classList.remove('selected'));
  document.getElementById('concept-detail-box').innerHTML = `
    <div class="detail-placeholder">👈 Chọn một khái niệm trên bản đồ để xem AI phân tích đối chiếu.</div>
  `;
}

// ================= OPTION C LOGIC =================
const scaffoldData = {
  'partial': {
    name: 'Ký hiệu: ∂L/∂w (Đạo hàm riêng)',
    lvl1: '<strong>Mức 1 (Nhắc nhanh 30s):</strong> Đây là đạo hàm riêng. Đạo hàm theo biến w, coi tất cả các biến khác là số hằng cố định.',
    lvl2: '<strong>Mức 2 (So sánh cũ/mới):</strong><br>• Cũ (Cấp 3): Đạo hàm hàm 1 biến y=f(x) -> dy/dx.<br>• Mới (Bài này): Hàm mất mát phụ thuộc vào hàng ngàn trọng số L(w1, w2...). Ký hiệu ∂ nhắc bạn chỉ xét riêng 1 trọng số tại một thời điểm.',
    lvl3: '<strong>Mức 3 (Đào sâu ví dụ cụ thể):</strong><br>Cho L = (y - (w1*x1 + w2*x2))^2.<br>Khi tính ∂L/∂w1, ta xem cả w2, x2, y là số cố định. Đạo hàm hạ bậc bình phương xuống nhân với -x1.'
  },
  'eta': {
    name: 'Ký hiệu: η (Learning Rate / Tốc độ học)',
    lvl1: '<strong>Mức 1:</strong> Bước nhảy cập nhật trọng số. Thường là số nhỏ (0.01 hoặc 0.001).',
    lvl2: '<strong>Mức 2:</strong> Nếu η quá lớn, mô hình sẽ nhảy vọt qua điểm cực tiểu; nếu η quá nhỏ, mô hình học rất chậm.',
    lvl3: '<strong>Mức 3:</strong> Tương tự như bước chân của người leo núi trong sương mù. Dốc càng đứng thì bước càng cẩn thận.'
  },
  'minus': {
    name: 'Ký hiệu: Dấu trừ (-)',
    lvl1: '<strong>Mức 1:</strong> Đi ngược hướng dốc nhất để làm giảm giá trị hàm mất mát.',
    lvl2: '<strong>Mức 2:</strong> Gradient ∇L chỉ hướng dốc tăng. Để tìm cực tiểu (Loss thấp nhất), ta phải đi ngược hướng gradient, do đó có dấu trừ.',
    lvl3: '<strong>Mức 3:</strong> Nếu đổi thành dấu cộng (+), thuật toán trở thành Gradient Ascent (tìm cực đại).'
  }
};

let currentToken = 'partial';
let currentDepth = 2;

function deconstructToken(tokenKey) {
  currentToken = tokenKey;
  updateScaffoldView();
}

function changeScaffoldDepth(depthValue) {
  currentDepth = parseInt(depthValue);
  const labels = [
    'Mức 1: Nhắc nhanh (30s)',
    'Mức 2: So sánh kiến thức cũ/mới',
    'Mức 3: Đào sâu kèm ví dụ'
  ];
  document.getElementById('slider-text').textContent = labels[currentDepth - 1];
  updateScaffoldView();
}

function updateScaffoldView() {
  const token = scaffoldData[currentToken];
  document.getElementById('scaffold-token-title').innerHTML = token.name;
  document.getElementById('scaffold-token-badge').textContent = `Phân rã Mức ${currentDepth}`;

  const bodyContent = document.getElementById('scaffold-body-content');
  if (currentDepth === 1) bodyContent.innerHTML = token.lvl1;
  else if (currentDepth === 2) bodyContent.innerHTML = token.lvl2;
  else if (currentDepth === 3) bodyContent.innerHTML = token.lvl3;
}

function triggerMiniQuizC() {
  const ans = prompt("Câu hỏi kiểm tra nhanh:\nNếu hàm L(w1, w2) = 2*w1 + 5*w2, thì ∂L/∂w1 bằng bao nhiêu?\n(Nhập đáp án số):", "2");
  if (ans === "2") {
    alert("🎉 Chính xác! Bạn đã hoàn toàn làm chủ khái niệm đạo hàm riêng.");
  } else if (ans !== null) {
    alert("Chưa chính xác. Vì coi w2 là hằng số nên 5*w2 đạo hàm bằng 0, còn 2*w1 đạo hàm bằng 2.");
  }
}

function resetScaffold() {
  currentToken = 'partial';
  currentDepth = 2;
  document.getElementById('depthSlider').value = 2;
  document.getElementById('slider-text').textContent = 'Mức 2: So sánh kiến thức cũ/mới';
  updateScaffoldView();
}

// Initial setup
window.addEventListener('DOMContentLoaded', () => {
  switchOption('A');
  updateScaffoldView();
});
