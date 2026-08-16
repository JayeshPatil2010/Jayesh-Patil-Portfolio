# Jayesh Patil — Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript — no
build tools, no frameworks, free to host on GitHub Pages. Everything lives
as separate files in one folder — no subfolders.

## Files

```
index.html          ← the page itself (sections, layout, text)
style.css            ← all styling
projects-data.js     ← ⭐ EDIT THIS to add/update projects
script.js            ← renders the projects + page behavior (no need to touch)
README.md
```

Your résumé PDF and (optional) headshot photo also go in this same
folder once you have them — e.g. `Jayesh_Patil_Resume.pdf`.

## Adding a new project (the only file you need)

Open `projects-data.js` and add a new entry to the `PROJECTS` list —
copy an existing block, paste it in, and edit the values:

```js
{
  title: "Your Project Name",
  date: "2027",
  tag: "Category, e.g. Robotics",
  description: "One to three sentences on what it is and what you did.",
  stack: ["Tool 1", "Tool 2"],
  links: [
    { "label": "GitHub", "url": "https://github.com/you/repo" }
  ],
  featured: true,   // true = big card at the top, false = small grid card
},
```

Save the file, commit, and push — the site rebuilds automatically once
it's on GitHub Pages. No HTML or CSS editing required.

## Things to fill in before you publish

Search the project for `TODO` / placeholder text and swap in your real info:

- `index.html` → **Contact** section: real email, GitHub, LinkedIn URLs
- `index.html` → **Download Résumé** button: add your résumé PDF to this
  same folder and update the filename in the link if needed
- `projects-data.js` → uncomment and fill in real project links once you
  have repos/demos live

**Heads up on privacy:** the site doesn't include a phone number or home
address anywhere, on purpose — for a public site, email + GitHub +
LinkedIn is plenty and is what employers actually expect. Keep it that way.

## Running it locally

No install needed — just open `index.html` in a browser. Or, for a local
server (handles some browsers' file:// quirks):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a GitHub repo (e.g. `your-username/portfolio`, or
   `your-username.github.io` if you want it at your root domain).
2. Upload all the files in this folder directly into the repo (drag and
   drop them straight in — no wrapping folder).
3. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick
   `main` and `/ (root)`, then **Save**.
4. Your site will be live at:
   - `https://your-username.github.io/portfolio/` (repo name as path), or
   - `https://your-username.github.io/` (if the repo is named
     `your-username.github.io`)
5. Every time you push a change (like a new project), GitHub Pages
   rebuilds automatically within a minute or two.

## Design notes

The visual theme is an engineering drafting sheet — grid background,
corner crop marks, dimension-line dividers, and a title block in the
footer (the kind of block you'd see on a real CAD drawing) — matching
the CAD/build background the content leans on. Colors, fonts, and layout
are all controlled from the `:root` variables at the top of `style.css`
if you want to retheme it later.
