const data = window.KTR_GUIDE_DATA || [];
let path = [];

function escapeHtml(t){
  return String(t ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function iconHtml(item, small=false){
  if(item.iconImage){
    return `<img class="iconImg" ${small ? 'style="width:30px;height:30px"' : ''} src="${escapeHtml(item.iconImage)}" alt="">`;
  }
  return `<span class="iconText" ${small ? 'style="font-size:26px"' : ''}>${escapeHtml(item.icon || "□")}</span>`;
}

function placeholder(txt){
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="320">
      <rect width="100%" height="100%" fill="#eef4fb"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial" font-size="38" fill="#0b4ea2">${escapeHtml(txt)}</text>
    </svg>`);
}

function getListByPath(p){
  let list = data;
  for(const idx of p){ list = list[idx].children || []; }
  return list;
}

function getItemByPath(p){
  let list = data, item = null;
  for(const idx of p){ item = list[idx]; list = item.children || []; }
  return item;
}

function setBack(){
  document.getElementById("backBtn").style.visibility = path.length ? "visible" : "hidden";
}

function showHome(){
  path = [];
  setBack();
  renderList("시험 업무 안내", "원하시는 분야를 선택해 주세요.", data, true);
}

function renderCurrent(){
  setBack();
  const item = getItemByPath(path);
  renderList(item.name, "원하시는 항목을 선택해 주세요.", item.children || [], false);
}

function renderList(title, sub, list, isGrid){
  document.getElementById("app").innerHTML = `
    <section class="title">
      <h1>${escapeHtml(title)}</h1>
      <div class="subtitle">${escapeHtml(sub)}</div>
    </section>
    <section class="${isGrid ? 'grid' : 'list'}">
      ${list.map((f,i) => isGrid
        ? `<div class="tile" onclick="openIndex(${i})">${iconHtml(f)}<div>${escapeHtml(f.name || "업무")}</div></div>`
        : `<div class="rowItem" onclick="openIndex(${i})"><div class="rowLeft">${iconHtml(f,true)}<span>${escapeHtml(f.name || "항목")}</span></div><span class="arrow">›</span></div>`
      ).join("") || `<div class="empty">등록된 항목이 없습니다.</div>`}
    </section>`;
}

function openIndex(i){
  const item = getListByPath(path)[i];
  path.push(i);
  if(item.type === "device") renderDevice(item);
  else renderCurrent();
}

function renderDevice(d){
  setBack();
  document.getElementById("app").innerHTML = `
    <section class="title">
      <h1>${escapeHtml(d.name)}</h1>
      <div class="subtitle">장비 상세 안내</div>
    </section>
    <section class="list">
      <img class="photo" src="${d.photo || placeholder(d.name)}">
      <div class="desc">${escapeHtml(d.desc || "").replaceAll("\\n","<br>")}</div>
      <div class="infoBox">
        <div class="infoLine"><b>담당자</b><span>${escapeHtml(d.manager || "-")}</span></div>
        <div class="infoLine"><b>전화번호</b><span>${escapeHtml(d.phone || "-")}</span></div>
        ${d.email ? `<div class="infoLine"><b>이메일</b><span>${escapeHtml(d.email)}</span></div>` : ""}
        ${d.standard ? `<div class="infoLine"><b>적용규격</b><span>${escapeHtml(d.standard)}</span></div>` : ""}
        ${d.period ? `<div class="infoLine"><b>소요기간</b><span>${escapeHtml(d.period)}</span></div>` : ""}
        <div class="infoLine"><b>시험항목</b><span class="chips">${(d.tests || []).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</span></div>
      </div>
      ${d.phone ? `<a class="contactBtn" href="tel:${escapeHtml(d.phone)}">전화 문의하기</a>` : ""}
    </section>`;
}

function goBack(){
  if(path.length === 0){ showHome(); return; }
  path.pop();
  if(path.length === 0) showHome();
  else renderCurrent();
}

showHome();
