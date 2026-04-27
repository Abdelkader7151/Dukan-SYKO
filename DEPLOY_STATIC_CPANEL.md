# Generic cPanel Static Website Deployment Guideline

This is a reusable guideline for deploying **any static website** to cPanel hosting.

Use this when:

- You deploy HTML/CSS/JS assets directly to hosting.
- Your framework outputs static files (for example: Next.js export, Vite build, React static build, Astro static build).
- You do **not** run a Node.js server app on hosting.

---

## 1) Read and Extract Hosting Message (New Account Info)

When you receive a message like:

- `Domain: ...`
- `Ip: ...`
- `UserName: ...`
- `PassWord: ...`
- `NameServer1: ...`
- `NameServer2: ...`

Use fields as follows:

- `Domain` -> your live website domain.
- `UserName` + `PassWord` -> cPanel login (and sometimes FTP/SFTP).
- `Ip` -> server IP (helpful for diagnostics, not usually for normal deploy).
- `NameServer1/2` -> set these at domain registrar DNS settings.
- `Contact Email` -> account notifications and SSL warnings.

Ignore for basic deploy unless needed:

- `HasCgi`, `CpanelMod`, `Package`, `Feature List`, `Account Enhancements`.

Security action:

- Change the received password immediately after first login.

---

## 2) Choose Deployment Mode First

Before deploying, confirm if project is:

- **Static output** (recommended on shared hosting), or
- **Server runtime** (Node/PHP/etc).

This guide is for **static output only**.

If your app needs a server runtime, stop and use a server-runtime guide.

---

## 3) Build Output Checklist (Local Machine)

Run your project build command, then confirm a deployable output folder exists.

Common output folders:

- Next.js export: `out`
- Vite/React: `dist`
- Astro: `dist`
- Other tools: project-specific build folder

Confirm before upload:

- [ ] Build completes with no errors.
- [ ] Output folder exists.
- [ ] Entry file exists (`index.html`).
- [ ] Assets folder exists (for example `_next`, `assets`, or `static`).

If these checks fail, do not upload.

---

## 4) What to Upload to cPanel

Open cPanel -> File Manager -> target domain root (`public_html` by default).

Upload rule:

- Upload the **contents of build output folder**, not the parent folder itself.

Correct:

- `public_html/index.html`
- `public_html/<assets-folder>/...`

Wrong:

- `public_html/out/index.html`
- `public_html/dist/index.html`

Before upload:

- [ ] Create backup zip of current live files.
- [ ] Remove old placeholder/default `index.html`.

After upload:

- [ ] `index.html` is directly inside `public_html`.
- [ ] Compiled assets are directly inside `public_html`.

---

## 5) Files/Folders You Should Never Upload

Do not upload source or local-dev folders such as:

- `.next` (unless your framework explicitly says static host needs it; for Next static, upload generated `out` output instead)
- `node_modules`
- `src`
- `.git`
- local config/tooling folders unrelated to runtime

General rule: upload only final build output.

---

## 6) DNS Setup Checklist

At domain registrar DNS panel:

- Set nameservers from the hosting message (`NameServer1`, `NameServer2`), or
- Use A record setup if your provider instructed that method.

Confirm:

- [ ] Domain resolves to hosting.
- [ ] DNS propagation complete (can take minutes up to 24-48h).

---

## 7) SSL Setup Checklist

In cPanel:

- Open SSL/TLS Status (or AutoSSL) and run SSL issuance.

Confirm:

- [ ] `https://yourdomain.com` works without warning.
- [ ] `https://www.yourdomain.com` works (if used).

---

## 8) Post-Deploy Validation

Test in incognito and hard refresh:

- [ ] Home page loads.
- [ ] Navigation links work.
- [ ] CSS and JS loaded (no broken layout).
- [ ] Images, fonts, icons load.
- [ ] Important files load:
  - `/robots.txt` (if present)
  - `/sitemap.xml` (if present)
- [ ] Mobile layout looks correct.

Optional:

- Browser DevTools -> Network/Console for 404 or JS errors.

---

## 9) Common Mistakes and Fast Fixes

### Placeholder page still shows

- Cause: old `index.html` still there or cache.
- Fix: remove old file, hard refresh, test in incognito.

### Styling/scripts broken

- Cause: assets uploaded to wrong path.
- Fix: ensure build assets folder is directly under `public_html`.

### All pages return 404

- Cause: nested upload (`public_html/out/*` or `public_html/dist/*`).
- Fix: move files one level up into `public_html`.

### HTTPS warning

- Cause: SSL not issued yet.
- Fix: run AutoSSL and wait.

---

## 10) Rollback Procedure

If deploy breaks production:

1. Remove newly uploaded files.
2. Restore backup zip from pre-deploy.
3. Confirm home page loads.
4. Re-run deployment with corrected folder structure.

---

## 11) Reusable Pre-Deploy Mini Checklist

- [ ] I understood the hosting message fields and saved credentials safely.
- [ ] Build output is static and complete.
- [ ] I backed up current live files.
- [ ] I am uploading output **contents** to domain root.
- [ ] I verified DNS + SSL.
- [ ] I tested routes/assets after deploy.

