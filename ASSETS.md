# 이미지 에셋 내보내기 목록

이 사이트의 모든 이미지 슬롯은 **아직 비어 있습니다.** 코드가 잘못된 게 아니라,
Figma 에셋 호스트(`www.figma.com`)가 개발 환경의 이그레스 정책에 막혀 있어
자동으로 내려받을 수 없었기 때문입니다. 아래 목록대로 Figma에서 직접 내보내
`public/` 아래에 넣어주시면 코드 수정 없이 바로 표시됩니다.

## 동작 방식

`MediaSlot` 컴포넌트가 파일 존재 여부를 런타임에 판단합니다.

- 파일이 없으면 → `Image pending` 라벨과 함께 어떤 파일이 필요한지 표시
- 파일이 생기면 → 그대로 이미지 렌더링 (재빌드도 불필요, 정적 파일이므로 배포만 하면 됨)

즉 **한 번에 다 넣지 않아도 됩니다.** 준비된 것부터 넣으시면 그 슬롯만 채워집니다.

## 내보내기 설정 권장값

| 항목 | 값 |
| --- | --- |
| 포맷 | JPG (사진) / PNG (투명 배경, 그래픽) |
| 배율 | 커버 2x, 본문 이미지 1.5~2x |
| 가로 최소 | 커버 1920px, 본문 1400px |
| 색 공간 | sRGB |

파일명은 아래 표의 경로와 **정확히** 일치해야 합니다. 확장자를 바꾸시려면
`src/content/projects.ts`의 해당 경로도 같이 수정해 주세요.

---

## 브랜드

| 파일 | 내용 |
| --- | --- |
| `public/brand/monogram.png` | `00COVER`의 크롬 K/M 모노그램. **배경 투명 PNG**로 내보내 주세요. 히어로 우측에 배치되며, 없으면 해당 영역은 비어 있는 대신 아예 렌더링되지 않습니다. |

`public/og.jpg` (1200×630)를 추가하시면 SNS 공유 카드 이미지로 쓸 수 있습니다.
추가 후 `src/app/layout.tsx`의 `openGraph`에 `images: ["/og.jpg"]`를 넣어주세요.

---

## 프로젝트

### SINIJU BRAND RENEWAL
`siniju-brand-renewal` · Figma 프레임: `01_00`, `01_02`, `01_04`, `01_07`

| 파일 | 내용 |
| --- | --- |
| `public/work/siniju-brand-renewal/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/siniju-brand-renewal/01.jpg` | 리뉴얼 매장 파사드 |
| `public/work/siniju-brand-renewal/02.jpg` | 브랜드 통합 가이드라인 |
| `public/work/siniju-brand-renewal/03.jpg` | 내부 그래픽 사인 시스템 |

### 2025 KURLY FOOD FESTA
`kurly-food-festa` · Figma 프레임: `02_00`, `02_01`, `02_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/kurly-food-festa/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/kurly-food-festa/01.jpg` | 부스 전경 |
| `public/work/kurly-food-festa/02.jpg` | 스토리텔링 부적 굿즈 |

### GUKBAP MASTER VISUAL SYSTEM
`gukbap-master` · Figma 프레임: `03_01`, `03_02`, `03_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/gukbap-master/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/gukbap-master/01.jpg` | 외부 특화 사인 |

### SINIJU THAO DIEN S.I DESIGN
`siniju-thao-dien` · Figma 프레임: `04_01`, `04_02`, `04_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/siniju-thao-dien/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/siniju-thao-dien/01.jpg` | 공간별 이미지 전개 |

### WANGSIMNI STORE LAUNCHING
`wangsimni-store-launching` · Figma 프레임: `003_01`, `003_02`, `003_03`, `003_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/wangsimni-store-launching/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/wangsimni-store-launching/01.jpg` | 생성형 AI를 활용한 파사드 시안 |
| `public/work/wangsimni-store-launching/02.jpg` | 플랫폼별 채널 운영 |

### AI WORKFLOW DESIGN
`ai-workflow-design` · Figma 프레임: `004_01`, `004_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/ai-workflow-design/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/ai-workflow-design/01.jpg` | 회사 홈페이지 |
| `public/work/ai-workflow-design/02.jpg` | 브랜드 캐릭터 3D 자산 |
| `public/work/ai-workflow-design/03.jpg` | 포스터 빌더 |

### SINIJU HMR PACKAGE DESIGN
`siniju-hmr-package` · Figma 프레임: `05_01`, `05_02`, `05_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/siniju-hmr-package/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/siniju-hmr-package/01.jpg` | 제품용 브랜드 가이드 |

### MENU PROMOTION KV DESIGN
`menu-promotion-kv` · Figma 프레임: `06_01`, `06_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/menu-promotion-kv/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### NEW MENU KV DESIGN
`new-menu-kv` · Figma 프레임: `07_01`, `07_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/new-menu-kv/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/new-menu-kv/01.jpg` | 점주 교육용 레시피 사이트 |

### BRAND ANNIVERSARY PROMOTION
`brand-anniversary` · Figma 프레임: `08_01`, `08_02`, `08_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/brand-anniversary/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### BRAND SUPPORTERS KV DESIGN
`brand-supporters` · Figma 프레임: `09_01`, `09_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/brand-supporters/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### YOURSHELF PRO LAUNCHING
`yourshelf-pro` · Figma 프레임: `10_01`, `10_02`, `10_03`, `10_04`

| 파일 | 내용 |
| --- | --- |
| `public/work/yourshelf-pro/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/yourshelf-pro/01.jpg` | 기획안 |
| `public/work/yourshelf-pro/02.jpg` | 촬영본 |

### YOURSHELF 550 LAUNCHING
`yourshelf-550` · Figma 프레임: `11_01`, `11_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/yourshelf-550/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### PODOAL WEB SERVICE UI
`podoal-seat-review` · Figma 프레임: `12_01`, `12_02`, `12_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/podoal-seat-review/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |
| `public/work/podoal-seat-review/01.jpg` | MVP#1 실시간 리뷰 |
| `public/work/podoal-seat-review/02.jpg` | MVP#2 리뷰목록과 필터링 |
| `public/work/podoal-seat-review/03.jpg` | MVP#3 평가항목별 좌석리뷰 |

### ILLIYOON AI BRAND FILM
`illiyoon-ai-brand-film` · Figma 프레임: `13_01`, `13_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/illiyoon-ai-brand-film/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### KIMDOBE PERSONAL BRANDING
`kimdobe-personal-branding` · Figma 프레임: `14_01`, `14_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/kimdobe-personal-branding/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### PACE : PAGE 1 HOUR
`pace-page-1-hour` · Figma 프레임: `15_01`, `15_02`, `15_03`

| 파일 | 내용 |
| --- | --- |
| `public/work/pace-page-1-hour/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### R&D ACADEMY SPACE DESIGN
`rnd-academy-space` · Figma 프레임: `001_01`, `001_02`

| 파일 | 내용 |
| --- | --- |
| `public/work/rnd-academy-space/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

### GEOSUNG DABANG SPACE DESIGN
`geosung-dabang` · Figma 프레임: `002_01`

| 파일 | 내용 |
| --- | --- |
| `public/work/geosung-dabang/cover.jpg` | 커버 (가로형 권장, 최소 1920px) |

---

## 참고

- `frames`에 적힌 이름은 Figma `PORTFOLIO_2025` 파일의 프레임 이름입니다.
- 각 프로젝트의 본문 이미지 개수는 `src/content/projects.ts`의 `media` 배열에서
  자유롭게 늘리거나 줄일 수 있습니다.
- 커버가 없으면 카드와 상세 페이지 상단이 플레이스홀더로 표시되므로,
  **커버부터 채우시는 것을 권장합니다.**
