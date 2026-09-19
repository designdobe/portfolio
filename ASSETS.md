# 이미지 에셋 내보내기 목록

이 사이트의 모든 이미지 슬롯은 **아직 비어 있습니다.** 코드가 잘못된 게 아니라,
Figma 에셋 호스트(`www.figma.com`)가 개발 환경의 이그레스 정책에 막혀 있어
자동으로 내려받을 수 없었기 때문입니다. 아래 목록대로 Figma에서 직접 내보내
`public/` 아래에 넣어주시면 코드 수정 없이 바로 표시됩니다.

## 동작 방식

파일을 넣으면 코드 수정 없이 반영됩니다. 규칙은 두 가지뿐입니다.

**1. 커버가 있어야 프로젝트가 보입니다.**
`public/work/<슬러그>/cover.jpg`가 없으면 그 프로젝트는 목록과 상세 페이지
모두에서 숨겨집니다. 커버를 올리는 순간 나타납니다.

**2. 본문 이미지는 번호만 맞추면 자동으로 붙습니다.**
같은 폴더에 `01.jpg`, `02.jpg`, `03.jpg` … 순서대로 넣으면 번호 순으로
상세 페이지에 표시됩니다. 개수 제한은 없고, `05.jpg`를 새로 넣어도 코드를
고칠 필요가 없습니다.

캡션은 `src/content/projects.ts`에 적힌 것만 표시되고, 없으면 캡션 없이
이미지만 나옵니다. 캡션이 필요하면 알려주시거나 직접 추가하시면 됩니다.

즉 **한 번에 다 넣지 않아도 됩니다.** 준비된 것부터 올리시면 됩니다.

## 내보내기 사이즈

아래 값은 실제 렌더링된 요소 크기를 브라우저에서 측정해 정한 것입니다.
Figma 내보내기 패널에서 **W 값을 직접 입력**하시면 가장 간단합니다.

| 용도 | 내보내기 크기 | 비율 | 포맷 |
| --- | --- | --- | --- |
| 프로젝트 커버 (`cover.jpg`) | **2400 × 1350** | 16:9 | JPG |
| 프로젝트 본문 (`01.jpg`, `02.jpg` …) | **2000 × 1250** | 16:10 | JPG |
| 히어로 모노그램 (`brand/monogram.png`) | **1600 × 1600** | 1:1 | PNG (배경 투명) |
| OG 공유 이미지 (`og.jpg`, 선택) | **1200 × 630** | 1.91:1 | JPG |

- 색 공간 sRGB, JPG 품질 80~85 권장
- 용량 목표: 커버 400KB 이하, 본문 300KB 이하
- Figma에서 프레임을 고른 뒤 Export → `W` 칸에 위 가로값 입력 → JPG/PNG 선택

## 업로드 방법

업로드할 폴더는 저장소에 **미리 만들어 두었습니다.** 새로 만드실 필요 없이
해당 폴더에 파일만 넣으시면 됩니다.

파일명은 표의 경로와 **정확히** 일치해야 합니다 (대소문자 포함).

### 방법 A · GitHub 웹에서 올리기 (설치 불필요, 권장)

1. <https://github.com/designdobe/portfolio> 접속
2. 파일 목록 위쪽 **브랜치 선택 버튼**을 눌러 `claude/wizardly-pasteur-mm8njs` 선택
   (기본 브랜치가 아니라 이 브랜치여야 합니다)
3. `public` → `work` → 올릴 프로젝트 폴더로 이동
4. 우측 위 **Add file → Upload files**
5. 파일을 끌어다 놓고, 아래 **Commit changes** 클릭

폴더째 올리셔도 됩니다. `work` 폴더 안에 프로젝트별 하위 폴더를 그대로 만들어
두고 `work` 폴더를 통째로 끌어다 놓으면 경로가 유지됩니다.

제한: 파일 1개당 25MB, 한 번에 100개까지. 위 권장 사이즈면 여유롭습니다.

### 방법 B · 내 컴퓨터에서 git으로 올리기

```bash
git clone https://github.com/designdobe/portfolio.git
cd portfolio
git checkout claude/wizardly-pasteur-mm8njs

# 내보낸 이미지를 public/work/<슬러그>/ 아래에 복사한 뒤
./scripts/check-assets.sh     # 빠진 파일 확인

git add public
git commit -m "chore: add project imagery"
git push
```

### 진행 상황 확인

```bash
./scripts/check-assets.sh
```

아직 비어 있는 슬롯을 전부 나열합니다. 현재 39개 슬롯이 비어 있습니다.
한 번에 다 채우지 않아도 되고, 넣은 것부터 바로 표시됩니다.

## 커버 구도에서 주의할 점

커버 한 장이 화면에 따라 **다른 비율로 잘려서** 쓰입니다.

| 위치 | 잘리는 비율 |
| --- | --- |
| 상세 페이지 상단 (데스크탑) | 2:1 |
| 홈 대표 카드 (데스크탑) | 2:1 |
| 목록/그리드 카드, 모바일 상세 상단 | 3:2 |

16:9로 내보내면 3:2에서는 좌우가, 2:1에서는 상하가 조금씩 잘립니다. 따라서

- **중요한 요소는 가운데로.** 가장자리 가로 8%, 세로 5%는 잘릴 수 있습니다
- **하단 약 35%는 제목과 그라디언트에 가려집니다.** 로고나 핵심 피사체를
  아래쪽에 두지 마세요
- 모노그램은 `object-contain`이라 **잘리지 않습니다.** 정사각형으로 내보내시면 됩니다

---

## 브랜드

| 파일 | 내용 |
| --- | --- |
| `public/brand/monogram.png` | `00COVER`의 크롬 K/M 모노그램. **배경 투명 PNG**, 1600×1600. 히어로 우측(데스크탑 ≥1024px)에 `object-contain`으로 배치되므로 잘리지 않습니다. 파일이 없으면 빈 상자 대신 아예 렌더링되지 않습니다. |

`public/og.jpg` (1200×630)를 추가하시면 SNS 공유 카드 이미지로 쓸 수 있습니다.
추가 후 `src/app/layout.tsx`의 `openGraph`에 `images: ["/og.jpg"]`를 넣어주세요.

---

## 프로젝트

### SINIJU BRAND RENEWAL
`siniju-brand-renewal` · Figma 프레임: `01_00`, `01_02`, `01_04`, `01_07`

| 파일 | 내용 |
| --- | --- |
| `public/work/siniju-brand-renewal/cover.jpg` | 커버 · 2400×1350 |
| `public/work/siniju-brand-renewal/01.jpg` | 리뉴얼 매장 파사드 |
| `public/work/siniju-brand-renewal/02.jpg` | 브랜드 통합 가이드라인 |
| `public/work/siniju-brand-renewal/03.jpg` | 내부 그래픽 사인 시스템 |

### 2025 KURLY FOOD FESTA
`kurly-food-festa` · Figma 프레임: `02_00`, `02_01`, `02_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/kurly-food-festa/cover.jpg` | 커버 · 2400×1350 |
| `public/work/kurly-food-festa/01.jpg` | 부스 전경 |
| `public/work/kurly-food-festa/02.jpg` | 스토리텔링 부적 굿즈 |

### GUKBAP MASTER VISUAL SYSTEM
`gukbap-master` · Figma 프레임: `03_01`, `03_02`, `03_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/gukbap-master/cover.jpg` | 커버 · 2400×1350 |
| `public/work/gukbap-master/01.jpg` | 외부 특화 사인 |

### SINIJU THAO DIEN S.I DESIGN
`siniju-thao-dien` · Figma 프레임: `04_01`, `04_02`, `04_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/siniju-thao-dien/cover.jpg` | 커버 · 2400×1350 |
| `public/work/siniju-thao-dien/01.jpg` | 공간별 이미지 전개 |

### WANGSIMNI STORE LAUNCHING
`wangsimni-store-launching` · Figma 프레임: `003_01`, `003_02`, `003_03`, `003_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/wangsimni-store-launching/cover.jpg` | 커버 · 2400×1350 |
| `public/work/wangsimni-store-launching/01.jpg` | 생성형 AI를 활용한 파사드 시안 |
| `public/work/wangsimni-store-launching/02.jpg` | 플랫폼별 채널 운영 |

### AI WORKFLOW DESIGN
`ai-workflow-design` · Figma 프레임: `004_01`, `004_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/ai-workflow-design/cover.jpg` | 커버 · 2400×1350 |
| `public/work/ai-workflow-design/01.jpg` | 회사 홈페이지 |
| `public/work/ai-workflow-design/02.jpg` | 브랜드 캐릭터 3D 자산 |
| `public/work/ai-workflow-design/03.jpg` | 포스터 빌더 |

### SINIJU HMR PACKAGE DESIGN
`siniju-hmr-package` · Figma 프레임: `05_01`, `05_02`, `05_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/siniju-hmr-package/cover.jpg` | 커버 · 2400×1350 |
| `public/work/siniju-hmr-package/01.jpg` | 제품용 브랜드 가이드 |

### MENU PROMOTION KV DESIGN
`menu-promotion-kv` · Figma 프레임: `06_01`, `06_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/menu-promotion-kv/cover.jpg` | 커버 · 2400×1350 |

### NEW MENU KV DESIGN
`new-menu-kv` · Figma 프레임: `07_01`, `07_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/new-menu-kv/cover.jpg` | 커버 · 2400×1350 |
| `public/work/new-menu-kv/01.jpg` | 점주 교육용 레시피 사이트 |

### BRAND ANNIVERSARY PROMOTION
`brand-anniversary` · Figma 프레임: `08_01`, `08_02`, `08_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/brand-anniversary/cover.jpg` | 커버 · 2400×1350 |

### BRAND SUPPORTERS KV DESIGN
`brand-supporters` · Figma 프레임: `09_01`, `09_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/brand-supporters/cover.jpg` | 커버 · 2400×1350 |

### YOURSHELF PRO LAUNCHING
`yourshelf-pro` · Figma 프레임: `10_01`, `10_02`, `10_03`, `10_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/yourshelf-pro/cover.jpg` | 커버 · 2400×1350 |
| `public/work/yourshelf-pro/01.jpg` | 기획안 |
| `public/work/yourshelf-pro/02.jpg` | 촬영본 |

### YOURSHELF 550 LAUNCHING
`yourshelf-550` · Figma 프레임: `11_01`, `11_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/yourshelf-550/cover.jpg` | 커버 · 2400×1350 |

### PODOAL WEB SERVICE UI
`podoal-seat-review` · Figma 프레임: `12_01`, `12_02`, `12_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/podoal-seat-review/cover.jpg` | 커버 · 2400×1350 |
| `public/work/podoal-seat-review/01.jpg` | MVP#1 실시간 리뷰 |
| `public/work/podoal-seat-review/02.jpg` | MVP#2 리뷰목록과 필터링 |
| `public/work/podoal-seat-review/03.jpg` | MVP#3 평가항목별 좌석리뷰 |

### ILLIYOON AI BRAND FILM
`illiyoon-ai-brand-film` · Figma 프레임: `13_01`, `13_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/illiyoon-ai-brand-film/cover.jpg` | 커버 · 2400×1350 |

### KIMDOBE PERSONAL BRANDING
`kimdobe-personal-branding` · Figma 프레임: `14_01`, `14_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/kimdobe-personal-branding/cover.jpg` | 커버 · 2400×1350 |

### PACE : PAGE 1 HOUR
`pace-page-1-hour` · Figma 프레임: `15_01`, `15_02`, `15_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/pace-page-1-hour/cover.jpg` | 커버 · 2400×1350 |

### R&D ACADEMY SPACE DESIGN
`rnd-academy-space` · Figma 프레임: `001_01`, `001_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/rnd-academy-space/cover.jpg` | 커버 · 2400×1350 |

### GEOSUNG DABANG SPACE DESIGN
`geosung-dabang` · Figma 프레임: `002_01`

| 파일 | 내용 |
| --- | --- |
| `public/work/geosung-dabang/cover.jpg` | 커버 · 2400×1350 |

---

## 참고

- `frames`에 적힌 이름은 Figma `PORTFOLIO_2025` 파일의 프레임 이름입니다.
- 각 프로젝트의 본문 이미지 개수는 `src/content/projects.ts`의 `media` 배열에서
  자유롭게 늘리거나 줄일 수 있습니다.
- 커버가 없으면 카드와 상세 페이지 상단이 플레이스홀더로 표시되므로,
  **커버부터 채우시는 것을 권장합니다.**
