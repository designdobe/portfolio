# KIM YURI · Portfolio

BX 디렉터 김유리의 포트폴리오 웹사이트. Figma 파일 `PORTFOLIO_2025`
(1920×1080 슬라이드 63장)의 콘텐츠와 비주얼 언어를 웹으로 옮긴 것입니다.

## 스택

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (CSS 변수 토큰)
- 의존성은 이게 전부입니다. 애니메이션 라이브러리나 아이콘 패키지를 쓰지 않고,
  스크롤 리빌은 `IntersectionObserver` + CSS 트랜지션으로 처리합니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 정적 프리렌더 (27페이지)
npm start
lint: npx eslint .
```

## 구조

```
src/
  app/
    page.tsx              홈 (히어로 / 성과 / 선택작업 / 핵심역량 / 소개 / 연락)
    work/page.tsx         전체 프로젝트 목록 (분야별 필터)
    work/[slug]/page.tsx  프로젝트 상세 (SSG, 19개)
    about/page.tsx        이력 (00resume 슬라이드 기반)
    globals.css           디자인 토큰
  components/             헤더 · 푸터 · 카드 · 리빌 · 이미지 슬롯
  content/
    profile.ts            이름, 핵심역량, 경력, 학력, 툴, 성과 지표
    projects.ts           프로젝트 19건
```

## 콘텐츠 수정

텍스트는 전부 `src/content/` 안에 있습니다. 컴포넌트를 건드릴 필요 없이
`profile.ts` / `projects.ts`만 고치면 됩니다.

각 프로젝트에는 출처 프레임이 `frames` 필드로 기록돼 있어, 덱과 대조할 수
있습니다. **성과 수치는 덱의 결과 슬라이드에 적힌 것만 사용합니다** —
근거 없는 숫자를 추가하지 마세요.

## 이미지

현재 모든 이미지 슬롯이 비어 있습니다. Figma 에셋 호스트가 개발 환경에서
차단돼 자동 다운로드가 불가능했습니다. 내보내기 목록과 파일 경로는
[`ASSETS.md`](./ASSETS.md)를 참고하세요. 파일을 넣으면 코드 수정 없이
바로 표시됩니다.

```bash
./scripts/check-assets.sh   # 아직 비어 있는 이미지 슬롯 확인
```

## 디자인 결정

| 항목 | 내용 |
| --- | --- |
| 테마 | 블랙 단일 테마 (덱의 `00COVER` / `99END` 기준). 라이트 모드 없음 |
| 디스플레이 서체 | Owners XXWide(유료)의 대체로 Archivo `wdth 125` |
| 국문 서체 | SUIT(Google Fonts 미제공)의 대체로 Gothic A1 |
| 모서리 | 전 요소 radius 0 |
| 강조색 | 없음. 반전 면(흰 배경 + 검은 글자)이 강조 역할 |
| 모션 | 스크롤 진입 리빌만. `prefers-reduced-motion` 존중 |

서체 라이선스를 구매하시면 `src/app/fonts`에 woff2를 넣고
`globals.css`의 `.font-display` / `.font-display-ko` 패밀리만 바꾸면 됩니다.

## 배포

### Vercel (권장)

1. <https://vercel.com/new> 접속 → GitHub 계정 연결
2. `designdobe/portfolio` 선택 → **Import**
3. Framework는 Next.js로 자동 인식됩니다. 빌드 명령·출력 경로를 손댈 필요 없습니다
4. **Environment Variables**에 하나만 추가합니다

       NEXT_PUBLIC_SITE_URL = https://<실제 도메인>

   사이트맵과 OG 태그의 절대 URL에 쓰입니다. 생략해도 배포는 되지만
   공유 카드와 검색 노출에 잘못된 주소가 들어갑니다. 배포 후 도메인이
   정해지면 넣고 재배포해도 됩니다.
5. **Deploy**

`NEXT_PUBLIC_BASE_PATH`는 **넣지 마세요.** 그 변수가 있으면 하위 경로용
정적 export로 전환됩니다. Vercel은 루트에서 서비스하므로 비워둬야 합니다.

이후 이 브랜치에 푸시하면 Vercel이 자동으로 다시 배포합니다.

### GitHub Pages

`.github/workflows/deploy.yml`이 같은 브랜치에서 이미 돌고 있습니다.

    https://designdobe.github.io/portfolio/

Vercel을 쓰신다면 둘 다 유지해도 문제는 없습니다(Pages는 미리보기용으로
남겨두는 식). 정리하고 싶으면 워크플로 파일을 지우고 저장소 Settings →
Pages에서 Source를 None으로 바꾸면 됩니다.

Pages는 저장소 하위 경로(`/portfolio`)로 서비스되므로, 워크플로가
`NEXT_PUBLIC_BASE_PATH`를 넘겨 정적 export로 전환합니다. 이 변수가 없으면
평소대로 루트 기준 Next 빌드가 됩니다.

`/public` 아래 이미지를 `<img>`로 참조할 때는 반드시 `src/lib/asset.ts`의
`asset()`을 거쳐야 합니다. `next/link`와 달리 base path가 자동으로 붙지 않아
하위 경로 배포에서 404가 납니다.
