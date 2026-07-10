/* ============================================
   七侠盟 · 交互脚本
   ============================================ */

// ---------- 数据：七侠 ----------
const MEMBERS = [
  { key:"hongmao", name:"虹猫", sword:"长虹剑", color:"#ae3a26",
    tag:"七剑之首 · 白衣少侠",
    desc:"继承父亲白猫的一身绝艺，性格开朗热情，本性纯真，为寻回其余六剑传人踏上江湖路。身负团结七侠、守护麒麟的重任，是七剑合璧的核心与灵魂人物。" },
  { key:"lantu", name:"蓝兔", sword:"冰魄剑", color:"#2f5d82",
    tag:"玉蟾宫宫主",
    desc:"温柔善良，感情丰富，武艺超群又不失侠骨柔情。执掌玉蟾宫，与虹猫并肩作战、出生入死，是七侠中不可或缺的智勇担当。" },
  { key:"shali", name:"莎丽", sword:"紫云剑", color:"#6a3f7a",
    tag:"金鞭溪客栈老板娘",
    desc:"曾遭马三娘迫害沦为哑女，一度自暴自弃，后经虹猫蓝兔相助重燃斗志，苦练左手剑法，终以绝招「紫气东来」手刃仇敌，报却血海深仇。" },
  { key:"doudou", name:"逗逗", sword:"雨花剑", color:"#3c5a45",
    tag:"江湖神医",
    desc:"悬壶济世，通晓百药亦通晓百毒。性子有些胆小怕死、爱面子，但每逢江湖大义当前，仍能舍生取义，从不缺席。" },
  { key:"daben", name:"大奔", sword:"奔雷剑", color:"#b3893a",
    tag:"混世魔王",
    desc:"侠义豪爽，力大无穷。早年因嗜酒好赌迟迟未能习得奔雷剑法，后痛下决心戒酒戒赌，方得剑法真传，威力大增。" },
  { key:"tiaotiao", name:"跳跳", sword:"青光剑", color:"#c9a227",
    tag:"魔教护法使者 · 卧底",
    desc:"聪明机智、能言善辩。为报父母之仇，多年潜伏魔教内部官至护法使者，暗中周旋、离间魔头，始终在暗处守护六侠周全。" },
  { key:"dada", name:"达达", sword:"旋风剑", color:"#4a7a5c",
    tag:"百草谷谷主",
    desc:"与妻子达夫人隐居十里画廊百草谷，本不愿再涉江湖恩怨，然魔教为逼七剑合璧绑走达夫人，达达被迫重出，与六侠共赴大义。" },
];

// ---------- 数据：魔教通缉榜 ----------
const WANTED = [
  { rank:"魔教教主", name:"黑心虎", desc:"魔教现任教主，妄图捕获灵兽麒麟、吸血称霸武林，是七侠必须铲除的头号大敌。" },
  { rank:"魔教副教主", name:"马三娘", desc:"阴险毒辣，长年伪装紫云剑主潜伏七侠身边，意图借七剑之手引出麒麟、独霸武林。" },
  { rank:"魔教四堂主", name:"猪无戒", desc:"诡计多端，擅使流星锤与蝴蝶镖，对七剑传人手段残忍，是黑心虎手下头号打手。" },
  { rank:"魔教少主", name:"黑小虎", desc:"黑心虎之子，身负魔教绝学，性情狠戾，却也存有一丝对父亲的孺慕之情。" },
];

// ---------- 数据：七剑之系 ----------
const SWORDS = [
  { symbol:"●", name:"长虹剑", owner:"虹猫 · 红", color:"#ae3a26", desc:"七剑之首，剑气如虹，正大光明，绝招「长虹贯日」。" },
  { symbol:"◆", name:"奔雷剑", owner:"大奔 · 橙", color:"#b3893a", desc:"剑势如雷，力道千钧，绝招「横扫千军」。" },
  { symbol:"▲", name:"青光剑", owner:"跳跳 · 黄", color:"#c9a227", desc:"剑走轻灵，暗藏机变，多用于卧底周旋、暗中相助。" },
  { symbol:"■", name:"雨花剑", owner:"逗逗 · 绿", color:"#3c5a45", desc:"剑意如雨，能疗能毒，医武同源，救人也能制敌。" },
  { symbol:"★", name:"冰魄剑", owner:"蓝兔 · 蓝", color:"#2f5d82", desc:"寒冰入剑，静若冰封，动若雪崩，绝招「冰天雪地」。" },
  { symbol:"✦", name:"旋风剑", owner:"达达 · 靛", color:"#4a7a5c", desc:"剑走回旋，绵密不绝，擅守亦擅攻，为百草谷镇谷之剑。" },
  { symbol:"✕", name:"紫云剑", owner:"莎丽 · 紫", color:"#6a3f7a", desc:"剑气如云，左手秘传，绝招「紫气东来」，蓄势方能一击制胜。" },
];

// ---------- 数据：占卜测验 ----------
const QUESTIONS = [
  { text:"江湖路遇不平事，你的第一反应是？",
    options:[
      {t:"拔剑相助，绝不袖手旁观", s:{hongmao:2}},
      {t:"先探清缘由，再决定如何出手", s:{lantu:2}},
      {t:"悄悄记下，寻机暗中周旋", s:{tiaotiao:2}},
    ]},
  { text:"同伴受了重伤，你会怎么做？",
    options:[
      {t:"亲自采药诊治，寸步不离", s:{doudou:2}},
      {t:"稳住阵脚，护住众人退路", s:{dada:2}},
      {t:"陪在身边，给他们打气鼓劲", s:{lantu:1, hongmao:1}},
    ]},
  { text:"面对比自己强大得多的对手，你会？",
    options:[
      {t:"明知不敌也要放手一搏", s:{daben:2}},
      {t:"暂避锋芒，蓄势待发", s:{shali:2}},
      {t:"仔细观察对方破绽", s:{tiaotiao:1, lantu:1}},
    ]},
  { text:"你最看重江湖中的哪种情谊？",
    options:[
      {t:"生死与共的兄弟情", s:{daben:2}},
      {t:"相知相守的知己情", s:{lantu:2}},
      {t:"隐忍多年终得释怀的恩情", s:{shali:2}},
    ]},
  { text:"隐居多年后忽被卷回江湖，你的心情是？",
    options:[
      {t:"既不情愿，又深知责无旁贷", s:{dada:2}},
      {t:"早已厌倦纷争，只想守住眼前人", s:{doudou:1, dada:1}},
      {t:"江湖本就是我的归宿，随时可以重新出发", s:{hongmao:2}},
    ]},
  { text:"若要你独自完成一件冒险的大事，你更依靠？",
    options:[
      {t:"一身武艺与满腔孤勇", s:{daben:1, hongmao:1}},
      {t:"多年隐忍练就的心计", s:{tiaotiao:2}},
      {t:"沉稳的判断与耐心", s:{lantu:1, shali:1}},
    ]},
];

// ============ 倒计时 Countdown ============
function initCountdown() {
  const target = new Date();
  target.setDate(target.getDate() + 47); // 示例：47天后
  target.setHours(0,0,0,0);

  function update() {
    const now = new Date();
    let diff = target - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff / 3600000) % 24);
    const mins = Math.floor((diff / 60000) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById("cd-days").textContent = String(days).padStart(2,"0");
    document.getElementById("cd-hours").textContent = String(hours).padStart(2,"0");
    document.getElementById("cd-mins").textContent = String(mins).padStart(2,"0");
    document.getElementById("cd-secs").textContent = String(secs).padStart(2,"0");
  }
  update();
  setInterval(update, 1000);
}

// ============ 渲染七侠卡片 ============
function renderMembers() {
  const grid = document.getElementById("memberGrid");
  grid.innerHTML = MEMBERS.map(m => `
    <div class="member-card" style="--card-color:${m.color}" data-key="${m.key}">
      <div class="member-avatar">${m.name[0]}</div>
      <h3>${m.name}</h3>
      <p class="m-sword">${m.sword}</p>
    </div>
  `).join("");

  grid.querySelectorAll(".member-card").forEach(card => {
    card.addEventListener("click", () => openMemberModal(card.dataset.key));
  });
}

function openMemberModal(key) {
  const m = MEMBERS.find(x => x.key === key);
  if (!m) return;
  document.getElementById("modalContent").innerHTML = `
    <div class="member-avatar" style="--card-color:${m.color}; margin:0 auto 14px;">${m.name[0]}</div>
    <p class="m-tag">${m.tag}</p>
    <h3>${m.name} · ${m.sword}</h3>
    <p>${m.desc}</p>
  `;
  openModal("memberModal");
}

// ============ 渲染通缉榜 ============
function renderWanted() {
  const grid = document.getElementById("wantedGrid");
  grid.innerHTML = WANTED.map(w => `
    <div class="wanted-card">
      <span class="w-rank">${w.rank}</span>
      <h3>${w.name}</h3>
      <p>${w.desc}</p>
    </div>
  `).join("");
}

// ============ 渲染七剑之系 ============
function renderSwords() {
  const grid = document.getElementById("swordGrid");
  grid.innerHTML = SWORDS.map(s => `
    <div class="sword-card" style="--sword-color:${s.color}">
      <div class="sword-symbol">${s.symbol}</div>
      <h3>${s.name}</h3>
      <p class="s-owner">${s.owner}</p>
      <p>${s.desc}</p>
    </div>
  `).join("");
}

// ============ 弹窗通用逻辑 ============
function openModal(id) {
  document.getElementById(id).classList.add("is-open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("is-open");
}
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) {
    e.target.closest(".modal").classList.remove("is-open");
  }
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("is-open");
  }
});

// ============ 加盟表单 ============
function initJoinForm() {
  const form = document.getElementById("joinForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = "QX-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    document.getElementById("joinId").textContent = "名帖编号：" + id;
    openModal("successModal");
    form.reset();
  });
}

// ============ 占卜测验 ============
let quizScores = {};
let quizIndex = 0;

function resetQuiz() {
  quizScores = {};
  MEMBERS.forEach(m => quizScores[m.key] = 0);
  quizIndex = 0;
}

function startQuiz() {
  resetQuiz();
  document.getElementById("quizStart").style.display = "none";
  document.getElementById("quizResult").style.display = "none";
  document.getElementById("quizQuestion").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = QUESTIONS[quizIndex];
  document.getElementById("qNum").textContent = quizIndex + 1;
  document.getElementById("qText").textContent = q.text;
  const optWrap = document.getElementById("qOptions");
  optWrap.innerHTML = q.options.map((o, i) => `
    <div class="quiz-option" data-i="${i}">${o.t}</div>
  `).join("");
  optWrap.querySelectorAll(".quiz-option").forEach(el => {
    el.addEventListener("click", () => {
      const opt = q.options[Number(el.dataset.i)];
      for (const key in opt.s) quizScores[key] = (quizScores[key] || 0) + opt.s[key];
      quizIndex++;
      if (quizIndex < QUESTIONS.length) showQuestion();
      else showQuizResult();
    });
  });
}

function showQuizResult() {
  document.getElementById("quizQuestion").style.display = "none";
  document.getElementById("quizResult").style.display = "block";
  let bestKey = MEMBERS[0].key;
  let bestScore = -Infinity;
  for (const key in quizScores) {
    if (quizScores[key] > bestScore) { bestScore = quizScores[key]; bestKey = key; }
  }
  const m = MEMBERS.find(x => x.key === bestKey);
  document.getElementById("resultName").textContent = m.name + " · " + m.sword;
  document.getElementById("resultDesc").textContent = m.desc;
}

function initQuiz() {
  document.getElementById("quizBeginBtn").addEventListener("click", startQuiz);
  document.getElementById("quizRestartBtn").addEventListener("click", startQuiz);
}

// ============ 滚动显现动画 ============
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

// ============ 初始化 ============
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  renderMembers();
  renderWanted();
  renderSwords();
  initJoinForm();
  initQuiz();
  initReveal();
});
