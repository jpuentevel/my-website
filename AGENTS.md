# Repository Guidelines

## Project Structure & Module Organization
- Source in `src/` (entry `src/main.jsx`, root component `src/App.jsx`).
- Pages under `src/pages/<feature>/<Component>.jsx` (e.g., `src/pages/home/Home.jsx`).
- Static assets in `public/` (e.g., `public/images/logo.png`).
- Build output in `dist/` (ignored by lint and Git).
- HTML entry at `index.html` with `#root` mount.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start Vite dev server with HMR.
- `npm run build` — production build to `dist/`.
- `npm run preview` — preview the built site locally.
- `npm run lint` — run ESLint checks on the repo.

## Coding Style & Naming Conventions
- Language: React (JSX), ES Modules.
- Indentation: 2 spaces; keep lines concise and readable.
- Components: PascalCase files and exports (e.g., `Home.jsx`, `export default Home`).
- Modules/folders: lower-case or kebab-case; pages grouped by feature.
- Imports: relative within `src/`; avoid unused vars (ESLint enforces `no-unused-vars`).
- Linting: configured via `eslint.config.js` with React Hooks and Vite refresh rules.

## Testing Guidelines
- No formal test setup in this repo yet.
- Recommended: add Vitest + React Testing Library.
- Convention (when added): `*.test.jsx` next to source; run via `npm test`.

## Commit & Pull Request Guidelines
- Prefer Conventional Commits (e.g., `feat: add hero section`, `fix: resolve navbar overlap`).
- Keep commits focused and descriptive; reference issues when applicable (e.g., `Closes #12`).
- PRs should include: concise description, screenshots for UI changes, steps to verify, and any follow-up tasks.

## Security & Configuration Tips
- Vite base path in `vite.config.js` is set to `/my-website/` for GitHub Pages. Update `base` if the repo name changes.
- Do not commit secrets; store credentials outside the repo.
- Node 18+ recommended. Use `npm ci` in CI for reproducible installs.

