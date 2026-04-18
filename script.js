/* SDC Portal — static JS (search, filter, render) */

const projects = [
    {
      title: "Quiz Master",
      description:
        "Online quiz management system with participant tracking, auto-grading and live leaderboards.",
      href: "http://192.160.108.56:5000/",
      icon: "brain",
      category: "Academics",
      status: "live",
      tags: ["quiz", "students", "scoring"],
    },
    {
      title: "CS-Connect",
      description:
        "Push announcements and targeted notifications to students, faculty and staff in seconds.",
      href: "http://192.160.108.56:5002/login",
      icon: "megaphone",
      category: "Communication",
      status: "live",
      tags: ["announcements", "notifications"],
    },
    {
      title: "Event Management System",
      description:
        "End-to-end event lifecycle — registrations, certificates, attendance and reports in one place.",
      href: "http://192.160.108.56:5006/",
      icon: "calendar",
      category: "Events",
      status: "live",
      tags: ["events", "certificates", "registration"],
    },
    {
      title: "CIE Faculty Portal",
      description:
        "Faculty dashboard to manage Continuous Internal Evaluation, marks and feedback tracking.",
      href: "https://cie-tracker.onrender.com/",
      icon: "clipboard",
      category: "Academics",
      status: "live",
      tags: ["faculty", "cie", "marks"],
    },
    {
      title: "CIE Status Tracker",
      description:
        "Student-facing tracker to follow CIE progress, deadlines and pending submissions.",
      href: "https://cie-tracker-cs-dsvv.netlify.app/",
      icon: "activity",
      category: "Academics",
      status: "live",
      tags: ["cie", "students", "tracking"],
    },
    {
      title: "SDC Website",
      description:
        "Official site of the Software Development Cell — who we are, what we build, and how to join.",
      href: "http://192.160.108.56:5175/",
      icon: "globe",
      category: "Web",
      status: "live",
      tags: ["website", "sdc"],
    },
    {
      title: "Student Clubs News & Events",
      description:
        "Central feed for every campus club — news, events, posters and highlights in one stream.",
      href: "http://192.160.108.56:5176/",
      icon: "newspaper",
      category: "Events",
      status: "beta",
      tags: ["clubs", "news"],
    },
    {
      title: "CS-News Portal",
      description:
        "Department news hub for announcements, milestones, opportunities and achievements.",
      href: "http://192.160.108.56:5174/",
      icon: "rss",
      category: "Communication",
      status: "live",
      tags: ["news", "department"],
    },
    {
      title: "Alumni Speaks",
      description:
        "Browse upcoming and past alumni talks with registration, highlights and recorded sessions.",
      href: "http://192.160.108.56:5173/",
      icon: "grad",
      category: "Events",
      status: "live",
      tags: ["alumni", "talks", "events"],
    },
    {
      title: "CS Timetable",
      description:
        "Clean, mobile-first timetable for Computer Science — always up to date, never outdated.",
      href: "https://dsvv-cs-timetable-sdc.vercel.app/",
      icon: "clock",
      category: "Academics",
      status: "live",
      tags: ["timetable", "schedule"],
    },
    {
      title: "Student Event Attendance",
      description:
        "QR-powered attendance system for events — scan, verify and export in one flow.",
      href: "http://192.160.108.56:3000",
      icon: "scan",
      category: "Events",
      status: "beta",
      tags: ["attendance", "qr", "events"],
    },
    {
      title: "LAN File Share",
      description:
        "Share files across the local network with upload, download and one-click delete.",
      href: "http://192.160.108.56:5004/",
      icon: "folder",
      category: "Utilities",
      status: "internal",
      tags: ["files", "lan", "share"],
    },
  ];
  
  /* Inline SVG icons (stroke-based, 24x24) */
  const icons = {
    brain:
      '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>',
    megaphone:
      '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    calendar:
      '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    clipboard:
      '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    activity:
      '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    globe:
      '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z"/>',
    newspaper:
      '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M18 10h-8M10 6h8"/>',
    rss: '<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
    grad: '<path d="M22 10v6"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="m2 10 10-5 10 5-10 5z"/>',
    clock:
      '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
    folder:
      '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/>',
    arrow:
      '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  };
  
  function svg(name) {
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ""}</svg>`;
  }
  
  function cardTemplate(p) {
    return `
      <a class="card" href="${p.href}" target="_blank" rel="noopener noreferrer"
         data-category="${p.category}" data-tags="${p.tags.join(" ")}" data-title="${p.title.toLowerCase()}">
        <div class="card-head">
          <div class="card-icon">${svg(p.icon)}</div>
          <span class="status ${p.status}"><span class="s-dot"></span>${p.status}</span>
        </div>
        <div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
        <div class="tags">
          ${p.tags.map((t) => `<span class="tag">#${t}</span>`).join("")}
        </div>
        <span class="card-cta">
          Open app
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </a>`;
  }
  
  /* Render grid */
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map(cardTemplate).join("");
  
  /* Filtering */
  const searchInput = document.getElementById("searchInput");
  const filters = document.getElementById("filters");
  const emptyState = document.getElementById("emptyState");
  
  let activeFilter = "All";
  
  function applyFilters() {
    const q = (searchInput.value || "").trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll(".card").forEach((el) => {
      const cat = el.dataset.category;
      const title = el.dataset.title;
      const tags = el.dataset.tags;
      const matchesCat = activeFilter === "All" || cat === activeFilter;
      const matchesQ = !q || title.includes(q) || tags.includes(q);
      const show = matchesCat && matchesQ;
      el.style.display = show ? "" : "none";
      if (show) visible++;
    });
    emptyState.hidden = visible !== 0;
  }
  
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filters.querySelectorAll(".chip").forEach((c) => {
      c.classList.remove("is-active");
      c.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
  
  searchInput.addEventListener("input", applyFilters);
  
  /* Mobile menu */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  menuToggle.addEventListener("click", () => {
    const open = !mobileMenu.hidden;
    mobileMenu.hidden = open;
    menuToggle.setAttribute("aria-expanded", String(!open));
  });
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
  
  /* Year */
  document.getElementById("year").textContent = new Date().getFullYear();
  