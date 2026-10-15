# 🚀 Build With ZT - Official Portfolio Web Platform

**Build With ZT** is the official portfolio and engineering showcase of **Zain Tahir**, Specialized Flutter Developer, Full-Lifecycle Product Engineer, and Web Designer.

---

## 📁 Project Architecture & Pages

The web application is structured with high-performance semantic HTML5, modern CSS, and lightweight reactive JavaScript—engineered to load in under 50ms and deploy effortlessly to **GitHub Pages**:

* **`index.html`** (Home) — High-impact hero, value metrics, profile card, specialty terminal widget, engineering edge breakdown, featured projects teaser, and direct call-to-actions.
* **`projects.html`** (Repositories Catalog) — Complete showcase of all **9 production & open-source repositories** (excluding `pantry_ai`) with real-time keyword search, category filtering, direct live web demo links, and deep-dive architecture modal popups.
* **`about.html`** (Story & Philosophy) — Detailed bio from LinkedIn, academic background at Department of Computer Science (UET Taxila), Capstone Project (NeuroScript AI), and core engineering tenets (Offline-First, 60 FPS Fluidity, Reactive State, Automated CI/CD).
* **`services.html`** (Offerings & Process) — Detailed breakdown of client solutions (Rapid MVP Engineering for Startups, Flutter Architecture & Code Audits, Bespoke Webflow/Tailwind platforms), the 5-step engineering roadmap, and an interactive FAQ accordion.
* **`contact.html`** (Project Planner) — Interactive project estimation form with budget/timeline selectors, direct email copy button with toast notification, and global availability status.

### Supplementary Architecture Folders:
* **`/backend/`** — High-performance C# ASP.NET Core 9 Minimal Web API with `/api/projects`, `/api/profile`, and `/api/contact` endpoints.
* **`/frontend/`** — Flutter multi-platform codebase with `url_launcher` and `google_fonts`.

---

## 🌐 1-Click Push to GitHub & Enable GitHub Pages

Follow these simple steps in PowerShell inside this directory (`C:\Users\Zain\Desktop\BuildWithZT`):

### 1. Initialize Git & Commit
```powershell
cd "C:\Users\Zain\Desktop\BuildWithZT"
git init
git add .
git commit -m "feat: Initial commit for Build With ZT portfolio platform"
```

### 2. Create Repository on GitHub
1. Go to [GitHub](https://github.com/new) and create a new public repository named:
   * **`build-with-zt`** (or `zaintahir2025.github.io` for a root user domain).
2. Do **not** check "Add a README file" (we already have this one).

### 3. Link Remote & Push
```powershell
git branch -M main
git remote add origin https://github.com/zaintahir2025/build-with-zt.git
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository settings on GitHub: **Settings > Pages**.
2. Under **Build and deployment > Source**, select:
   * **GitHub Actions** (the included `.github/workflows/pages.yml` will automatically build and deploy the site on every push!), OR
   * **Deploy from a branch** -> Branch: `main` / Folder: `/(root)` -> Click **Save**.
3. Your website will be live in ~60 seconds at:
   `https://zaintahir2025.github.io/build-with-zt/`

---

## 💻 Local Preview

You can open `index.html` directly in any web browser, or launch a zero-dependency local static server:
```powershell
npx -y serve .
```

To run the optional C# ASP.NET Core 9 API:
```powershell
cd backend
dotnet run
```
