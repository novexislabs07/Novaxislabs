Deploying to GitHub Pages

1) Set the repository name in `vite.config.js`:

   - Open `vite.config.js` and replace `<REPO_NAME>` with your GitHub repository name, e.g. `/novexis-labs/`.

2) Install the new dependency:

```bash
npm install
```

3) Build and deploy:

```bash
npm run deploy
```

What this does:
- `predeploy` runs the Vite build to `dist/`.
- `deploy` uses `gh-pages` to publish the `dist/` folder to the `gh-pages` branch.

Alternative: Use GitHub Actions to build and deploy if you prefer CI-based deploys.
