// Bilingual support for the example site (English default, 繁體中文 optional).
// The choice is remembered in localStorage.
// Students: when you add new visible text, add the key to BOTH `en` and `zh`.

const I18N = {
  en: {
    "site.name": "Translation Corpus Explorer",
    "site.badge": "Example",
    "nav.home": "Home",
    "nav.explore": "Explore",
    "nav.visualize": "Visualize",
    "nav.report": "Report",
    "nav.codebook": "Codebook",
    "nav.about": "About",
    "footer.about": "About this site and data",
    "lang.toggle": "中文",

    "title.index": "Translation Corpus Explorer (Example)",
    "title.explore": "Explore · Translation Corpus Explorer (Example)",
    "title.visualize": "Visualize · Translation Corpus Explorer (Example)",
    "title.report": "Learning Report · Translation Corpus Explorer (Example)",
    "title.codebook": "Codebook · Translation Corpus Explorer (Example)",
    "title.about": "About · Translation Corpus Explorer (Example)",

    "index.h2": "An example site for your final project",
    "index.p": "This is a small, working example. It uses sample data from OpenSubtitles (60 English–Chinese subtitle pairs). Read the code, copy the structure, and replace the data with your own corpus.",
    "card.explore.h": "Explore",
    "card.explore.p": "Search the corpus by keyword and filter by category and human check.",
    "card.visualize.h": "Visualize",
    "card.visualize.p": "Two charts that update when you change the filters.",
    "card.report.h": "Report",
    "card.report.p": "A learning report: origin, gap, method, analysis, conclusion, and reflection.",
    "card.codebook.h": "Codebook",
    "card.codebook.p": "An example codebook: how to define categories and apply them consistently.",
    "notice.h": "Sample data notice.",
    "notice.p": "The entries on this site are examples taken from a public subtitle corpus. Some alignments are imperfect. This is intentional: it shows why spot-checking matters.",

    "explore.h2": "Explore the corpus",
    "explore.q": "Search (English or Chinese)",
    "explore.q.ph": "e.g., court, 法庭",
    "explore.cat": "Category",
    "explore.cat.all": "All categories",
    "explore.chk": "Human checked?",
    "opt.all": "All",
    "opt.yes": "Yes",
    "opt.no": "No",
    "explore.th.num": "#",
    "explore.th.en": "English (source)",
    "explore.th.zh": "Chinese (target)",
    "explore.th.cat": "Category",
    "explore.th.chk": "Checked",
    "explore.count": "Showing {n} of {total} entries",
    "status.loading": "Loading…",
    "status.error": "Error: ",

    "viz.h2": "Visualize the corpus",
    "viz.p": "Change a filter and both charts update.",
    "viz.count": "{n} of {total} entries match the filters",
    "viz.bar.h": "Entries per category (bar chart)",
    "viz.bar.label": "Entries",
    "viz.pie.h": "Share of entries by human check (pie chart)",
    "viz.pie.checked": "Checked",
    "viz.pie.notchecked": "Not checked",

    "report.h2": "Learning Report",
    "report.note": "Example structure. Replace each paragraph with your own text. Keep the eight section headings.",
    "report.s1": "1. Origin",
    "report.s1.p": "Why did you choose this topic? Describe the moment you noticed the translation problem. Be personal and specific.",
    "report.s2": "2. Background",
    "report.s2.p": "What is the context? Introduce the languages, the text type, and the translation issue in a few sentences.",
    "report.s3": "3. Gap",
    "report.s3.p": "What is missing or unclear in what already exists? Name the gap in one sentence, then explain it.",
    "report.s4": "4. Questions",
    "report.li1": "Question one.",
    "report.li2": "Question two.",
    "report.s5": "5. Method",
    "report.s5.p": "Where did your data come from? How did you collect it, clean it, and categorize it? How many entries did you check by hand, and how many errors did you find? How did you classify the errors?",
    "report.ph.method": "Insert a screenshot or a simple diagram of your workflow here.",
    "report.s6": "6. Analysis",
    "report.s6.p": "What does the data show? Refer to a chart on your Visualize page.",
    "report.ph.analysis": "Insert your chart image here, with a caption that states the key finding.",
    "report.s7": "7. Conclusion",
    "report.s7.p": "What did you achieve? Answer your questions directly. State the limits of your data.",
    "report.s8": "8. Reflection",
    "report.s8.p": "What did you learn? What was difficult? What did AI help with, and where did it fail? What would you do differently?",

    "about.h2": "About this site",
    "about.p1": "This is an example site for the 2026R1 final project. It shows the structure students can adapt: search and filters, two charts that respond to filters, a codebook, and a learning report.",
    "about.h.source": "Data source",
    "about.p.source": "The sample data (<code>data/sample.json</code>) contains 60 English–Chinese subtitle pairs from the <strong>OpenSubtitles</strong> corpus (version 2024, English–Simplified Chinese). Entries were selected at random and filtered to remove profanity. Chinese text is in Simplified characters because that is how the source corpus is written.<br>Source: <a href=\"https://www.opensubtitles.org/\" target=\"_blank\" rel=\"noopener\">opensubtitles.org</a>. Please cite the corpus you use. Other corpora: OPUS (<a href=\"https://opus.nlpl.eu/\" target=\"_blank\" rel=\"noopener\">opus.nlpl.eu</a>).",
    "about.h.human": "Human check",
    "about.p.human": "All sample entries are marked <code>human_checked: \"no\"</code>. Some alignments are imperfect; for example, one English line may be paired with a Chinese line that does not match. Your own project should mark only entries you have checked yourself.",
    "about.h.ai": "AI use declaration (example)",
    "about.p.ai": "This example site was built with an AI agent. The agent wrote the HTML, CSS, and JavaScript, and the sample data was extracted from the local corpus files with a script. The developer checked the code by running it locally and by viewing the published pages.",
    "about.h.codebook": "Codebook",
    "about.p.codebook": "See the <a href=\"codebook.html\">Codebook</a> page for an example of category definitions. It is an illustration written by an AI agent, not a validated scheme.",
    "about.h.rights": "Copyright and privacy",
    "about.p.rights": "The sample uses short subtitle lines for demonstration only. Do not publish full copyrighted texts or personal information on your own site.",
    "about.back": "← Back to Home",

    "codebook.h2": "Codebook (example)",
    "codebook.note": "This codebook is an illustrative example written by an AI agent for the sample data. It is not a validated scheme. Write your own definitions, and explain why you kept or dropped each category.",
    "codebook.what.h": "What is a codebook?",
    "codebook.what.p": "A codebook is a document that defines each category, gives rules for applying it, and shows examples. It lets you (and other people) apply the categories the same way every time.",
    "codebook.struct.h": "What each category needs",
    "codebook.struct.p": "Each category should have: a name, a definition, a theory source, a decision rule, a positive example, a negative example, and a boundary case.",
    "codebook.cat.h": "Categories (illustrative)",
    "cb.lit.h": "L — Literal",
    "cb.lit.p": "<strong>Definition:</strong> The target text keeps the sentence structure and most of the wording of the source.<br><strong>Theory source:</strong> Vinay &amp; Darbelnet (1958/1995), direct translation procedures.<br><strong>Decision rule:</strong> Choose L when the sentence structure and the lexical items correspond, with only small adjustments.<br><strong>Positive example:</strong> “Thanks. I'll get started now.” → 「謝謝，那我開始了」<br><strong>Negative example:</strong> “Thanks.” is not L if the target changes the whole sentence into a different idiom.",
    "cb.dom.h": "D — Domesticated",
    "cb.dom.p": "<strong>Definition:</strong> The target text replaces a source expression with a natural, idiomatic Chinese expression, so the sentence reads as if it were written in Chinese.<br><strong>Theory source:</strong> Venuti (1995), domestication.<br><strong>Decision rule:</strong> Choose D when the target uses a different idiom or image that Chinese readers would expect.<br><strong>Positive example:</strong> “That's what I mean by you make no sense.” → 「所以說你胡說八道」<br><strong>Negative example:</strong> “Thanks. I'll get started now.” → 「謝謝，那我開始了」 is L, not D, because the structure is kept.",
    "cb.align.h": "A — Alignment error (a flag, not a strategy)",
    "cb.align.p": "<strong>Definition:</strong> The two lines are not a translation of the same sentence, or the Chinese line contains extra material.<br><strong>Decision rule:</strong> Choose A before you choose L or D. If the pair is not a translation of the same sentence, do not classify its strategy.<br><strong>Positive example:</strong> “That's not the same thing.” → 「一反常態」 (the meanings do not correspond)<br><strong>Negative example:</strong> A pair that is a clear translation with a loose wording is not A; it is L or D.",
    "cb.bound.h": "Boundary case: “Excuse me, please.” → 「请原谅, 谢谢.」",
    "cb.bound.p": "The politeness formula is replaced (“Excuse me” → 請原諒) and an extra 謝謝 is added that is not in the source. This could be D (idiomatic replacement) or a special case of L (the same speech act). The codebook should not decide this for you. Write down both options, choose one, and give your reason. This is exactly the kind of case your Reflection and your oral presentation should discuss.",
    "cb.rules.h": "Decision order (for the example)",
    "cb.rules.p": "<ol><li>Check the alignment first. If the pair is not the same sentence, code <strong>A</strong>.</li><li>Compare structure and wording. If they are kept, code <strong>L</strong>.</li><li>If the target uses a different idiom that Chinese readers would expect, code <strong>D</strong>.</li><li>If you are still unsure, mark the entry as a boundary case, record both options, and choose one with a reason.</li></ol>",
    "cb.mine.h": "Writing your own codebook",
    "cb.mine.p": "Use the template in the assignment brief. Start with two to four categories, test them on 20 to 30 entries, then revise the definitions. Record every change and why you made it. AI can draft the codebook, but you must rewrite the definitions in your own words and be able to explain them in your oral presentation.",

    "cat.Statement": "Statement",
    "cat.Question": "Question",
    "cat.Exclamation": "Exclamation",
    "cat.Short phrase / command": "Short phrase / command"
  },

  zh: {
    "site.name": "翻譯語料探索器",
    "site.badge": "範例",
    "nav.home": "首頁",
    "nav.explore": "探索",
    "nav.visualize": "視覺化",
    "nav.report": "報告",
    "nav.codebook": "編碼手冊",
    "nav.about": "關於",
    "footer.about": "關於本網站與資料",
    "lang.toggle": "English",

    "title.index": "翻譯語料探索器（範例）",
    "title.explore": "探索 · 翻譯語料探索器（範例）",
    "title.visualize": "視覺化 · 翻譯語料探索器（範例）",
    "title.report": "學習報告 · 翻譯語料探索器（範例）",
    "title.codebook": "編碼手冊 · 翻譯語料探索器（範例）",
    "title.about": "關於 · 翻譯語料探索器（範例）",

    "index.h2": "期末專題的範例網站",
    "index.p": "這是一個小型、可運作的範例。它使用 OpenSubtitles 的樣本資料（60 組英中字幕對照）。請閱讀程式碼、借用其架構，並以你自己的語料取代樣本資料。",
    "card.explore.h": "探索",
    "card.explore.p": "以關鍵字搜尋語料，並依類別與人工檢驗狀態篩選。",
    "card.visualize.h": "視覺化",
    "card.visualize.p": "兩張圖表，篩選條件改變時會同步更新。",
    "card.report.h": "報告",
    "card.report.p": "學習報告：起源、研究缺口、方法、分析、結論與反思。",
    "card.codebook.h": "編碼手冊",
    "card.codebook.p": "編碼手冊範例：如何定義類別並一致地套用。",
    "notice.h": "樣本資料說明。",
    "notice.p": "本網站的資料取自公開字幕語料，部分對齊有誤。這是刻意保留的，用以說明為何需要抽查。",

    "explore.h2": "探索語料",
    "explore.q": "搜尋（英文或中文）",
    "explore.q.ph": "例如：court、法庭",
    "explore.cat": "類別",
    "explore.cat.all": "所有類別",
    "explore.chk": "是否人工檢驗？",
    "opt.all": "全部",
    "opt.yes": "是",
    "opt.no": "否",
    "explore.th.num": "#",
    "explore.th.en": "英文（原文）",
    "explore.th.zh": "中文（譯文）",
    "explore.th.cat": "類別",
    "explore.th.chk": "已檢驗",
    "explore.count": "顯示 {total} 筆中的 {n} 筆",
    "status.loading": "載入中…",
    "status.error": "錯誤：",

    "viz.h2": "視覺化語料",
    "viz.p": "更改篩選條件，兩張圖表都會同步更新。",
    "viz.count": "{total} 筆中有 {n} 筆符合篩選條件",
    "viz.bar.h": "各類別的筆數（長條圖）",
    "viz.bar.label": "筆數",
    "viz.pie.h": "依人工檢驗狀態的比例（圓餅圖）",
    "viz.pie.checked": "已檢驗",
    "viz.pie.notchecked": "未檢驗",

    "report.h2": "學習報告",
    "report.note": "範例結構。請以你自己的文字取代每段內容，並保留八個章節標題。",
    "report.s1": "1. 起源",
    "report.s1.p": "你為什麼選擇這個題目？描述你第一次注意到這個翻譯問題的時刻，具體而個人化。",
    "report.s2": "2. 背景",
    "report.s2.p": "脈絡為何？用幾句話介紹語言、文本類型與翻譯問題。",
    "report.s3": "3. 研究缺口",
    "report.s3.p": "現有研究缺了什麼，或哪裡不清楚？先用一句話點出缺口，再加以說明。",
    "report.s4": "4. 研究問題",
    "report.li1": "問題一。",
    "report.li2": "問題二。",
    "report.s5": "5. 方法",
    "report.s5.p": "資料從何而來？你如何蒐集、清理與分類？你人工檢查了多少筆？發現多少錯誤？你如何將錯誤分類？",
    "report.ph.method": "在此插入工作流程的截圖或簡單示意圖。",
    "report.s6": "6. 分析",
    "report.s6.p": "資料顯示什麼？請引用「視覺化」頁面中的圖表。",
    "report.ph.analysis": "在此插入圖表，並附上說明主要發現的圖說。",
    "report.s7": "7. 結論",
    "report.s7.p": "你達成了什麼？直接回答你的研究問題，並說明資料的限制。",
    "report.s8": "8. 反思",
    "report.s8.p": "你學到什麼？哪裡困難？AI 幫了什麼忙，又在哪裡出錯？如果重做，你會怎麼改？",

    "about.h2": "關於本網站",
    "about.p1": "這是 2026R1 期末專題的範例網站，展示學生可以調整的架構：搜尋與篩選、兩張會隨篩選更新的圖表、編碼手冊，以及學習報告。",
    "about.h.source": "資料來源",
    "about.p.source": "樣本資料（<code>data/sample.json</code>）包含 OpenSubtitles 語料（2024 版，英文—簡體中文）中隨機抽取的 60 組英中字幕對照，並已過濾粗口。中文為簡體字，因為原始語料即為簡體。<br>來源：<a href=\"https://www.opensubtitles.org/\" target=\"_blank\" rel=\"noopener\">opensubtitles.org</a>。請引用你所使用的語料。其他語料：OPUS（<a href=\"https://opus.nlpl.eu/\" target=\"_blank\" rel=\"noopener\">opus.nlpl.eu</a>）。",
    "about.h.human": "人工檢驗",
    "about.p.human": "所有樣本都標記為 <code>human_checked: \"no\"</code>。部分對齊有誤，例如一句英文配上不相符的中文。你自己的專案只應標記你親自檢查過的條目。",
    "about.h.ai": "AI 使用聲明（範例）",
    "about.p.ai": "本範例網站由 AI 代理協助建置：HTML、CSS 與 JavaScript 由 AI 撰寫，樣本資料以腳本從本地語料檔擷取。開發者以本地執行與檢視已發佈頁面的方式檢查程式碼。",
    "about.h.codebook": "編碼手冊",
    "about.p.codebook": "類別定義範例請見<a href=\"codebook.html\">「編碼手冊」頁</a>。那是 AI 代理撰寫的示意，並非經過驗證的分類架構。",
    "about.h.rights": "版權與隱私",
    "about.p.rights": "樣本僅以短句字幕示範用途。你自己的網站請勿發佈完整受版權保護的文本或個人資料。",
    "about.back": "← 返回首頁",

    "codebook.h2": "編碼手冊（範例）",
    "codebook.note": "此編碼手冊是 AI 代理針對樣本資料撰寫的示意範例，並非經過驗證的分類架構。請撰寫你自己的定義，並說明你為何保留或捨棄每個類別。",
    "codebook.what.h": "什麼是編碼手冊？",
    "codebook.what.p": "編碼手冊是一份文件，用來定義每個類別、說明套用規則，並提供範例。它讓你（以及其他人）每次都能以相同方式套用類別。",
    "codebook.struct.h": "每個類別需要什麼",
    "codebook.struct.p": "每個類別應包含：名稱、定義、理論出處、判斷規則、正例、反例與邊界案例。",
    "codebook.cat.h": "類別（示意）",
    "cb.lit.h": "L — 直譯",
    "cb.lit.p": "<strong>定義：</strong>譯文保留原文的句子結構與大部分用詞。<br><strong>理論出處：</strong>Vinay &amp; Darbelnet（1958/1995），直接翻譯程序。<br><strong>判斷規則：</strong>當句子結構與詞彙對應、只有小幅調整時，選 L。<br><strong>正例：</strong>“Thanks. I'll get started now.” → 「謝謝，那我開始了」<br><strong>反例：</strong>若譯文把整句改成另一種習語，“Thanks.” 這類句子就不是 L。",
    "cb.dom.h": "D — 歸化",
    "cb.dom.p": "<strong>定義：</strong>譯文以自然、符合中文習慣的說法取代原文表達，使句子讀起來像是用中文寫成。<br><strong>理論出處：</strong>Venuti（1995），歸化。<br><strong>判斷規則：</strong>當譯文使用中文讀者會預期的另一種習語或意象時，選 D。<br><strong>正例：</strong>“That's what I mean by you make no sense.” → 「所以說你胡說八道」<br><strong>反例：</strong>“Thanks. I'll get started now.” → 「謝謝，那我開始了」是 L 而非 D，因為結構保留了。",
    "cb.align.h": "A — 對齊錯誤（標記，而非翻譯策略）",
    "cb.align.p": "<strong>定義：</strong>兩行並非同一句話的翻譯，或中文行含有多餘內容。<br><strong>判斷規則：</strong>先判斷 A，再判斷 L 或 D。若兩行不是同一句話的翻譯，就不要判斷其策略。<br><strong>正例：</strong>“That's not the same thing.” → 「一反常態」（意思不對應）<br><strong>反例：</strong>一組明顯是翻譯、只是用詞鬆散的配對，不是 A，應是 L 或 D。",
    "cb.bound.h": "邊界案例：“Excuse me, please.” → 「请原谅, 谢谢.」",
    "cb.bound.p": "客套語被替換（“Excuse me” → 請原諒），又加入原文沒有的「謝謝」。這可以視為 D（習語式替換），也可以視為 L 的特例（同一言語行為）。編碼手冊不應替你決定。請寫下兩種選項，選一個並說明理由。這正是你的反思與口頭報告應該討論的類型。",
    "cb.rules.h": "判斷順序（以本範例為例）",
    "cb.rules.p": "<ol><li>先檢查對齊。若兩行不是同一句話，編 <strong>A</strong>。</li><li>比較結構與用詞。若都保留，編 <strong>L</strong>。</li><li>若譯文使用中文讀者會預期的另一種習語，編 <strong>D</strong>。</li><li>若仍不確定，標記為邊界案例，記錄兩種選項，並選一個附上理由。</li></ol>",
    "cb.mine.h": "撰寫你自己的編碼手冊",
    "cb.mine.p": "請使用作業說明中的範本。先從兩到四個類別開始，在 20 到 30 筆上測試，再修訂定義。每次修改都要記錄原因。AI 可以起草編碼手冊，但定義必須由你以自己的話改寫，並能在口頭報告中說明。",

    "cat.Statement": "陳述句",
    "cat.Question": "疑問句",
    "cat.Exclamation": "感嘆句",
    "cat.Short phrase / command": "短語／指令"
  }
};

let currentLang = localStorage.getItem("lang") === "zh" ? "zh" : "en";

// Translate a key. Falls back to English, then to the key itself.
// Placeholders like {n} are replaced from `vars`.
function t(key, vars) {
  let s = (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  if (vars) {
    for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
  }
  return s;
}

function applyI18n() {
  document.documentElement.lang = currentLang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = t("lang.toggle");
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyI18n();
  document.dispatchEvent(new Event("langchange"));
}

function injectLangToggle() {
  const nav = document.querySelector(".site-header nav");
  if (!nav || document.getElementById("lang-toggle")) return;
  const btn = document.createElement("button");
  btn.id = "lang-toggle";
  btn.type = "button";
  btn.addEventListener("click", () => setLang(currentLang === "en" ? "zh" : "en"));
  nav.appendChild(btn);
}

document.addEventListener("DOMContentLoaded", () => {
  injectLangToggle();
  applyI18n();
});
