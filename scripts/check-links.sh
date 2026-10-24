#!/usr/bin/env bash
# Fail if any local href/src in the HTML points at a file that isn't there,
# or if any in-page anchor has no matching id. Catches the classic
# "renamed the file, forgot the link" break before it reaches production.
set -euo pipefail

cd "$(dirname "$0")/.."
status=0

for page in index.html 404.html; do
  [ -f "$page" ] || continue

  # Local file references (skip absolute URLs, anchors, mailto and data URIs).
  while IFS= read -r ref; do
    [ -n "$ref" ] || continue
    case "$ref" in
      http*|//*|"#"*|mailto:*|tel:*|data:*) continue ;;
    esac
    target="${ref%%\#*}"
    target="${target%%\?*}"
    [ -n "$target" ] || continue
    [ "$target" = "/" ] && continue
    target="${target#/}"
    if [ ! -e "$target" ]; then
      echo "MISSING FILE  $page -> $ref"
      status=1
    fi
  done < <(grep -oE '(href|src)="[^"]+"' "$page" | sed -E 's/^(href|src)="//; s/"$//')

  # In-page anchors must have a matching id.
  while IFS= read -r anchor; do
    id="${anchor#\#}"
    [ -n "$id" ] || continue
    if ! grep -q "id=\"$id\"" "$page"; then
      echo "MISSING ANCHOR  $page -> $anchor"
      status=1
    fi
  done < <(grep -oE 'href="#[^"]+"' "$page" | sed -E 's/^href="//; s/"$//')
done

if [ "$status" -eq 0 ]; then
  echo "All local links resolve."
fi
exit "$status"
