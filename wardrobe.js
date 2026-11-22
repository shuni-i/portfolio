/* «Метаигра»: парад костюмов и примерочная. Данные сетов — в WD ниже. */
(function () {
  const WD = {"boy":[{"id":"blank","n":"Болванка","h":0,"w":0,"c":"#009ab2","hb":null,"wb":null,"lh":1,"lw":0},{"id":"s01","n":"Эльф","h":1,"w":0,"c":"#98af28","hb":[303,141,606,302],"wb":null,"lh":0,"lw":0},{"id":"s02","n":"Джинн","h":1,"w":0,"c":"#1645b2","hb":[376,129,600,318],"wb":null,"lh":0,"lw":0},{"id":"s03","n":"Призрак","h":1,"w":1,"c":"#f7dc6a","hb":[345,108,648,432],"wb":[607,242,755,633],"lh":0,"lw":0},{"id":"s04","n":"Садовник","h":1,"w":1,"c":"#e86001","hb":[369,109,634,357],"wb":[597,417,739,593],"lh":0,"lw":0},{"id":"s05","n":"Пират","h":1,"w":1,"c":"#c23e22","hb":[343,117,630,411],"wb":[589,429,713,577],"lh":0,"lw":0},{"id":"s06","n":"Кот","h":1,"w":1,"c":"#583ba9","hb":[335,153,679,403],"wb":[595,319,728,632],"lh":0,"lw":0},{"id":"s07","n":"Аквамен","h":0,"w":0,"c":"#60ccac","hb":null,"wb":null,"lh":1,"lw":1},{"id":"s08","n":"Паладин","h":1,"w":0,"c":"#6cdafb","hb":[372,112,611,396],"wb":null,"lh":0,"lw":0},{"id":"s09","n":"Сет 9","h":0,"w":0,"c":"#fe6d00","hb":null,"wb":null,"lh":1,"lw":1},{"id":"s10","n":"Волшебник","h":0,"w":0,"c":"#0453ae","hb":null,"wb":null,"lh":1,"lw":1},{"id":"s11","n":"Летучая мышь","h":1,"w":1,"c":"#6838bd","hb":[421,150,579,273],"wb":[606,428,686,585],"lh":0,"lw":0},{"id":"s12","n":"Снежный","h":1,"w":1,"c":"#468cf8","hb":[386,143,598,273],"wb":[564,290,717,646],"lh":0,"lw":0},{"id":"s13","n":"Единорог","h":1,"w":0,"c":"#163177","hb":[397,115,621,301],"wb":null,"lh":0,"lw":0},{"id":"s14","n":"Сет 14","h":0,"w":0,"c":"#fe6d00","hb":null,"wb":null,"lh":1,"lw":1},{"id":"s15","n":"Жук","h":1,"w":1,"c":"#007d31","hb":[378,124,622,364],"wb":[583,436,683,588],"lh":0,"lw":0},{"id":"s16","n":"Гонщик","h":1,"w":1,"c":"#e32545","hb":[378,168,630,390],"wb":[631,430,783,563],"lh":0,"lw":0},{"id":"s17","n":"Дракон","h":1,"w":1,"c":"#a5231d","hb":[303,111,647,393],"wb":[597,337,701,548],"lh":0,"lw":0},{"id":"s18","n":"Робот","h":1,"w":0,"c":"#f5cf1f","hb":[351,163,613,396],"wb":null,"lh":0,"lw":0},{"id":"s19","n":"Иллюзионист","h":1,"w":1,"c":"#5a2f7b","hb":[346,104,634,319],"wb":[597,399,702,569],"lh":0,"lw":0}],"girl":[{"id":"blank","n":"Болванка","h":0,"w":0,"c":"#009ab2","hb":null,"wb":null,"lh":1,"lw":0},{"id":"s01","n":"Эльф","h":1,"w":0,"c":"#98af28","hb":[303,168,606,324],"wb":null,"lh":0,"lw":0},{"id":"s02","n":"Джинн","h":1,"w":0,"c":"#1645b2","hb":[376,156,600,345],"wb":null,"lh":0,"lw":0},{"id":"s03","n":"Призрак","h":1,"w":1,"c":"#f8dc6a","hb":[345,135,648,459],"wb":[607,269,755,660],"lh":0,"lw":0},{"id":"s04","n":"Садовник","h":1,"w":1,"c":"#e86001","hb":[369,137,634,384],"wb":[597,444,739,620],"lh":0,"lw":0},{"id":"s05","n":"Пират","h":1,"w":1,"c":"#c23e22","hb":[343,144,630,438],"wb":[589,456,713,604],"lh":0,"lw":0},{"id":"s06","n":"Кот","h":0,"w":0,"c":"#583ba9","hb":null,"wb":null,"lh":1,"lw":1},{"id":"s07","n":"Аквамен","h":1,"w":1,"c":"#60ccac","hb":[311,133,659,403],"wb":[585,342,733,672],"lh":0,"lw":0},{"id":"s08","n":"Паладин","h":1,"w":0,"c":"#72defb","hb":[374,127,602,411],"wb":null,"lh":0,"lw":0},{"id":"s09","n":"Феникс","h":1,"w":0,"c":"#fe6d00","hb":[346,142,651,376],"wb":null,"lh":0,"lw":0},{"id":"s10","n":"Волшебник","h":1,"w":0,"c":"#b42d93","hb":[286,148,675,335],"wb":null,"lh":0,"lw":0},{"id":"s11","n":"Летучая мышь","h":1,"w":0,"c":"#6838be","hb":[422,177,579,300],"wb":null,"lh":0,"lw":0},{"id":"s12","n":"Снежный","h":1,"w":0,"c":"#5d9efa","hb":[421,156,586,314],"wb":null,"lh":0,"lw":0},{"id":"s13","n":"Единорог","h":1,"w":1,"c":"#f272fc","hb":[415,170,589,299],"wb":[592,473,703,616],"lh":0,"lw":0},{"id":"s14","n":"Феникс","h":1,"w":0,"c":"#fe6c00","hb":[348,163,642,371],"wb":null,"lh":0,"lw":0},{"id":"s15","n":"Жук","h":1,"w":1,"c":"#d65c9e","hb":[374,139,631,356],"wb":[595,471,691,620],"lh":0,"lw":0},{"id":"s16","n":"Гонщик","h":1,"w":1,"c":"#e32445","hb":[378,196,630,418],"wb":[631,458,783,591],"lh":0,"lw":0},{"id":"s17","n":"Дракон","h":1,"w":1,"c":"#ac2720","hb":[303,138,647,420],"wb":[597,364,701,575],"lh":0,"lw":0},{"id":"s18","n":"Робот","h":1,"w":0,"c":"#f5ce1f","hb":[351,190,613,423],"wb":null,"lh":0,"lw":0},{"id":"s19","n":"Иллюзионист","h":1,"w":1,"c":"#612c7e","hb":[346,131,634,346],"wb":[597,426,702,596],"lh":0,"lw":0}]};
  const BASE = "images/projects/wardrobe/";
  const FR = { x: 250, y: 40 }; /* окно кадра вокруг персонажа (1000×832) */
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };

  Object.values(WD).forEach(list => { /* одинаковые названия -> «Феникс 2» */
    const seen = {};
    list.forEach(s => { seen[s.n] = (seen[s.n] || 0) + 1; if (seen[s.n] > 1) s.n += " " + seen[s.n]; });
  });
  const src = (g, id, k) => BASE + g + "/" + id + "-" + k + ".svg";
  const layers = (g, st) =>
    '<img class="b" alt="" src="' + src(g, st.base, "base") + '">' +
    (st.hat ? '<img class="h" alt="" src="' + src(g, st.hat, "hat") + '">' : "") +
    (st.wep ? '<img class="w" alt="" src="' + src(g, st.wep, "wep") + '">' : "");
  const crop = (g, id, k, box) => { /* миниатюра предмета по его габаритам */
    const [l, t, r, b] = box, sz = Math.max(r - l, b - t), s = 50 / sz;
    return '<img alt="" src="' + src(g, id, k) + '" style="width:' + 1000 * s + 'px;left:' + (32 - (l + r) / 2 * s) + 'px;top:' + (32 - (t + b) / 2 * s) + 'px">';
  };

  function initWardrobe(root) {
    let g = "boy";
    const st = { base: "s03", hat: "s03", wep: "s03" };
    const sets = () => WD[g].filter(s => s.id !== "blank");
    const get = id => WD[g].find(s => s.id === id);
    const own = id => { const s = get(id); return { base: id, hat: s.h ? id : null, wep: s.w ? id : null }; };
    Object.assign(st, own("s05"));

    root.innerHTML =
      '<section class="wd-scene wd-parade"><div class="wd-head"><p class="wd-stat"></p><div class="wd-sw"></div></div>' +
      '<div class="wd-row"></div><p class="wd-hint">Нажмите на героя: он окажется в примерочной</p></section>' +
      '<section class="wd-scene wd-fit"><div class="wd-stage"><div class="wd-char"></div><i class="wd-floor"></i></div>' +
      '<div class="wd-ctrl"><div class="wd-sw"></div><div class="wd-sec" data-k="base"><h4>Сет</h4><div class="wd-tiles"></div></div>' +
      '<div class="wd-sec" data-k="hat"><h4>Шапка</h4><div class="wd-tiles"></div></div>' +
      '<div class="wd-sec" data-k="wep"><h4>Оружие</h4><div class="wd-tiles"></div></div>' +
      '<div class="wd-act"><button type="button" data-a="rnd">Случайный образ</button><button type="button" data-a="rst">Сбросить</button></div>' +
      '<p class="wd-count"></p></div></section>';
    const parade = $(".wd-parade", root), fit = $(".wd-fit", root), stage = $(".wd-char", root);

    root.querySelectorAll(".wd-sw").forEach(sw => {
      sw.innerHTML = '<button type="button" data-g="boy">Мальчик</button><button type="button" data-g="girl">Девочка</button>';
      sw.addEventListener("click", e => { const v = e.target.dataset.g; if (v && v !== g) { g = v; Object.assign(st, own("s05")); drawAll(); } });
    });

    function drawParade() {
      const list = sets();
      $(".wd-stat", parade).innerHTML = "<b>" + list.length + "</b> сетов · <b>" + list.filter(s => s.h).length + "</b> шапок · <b>" +
        list.filter(s => s.w).length + "</b> видов оружия";
      const row = $(".wd-row", parade);
      row.classList.remove("in");
      row.innerHTML = list.map((s, i) =>
        '<button type="button" class="wd-fig" style="--i:' + i + '" data-id="' + s.id + '"><span class="wd-char">' + layers(g, own(s.id)) + "</span><em>" + s.n + "</em></button>").join("");
      requestAnimationFrame(() => io.observe(row));
    }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
    $(".wd-row", parade).addEventListener("click", e => {
      const b = e.target.closest(".wd-fig"); if (!b) return;
      Object.assign(st, own(b.dataset.id)); drawFit(true); fit.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    function combos() {
      const H = sets().filter(s => s.h).length, W = sets().filter(s => s.w).length;
      return sets().reduce((n, s) => n + (s.lh ? 1 : H + 1) * (s.lw ? 1 : W + 1), 0);
    }
    function drawFit(pop) {
      const b = get(st.base);
      fit.style.setProperty("--c", b.c);
      stage.innerHTML = layers(g, st);
      if (pop) stage.querySelectorAll("img").forEach(i => i.classList.add("pop"));
      const tiles = (k, items, mk, none) => {
        const box = $('[data-k="' + k + '"] .wd-tiles', fit), locked = k === "hat" ? b.lh : k === "wep" ? b.lw : 0;
        $('[data-k="' + k + '"]', fit).classList.toggle("lock", !!locked);
        box.innerHTML = (none ? '<button type="button" data-v="" class="' + (!st[k] ? "on" : "") + '" aria-label="Без предмета">∅</button>' : "") +
          items.map(s => '<button type="button" data-v="' + s.id + '" title="' + s.n + '" class="' + (st[k] === s.id ? "on" : "") + '">' + mk(s) + "</button>").join("");
      };
      tiles("base", sets(), s => '<span class="wd-char">' + layers(g, own(s.id)) + "</span>", false);
      tiles("hat", sets().filter(s => s.h), s => crop(g, s.id, "hat", s.hb), true);
      tiles("wep", sets().filter(s => s.w), s => crop(g, s.id, "wep", s.wb), true);
      $(".wd-count", fit).innerHTML = "Образов можно собрать: <b>" + combos().toLocaleString("ru") + "</b>";
      root.querySelectorAll(".wd-sw button").forEach(x => x.classList.toggle("on", x.dataset.g === g));
    }
    fit.addEventListener("click", e => {
      const t = e.target.closest("button"); if (!t) return;
      if (t.dataset.a === "rnd") {
        const l = sets(), s = l[Math.random() * l.length | 0], o = own(s.id); st.base = s.id;
        const hs = l.filter(x => x.h), ws = l.filter(x => x.w);
        st.hat = s.lh ? o.hat : (Math.random() < .2 ? null : hs[Math.random() * hs.length | 0].id);
        st.wep = s.lw ? o.wep : (Math.random() < .3 ? null : ws[Math.random() * ws.length | 0].id);
        return drawFit(true);
      }
      if (t.dataset.a === "rst") { Object.assign(st, own("s05")); return drawFit(true); }
      const sec = t.closest(".wd-sec"); if (!sec || sec.classList.contains("lock")) return;
      const k = sec.dataset.k, v = t.dataset.v;
      if (k === "base") Object.assign(st, own(v)); else st[k] = v || null;
      drawFit(true);
    });
    function drawAll() { drawParade(); drawFit(false); }
    drawAll();
  }
  window.initWardrobe = initWardrobe;
})();
