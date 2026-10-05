#!/usr/bin/env bash
# Builds the static export for GitHub Pages and publishes it to the gh-pages branch.
#   npm run deploy                    replaces the whole preview site (force-push)
#   PAGES_SUBDIR=seo npm run deploy   publishes into /Cannaplace-1080/seo/ and keeps everything else on gh-pages
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE="$(git -C "$ROOT" remote get-url origin)"
SHA="$(git -C "$ROOT" rev-parse --short HEAD)"
SUBDIR="${PAGES_SUBDIR:-}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cd "$ROOT"
export GITHUB_PAGES=true
export PAGES_BASE_PATH="/Cannaplace-1080${SUBDIR:+/$SUBDIR}"
npm run build

if [ -z "$SUBDIR" ]; then
  cp -R out/. "$TMP/"
  cd "$TMP"
  git init -q -b gh-pages
else
  git clone -q --depth 1 --branch gh-pages "$REMOTE" "$TMP"
  rm -rf "${TMP:?}/$SUBDIR"
  mkdir -p "$TMP/$SUBDIR"
  cp -R out/. "$TMP/$SUBDIR/"
  cd "$TMP"
fi
touch .nojekyll # keep the _next/ folder (Jekyll would skip it)
git add -A
git commit -q -m "Deploy ${SHA}${SUBDIR:+ to /$SUBDIR/}" ${DEPLOY_TRAILER:+-m "$DEPLOY_TRAILER"}
if [ -z "$SUBDIR" ]; then
  git push -f -q "$REMOTE" gh-pages
else
  git push -q "$REMOTE" gh-pages
fi

echo "Published ${SHA} → https://altrinid.github.io${PAGES_BASE_PATH}/"
