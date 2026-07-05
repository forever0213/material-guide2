window.KTR_GUIDE_DATA = (function(){
const rows = [
{"type":"센터별 업무","typeIconImage":"icon/two.png","level1":"금속재료센터","level1IconImage":"icon/metalc.png","level2":"","level2IconImage":"","level3":"","level3IconImage":"","device":"","deviceIconImage":"","photo":"","desc":"","manager":"","phone":"","email":"","tests":"","standard":"","period":""},
{"type":"센터별 업무","typeIconImage":"icon/two.png","level1":"표면기술센터","level1IconImage":"icon/surfacec.png","level2":"","level2IconImage":"","level3":"","level3IconImage":"","device":"","deviceIconImage":"","photo":"","desc":"","manager":"","phone":"","email":"","tests":"","standard":"","period":""},
{"type":"센터별 업무","typeIconImage":"icon/two.png","level1":"고분자재료센터","level1IconImage":"icon/polymer.png","level2":"","level2IconImage":"","level3":"","level3IconImage":"","device":"","deviceIconImage":"","photo":"","desc":"","manager":"","phone":"","email":"","tests":"","standard":"","period":""},
{"type":"센터별 업무","typeIconImage":"icon/two.png","level1":"소재평가센터","level1IconImage":"icon/materialc.png","level2":"","level2IconImage":"","level3":"","level3IconImage":"","device":"","deviceIconImage":"","photo":"","desc":"","manager":"","phone":"","email":"","tests":"","standard":"","period":""},
{"type":"센터별 업무","typeIconImage":"icon/two.png","level1":"지능형기계센터","level1IconImage":"icon/machinec.png","level2":"","level2IconImage":"","level3":"","level3IconImage":"","device":"","deviceIconImage":"","photo":"","desc":"","manager":"","phone":"","email":"","tests":"","standard":"","period":""},
{"type":"센터별 업무","typeIconImage":"icon/two.png","level1":"신뢰성평가센터","level1IconImage":"icon/safetyc.png","level2":"","level2IconImage":"","level3":"","level3IconImage":"","device":"","deviceIconImage":"","photo":"","desc":"","manager":"","phone":"","email":"","tests":"","standard":"","period":""},
{"type":"센터별 업무","typeIconImage":"icon/two.png","level1":"교통인프라센터","level1IconImage":"icon/infrac.png","level2":"","level2IconImage":"","level3":"","level3IconImage":"","device":"","deviceIconImage":"","photo":"","desc":"","manager":"","phone":"","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"성분","level2IconImage":"icon/composition.png","level3":"건식","level3IconImage":"dry.png","device":"Spark-OES","deviceIconImage":"spark_icon.png","photo":"spark_oes.jpg","desc":"고체 금속 시료의 원소 성분을 빠르고 정확하게 분석하는 장비입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"성분","level2IconImage":"icon/composition.png","level3":"건식","level3IconImage":"dry.png","device":"GD-OES","deviceIconImage":"gdoes_icon.png","photo":"gdoes.jpg","desc":"깊이 방향 성분 분석이 가능한 장비입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"성분","level2IconImage":"icon/composition.png","level3":"습식","level3IconImage":"wet.png","device":"ICP-OES","deviceIconImage":"icp_icon.png","photo":"icp_oes.jpg","desc":"용액화한 시료의 미량·주성분 원소를 정량 분석하는 장비입니다.","manager":"최영원","phone":"010-8612-2357","email":"cyw0213@ktr.or.kr","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"물성","level2IconImage":"icon/property.png","level3":"인장","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"물성","level2IconImage":"icon/property.png","level3":"경도","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"조직","level2IconImage":"icon/microstructure.png","level3":"조직","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"결함","level2IconImage":"icon/failure.png","level3":"고장원인분석","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"표면","level2IconImage":"icon/surface.png","level3":"SEM","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"부식","level2IconImage":"icon/corrosion.png","level3":"염수분무","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"부식","level2IconImage":"icon/corrosion.png","level3":"복합부식","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"신뢰성","level2IconImage":"icon/reliability.png","level3":"신뢰성","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"금속","level1IconImage":"icon/metal.png","level2":"비파괴","level2IconImage":"icon/ndt.png","level3":"비파괴","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"고분자","level1IconImage":"icon/polymer.png","level2":"물성","level2IconImage":"icon/property.png","level3":"물성","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"광물","level1IconImage":"icon/mineral.png","level2":"물성","level2IconImage":"icon/property.png","level3":"물성","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"생분해","level1IconImage":"icon/biodegradable.png","level2":"물성","level2IconImage":"icon/property.png","level3":"물성","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"이차전지","level1IconImage":"icon/battery.png","level2":"물성","level2IconImage":"icon/property.png","level3":"물성","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"고무","level1IconImage":"icon/rubber.png","level2":"물성","level2IconImage":"icon/property.png","level3":"물성","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},
{"type":"소재별 업무","typeIconImage":"icon/one.png","level1":"페인트","level1IconImage":"icon/paint.png","level2":"페인트","level2IconImage":"icon/paint.png","level3":"물성","level3IconImage":"paint_property.png","device":"등록예정","deviceIconImage":"default_device.png","photo":"","desc":"등록 예정입니다.","manager":"OOO","phone":"00-0000-0000","email":"","tests":"","standard":"","period":""},];
function img(path, folder){
  if(!path) return "";
  if(path.startsWith("icon/") || path.startsWith("equipment/")) return path;
  return folder + "/" + path;
}

function getOrAdd(list, name, iconImage){
  let item = list.find(x => x.name === name);
  if(!item){
    item = { name:name, iconImage:iconImage || "", children:[] };
    list.push(item);
  }
  return item;
}

const root = [];

rows.forEach(r => {
  if(!r.type) return;

  const typeNode = getOrAdd(root, r.type, r.typeIconImage);
  if(!r.level1) return;

  const level1 = getOrAdd(typeNode.children, r.level1, r.level1IconImage);
  if(!r.level2) return;

  const level2 = getOrAdd(level1.children, r.level2, img(r.level2IconImage, "icon"));
  if(!r.level3) return;

  const level3 = getOrAdd(level2.children, r.level3, img(r.level3IconImage, "icon"));
  if(!r.device) return;

  level3.children.push({
    name: r.device,
    iconImage: img(r.deviceIconImage, "icon"),
    type: "device",
    photo: img(r.photo, "equipment"),
    desc: r.desc || "",
    manager: r.manager || "",
    phone: r.phone || "",
    email: r.email || "",
    standard: r.standard || "",
    period: r.period || "",
    tests: r.tests ? r.tests.split(",").map(x => x.trim()) : []
  });
});

return root;
})();
