/* Интерактив «Пекарня призов»: клик по силуэту открывает персонажа */
(function () {
  const BASE = "images/projects/bakery/";
  const D = {"W": 864.0, "H": 4825.0, "bands": [{"src": "band-0.webp", "h": 1200}, {"src": "band-1.webp", "h": 1200}, {"src": "band-2.webp", "h": 1200}, {"src": "band-3.webp", "h": 1200}, {"src": "band-4.webp", "h": 1200}, {"src": "band-5.webp", "h": 1200}, {"src": "band-6.webp", "h": 1200}, {"src": "band-7.webp", "h": 1200}, {"src": "band-8.webp", "h": 50}], "chars": [{"id": 0, "x": 335.0, "y": 427.0, "w": 420.0, "h": 240.5}, {"id": 1, "x": 335.0, "y": 427.0, "w": 420.0, "h": 240.5}, {"id": 2, "x": 335.0, "y": 427.0, "w": 420.0, "h": 240.5}, {"id": 3, "x": 277.5, "y": 704.0, "w": 168.0, "h": 181.5}, {"id": 4, "x": 458.0, "y": 796.5, "w": 140.0, "h": 183.0}, {"id": 5, "x": 626.5, "y": 816.0, "w": 161.5, "h": 176.5}, {"id": 6, "x": 334.5, "y": 1225.5, "w": 251.5, "h": 225.0}, {"id": 7, "x": 334.5, "y": 1225.5, "w": 251.5, "h": 225.0}, {"id": 8, "x": 587.5, "y": 1283.5, "w": 112.5, "h": 168.0}, {"id": 9, "x": 464.0, "y": 1580.5, "w": 126.5, "h": 202.5}, {"id": 10, "x": 285.0, "y": 1620.0, "w": 126.5, "h": 192.5}, {"id": 11, "x": 642.5, "y": 1632.5, "w": 136.0, "h": 177.5}, {"id": 12, "x": 302.0, "y": 1894.0, "w": 141.0, "h": 183.0}, {"id": 13, "x": 626.0, "y": 1966.5, "w": 130.5, "h": 208.5}, {"id": 14, "x": 466.5, "y": 1991.5, "w": 122.5, "h": 161.5}, {"id": 15, "x": 343.5, "y": 2282.5, "w": 376.5, "h": 253.5}, {"id": 16, "x": 343.5, "y": 2282.5, "w": 376.5, "h": 253.5}, {"id": 17, "x": 343.5, "y": 2282.5, "w": 376.5, "h": 253.5}, {"id": 18, "x": 300.5, "y": 2615.0, "w": 144.5, "h": 179.5}, {"id": 19, "x": 628.5, "y": 2690.0, "w": 141.0, "h": 202.5}, {"id": 20, "x": 455.0, "y": 2690.5, "w": 144.5, "h": 205.0}, {"id": 21, "x": 470.5, "y": 3024.5, "w": 115.5, "h": 188.5}, {"id": 22, "x": 283.5, "y": 3053.0, "w": 131.0, "h": 196.5}, {"id": 23, "x": 643.0, "y": 3089.5, "w": 122.5, "h": 158.5}, {"id": 24, "x": 473.5, "y": 3364.5, "w": 123.5, "h": 209.0}, {"id": 25, "x": 350.5, "y": 3406.5, "w": 123.5, "h": 208.0}, {"id": 26, "x": 575.5, "y": 3443.0, "w": 144.0, "h": 170.0}, {"id": 27, "x": 318.0, "y": 3681.5, "w": 126.5, "h": 188.0}, {"id": 28, "x": 625.5, "y": 3773.0, "w": 140.5, "h": 200.5}, {"id": 29, "x": 463.5, "y": 3782.0, "w": 124.0, "h": 182.5}, {"id": 30, "x": 438.0, "y": 4100.5, "w": 127.5, "h": 212.5}, {"id": 31, "x": 653.0, "y": 4126.5, "w": 124.0, "h": 209.5}, {"id": 32, "x": 280.0, "y": 4128.0, "w": 134.5, "h": 197.0}, {"id": 33, "x": 348.5, "y": 4459.0, "w": 369.5, "h": 230.0}, {"id": 34, "x": 348.5, "y": 4459.0, "w": 369.5, "h": 230.0}, {"id": 35, "x": 348.5, "y": 4459.0, "w": 369.5, "h": 230.0}]};

  function initBakery(root) {
    const total = D.chars.length;
    root.innerHTML =
      '<div class="bk-bar"><span class="bk-count" aria-live="polite"></span>' +
      '<span class="bk-btns"><button type="button" data-a="all">Открыть всех</button>' +
      '<button type="button" data-a="reset">Сбросить</button></span></div>' +
      '<div class="bk-panel"><div class="bk-stage"></div></div>';
    const stage = root.querySelector(".bk-stage");
    const count = root.querySelector(".bk-count");
    stage.style.aspectRatio = D.W + " / " + D.H;

    D.bands.forEach((b, i) => {
      const im = new Image();
      im.className = "bk-band"; im.alt = i === 0 ? "Кондитерский дом с этажами" : "";
      im.width = 1728; im.height = b.h; im.src = BASE + b.src;
      if (i > 1) im.loading = "lazy";
      stage.appendChild(im);
    });

    const els = [], alpha = [], open = [];
    D.chars.forEach((c, i) => {
      const im = new Image();
      im.className = "bk-sil"; im.src = BASE + "sil-" + String(c.id).padStart(2, "0") + ".webp";
      im.alt = "Закрытый персонаж " + (i + 1); im.loading = "lazy";
      im.tabIndex = 0; im.setAttribute("role", "button");
      im.style.cssText = "left:" + (c.x / D.W * 100) + "%;top:" + (c.y / D.H * 100) + "%;width:" + (c.w / D.W * 100) + "%;height:" + (c.h / D.H * 100) + "%";
      im.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); reveal(i); } });
      im.addEventListener("load", () => {
        try { /* карта прозрачности для точного клика по форме силуэта */
          const cw = Math.max(1, Math.round(c.w)), ch = Math.max(1, Math.round(c.h));
          const cv = document.createElement("canvas"); cv.width = cw; cv.height = ch;
          const cx = cv.getContext("2d", { willReadFrequently: true });
          cx.drawImage(im, 0, 0, cw, ch);
          const px = cx.getImageData(0, 0, cw, ch).data, a = new Uint8Array(cw * ch);
          for (let k = 0; k < a.length; k++) a[k] = px[k * 4 + 3];
          alpha[i] = { a, cw, ch };
        } catch (e) { alpha[i] = null; } /* если страница открыта как файл, кликаем по рамке */
      });
      els.push(im); open.push(false); stage.appendChild(im);
    });

    function update() { count.textContent = "Открыто " + open.filter(Boolean).length + " из " + total; }
    function reveal(i, on) {
      open[i] = on !== false;
      els[i].classList.toggle("gone", open[i]);
      els[i].tabIndex = open[i] ? -1 : 0;
      els[i].setAttribute("aria-hidden", open[i] ? "true" : "false");
      update();
    }
    function hit(e) {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width * D.W, y = (e.clientY - r.top) / r.height * D.H;
      for (let i = total - 1; i >= 0; i--) {
        if (open[i]) continue;
        const c = D.chars[i];
        if (x < c.x || x > c.x + c.w || y < c.y || y > c.y + c.h) continue;
        const m = alpha[i];
        if (!m) return i;
        const px = Math.min(m.cw - 1, Math.floor(x - c.x)), py = Math.min(m.ch - 1, Math.floor(y - c.y));
        if (m.a[py * m.cw + px] > 40) return i;
      }
      return -1;
    }
    stage.addEventListener("click", e => { const i = hit(e); if (i >= 0) reveal(i); });
    let raf = 0;
    stage.addEventListener("pointermove", e => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; stage.classList.toggle("hot", hit(e) >= 0); });
    });
    root.querySelector(".bk-btns").addEventListener("click", e => {
      const a = e.target.dataset.a; if (!a) return;
      els.forEach((_, i) => reveal(i, a === "all"));
    });
    update();
  }
  window.initBakery = initBakery;
})();
