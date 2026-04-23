# Headless CMS React — Starter Template

A Vite + React starter template for ISYS3004 Assessment 2. Provides the project structure, routing, and a complete blog implementation as a reference pattern. Your job is to connect it to your WordPress backend and build out the remaining components.

## What's included

| File | Status | Purpose |
|------|--------|---------|
| `src/pages/BlogList.jsx` | ✅ Complete | Reference implementation — study this |
| `src/pages/SinglePost.jsx` | ✅ Complete | Reference implementation — study this |
| `src/pages/WpPage.jsx` | ✅ Complete | Fetches WordPress pages by slug |
| `src/pages/Home.jsx` | 🔧 Your design | Placeholder only — build your home page |
| `src/pages/CptList.jsx` | 🔧 Your design | Scaffold with TODOs — build your CPT list |
| `src/pages/CptDetail.jsx` | 🔧 Your design | Scaffold with TODOs — build your CPT detail |
| `src/components/Header.jsx` | 🔧 Update | Update site name and nav links |
| `src/components/Footer.jsx` | 🔧 Update | Update with your site name |
| `src/index.css` | 🔧 Your design | Base styles with CSS variables — customise |

## Getting started

### 1. Use this template

Click **"Use this template"** on GitHub to create your own private repository. Do not fork — use the template button so you get a clean history.

### 2. Clone and install

```bash
git clone https://github.com/your-username/your-repo-name
cd your-repo-name
npm install
```

### 3. Configure your environment

```bash
cp .env.example .env
```

Open `.env` and update with your LocalWP WordPress URL and CPT slug:

```
VITE_WP_API_URL=http://your-site.local/wp-json/wp/v2
VITE_CPT_SLUG=your-cpt-slug
```

The CPT slug must match exactly what you registered in WordPress.

### 4. Start the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 5. Connect to your WordPress

Your WordPress site must have CORS configured to allow requests from `http://localhost:5173`. See the assignment specification for CORS setup options.

Test your API is working by visiting:
```
http://your-site.local/wp-json/wp/v2/posts
```
You should see JSON data. If not, fix WordPress first before touching React.

## Project structure

```
src/
├── components/
│   ├── Header.jsx       — navigation
│   ├── Footer.jsx       — footer
│   └── PostCard.jsx     — blog post card component
├── pages/
│   ├── Home.jsx         — home page (your design)
│   ├── BlogList.jsx     — blog list (complete reference)
│   ├── SinglePost.jsx   — single post (complete reference)
│   ├── CptList.jsx      — CPT list (scaffold — your design)
│   ├── CptDetail.jsx    — CPT detail (scaffold — your design)
│   └── WpPage.jsx       — WordPress pages (About, Contact)
├── App.jsx              — routes
├── main.jsx             — entry point
└── index.css            — base styles
```

## Routes

| URL | Component | What it shows |
|-----|-----------|---------------|
| `/` | Home | Your home page |
| `/blog` | BlogList | All blog posts |
| `/post/:id` | SinglePost | A single blog post |
| `/cpt` | CptList | All CPT entries |
| `/cpt/:id` | CptDetail | A single CPT entry |
| `/page/about` | WpPage | WordPress "about" page |
| `/page/contact` | WpPage | WordPress "contact" page |

## Deploying to Netlify

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Netlify will auto-detect the build settings from `netlify.toml`
4. Add your environment variables in Netlify: Site settings → Environment variables
   - `VITE_WP_API_URL` → your live InfinityFree WordPress URL
   - `VITE_CPT_SLUG` → your CPT slug
5. After deploying, update CORS on your WordPress to allow your Netlify URL

## What you need to build

- **Home page** — design and content entirely yours
- **CPT components** — adapt the scaffold to display your specific content type
- **Header** — update site name, nav links to match your scenario
- **CSS** — update the CSS custom properties and extend styles to match your visual identity
- **Content** — your WordPress content should feel like a real site for your chosen scenario

## Reference: WordPress REST API

```
GET /wp-json/wp/v2/posts          — all posts
GET /wp-json/wp/v2/posts/:id      — single post
GET /wp-json/wp/v2/pages          — all pages
GET /wp-json/wp/v2/pages?slug=about — page by slug
GET /wp-json/wp/v2/:cpt-slug      — all CPT entries
GET /wp-json/wp/v2/:cpt-slug/:id  — single CPT entry
```

Add `?_embed` to any endpoint to include featured images in the response.
