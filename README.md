# Superyacht Africa NPC

Public website for the member-based industry association. Copy follows Website Copy Draft V1 and the Website Design & Build Brief (South African English; institutional register).

```bash
npm install
npm run dev
```

## Deploy on GitHub Pages

1. Create a GitHub account if you do not have one, then create a **new repository** (for example `superyacht-africa`). Do not add a README on GitHub — this folder already has one.
2. In this project folder, in a terminal:

```bash
git add .
git commit -m "Publish site for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/superyacht-africa.git
git push -u origin main
```

Replace `YOUR-USERNAME` and the repo name with yours.

3. On GitHub: **Settings → Pages → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.
5. The live site will be:

`https://YOUR-USERNAME.github.io/superyacht-africa/`

Local `npm run dev` is unchanged. The Pages URL only works after that first successful Action.
