#!/usr/bin/env bash
# 아직 채워지지 않은 이미지 슬롯을 보여줍니다.
#   ./scripts/check-assets.sh
set -euo pipefail
cd "$(dirname "$0")/.."

missing=0
total=0
while IFS= read -r p; do
  total=$((total + 1))
  if [ ! -f "public$p" ]; then
    echo "  없음  public$p"
    missing=$((missing + 1))
  fi
done < <(grep -oE '"/(work|brand)/[^"]+\.(jpg|jpeg|png|webp)"' src/content/projects.ts src/app/page.tsx \
         | sed 's/.*"\(\/[^"]*\)"/\1/' | sort -u)

echo
echo "$((total - missing))/$total 개 준비됨"
[ "$missing" -eq 0 ] && echo "모든 이미지가 준비되었습니다."
