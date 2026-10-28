// Shared logic for the example site.
// Loads data/sample.json, then powers the Explore and Visualize pages.
// Students: replace data/sample.json with your own corpus (same field names),
// then adjust the category labels and charts.

const DATA_URL = "data/sample.json";
let corpus = [];

async function loadCorpus() {
  if (corpus.length) return corpus;
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error("Could not load " + DATA_URL);
  corpus = await res.json();
  return corpus;
}

// Filter by keyword (searches both columns) and by the dropdown filters.
function applyFilters(rows, { query = "", category = "", checked = "" } = {}) {
  const q = query.trim().toLowerCase();
  return rows.filter(r => {
    if (category && r.category !== category) return false;
    if (checked && r.human_checked !== checked) return false;
    if (q && !(r.source_text.toLowerCase().includes(q) || r.target_text.includes(q))) return false;
    return true;
  });
}

// Highlight the search term in a string (escapes HTML first).
function highlight(text, query) {
  const safe = text.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const q = query.trim();
  if (!q) return safe;
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(esc, "gi"), m => "<mark>" + m + "</mark>");
}

function countBy(rows, key) {
  const out = {};
  rows.forEach(r => { out[r[key]] = (out[r[key]] || 0) + 1; });
  return out;
}

function fillSelect(select, values) {
  const first = select.options[0];
  select.innerHTML = "";
  select.appendChild(first);
  [...new Set(values)].sort().forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });
}
