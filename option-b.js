// Option B — Prerequisite Concept Radar (User-led). Standalone prototype.
const NODES = {
  loss: {
    label: ['Hàm mất mát', '(Loss Function)'], icon: '🎯', level: 'ok', tag: 'Cơ bản', color: '#d9f7ec', stroke: '#34d399',
    desc: 'Đo lường sai số giữa dự đoán và giá trị thật.',
    prereq: ['Hàm số', 'Sai số bình phương'],
    why: 'Gradient Descent tối thiểu hóa chính hàm mất mát L(w). Đây là "độ cao" của ngọn núi cần đi xuống.',
    chain: [['Hàm mất mát', 'cần cực tiểu'], ['Gradient Descent', '']]
  },
  opt: {
    label: ['Tối ưu hóa', '(Optimization)'], icon: '📉', level: 'ok', tag: 'Cơ bản', color: '#dbf1ff', stroke: '#60a5fa',
    desc: 'Tìm tham số làm cực tiểu hoặc cực đại một hàm mục tiêu.',
    prereq: ['Cực trị hàm số', 'Đạo hàm 1 biến'],
    why: 'Gradient Descent là một thuật toán tối ưu hóa lặp: mỗi bước đi theo hướng làm giảm hàm mục tiêu.',
    chain: [['Tối ưu hóa', 'tìm cực tiểu'], ['Gradient Descent', '']]
  },
  ml: {
    label: ['Học máy', '(Machine Learning)'], icon: '🤖', level: 'ok', tag: 'Cơ bản', color: '#d9f7ec', stroke: '#34d399',
    desc: 'Mô hình học quy luật từ dữ liệu thay vì được lập trình tường minh.',
    prereq: ['Dữ liệu & nhãn', 'Mô hình tham số'],
    why: 'Huấn luyện mô hình ML chính là việc điều chỉnh tham số w — việc Gradient Descent đảm nhận.',
    chain: [['Học máy', 'huấn luyện bằng'], ['Gradient Descent', '']]
  },
  vec: {
    label: ['Vector & Matrix', ''], icon: '▦', level: 'low', tag: 'Thấp', color: '#dbeafe', stroke: '#60a5fa',
    desc: 'Biểu diễn dữ liệu và tham số trong ML.',
    prereq: ['Phép nhân ma trận', 'Chuyển vị'],
    why: 'Khi có nhiều tham số, w là một vector; gradient cũng là vector cùng số chiều.',
    chain: [['Vector & Matrix', 'biểu diễn w'], ['Gradient', 'cập nhật'], ['Gradient Descent', '']]
  },
  grad: {
    label: ['Gradient', ''], icon: '↗', level: 'mid', tag: 'Trung bình', color: '#e6e0ff', stroke: '#a78bfa',
    desc: 'Vector các đạo hàm riêng, luôn chỉ hướng hàm số tăng nhanh nhất.',
    prereq: ['Đạo hàm riêng', 'Vector'],
    why: 'Dấu trừ (−) trong công thức nghĩa là đi ngược hướng gradient để làm giảm hàm mất mát.',
    chain: [['Đạo hàm riêng', 'tập hợp thành'], ['Gradient', 'dùng để cập nhật'], ['Gradient Descent', '']]
  },
  chain: {
    label: ['Quy tắc chuỗi', '(Chain Rule)'], icon: '🔗', level: 'ok', tag: 'Cơ bản', color: '#fff0cf', stroke: '#fbbf24',
    desc: 'Tính đạo hàm của hàm hợp.',
    prereq: ['Đạo hàm cơ bản', 'Hàm hợp'],
    why: 'Mạng nhiều lớp là hàm hợp lồng nhau; Chain Rule cho phép tính đạo hàm theo trọng số lớp đầu.',
    chain: [['Quy tắc chuỗi', 'tính đạo hàm hàm hợp'], ['Đạo hàm riêng', 'tạo ra gradient'], ['Gradient Descent', '']]
  },
  partial: {
    label: ['Đạo hàm riêng', '(Partial Derivative)'], icon: '∂', level: 'risk', tag: 'Rủi ro cao', risk: 85, color: '#ffe3e3', stroke: '#e5484d',
    desc: 'Đạo hàm của hàm nhiều biến theo một biến, giữ các biến khác không đổi.',
    prereq: ['Đạo hàm (Derivative)', 'Hàm nhiều biến (Multivariable Function)', 'Quy tắc chuỗi (Chain Rule)'],
    why: 'Trong Gradient Descent, ta cần tính gradient của hàm mất mát theo từng tham số. Đạo hàm riêng là công cụ để tính gradient khi hàm có nhiều biến (ví dụ: w, b).',
    chain: [['Hàm mất mát (Loss Function)', 'tính đạo hàm theo từng biến'], ['Đạo hàm riêng (Partial Derivative)', 'tạo ra gradient'], ['Gradient Descent', '']]
  }
};
const ORDER = ['loss', 'ml', 'grad', 'partial', 'chain', 'vec', 'opt']; // clockwise from top-left-ish
const TOTAL = ORDER.length;

const state = { screen: 'lesson', mode: 'map', selected: null, understood: new Set(), lastFrom: 'radar' };
const $ = (id) => document.getElementById(id);
const SCREENS = ['lesson', 'radar', 'detail', 'done'];

function levelClass(id) {
  if (state.understood.has(id)) return 'done';
  const l = NODES[id].level;
  return l === 'risk' ? 'risk' : l === 'mid' ? 'mid' : 'ok';
}
function tagLabel(id) {
  if (state.understood.has(id)) return 'Đã hiểu ✓';
  const n = NODES[id];
  return n.risk ? `⚠ Rủi ro: ${n.risk}%` : n.tag;
}

function go(screen) {
  state.screen = screen;
  SCREENS.forEach(s => $('screen-' + s).classList.toggle('hidden', s !== screen));
  renderCrumbs();
  if (screen === 'radar') renderRadar();
  window.scrollTo(0, 0);
}

function renderCrumbs() {
  const c = $('crumbs');
  const lesson = '<a data-go="lesson">Gradient Descent &amp; Chain Rule</a>';
  const radar = '<a data-go="radar">Concept Radar</a>';
  if (state.screen === 'lesson') c.innerHTML = '<b>Concept Radar</b> › Bài 3: Gradient Descent &amp; Chain Rule';
  else if (state.screen === 'radar') c.innerHTML = `${radar} › <b>${state.mode === 'list' ? 'Danh sách khái niệm' : 'Gradient Descent &amp; Chain Rule'}</b>`;
  else if (state.screen === 'detail') c.innerHTML = `${radar} › <b>${NODES[state.selected].label[0]}</b>`;
  else c.innerHTML = `${radar} › <b>Hoàn tất</b>`;
  c.querySelectorAll('[data-go]').forEach(a => a.onclick = () => go(a.dataset.go));
}

// ---------- Radar (SVG) ----------
function renderRadar() {
  $('understood-count').textContent = `Đã hiểu: ${state.understood.size}/${TOTAL}`;
  $('radar-map').classList.toggle('hidden', state.mode !== 'map');
  $('radar-list').classList.toggle('hidden', state.mode !== 'list');
  document.querySelectorAll('.mode').forEach(b => b.classList.toggle('active', b.dataset.mode === state.mode));
  renderCrumbs();
  state.mode === 'map' ? renderMap() : renderList();
}

function renderMap() {
  const svg = $('radar-svg'), cx = 280, cy = 260, R = 190;
  let html = '';
  const pos = ORDER.map((id, i) => {
    const a = (-90 + (360 / TOTAL) * i - 25) * Math.PI / 180;
    return [id, cx + R * Math.cos(a), cy + R * Math.sin(a)];
  });
  pos.forEach(([id, x, y]) => {
    html += `<line class="edge ${NODES[id].level === 'risk' && !state.understood.has(id) ? 'risk' : ''}" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`;
  });
  html += `<g class="rnode center" tabindex="0" data-center="1"><circle cx="${cx}" cy="${cy}" r="56" fill="#4338ca" stroke="#312e81"/>
    <text x="${cx}" y="${cy - 10}">Gradient</text><text x="${cx}" y="${cy + 6}">Descent &amp;</text><text x="${cx}" y="${cy + 22}">Chain Rule</text></g>`;
  pos.forEach(([id, x, y]) => {
    const n = NODES[id], done = state.understood.has(id);
    const fill = done ? '#dfe3ff' : n.color, stroke = done ? '#4338ca' : n.stroke;
    html += `<g class="rnode" tabindex="0" role="button" data-id="${id}" aria-label="${n.label.join(' ')}">
      <circle cx="${x}" cy="${y}" r="46" fill="${fill}" stroke="${stroke}"/>
      <text x="${x}" y="${y - 6}">${n.label[0]}</text>
      <text class="sub" x="${x}" y="${y + 9}">${n.label[1]}</text>
      ${done ? `<text x="${x}" y="${y + 26}" style="fill:#4338ca">✓ Đã hiểu</text>` : ''}
      ${n.level === 'risk' && !done ? `<text class="warn" x="${x + 40}" y="${y - 28}">⚠️</text>` : ''}
    </g>`;
  });
  svg.innerHTML = html;
  svg.querySelectorAll('[data-id]').forEach(g => {
    g.onclick = () => openDetail(g.dataset.id);
    g.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(g.dataset.id); } };
  });
}

function renderList() {
  const q = $('list-search').value.trim().toLowerCase();
  const items = ORDER.filter(id => NODES[id].label.join(' ').toLowerCase().includes(q) || NODES[id].desc.toLowerCase().includes(q));
  const order = { risk: 0, mid: 1, low: 2, ok: 3 };
  items.sort((a, b) => order[NODES[a].level] - order[NODES[b].level]);
  $('list-items').innerHTML = items.map(id => {
    const n = NODES[id], cls = levelClass(id);
    return `<button class="list-item ${n.level === 'risk' && cls !== 'done' ? 'risk' : cls}" data-id="${id}">
      <span class="li-icon">${n.icon}</span>
      <span class="li-body"><strong>${n.label.join(' ').trim()}</strong><small>${n.desc}</small></span>
      <span class="tag ${cls}">${tagLabel(id)}</span></button>`;
  }).join('') || '<p style="color:var(--muted)">Không tìm thấy khái niệm phù hợp.</p>';
  $('list-items').querySelectorAll('[data-id]').forEach(b => b.onclick = () => openDetail(b.dataset.id));
}

// ---------- Detail ----------
function openDetail(id) {
  state.selected = id;
  const n = NODES[id], cls = levelClass(id), isRisk = n.level === 'risk';
  $('detail-card').innerHTML = `
    <div class="d-head"><span class="d-icon ${isRisk ? 'risk' : ''}">${n.icon}</span>
      <h3>${n.label.join(' ').trim()}</h3><span class="tag ${cls}">${tagLabel(id)}</span></div>
    <p>${n.desc}</p>
    <h5>Kiến thức nền cần có</h5>
    <ul class="bullets">${n.prereq.map(p => `<li>${p}</li>`).join('')}</ul>
    <div class="why ${isRisk ? '' : 'ok'}"><b>Tại sao liên quan đến bài học hiện tại?</b>${n.why}</div>
    <div class="d-actions">
      <button class="btn primary" id="btn-understood">${state.understood.has(id) ? 'Đã hiểu ✓' : 'Đã hiểu →'}</button>
      <button class="btn outline" id="btn-relation">Xem quan hệ</button>
      <button class="btn ghost" id="btn-formula">🔍 Đối chiếu công thức</button>
    </div>`;
  $('relation-card').innerHTML = `<strong>Mối liên hệ</strong><div class="chain">${n.chain.map(([t, e], i) =>
    `<div class="chain-node ${i === n.chain.length - 1 ? 'target' : (t.startsWith(n.label[0]) && isRisk ? 'risk' : '')}">${t}</div>${e ? `<div class="chain-edge">${e}</div>` : ''}`).join('')}</div>`;
  $('btn-understood').onclick = () => markUnderstood(id);
  $('btn-relation').onclick = () => $('relation-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
  $('btn-formula').onclick = () => { go('lesson'); flashFormula(); };
  go('detail');
}

function markUnderstood(id) {
  state.understood.add(id);
  // Suspect gap resolved (or user has covered most of the map) → ready to continue.
  if (id === 'partial' || state.understood.size >= 3) go('done');
  else go('radar');
}

function flashFormula() {
  const f = $('formula');
  f.classList.add('flash');
  setTimeout(() => f.classList.remove('flash'), 1600);
}

// ---------- Reset modal ----------
const modal = $('modal');
const openModal = () => modal.classList.remove('hidden');
const closeModal = () => modal.classList.add('hidden');
$('modal-cancel').onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
$('modal-ok').onclick = () => { state.understood.clear(); state.selected = null; state.mode = 'map'; closeModal(); go('radar'); };
$('btn-reset-top').onclick = openModal;

// ---------- Wiring ----------
$('btn-open-radar').onclick = () => go('radar');
$('btn-continue').onclick = () => go('lesson');
$('btn-back-radar').onclick = () => go('radar');
$('hint-close').onclick = () => $('hint-card').classList.add('hidden');
$('list-search').oninput = renderList;
document.querySelectorAll('.mode').forEach(b => b.onclick = () => { state.mode = b.dataset.mode; renderRadar(); });
document.querySelectorAll('[data-nav]').forEach(a => a.onclick = () => {
  if (a.dataset.nav === 'radar') go(state.screen === 'lesson' ? 'radar' : state.screen);
});

go('lesson');
