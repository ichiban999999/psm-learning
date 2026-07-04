// ===== 全域變數 =====
let currentSection = 0;
let currentQuestionIndex = 0;
let quizQuestions = [];
let userAnswers = {};
let quizMode = false; // true = 測驗模式, false = 練習模式

// ===== 側邊欄切換 =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// ===== 更新側邊欄統計 =====
function updateSidebarStats() {
    const stats = getProgress();
    const totalAnswered = stats.totalAnswered || 0;
    const correct = stats.correct || 0;
    const accuracy = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    
    const totalEl = document.getElementById('total-answered');
    const accuracyEl = document.getElementById('accuracy-rate');
    if (totalEl) totalEl.textContent = totalAnswered;
    if (accuracyEl) accuracyEl.textContent = accuracy + '%';
}

// ===== 取得學習進度 =====
function getProgress() {
    try {
        return JSON.parse(localStorage.getItem('psm_progress')) || createNewProgress();
    } catch (e) {
        return createNewProgress();
    }
}

function createNewProgress() {
    return {
        totalAnswered: 0,
        correct: 0,
        sectionProgress: { 1: { attempted: 0, correct: 0 }, 2: { attempted: 0, correct: 0 }, 3: { attempted: 0, correct: 0 }, 4: { attempted: 0, correct: 0 } },
        questionHistory: {},
        examHistory: [],
        weakQuestions: {}
    };
}

function saveProgress(progress) {
    localStorage.setItem('psm_progress', JSON.stringify(progress));
}

function recordAnswer(sectionId, questionId, isCorrect) {
    const progress = getProgress();
    
    progress.totalAnswered = (progress.totalAnswered || 0) + 1;
    if (isCorrect) progress.correct = (progress.correct || 0) + 1;
    
    // 更新章節進度
    if (!progress.sectionProgress[sectionId]) {
        progress.sectionProgress[sectionId] = { attempted: 0, correct: 0 };
    }
    progress.sectionProgress[sectionId].attempted++;
    if (isCorrect) progress.sectionProgress[sectionId].correct++;
    
    // 更新題目歷史
    if (!progress.questionHistory[questionId]) {
        progress.questionHistory[questionId] = { attempted: 0, correct: 0 };
    }
    progress.questionHistory[questionId].attempted++;
    if (isCorrect) progress.questionHistory[questionId].correct++;
    
    // 更新弱題記錄
    const q = progress.questionHistory[questionId];
    const wrongCount = q.attempted - q.correct;
    if (wrongCount >= 2) {
        progress.weakQuestions[questionId] = (progress.weakQuestions[questionId] || 0) + 1;
    } else {
        delete progress.weakQuestions[questionId];
    }
    
    saveProgress(progress);
    updateSidebarStats();
    updateDashboardProgress();
}

// ===== 更新儀表板進度 =====
function updateDashboardProgress() {
    const progress = getProgress();
    
    // 更新各章節進度條
    for (let i = 1; i <= 4; i++) {
        const section = progress.sectionProgress[i];
        const total = [30, 25, 25, 20][i - 1];
        const percentage = section ? Math.round((section.attempted / total) * 100) : 0;
        
        const fill = document.querySelector(`.progress-fill[data-section="${i}"]`);
        if (fill) fill.style.width = percentage + '%';
        
        const done = document.querySelector(`#status-${i} .done`) || document.querySelector(`.progress-item:nth-child(${i}) .done`);
        if (done) done.textContent = section ? section.attempted : 0;
    }
    
    // 更新統計數字
    const completedEl = document.getElementById('completed-questions');
    const rateEl = document.getElementById('pass-rate');
    if (completedEl) completedEl.textContent = progress.totalAnswered || 0;
    if (rateEl) {
        const total = progress.totalAnswered || 0;
        const correct = progress.correct || 0;
        rateEl.textContent = total > 0 ? Math.round((correct / total) * 100) + '%' : '0%';
    }
}

// ===== 更新章節狀態 =====
function updateChapterStatus() {
    const progress = getProgress();
    for (let i = 1; i <= 4; i++) {
        const section = progress.sectionProgress[i];
        const statusEl = document.getElementById('status-' + i);
        if (statusEl) {
            if (!section || section.attempted === 0) {
                statusEl.className = 'chapter-status not-started';
                statusEl.textContent = '未開始';
            } else if (section.attempted < [30, 25, 25, 20][i - 1]) {
                statusEl.className = 'chapter-status in-progress';
                statusEl.textContent = '進行中';
            } else {
                statusEl.className = 'chapter-status completed';
                statusEl.textContent = '已完成';
            }
        }
    }
}

// ===== 重置進度 =====
function resetProgress() {
    if (confirm('確定要重置所有學習進度嗎？此操作不可復原！')) {
        localStorage.removeItem('psm_progress');
        location.reload();
    }
}

// ===== 每日金句 =====
const dailyQuotes = [
    { en: "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.", zh: "Scrum 是一個輕量的框架，幫助人們透過適應性解決方案為複雜問題產生價值。" },
    { en: "Scrum is founded on Empiricism and Lean Thinking. Empiricism means that knowledge comes from experience and making decisions based on what is observed.", zh: "Scrum 建立在經驗主義和精益思維基礎上。經驗主義意味著知識來自經驗，決策基於觀察到的事實。" },
    { en: "The Scrum Team is committed to achieving the goals and supporting each other.", zh: "Scrum 團隊致力於達成目標並相互支持。" },
    { en: "The Sprint is the heartbeat of Scrum, keeping the team on a steady cadence of regular work and regular improvement.", zh: "Sprint 是 Scrum 的心臟，讓團隊以穩定的節奏進行regular工作和regular改進。" },
    { en: "The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.", zh: "每日 Scrum 的目的是檢查相對於 Sprint 目標的進度，並在必要時調整 Sprint 待辦清單。" },
    { en: "Scrum is simple on the surface but difficult to master. The more you use Scrum, the more questions you will have.", zh: "Scrum 表面上看起來簡單，但要掌握卻很困難。你使用 Scrum 越多，你會有的問題也越多。" },
    { en: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team.", zh: "產品負責人負責極大化 Scrum 團隊工作所產生的產品價值。" },
    { en: "Scrum Masters serve the Product Owner in several ways, including helping with techniques for effective Product Backlog management.", zh: "Scrum Master 以多種方式服務產品負責人，包括幫助掌握有效的產品待辦清單管理技術。" }
];

function loadDailyQuote() {
    const quoteEl = document.getElementById('daily-quote');
    if (!quoteEl) return;
    
    const dayIndex = new Date().getDate() % dailyQuotes.length;
    const quote = dailyQuotes[dayIndex];
    
    quoteEl.innerHTML = `
        <p class="en-text">${quote.en}</p>
        <p class="zh-text">${quote.zh}</p>
        <footer>— Scrum Guide</footer>
    `;
}

// ===== 章節學習內容 =====
const chapterContent = {
    1: `
<h2>第一章：Scrum 概述</h2>

<h3>📌 什麼是 Scrum？</h3>
<p class="en-text">Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.</p>
<p class="zh-text">Scrum 是一個輕量的框架，幫助人們透過適應性解決方案為複雜問題產生價值。</p>

<div class="tip-box">
<strong>💡 重點理解：</strong>Scrum 不是方法论（methodology），它是框架（framework）。框架意味著你需要自己填充內容，它告訴你「哪裡需要關注」，但不告訴你「具體怎麼做」。
</div>

<h3>📌 經驗主義（Empiricism）</h3>
<p class="en-text">Scrum is founded on Empiricism. We believe that people will better work and achieve better results when they have the freedom to learn about their project and product, and adapt as they gain more insight.</p>
<p class="zh-text">Scrum 基於經驗主義。我們相信，當人們有自由去學習他們的項目和產品，並隨著更多洞察而調整時，他們會更好地工作和取得更好的成果。</p>

<p><span class="key-term">經驗主義三支柱：</span></p>
<ul>
    <li><strong>透明度（Transparency）：</strong>過程的顯著方面必須被視為一致，對有共同目的的人可見。</li>
    <li><strong>檢驗（Inspection）：</strong>Scrum 的使用者必須經常檢驗 Scrum 陣發器和進展目標。</li>
    <li><strong>調整（Adaptation）：</strong>如果某個方面變得不可接受，必須立即調整。</li>
</ul>

<h3>📌 精益思維（Lean Thinking）</h3>
<p>精益思維強調：</p>
<ul>
    <li>消除浪費（Eliminate Waste）</li>
    <li>最大化工作不做的量（Maximize the amount of work not done）</li>
    <li>快速交付（Deliver Fast）</li>
    <li>賦予團隊權力（Empower the Team）</li>
    <li>Built-in Quality（內建品質）</li>
    <li>了解（Know / Learn）</li>
</ul>

<h3>📌 Scrum 價值觀（5 大價值觀 - 考試必考！）</h3>
<div class="warning-box">
<strong>⚠️ 考試重點：</strong>Scrum 的五大價值觀是 PSM I 考試的高頻考點！記住它們：<strong>承諾、勇氣、專注、開放、尊重</strong>
</div>

<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <tr style="background: var(--primary-color); color: white;">
        <th style="padding: 10px; text-align: left;">英文</th>
        <th style="padding: 10px; text-align: left;">中文</th>
        <th style="padding: 10px; text-align: left;">說明</th>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Commitment</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">承諾</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">團隊致力於達成目標和支持彼此</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Courage</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">勇氣</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">團隊勇於做正確的事並追隨目標</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Focus</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">專注</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">一切集中在當前最優先的工作上</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Openness</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">開放</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">團隊和利益相關者開放溝通</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Respect</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">尊重</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">尊重彼此成為自主且最高效能的個人</td>
    </tr>
</table>

<div class="tip-box">
<strong>🎯 考試技巧：</strong>當題目問到「團隊價值什麼」或「團隊應該展現什麼價值觀」，答案一定要包含這 5 個價值觀。如果選項中有「所有這五個」，那就是正確答案。
</div>

<h3>📌 為什麼要用 Scrum？</h3>
<ul>
    <li><strong>控制生產力衰退：</strong>透過短週期交付，避免花半年做錯方向</li>
    <li><strong>降低市場風險：</strong>提早上市，根據市場反應調整</li>
    <li><strong>提高產品品質：</strong>每個 Sprint 都包含完整的設計、開發、測試</li>
    <li><strong>增強團隊承諾：</strong>團隊自我管理，不是被指派工作</li>
    <li><strong>加速資金回收：</strong>高優先級功能先做，提早產生收益</li>
</ul>
    `,
    2: `
<h2>第二章：Scrum 團隊（The Scrum Team）</h2>

<h3>📌 Scrum 團隊的三大角色</h3>
<p class="en-text">There are no sub-teams or hierarchies in the Scrum Team. It is a cohesive unit of professionals focused on one objective: the Product Goal.</p>
<p class="zh-text">Scrum 團隊中沒有子團隊或層級。它是一个專注於一個目標的緊密協作團隊：產品目標（Product Goal）。</p>

<div class="warning-box">
<strong>⚠️ 考試重點：</strong>Scrum 團隊只有三種角色：<strong>Developers（開發團隊）</strong>、<strong>Product Owner（產品負責人）</strong>、<strong>Scrum Master（Scrum Master）</strong>。沒有「專案經理」、沒有「團隊領導」！
</div>

<h3>1️⃣ Developers（開發團隊）</h3>
<p class="en-text">The Developers are the people of the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint.</p>
<p class="zh-text">開發團隊是 Scrum 團隊中，承諾在每個 Sprint 中創造任何可用增量部分的成員。</p>

<p><strong>核心責任（accountable for）：</strong></p>
<ul>
    <li>創建 Sprint 待辦清單（Sprint Backlog）</li>
    <li>在 Sprint 期間確保團隊保持生產力</li>
    <li>對品質負責（.adhere to the Definition of Done）</li>
    <li>自我管理（Self-managing）</li>
</ul>

<div class="tip-box">
<strong>💡 關鍵概念：</strong>
<ul>
    <li>「Developers」不只是程式設計師！任何為產品產生增量的角色都算（測試、UI設計、資料分析...）</li>
    <li>團隊規模通常建議 3-9 人（不含 PO 和 SM）</li>
    <li>開發團隊是<span class="key-term">跨職能（Cross-functional）</span>的，擁有完成工作所需的所有技能</li>
    <li><span class="key-term">只有開發團隊自己能決定 Sprint 能做多少事</span>，任何人不能強迫指派工作</li>
</ul>
</div>

<h3>2️⃣ Product Owner（產品負責人）</h3>
<p class="en-text">The Product Owner is one person, not a committee. The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team.</p>
<p class="zh-text">產品負責人是<span class="key-term">一個人</span>，不是一個委員會。產品負責人負責極大化產品價值。</p>

<p><strong>核心責任：</strong></p>
<ul>
    <li>明確表達<span class="key-term">產品目標（Product Goal）</span></li>
    <li>創建和管理<span class="key-term">產品待辦清單（Product Backlog）</span></li>
    <li>確保 Product Backlog 具有透明度、清晰且主題明確</li>
    <li>讓 Product Backlog 對利益相關者可知</li>
</ul>

<div class="warning-box">
<strong>⚠️ 常見誤區：</strong>
<ul>
    <li>❌ Product Owner = 專案經理（錯！PO 不管理團隊，只管理產品）</li>
    <li>❌ PO 是團隊的老闆（錯！PO 決定「做什麼」，但「怎么做」是團隊的事）</li>
    <li>❌ PO 可以是一個委員會（錯！PO 必須是一個人）</li>
    <li>❌ PO 負責決定技術實現（錯！技術決策是開發團隊的事）</li>
</ul>
</div>

<h3>3️⃣ Scrum Master（Scrum Master）</h3>
<p class="en-text">The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory and practice.</p>
<p class="zh-text">Scrum Master 負責建立 Scrum 如 Scrum Guide 所定義。他們透過幫助每個人理解 Scrum 理論與實務來做到這一點。</p>

<p><strong>核心責任：</strong></p>
<ul>
    <li>領導和指導團隊和組織使用 Scrum</li>
    <li>確保 Scrum 團隊了解並踐行 Scrum</li>
    <li>幫助利益相關者理解和採用 Scrum</li>
</ul>

<div class="tip-box">
<strong>💡 Scrum Master 的三種服務對象：</strong>
<ul>
    <li><strong>對團隊：</strong>指導如何自我管理、跨職能、高生產力；幫助 Scrum 事件按時限完成</li>
    <li><strong>對 PO：</strong>幫助定義產品目標、管理 Product Backlog、讓利益相關者參與</li>
    <li><strong>對組織：</strong>領導組織採用 Scrum 工作方式和策略規劃、移除組織層級的障礙</li>
</ul>
</div>

<h3>📌 三大角色的關鍵考點總結</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <tr style="background: var(--primary-color); color: white;">
        <th style="padding: 10px; text-align: left;">問題</th>
        <th style="padding: 10px; text-align: left;">正確答案</th>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">誰決定 Sprint 要做多少事？</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Developers</strong>（只有他們）</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">誰決定做什麼功能（優先順序）？</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Product Owner</strong></td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">誰確保團隊遵循 Scrum 規則？</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Scrum Master</strong></td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">誰負責品質？</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Developers</strong>（整個團隊）</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">誰對產品價值負責？</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Product Owner</strong></td>
    </tr>
</table>

<div class="tip-box">
<strong>🎯 考試關鍵字訣竅：</strong>
<ul>
    <li>看到 <span class="keyword">"accountable for maximizing value"</span> → 選 <strong>Product Owner</strong></li>
    <li>看到 <span class="keyword">"accountable for creating plan"</span> 或 <span class="keyword">"Sprint Backlog"</span> → 選 <strong>Developers</strong></li>
    <li>看到 <span class="keyword">"accountable for establishing Scrum"</span> → 選 <strong>Scrum Master</strong></li>
    <li>看到 <span class="keyword">"No one else tells them"</span> → 強調 <strong>Developers 自我決定</strong></li>
</ul>
</div>
    `,
    3: `
<h2>第三章：Scrum 事件（Scrum Events）</h2>

<h3>📌 Sprint（衝刺）</h3>
<p class="en-text">Sprints are the building blocks of Scrum. A Sprint is a fixed event during which a Done Increment is created. Sprints are between one and four calendar weeks in length. In longer Sprints, the team will plan at a higher level and refine the Product Backlog more frequently.</p>
<p class="zh-text">Sprint 是 Scrum 的建構塊。Sprint 是一個創造完成增量的固定事件。Sprint 長度為 1 到 4 週。在較長的 Sprint 中，團隊會以更高层次規劃並更頻繁地完善產品待辦清單。</p>

<div class="warning-box">
<strong>⚠️ 考試重點：</strong>
<ul>
    <li>Sprint 長度<span class="key-term">固定</span>（一旦決定，整個產品開發期間保持不變）</li>
    <li>最長<span class="key-term">4 週</span>（超過 4 週就不叫 Scrum 了）</li>
    <li>Sprint 期間<span class="key-term">不允許改變</span>產品目標（Product Goal）</li>
    <li>Sprint 期間<span class="key-term">不允許降低</span>品質標準（Definition of Done）</li>
    <li>Sprint 期間可以<span class="key-term">增加或修改</span>其他工作（但需經團隊同意）</li>
</ul>
</div>

<h3>📌 Sprint Planning（Sprint 規劃會議）</h3>
<p class="en-text">Sprint Planning initiates the Sprint by laying out the work necessary to achieve the agreed product goals. It serves as the collaborative event for the entire Scrum Team to define a Sprint Goal and plan the work.</p>
<p class="zh-text">Sprint Planning 透過列出實現商定產品目標所需的工作來啟動 Sprint。它作為整個 Scrum 團隊的協作事件來定義 Sprint 目標並規劃工作。</p>

<p><strong>三個主題：</strong></p>
<ol>
    <li><strong>為什麼這個 Sprint 很有價值？（Why？）</strong> → Product Owner 選擇高優先級的產品待辦項目</li>
    <li><strong>Sprint 期間要做什麼？（What？）</strong> → Developers 選擇哪些項目可以完成，並定義增量目標</li>
    <li><strong>如何做这项工作？（How？）</strong> → Developers 規劃如何做這些工作（通常在這階段創建 Sprint Backlog）</li>
</ol>

<p><strong>時間限制（Time-box）：</strong></p>
<ul>
    <li>對於一個月的 Sprint：<span class="key-term">最多 8 小時</span></li>
    <li>對於少於一個月的 Sprint：<span class="key-term">通常少於 8 小時</span>（按比例縮減）</li>
</ul>

<p><strong>產出：</strong></p>
<ul>
    <li><strong>Sprint 目標（Sprint Goal）：</strong>一個單一的目的，作為團隊為什麼要做這個 Sprint</li>
    <li><strong>Sprint 待辦清單（Sprint Backlog）：</strong>由 Sprint Goal、Product Backlog 項目（團隊承諾執行的）和行動計劃組成</li>
</ul>

<div class="tip-box">
<strong>💡 考試關鍵字：</strong>
<ul>
    <li>Sprint Planning 是<span class="keyword">整個 Scrum 團隊</span>一起參加（PO + SM + Developers）</li>
    <li>只有 <span class="keyword">Developers</span> 能估計他們在 Sprint 中能完成多少工作</li>
    <li>PO <span class="keyword">不能強迫</span>團隊接受特定數量的項目</li>
    <li>如果 Developers 認為無法達成 Sprint Goal，PO 需要一起調整範圍</li>
</ul>
</div>

<h3>📌 Daily Scrum（每日 Scrum）</h3>
<p class="en-text">The Daily Scrum is a 15-minute event for the Developers of the Scrum Team to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the planned work that could interfere with the predicted goals they can achieve within the current Sprint.</p>
<p class="zh-text">每日 Scrum 是 Scrum 團隊的開發團隊的一個 15 分鐘事件，用來檢查相對於 Sprint 目標的進度並在必要時調整 Sprint 待辦清單。</p>

<div class="warning-box">
<strong>⚠️ 重要觀念：</strong>
<ul>
    <li>Daily Scrum 是<span class="key-term">開發團隊的活動</span>，不是 Scrum Master 主持的</li>
    <li>PO 如果也在開發團隊中，也要參加；如果不在，就不需要參加</li>
    <li>時間限制：<span class="key-term">15 分鐘</span>（Time-box，不是 Duration！）</li>
    <li>每天都在同一時間同一地點舉行（減少複雜性）</li>
</ul>
</div>

<h3>📌 Sprint Review（Sprint 審查會議）</h3>
<p class="en-text">The purpose of the Sprint Review is to inspect the outcome of a Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.</p>
<p class="zh-text">Sprint Review 的目的是檢查 Sprint 的成果並確定未來的調整方向。Scrum 團隊向關鍵利益相關者展示工作成果，並討論相對於產品目標的進度。</p>

<p><strong>特點：</strong></p>
<ul>
    <li>不是「報告會議」，而是「協作工作時段」</li>
    <li>時間限制：一個月 Sprint 最多 <span class="key-term">4 小時</span></li>
    <li>產出：<span class="key-term">更新的 Product Backlog</span>（定義可能的範圍調整以最大化價值）</li>
</ul>

<h3>📌 Sprint Retrospective（Sprint 回顧會議）</h3>
<p class="en-text">The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done.</p>
<p class="zh-text">Sprint Retrospective 的目的是規劃增加品質和有效性的方法。Scrum 團隊檢查上一個 Sprint 在個人、互動、流程、工具和 Definition of Done 方面的表現。</p>

<p><strong>特點：</strong></p>
<ul>
    <li>只有 <span class="key-term">Scrum 團隊</span>參加（PO + SM + Developers）</li>
    <li>時間限制：一個月 Sprint 最多 <span class="key-term">3 小時</span></li>
    <li>產出：<span class="key-term">最有意義的改進項目</span>，在下一個 Sprint 中處理</li>
</ul>

<h3>📌 所有事件的完整時間限制總覽</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <tr style="background: var(--primary-color); color: white;">
        <th style="padding: 10px; text-align: left;">事件</th>
        <th style="padding: 10px; text-align: left;">參加者</th>
        <th style="padding: 10px; text-align: left;">時間限制（4 週 Sprint）</th>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Sprint</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Scrum Team</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">1-4 週</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Sprint Planning</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Scrum Team</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">8 小時</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Daily Scrum</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Developers</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">15 分鐘</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Sprint Review</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Scrum Team + 利益相關者</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">4 小時</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Sprint Retrospective</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Scrum Team</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">3 小時</td>
    </tr>
</table>

<div class="tip-box">
<strong>🎯 考試關鍵字訣竅：</strong>
<ul>
    <li>看到 <span class="keyword">"inspect and adapt"</span> → 可能是 Daily Scrum 或 Sprint Review</li>
    <li>看到 <span class="keyword">"quality and effectiveness"</span> → 選 <strong>Sprint Retrospective</strong></li>
    <li>看到 <span class="keyword">"present results to stakeholders"</span> → 選 <strong>Sprint Review</strong></li>
    <li>看到 <span class="keyword">"15 minutes"</span> + <span class="keyword">"Developers"</span> → 選 <strong>Daily Scrum</strong></li>
    <li>看到 <span class="keyword">"Sprint Goal"</span> + <span class="keyword">"Sprint Backlog"</span> → 選 <strong>Sprint Planning</strong></li>
</ul>
</div>
    `,
    4: `
<h2>第四章：Scrum 產出物（Scrum Artifacts）</h2>

<h3>📌 為什麼需要產出物？</h3>
<p class="en-text">Artifacts are designed to maximize transparency of key information. Each Artifact contains a <strong>Commitment</strong> to anchor information that reveals its full intent to the team and stakeholders.</p>
<p class="zh-text">產出物設計目的是為了最大化關鍵資訊的透明度。每個產出物都包含一個<span class="key-term">承諾（Commitment）</span>，用以揭示資訊的完整意圖。</p>

<div class="warning-box">
<strong>⚠️ 考試超重點：</strong>每個產出物都有一個對應的承諾，這是 PSM I 考試最常考的內容之一！請務必記住這三組配對：
</div>

<h3>📌 1. 產品待辦清單（Product Backlog）</h3>
<p class="en-text">An emergent, ordered list of what is needed to improve the product.</p>
<p class="zh-text">一個新興的、排序的清單，列出改善產品所需的一切。</p>

<p><strong>承諾：<span class="key-term">產品目標（Product Goal）</span></strong></p>
<p class="en-text">The Product Goal describes a future state of the product which is the ideal place for the Developers to start a new Sprint.</p>
<p class="zh-text">產品目標描述了產品的未來狀態，是開發團隊開始新 Sprint 的理想起點。</p>

<p><strong>Product Backlog 的特點：</strong></p>
<ul>
    <li>由 <strong>Product Owner</strong> 負責管理</li>
    <li>是<span class="key-term">動態的</span>（永遠在改變、增加、刪除、重新排序）</li>
    <li>隨著產品了解的增加，更詳細的項目會被添加進來</li>
    <li>沒有「完整」的時候——當產品不再需要時，Backlog 就結束了</li>
</ul>

<h3>📌 2. Sprint 待辦清單（Sprint Backlog）</h3>
<p class="en-text">The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), and the actionable plan for delivering the Increment (how).</p>
<p class="zh-text">Sprint 待辦清單由 Sprint 目標（為什麼）、選定的產品待辦項目（什麼）、以及交付增量的可執行計劃（怎麼做）組成。</p>

<p><strong>承諾：<span class="key-term">Sprint 目標（Sprint Goal）</span></strong></p>
<p class="en-text">The Sprint Goal is the single objective for the Sprint. It provides guidance to the Developers on why it is valuable to build the Increment.</p>
<p class="zh-text">Sprint 目標是 Sprint 的唯一目標。它向開發團隊提供為什麼增量有價值的指導。</p>

<p><strong>Sprint Backlog 的特點：</strong></p>
<ul>
    <li>由 <strong>Developers</strong> 負責創建</li>
    <li>是一個<span class="key-term">視覺化</span>（通常是看板）呈現計劃</li>
    <li>是<span class="key-term">團隊自有</span>（team-owned）的計劃</li>
    <li>在 Sprint 期間只有團隊可以修改</li>
</ul>

<h3>📌 3. 增量（Increment）</h3>
<p class="en-text">An Increment is a concrete stepping stone of the Product Goal. More precisely, an Increment is a sum of all the Product Backlog items completed during a Sprint and the previous Sprints.</p>
<p class="zh-text">增量是產品目標的一個具體墊腳石。更精確地說，增量是一個 Sprint 中完成的產品待辦項目和之前 Sprint 的總和。</p>

<p><strong>承諾：<span class="key-term">完成定義（Definition of Done）</span></strong></p>
<p class="en-text">The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product.</p>
<p class="zh-text">完成定義是對增量狀態的正式描述，當它滿足產品所需的质量標準時。</p>

<p><strong>Increment 的重要規則：</strong></p>
<ul>
    <li>一個 Sprint 可以產生多個增量，但<span class="key-term">至少必須有一個</span></li>
    <li>即使 PO 不發布，增量必須是<span class="key-term">可用的（Useful）</span>或<span class="key-term">可使用的（Usable）</span></li>
    <li>如果不符合 Definition of Done，增量<span class="key-term">不能發布</span></li>
    <li>新的增量是之前所有增量的<span class="key-term">彙總</span></li>
</ul>

<h3>📌 Definition of Done（完成定義）</h3>
<p class="en-text">The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. Whenever a product does not have a Definition of Done stated, the default is that the work meets the Definition of Done of the Scrum Team.</p>
<p class="zh-text">完成定義是对增量狀態的正式描述，當它滿足產品所需的质量標準時。當產品沒有明確的 Definition of Done 時，默認是工作符合 Scrum 團隊的 Definition of Done。</p>

<div class="tip-box">
<strong>💡 關於 Definition of Done 的考試重點：</strong>
<ul>
    <li>DoD 是<span class="key-term">品質門檻</span>，不是「流程步驟」</li>
    <li>DoD 是<span class="key-term">團隊的承諾</span>，不是建議清單</li>
    <li>DoD 適用於<span class="key-term">所有</span>產品待辦項目，不只是 Sprint 中的</li>
    <li>如果 DoD 在 Sprint 期間被更新，<span class="key-term">在更新之前完成的工作也需要符合新的 DoD</span>（這是考試陷阱題！）</li>
    <li>DoD 可以由組織級別定義（如：必須通過單元測試、程式碼審查、性能測試）</li>
</ul>
</div>

<h3>📌 三組產出物與承諾的配對（必考！）</h3>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <tr style="background: var(--primary-color); color: white;">
        <th style="padding: 10px; text-align: left;">產出物（Artifact）</th>
        <th style="padding: 10px; text-align: left;">承諾（Commitment）</th>
        <th style="padding: 10px; text-align: left;">關鍵用途</th>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Product Backlog</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Product Goal</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">描述產品的未來狀態</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Sprint Backlog</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Sprint Goal</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">提供 Sprint 的唯一目標</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Increment</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>Definition of Done</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">品質門檻，確保增量可用</td>
    </tr>
</table>

<div class="warning-box">
<strong>⚠️ 考試陷阱題提醒：</strong>
<ul>
    <li>❌ 「Sprint Backlog 的承諾是 Product Goal」→ 錯！應該是 Sprint Goal</li>
    <li>❌ 「Increment 的承諾是 Sprint Goal」→ 錯！應該是 Definition of Done</li>
    <li>❌ 「Product Backlog 沒有承諾」→ 錯！它有 Product Goal</li>
</ul>
</div>

<h3>📌 三種產出物的透明度</h3>
<p class="en-text">Each Artifact contains a commitment that serves to enhance transparency and focus control toward the artifact's goal. The commitments are an expert anchor for the artifact.</p>
<p class="zh-text">每個產出物都包含一個承諾，用以增強透明度和專注於產出物的目標。這些承諾是產出物的專家錨點。</p>

<div class="tip-box">
<strong>🎯 考試關鍵字訣竅：</strong>
<ul>
    <li>看到 <span class="keyword">"maximize transparency"</span> + <span class="keyword">"key information"</span> → 談的是 <strong>產出物的目的</strong></li>
    <li>看到 <span class="keyword">"formal description"</span> + <span class="keyword">"quality measures"</span> → 選 <strong>Definition of Done</strong></li>
    <li>看到 <span class="keyword">"single objective"</span> → 選 <strong>Sprint Goal</strong></li>
    <li>看到 <span class="keyword">"future state of the product"</span> → 選 <strong>Product Goal</strong></li>
    <li>看到 <span class="keyword">"sum of all"</span> + <span class="keyword">"completed during Sprint"</span> → 選 <strong>Increment</strong></li>
</ul>
</div>
    `,
    5: `
<h2>第五章：考試重點與技巧</h2>

<h3>📌 考試基本資訊</h3>
<ul>
    <li><strong>考試名稱：</strong>Professional Scrum Master I (PSM I)</li>
    <li><strong>考試機構：</strong>Scrum.org（由 Scrum 共同創辦人 Ken Schwaber 創立）</li>
    <li><strong>題目數量：</strong>80 題</li>
    <li><strong>考試時間：</strong>60 分鐘（平均每題 45 秒！）</li>
    <li><strong>及格標準：</strong>85% 答對率（需答對 68 題以上）</li>
    <li><strong>考試費用：</strong>$150 美元（一次付費，終身有效）</li>
    <li><strong>考試形式：</strong>線上考試，在家即可參加</li>
    <li><strong>題型：</strong>單選題、複選題、是非題</li>
</ul>

<h3>📌 考試範圍</h3>
<p>PSM I 考試 100% 基於 <strong>Scrum Guide</strong>。Scrum Guide 只有短短幾頁，但每個字都很重要！</p>

<div class="tip-box">
<strong>💡 學習建議：</strong>
<ol>
    <li>反覆閱讀 Scrum Guide（至少 5 遍以上）</li>
    <li>理解每個名詞的定義，不只是背誦</li>
    <li>練習情境題，培養 Scrum 思維</li>
    <li>做免費的 Open Assessment 模擬題</li>
</ol>
</div>

<h3>📌 解題技巧：關鍵字識別</h3>
<p>PSM I 考試大部分是情境題（Scenario-based）。學會識別關鍵字是快速解題的關鍵！</p>

<h4>一、角色相關關鍵字</h4>
<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
    <tr style="background: var(--primary-color); color: white;">
        <th style="padding: 10px; text-align: left;">關鍵字</th>
        <th style="padding: 10px; text-align: left;">對應角色</th>
        <th style="padding: 10px; text-align: left;">說明</th>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>accountable for maximizing value</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Product Owner</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">PO 的唯一責任是極大化產品價值</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>accountable for Scrum effectiveness</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Scrum Master</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">SM 負責確保 Scrum 被正確理解與實踐</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>accountable for creating a plan</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Developers</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">只有 Developers 能創建 Sprint Backlog</td>
    </tr>
    <tr style="background: var(--bg-secondary);">
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>No one else tells them</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Developers</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">強調 Developers 的自我管理</td>
    </tr>
    <tr>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><strong>one person, not a committee</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">Product Owner</td>
        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">PO 必須是一個人</td>
    </tr>
</table>

<h4>二、錯誤選項特徵</h4>
<div class="warning-box">
<strong>❌ 看到這些字眼通常表示選項是錯的：</strong>
<ul>
    <li><strong>"assign"</strong>（指派）→ Scrum 沒有指派工作這回事</li>
    <li><strong>"manager"</strong（經理）→ Scrum 沒有專案經理</li>
    <li><strong>"overtime"</strong>（加班）→ Scrum 提倡可持續節奏</li>
    <li><strong>"split the team"</strong>（拆分團隊）→ 團隊應該保持穩定</li>
    <li><strong>"change the Sprint Goal"</strong>（改變 Sprint 目標）→ 不應該在 Sprint 期間改變</li>
    <li><strong>"reduce scope of Definition of Done"</strong>（降低 DoD）→ 不能為了趕進度降低標準</li>
    <li><strong>"Scrum Master decides"</strong>（Scrum Master 決定）→ SM 不做決策，團隊自我管理</li>
    <li><strong>"voting / majority"</strong>（投票/多數決）→ Scrum 講求共識</li>
</ul>
</div>

<h4>三、正確選項特徵</h4>
<div class="tip-box">
<strong>✅ 看到這些字眼通常表示選項是對的：</strong>
<ul>
    <li><strong>"team decides together"</strong>（團隊一起決定）→ 自我管理</li>
    <li><strong>"collaborate"</strong>（協作）→ Scrum 強調合作</li>
    <li><strong>"inspect and adapt"</strong>（檢驗和調整）→ 經驗主義核心</li>
    <li><strong>"transparency"</strong>（透明度）→ Scrum 三大支柱之一</li>
    <li><strong>"value"</strong>（價值）→ PO 的核心關注點</li>
    <li><strong>"remove impediment"</strong>（移除障礙）→ SM 的核心工作</li>
    <li><strong>"self-managing"</strong>（自我管理）→ Developers 的核心特質</li>
</ul>
</div>

<h3>📌 常見考試陷阱題</h3>

<h4>陷阱一：PO 能不能直接找開發團隊成員談需求？</h4>
<p>❌ 錯誤答案：PO 應該直接找開發團隊成員討論技術細節</p>
<p>✅ 正確答案：PO 主要與 Developers 團隊整體溝通，但實際上 PO 隨時可以和 Developers 討論（只是不能「指派」工作）</p>

<h4>陷阱二：Sprint 期間可以加入新需求嗎？</h4>
<p>❌ 錯誤答案：不可以，Sprint 期間完全不能改變</p>
<p>✅ 正確答案：如果需求非常重要，PO 可以和 Developers 討論，必要時可以<strong>取消 Sprint</strong>（但很少發生）</p>

<h4>陷阱三：Daily Scrum 一定要站著開嗎？</h4>
<p>❌ 錯誤答案：Scrum Guide 規定必須站著開（這是迷思！）</p>
<p>✅ 正確答案：Scrum Guide 只說 15 分鐘 Time-box，沒規定姿勢或形式</p>

<h4>陷阱四：Scrum Master 可以是 Part-time 嗎？</h4>
<p>❌ 錯誤答案：Scrum Master 必須是 Full-time（這是迷思！）</p>
<p>✅ 正確答案：Scrum Guide 建議 SM 是 Full-time，因為這是一個重要的角色，但不是絕對規定</p>

<h4>陷阱五：Sprint 結束後可以做 Retrospective 嗎？</h4>
<p>❌ 錯誤答案：不可以，必須在 Sprint 內完成所有事件</p>
<p>✅ 正確答案：Sprint Retrospective 是 Sprint 的最後一個事件，<strong>一定</strong>要在 Sprint 期間舉行</p>

<h3>📌 時間管理技巧</h3>
<p>60 分鐘 80 題，平均每題只有 45 秒！</p>
<ol>
    <li><strong>先讀題目，再讀選項</strong> — 不要先被選項干擾</li>
    <li><strong>識別關鍵字</strong> — 快速找出題目在問什麼角色/事件/產出物</li>
    <li><strong>排除明顯錯誤選項</strong> — 通常可以先排除 1-2 個</li>
    <li><strong>不會的題目標記後繼續</strong> — 不要在一題上花超過 2 分鐘</li>
    <li><strong>最後回頭處理標記的題目</strong> — 剩餘時間再仔細思考</li>
</ol>

<div class="tip-box">
<strong>🎯 最後提醒：</strong>
<ul>
    <li>PSM I 考試是<strong>開卷考試</strong>（Open Book），可以帶筆記進考場</li>
    <li>但時間非常緊迫，<strong>不可能邊看書邊找答案</strong></li>
    <li>所以必須透過練習達到<strong>關鍵字反射</strong>——看到題目關鍵字就能直覺知道答案</li>
    <li>建議模擬題答對率穩定在 <strong>90% 以上</strong>再去參加正式考試</li>
</ul>
</div>
    `
};

// ===== 顯示章節內容 =====
function showChapter(chapterNum) {
    const chapterList = document.getElementById('chapterList');
    const chapterContent = document.getElementById('chapterContent');
    const chapterBody = document.getElementById('chapterBody');
    
    if (!chapterContent || !chapterBody) return;
    
    chapterList.style.display = 'none';
    chapterContent.style.display = 'block';
    
    chapterBody.innerHTML = chapterContent[chapterNum] || '<p>章節內容尚未建立。</p>';
    
    // 更新學習進度
    const progress = getProgress();
    if (!progress.chaptersRead) progress.chaptersRead = {};
    progress.chaptersRead[chapterNum] = true;
    saveProgress(progress);
}

function backToChapters() {
    const chapterList = document.getElementById('chapterList');
    const chapterContent = document.getElementById('chapterContent');
    
    if (chapterList) chapterList.style.display = 'flex';
    if (chapterContent) chapterContent.style.display = 'none';
}

// ===== 進度頁面 =====
function loadProgressPage() {
    const progress = getProgress();
    
    // 更新統計數字
    const totalAnswered = progress.totalAnswered || 0;
    const correct = progress.correct || 0;
    const accuracy = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    
    const statTotalEl = document.getElementById('statTotalAnswered');
    const statCorrectEl = document.getElementById('statCorrect');
    const statAccuracyEl = document.getElementById('statAccuracy');
    const statExamEl = document.getElementById('statExamScore');
    
    if (statTotalEl) statTotalEl.textContent = totalAnswered;
    if (statCorrectEl) statCorrectEl.textContent = correct;
    if (statAccuracyEl) statAccuracyEl.textContent = accuracy + '%';
    
    // 模擬考最高分
    const exams = progress.examHistory || [];
    if (exams.length > 0) {
        const highest = Math.max(...exams.map(e => e.score || 0));
        if (statExamEl) statExamEl.textContent = highest + '%';
    }
    
    // 更新章節進度圖表
    updateSectionCharts(progress);
    
    // 更新模擬考試歷史
    updateExamHistory(progress);
    
    // 更新弱點題目
    updateWeakQuestions(progress);
}

function updateSectionCharts(progress) {
    const sectionNames = ['三大角色篇', '五大事件篇', '三大產出物篇', '綜合情境題'];
    const sectionTotals = [30, 25, 25, 20];
    
    // 進度圖表
    const progressChart = document.getElementById('sectionProgressChart');
    if (progressChart) {
        progressChart.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
            const section = progress.sectionProgress[i] || { attempted: 0, correct: 0 };
            const percentage = Math.round((section.attempted / sectionTotals[i-1]) * 100);
            
            const row = document.createElement('div');
            row.className = 'bar-row';
            row.innerHTML = `
                <div class="bar-label">${sectionNames[i-1]}</div>
                <div class="bar-track">
                    <div class="bar-fill section-${i}" style="width: ${percentage}%">${percentage}%</div>
                </div>
            `;
            progressChart.appendChild(row);
        }
    }
    
    // 答對率圖表
    const accuracyChart = document.getElementById('sectionAccuracyChart');
    if (accuracyChart) {
        accuracyChart.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
            const section = progress.sectionProgress[i] || { attempted: 0, correct: 0 };
            const percentage = section.attempted > 0 ? Math.round((section.correct / section.attempted) * 100) : 0;
            
            const row = document.createElement('div');
            row.className = 'bar-row';
            row.innerHTML = `
                <div class="bar-label">${sectionNames[i-1]}</div>
                <div class="bar-track">
                    <div class="bar-fill section-${i}" style="width: ${percentage}%">${percentage}%</div>
                </div>
            `;
            accuracyChart.appendChild(row);
        }
    }
}

function updateExamHistory(progress) {
    const examList = document.getElementById('examHistoryList');
    if (!examList) return;
    
    const exams = progress.examHistory || [];
    if (exams.length === 0) {
        examList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">尚無考試記錄</p>';
        return;
    }
    
    examList.innerHTML = '';
    exams.slice().reverse().forEach(exam => {
        const item = document.createElement('div');
        item.className = 'weak-item';
        const passed = exam.score >= 85;
        item.innerHTML = `
            <div>
                <strong>${passed ? '✅' : '❌'} 模擬考試</strong>
                <span style="color: var(--text-secondary); font-size: 0.85rem; margin-left: 10px;">${exam.date}</span>
            </div>
            <div>
                <span style="font-weight: 600; color: ${passed ? 'var(--success-color)' : 'var(--danger-color)'};">${exam.score}%</span>
                <span style="color: var(--text-secondary); font-size: 0.85rem; margin-left: 5px;">(${exam.correct}/${exam.total})</span>
            </div>
        `;
        examList.appendChild(item);
    });
}

function updateWeakQuestions(progress) {
    const weakList = document.getElementById('weakQuestionsList');
    const weakContainer = document.getElementById('weakReviewContainer');
    if (!weakList) return;
    
    const weakQuestions = progress.weakQuestions || {};
    const questionIds = Object.keys(weakQuestions);
    
    if (questionIds.length === 0) {
        weakList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">太棒了！目前沒有需要加強的題目。</p>';
        if (weakContainer) weakContainer.style.display = 'none';
        return;
    }
    
    if (weakContainer) weakContainer.style.display = 'block';
    weakList.innerHTML = '';
    
    questionIds.slice(0, 10).forEach(qId => {
        const count = weakQuestions[qId];
        const item = document.createElement('div');
        item.className = 'weak-item';
        item.innerHTML = `
            <div class="question-preview">題目 #${qId}</div>
            <span class="wrong-count">錯 ${count} 次</span>
        `;
        weakList.appendChild(item);
    });
}

function exportProgress() {
    const progress = getProgress();
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'psm_progress_' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
}

function startWeakReview() {
    const progress = getProgress();
    const weakQuestionIds = Object.keys(progress.weakQuestions || {});
    if (weakQuestionIds.length === 0) {
        alert('目前沒有需要加強的題目！');
        return;
    }
    // 導向測驗頁面，標記為弱點複習模式
    sessionStorage.setItem('weakReview', JSON.stringify(weakQuestionIds));
    window.location.href = 'quiz.html';
}

// ===== 儀表板初始化 =====
function updateDashboardStats() {
    updateDashboardProgress();
    updateChapterStatus();
    updateSidebarStats();
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    updateDashboardStats();
    loadDailyQuote();
});