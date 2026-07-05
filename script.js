const data = window.KTR_GUIDE_DATA || [];
let path = [];

function escapeHtml(t){
  return String(t ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
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
        font-family="Arial" font-size="34" fill="#0b4ea2">${escapeHtml(txt)}</text>
    </svg>`);
}

function getListByPath(p){
  let list = data;
  for(const idx of p){
    list = list[idx].children || [];
  }
  return list;
}

function getItemByPath(p){
  let list = data;
  let item = null;

  for(const idx of p){
    item = list[idx];
    list = item.children || [];
  }

  return item;
}

function setBack(){
  const btn = document.getElementById("backBtn");
  if(btn){
    btn.style.visibility = path.length ? "visible" : "hidden";
  }
}

function showIntro(){
  path = [];
  setBack();

  document.getElementById("app").innerHTML = `
    <section class="intro">
      <div class="introCard">
        <div class="introLogo">KTR</div>
        <div class="introBadge">Digital Testing Guide</div>
        <h1>미래소재기술본부</h1>
        <p>디지털 시험안내</p>
        <div class="introText">
          안녕하세요.<br>
          KTR 미래소재기술본부입니다.<br>
          고객 맞춤형 시험 서비스를 안내드립니다.
        </div>
      </div>
    </section>
  `;

  setTimeout(showHome, 1800);
}

function showHome(){
  path = [];
  setBack();

  document.getElementById("app").innerHTML = `
    <section class="title">
      <h1>업무 안내</h1>
      <div class="subtitle">원하시는 안내 방식을 선택해 주세요.</div>
    </section>

    <section class="homeGrid">
      ${data.map((f,i)=>`
        <div class="homeTile" onclick="openIndex(${i})">
          ${iconHtml(f)}
          <div>${escapeHtml(f.name || "업무")}</div>
        </div>
      `).join("") || `<div class="empty">등록된 항목이 없습니다.</div>`}
    </section>
  `;
}

function renderCurrent(){
  setBack();

  const item = getItemByPath(path);
  if(!item){
    showHome();
    return;
  }

  renderList(item.name, "원하시는 항목을 선택해 주세요.", item.children || []);
}

function renderList(title, sub, list){
  const useGrid = path.length === 1;

  document.getElementById("app").innerHTML = `
    <section class="title">
      <h1>${escapeHtml(title)}</h1>
      <div class="subtitle">${escapeHtml(sub)}</div>
    </section>

    <section class="${useGrid ? 'grid' : 'list'}">
      ${list.map((f,i)=> useGrid
        ? `<div class="tile" onclick="openIndex(${i})">
             ${iconHtml(f)}
             <div>${escapeHtml(f.name || "업무")}</div>
           </div>`
        : `<div class="rowItem" onclick="openIndex(${i})">
             <div class="rowLeft">
               ${iconHtml(f,true)}
               <span>${escapeHtml(f.name || "항목")}</span>
             </div>
             <span class="arrow">›</span>
           </div>`
      ).join("") || `<div class="empty">등록된 항목이 없습니다.</div>`}
    </section>
  `;
}

function openIndex(i){
  const list = getListByPath(path);
  const item = list[i];

  if(!item) return;

  path.push(i);

  if(item.type === "device"){
    renderDevice(item);
  }else{
    renderCurrent();
  }
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

      <div class="desc">
        ${escapeHtml(d.desc || "").replaceAll("\\n","<br>")}
      </div>

      <div class="infoBox">
        <div class="infoLine"><b>담당자</b><span>${escapeHtml(d.manager || "-")}</span></div>
        <div class="infoLine"><b>전화번호</b><span>${escapeHtml(d.phone || "-")}</span></div>
        ${d.email ? `<div class="infoLine"><b>이메일</b><span>${escapeHtml(d.email)}</span></div>` : ""}
        ${d.standard ? `<div class="infoLine"><b>적용규격</b><span>${escapeHtml(d.standard)}</span></div>` : ""}
        ${d.period ? `<div class="infoLine"><b>소요기간</b><span>${escapeHtml(d.period)}</span></div>` : ""}
        <div class="infoLine">
          <b>시험항목</b>
          <span class="chips">
            ${(d.tests || []).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
          </span>
        </div>
      </div>

      ${d.phone ? `<a class="contactBtn" href="tel:${escapeHtml(d.phone)}">전화 문의하기</a>` : ""}
    </section>
  `;
}

function goBack(){
  if(path.length === 0){
    showHome();
    return;
  }

  path.pop();

  if(path.length === 0){
    showHome();
  }else{
    renderCurrent();
  }
}

showIntro();
