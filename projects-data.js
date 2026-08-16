/*
  ============================================================
  PROJECTS DATA — this is the ONLY file you need to edit
  to add, remove, or update a project on your site.
  ============================================================

  To add a new project, copy one of the objects below
  (including the { and }), paste it into the list, and
  fill in your own info. Order in this list = order shown
  on the site (top of the list = top of the page).

  Fields:
    title       — project name (string)
    date        — e.g. "2026" or "Mar 2026" (string)
    tag         — short category label, e.g. "AI / Accessibility" (string)
    description — 1–3 sentences on what it is and what you did (string)
    stack       — array of tools/languages used, e.g. ["Python", "OpenCV"]
    links       — array of { label, url }. Leave the array empty ( [] )
                  if you don't have a link yet.
    featured    — true = show in the large "Featured" layout,
                  false = show in the compact grid below it
*/

const PROJECTS = [
  {
    title: "VERA",
    date: "2026",
    tag: "AI / Accessibility",
    description:
      "An AI-powered wearable concept that scans a user's surroundings to flag hazards, read text aloud, and identify objects — all through voice commands, built for blind and low-vision users. Built in a 24-hour hackathon with a 4-person team; placed 2nd at hackVH and won $400. The biggest challenge was building working object-recognition software in such a short window — the team ended up building it on top of Gemini's recognition capabilities to hit the deadline.",
    stack: ["Python", "Gemini API", "Computer Vision", "Voice UI"],
    links: [
      // { "label": "GitHub", "url": "https://github.com/jayeshpatil2010/vera" },
      // { "label": "Demo Video", "url": "https://youtube.com/..." }
    ],
    featured: true,
  },
  {
    title: "Soccer Match Outcome Predictor",
    date: "2026",
    tag: "Data Science",
    description:
      "A prediction model trained on over 12,000 data points from professional soccer matches spanning the last 5–6 seasons, reaching roughly 80% accuracy against recent real-world results. Built for a STEAM showcase submission.",
    stack: ["Python", "Data Analysis", "Statistics"],
    links: [
      { "label": "GitHub", "url": "https://jayeshpatil2010.github.io/Soccer-CS-final-project/" }
    ],
    featured: true,
  },
  {
    title: "Science Olympiad Builds",
    date: "2024 — Present",
    tag: "Mechanical Design",
    description:
      "Designed, built, and competed with medal-winning entries across multiple build events — including flight, helicopter, electric vehicle, and wheeled vehicle categories — using Onshape for CAD modeling and iterative prototyping.",
    stack: ["Onshape (CAD)", "3D Printing", "Prototyping"],
    links: [],
    featured: false,
  },
];
