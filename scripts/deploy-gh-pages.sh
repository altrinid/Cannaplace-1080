#!/usr/bin/env bash
# Builds the static export for GitHub Pages and force-publishes it to the gh-pages branch.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE="$(git -C "$ROOT" remote get-url origin)"
SHA="$(git -C "$ROOT" rev-parse --short HEAD)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cd "$ROOT"
GITHUB_PAGES=true npm run build
cp -R out/. "$TMP/"
touch "$TMP/.nojekyll" # keep the _next/ folder (Jekyll would skip it)

cd "$TMP"
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy ${SHA}" ${DEPLOY_TRAILER:+-m "$DEPLOY_TRAILER"}
git push -f -q "$REMOTE" gh-pages

echo "Published ${SHA} → https://altrinid.github.io/Cannaplace-1080/"
