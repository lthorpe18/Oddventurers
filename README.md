# Oddventurers — mobile prototype

A no-build, mobile-first Progressive Web App prototype of the modular-character family game.

## Best way to use on iPhone

1. Host this folder over HTTPS (GitHub Pages is ideal).
2. Open the site in Safari.
3. Share → Add to Home Screen → enable **Open as Web App**.
4. Launch it from the Home Screen.

The app caches itself for offline play after the first successful load and stores the current game in `localStorage`.

## GitHub Pages

Put these files in the root of a repository, then in **Settings → Pages** choose **Deploy from a branch**, select the main branch and `/ (root)`.

No npm, bundler, database, or server is required.
