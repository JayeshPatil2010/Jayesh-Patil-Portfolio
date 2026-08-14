// ============================================================
// script.js — you shouldn't need to edit this file.
// To add projects, edit js/projects-data.js instead.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNav();
  setupScrollReveal();
  setupYear();
});

// ---- Render project cards from PROJECTS (projects-data.js) ----
function renderProjects() {
  const featuredWrap = document.getElementById("featured-projects");
  const gridWrap = document.getElementById("grid-projects");
  if (!featuredWrap || !gridWrap || typeof PROJECTS === "undefined") return;

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  featuredWrap.innerHTML = featured.map(featuredCard).join("");
  gridWrap.innerHTML = rest.map(gridCard).join("");

  if (rest.length === 0) {
    gridWrap.style.display = "none";
  }
}

function linkRow(links) {
  if (!links || links.length === 0) return "";
  return `<div class="proj-links">${links
    .map(
      (l) =>
        `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`
    )
    .join("")}</div>`;
}

function stackRow(stack) {
  if (!stack || stack.length === 0) return "";
  return `<ul class="proj-stack">${stack
    .map((s) => `<li>${s}</li>`)
    .join("")}</ul>`;
}

function featuredCard(p, i) {
  const num = String(i + 1).padStart(2, "0");
  return `
    <article class="proj-featured">
      <div class="proj-featured-meta">
        <span class="proj-index">${num}</span>
        <span class="proj-tag">${p.tag}</span>
        <span class="proj-date">${p.date}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      ${stackRow(p.stack)}
      ${linkRow(p.links)}
    </article>`;
}

function gridCard(p) {
  return `
    <article class="proj-card">
      <div class="proj-card-meta">
        <span class="proj-tag">${p.tag}</span>
        <span class="proj-date">${p.date}</span>
      </div>
      <h4>${p.title}</h4>
      <p>${p.description}</p>
      ${stackRow(p.stack)}
      ${linkRow(p.links)}
    </article>`;
}

// ---- Mobile nav toggle ----
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---- Reveal sections/cards on scroll ----
function setupScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((t) => observer.observe(t));
}

// ---- Footer / title-block date ----
function setupYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}
