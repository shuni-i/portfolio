/* ====== ВСЁ СОДЕРЖИМОЕ САЙТА РЕДАКТИРУЕТСЯ ЗДЕСЬ ====== */
const SITE = {
  name: "Ваше Имя",
  contacts: [
    { label: "Email", href: "mailto:hello@example.com" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Behance", href: "https://behance.net/" }
  ],
  about: {
    portrait: "images/portrait.jpg", // положите фото в папку images (необязательно)
    text: [
      "Я иллюстратор и дизайнер. Работаю с книгами, брендами и редакциями.",
      "Расскажите здесь о себе: с чем работаете, где учились, с кем сотрудничали.",
      "Открыта к новым проектам: пишите на почту."
    ]
  }
};

// Проекты: 3–5 штук. Картинки кладите в images/projects/
const PROJECTS = [
  { id: "pekarnya-prizov", title: "Пекарня призов", year: "", role: "",
    cover: "images/projects/bakery-cover.jpg",
    intro: "Интерактивная промо-страница: ученики собирают персонажей, которые живут на этажах кондитерского дома. [Допишите: для кого проект, какая была задача.]",
    blocks: [
      { img: "images/projects/bakery-hero.webp", caption: "Главный экран" },
      { text: "[Расскажите о своей роли и о том, как вы придумывали героев и интерьеры.]" },
      { text: "Нажмите на силуэт, чтобы открыть персонажа." },
      { interactive: "bakery" }
    ] },
  { id: "metagame-kostyumy", title: "Метаигра: костюмы и ассеты", year: "", role: "",
    cover: "images/projects/wardrobe-cover.jpg",
    intro: "Я отрисовывала костюмы и ассеты для персонажей игры. [Допишите: что за игра, чем вы занимались, какая часть работы ваша.]",
    blocks: [
      { interactive: "wardrobe" },
      { text: "[Расскажите, как устроена система: слои по частям тела, сеты, шапки, оружие, версии для мальчика и девочки.]" }
    ] }
];

// Галерея личных работ. thumb — превью для сетки, img — большая версия.
// Чтобы добавить рисунок, положите две версии в images/gallery/thumb и images/gallery/full
// и скопируйте любую строку ниже (title можно оставить пустым).
const GALLERY = [
  { thumb: "images/gallery/thumb/01.jpg", img: "images/gallery/full/01.jpg", w: 873, h: 900, title: "" },
  { thumb: "images/gallery/thumb/02.jpg", img: "images/gallery/full/02.jpg", w: 900, h: 603, title: "" },
  { thumb: "images/gallery/thumb/03.jpg", img: "images/gallery/full/03.jpg", w: 900, h: 480, title: "" },
  { thumb: "images/gallery/thumb/04.jpg", img: "images/gallery/full/04.jpg", w: 679, h: 900, title: "" },
  { thumb: "images/gallery/thumb/05.jpg", img: "images/gallery/full/05.jpg", w: 900, h: 462, title: "" },
  { thumb: "images/gallery/thumb/06.jpg", img: "images/gallery/full/06.jpg", w: 756, h: 900, title: "" },
  { thumb: "images/gallery/thumb/07.jpg", img: "images/gallery/full/07.jpg", w: 609, h: 900, title: "" },
  { thumb: "images/gallery/thumb/08.jpg", img: "images/gallery/full/08.jpg", w: 900, h: 506, title: "" },
  { thumb: "images/gallery/thumb/09.jpg", img: "images/gallery/full/09.jpg", w: 900, h: 578, title: "" },
  { thumb: "images/gallery/thumb/10.jpg", img: "images/gallery/full/10.jpg", w: 900, h: 567, title: "" },
  { thumb: "images/gallery/thumb/11.jpg", img: "images/gallery/full/11.jpg", w: 737, h: 900, title: "" },
  { thumb: "images/gallery/thumb/12.jpg", img: "images/gallery/full/12.jpg", w: 520, h: 900, title: "" },
  { thumb: "images/gallery/thumb/13.jpg", img: "images/gallery/full/13.jpg", w: 900, h: 513, title: "" },
  { thumb: "images/gallery/thumb/14.jpg", img: "images/gallery/full/14.jpg", w: 634, h: 900, title: "" },
  { thumb: "images/gallery/thumb/15.jpg", img: "images/gallery/full/15.jpg", w: 900, h: 900, title: "" },
  { thumb: "images/gallery/thumb/16.jpg", img: "images/gallery/full/16.jpg", w: 643, h: 900, title: "" },
  { thumb: "images/gallery/thumb/17.jpg", img: "images/gallery/full/17.jpg", w: 643, h: 900, title: "" },
  { thumb: "images/gallery/thumb/18.jpg", img: "images/gallery/full/18.jpg", w: 634, h: 900, title: "" },
  { thumb: "images/gallery/thumb/19.jpg", img: "images/gallery/full/19.jpg", w: 639, h: 900, title: "" },
  { thumb: "images/gallery/thumb/20.jpg", img: "images/gallery/full/20.jpg", w: 643, h: 900, title: "" },
  { thumb: "images/gallery/thumb/21.jpg", img: "images/gallery/full/21.jpg", w: 643, h: 900, title: "" },
  { thumb: "images/gallery/thumb/22.jpg", img: "images/gallery/full/22.jpg", w: 643, h: 900, title: "" },
  { thumb: "images/gallery/thumb/23.jpg", img: "images/gallery/full/23.jpg", w: 632, h: 900, title: "" },
  { thumb: "images/gallery/thumb/24.jpg", img: "images/gallery/full/24.jpg", w: 675, h: 900, title: "" },
  { thumb: "images/gallery/thumb/25.jpg", img: "images/gallery/full/25.jpg", w: 900, h: 900, title: "" },
  { thumb: "images/gallery/thumb/26.jpg", img: "images/gallery/full/26.jpg", w: 900, h: 600, title: "" },
  { thumb: "images/gallery/thumb/27.jpg", img: "images/gallery/full/27.jpg", w: 900, h: 900, title: "" }
];
/* ====== ДАЛЬШЕ МЕНЯТЬ НЕ НУЖНО ====== */

const $ = s => document.querySelector(s);
const page = document.body.dataset.page;
const ph = () => "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#f2f2f2"/></svg>');
const img = (src, alt = "") => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${ph()}'">`;

$("#top").innerHTML = `<div class="id"><div class="name">${SITE.name}</div><div class="contacts">${
  SITE.contacts.map(c => `<a href="${c.href}">${c.label}</a>`).join("")}</div></div>`;

const nav = [["index.html", "Обо мне", "about"], ["projects.html", "Проекты", "projects"], ["gallery.html", "Галерея", "gallery"]];
$("#nav").innerHTML = nav.map(([h, t, k]) =>
  `<a href="${h}"${k === page || (page === "project" && k === "projects") ? ' aria-current="page"' : ""}>${t}</a>`).join("");

const main = $("#main");

if (page === "about") {
  document.title = SITE.name;
  main.innerHTML = `<div class="about"><div>${SITE.about.text.map(t => `<p>${t}</p>`).join("")}</div>${
    img(SITE.about.portrait, SITE.name).replace("<img", '<img class="portrait"')}</div>`;
}

if (page === "projects") {
  document.title = "Проекты — " + SITE.name;
  main.innerHTML = `<div class="grid">${PROJECTS.map(p =>
    `<a class="card" href="project.html?id=${p.id}">${img(p.cover, p.title)}<b>${p.title}</b><span>${p.year}</span></a>`).join("")}</div>`;
}

if (page === "project") {
  const p = PROJECTS.find(x => x.id === new URLSearchParams(location.search).get("id")) || PROJECTS[0];
  document.title = p.title + " — " + SITE.name;
  main.innerHTML = `<article class="project"><h1>${p.title}</h1>${[p.year, p.role].filter(Boolean).length ? `<p class="meta">${[p.year, p.role].filter(Boolean).join(", ")}</p>` : ""}
    <p class="lead">${p.intro}</p>${p.blocks.map(b => b.interactive ? `<div class="${b.interactive}" data-${b.interactive}></div>` : b.img
      ? `<figure>${img(b.img, b.caption || p.title)}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ""}</figure>`
      : `<p>${b.text}</p>`).join("")}<a class="back" href="projects.html">Все проекты</a></article>`;
  if (window.initBakery) document.querySelectorAll("[data-bakery]").forEach(window.initBakery);
  if (window.initWardrobe) document.querySelectorAll("[data-wardrobe]").forEach(window.initWardrobe);
}

if (page === "gallery") {
  document.title = "Галерея — " + SITE.name;
  main.innerHTML = `<div class="masonry">${GALLERY.map((g, i) =>
    `<figure><button data-i="${i}" aria-label="Открыть рисунок ${i + 1}">${img(g.thumb, g.title).replace("<img", `<img width="${g.w}" height="${g.h}"`)}</button></figure>`).join("")}</div>`;
  const lb = $("#lb"), lbImg = lb.querySelector("img"), cap = lb.querySelector("p");
  let cur = 0;
  const show = i => { cur = (i + GALLERY.length) % GALLERY.length; const g = GALLERY[cur];
    lbImg.src = g.img; lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = ph(); }; lbImg.alt = g.title; cap.textContent = g.title || ""; };
  main.addEventListener("click", e => { const b = e.target.closest("button"); if (b) { show(+b.dataset.i); lb.showModal(); } });
  lb.addEventListener("click", () => lb.close());
  document.addEventListener("keydown", e => { if (!lb.open) return;
    if (e.key === "ArrowRight") show(cur + 1); if (e.key === "ArrowLeft") show(cur - 1); });
}
