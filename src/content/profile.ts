/**
 * Profile content.
 *
 * Source: Figma "PORTFOLIO_2025" (FdJ87N3Ibyckl9U9xAoCax), slides 00COVER,
 * 00resume and 99END. Copy is transcribed from the deck; do not invent
 * figures here - every number on the site must be traceable to a slide.
 */

export const profile = {
  name: "KIM YURI",
  nameKo: "김유리",
  alias: "kim.dobe",
  wordmark: "KIM 2026",
  tagline: "Brand Architecture & Visual System",
  headline: ["VISUAL SOLUTIONS", "FOR BUSINESS IMPACT."],
  summary:
    "공간부터 AI 크리에이티브까지, 비즈니스 성과를 창출하는 BX 디렉터",
  email: "designer.yurikim@gmail.com",
  instagram: {
    handle: "kim.dobe",
    url: "https://instagram.com/kim.dobe",
    followers: "8.8K",
  },
} as const;

/** 핵심역량 - 00resume */
export const capabilities = [
  {
    title: "통합 브랜드 경험(BX) 총괄",
    body: "F&B 및 리빙 산업군의 브랜드 신규 런칭부터 전면 리뉴얼까지 온·오프라인 고객 접점 설계",
  },
  {
    title: "데이터 기반 마케팅 디렉팅",
    body: "프로모션 기획을 통한 이벤트 기간 일매출 10%, 저녁 매출 29% 상승 견인 및 다채널 컨텐츠 마케팅(인스타그램, 유튜브 등) 총괄",
  },
  {
    title: "AI 업무적용 및 플로우 고도화",
    body: "다양한 툴과 효율적 업무방식을 도입해 업무시간 단축",
  },
] as const;

/**
 * Work Experience - 00resume, with the project titles the user supplied.
 *
 * Titles only: the situation / task / action / result notes behind each one
 * stay out of the resume section, which is a list, not a case study. The
 * project pages carry the detail.
 */
export const experience = [
  {
    period: "2023.01 - 현재",
    company: "주식회사 거성푸드",
    role: "기획마케팅팀 과장 / BX 파트 총괄",
    projects: [
      "신의주찹쌀순대 브랜드 리뉴얼",
      "신의주찹쌀순대 모델 마케팅",
      "국밥장인 브랜드 런칭 · 실시디자인",
      "한식 브랜드 런칭 1주년 이벤트 기획 및 디자인",
      "신의주 간편식 패키지 디자인",
      "컬리푸드페스타 2025 부스기획 및 디자인",
      "SINIJU Thao Dien 베트남 매장 S.I 기획 및 디자인",
    ],
  },
  {
    period: "2019.01 - 2022.12",
    company: "위뉴",
    role: "BX디자인 선임연구원",
    projects: ["유어쉘프 브랜드 디자인"],
  },
  {
    period: "2014.01 - 2018.12",
    company: "프리랜서",
    role: "학교 설계공모 설계도면 및 설계설명서 인포그래픽 · 편집디자인",
    projects: [],
    /*
      26건을 개별 항목으로 세우면 다른 회사의 프로젝트와 무게가 뒤바뀌므로,
      한 줄로 묶어 참여 범위로 보여준다. 축약 표기는 학교명으로 통일했다
      (동탄28초 -> 동탄28초등학교, 소사벌4초중 -> 소사벌4초·중학교).
    */
    scope: {
      label: "설계공모 참여 26개교",
      items: [
        "동탄10초등학교",
        "동탄28초등학교",
        "동패초등학교",
        "망경초등학교",
        "복자여자중학교",
        "새터중학교",
        "세교1초등학교",
        "소사벌4초·중학교",
        "송산2초등학교",
        "신남중학교",
        "신촌초등학교",
        "쌍령1초등학교",
        "안산1초등학교",
        "옥계북초등학교",
        "옥정10초등학교",
        "운서초등학교",
        "위례1초등학교",
        "유천초등학교",
        "장현2중학교",
        "장현4초등학교",
        "진건1유치원",
        "진건2초등학교",
        "하늘7초등학교",
        "한류초등학교",
        "해원초등학교",
        "현곡초등학교",
      ],
    },
  },
  {
    period: "2011.11 - 2013.08",
    company: "주식회사 케이티하이텔",
    role: "비즈사업팀 디자이너",
    projects: ["올레 ebook / 라이프자키 UI 디자인"],
  },
  {
    period: "2008.11 - 2011.09",
    company: "주식회사 에이오와이",
    role: "디자인1팀 대리",
    projects: [
      "국방문화연구센터(밀리토피아) CI · 색채 · 사인디자인",
      "삼성화재 미디어컨텐츠 디자인",
      "송도 글로벌캠퍼스 색채 및 그래픽 디자인",
      "죽전 힐스테이트 주차장 그래픽",
    ],
  },
] as const;

/** Education & Awards - 00resume */
export const education = [
  { year: "2025", title: "아모레퍼시픽 AI 챌린지 공모전 아이디어상" },
  { year: "2009", title: "명지전문대학교 산업정보디자인과 졸업 (4.02/4.5)" },
] as const;

/** Core Tools - 00resume */
export const tools = [
  { group: "Visual", items: "Illustrator, Photoshop, InDesign, Figma" },
  { group: "Space", items: "Sketchup, AutoCad" },
  { group: "Video", items: "Premiere Pro, Final Cut Pro" },
] as const;

/**
 * Figures for the homepage impact strip, each quoted from a results slide.
 *
 * NOT RENDERED at the moment: the four read as a jumble side by side, mixing
 * store counts, visitor counts and revenue percentages, so the strip was taken
 * off the landing page. Kept here so it can be put back, whole or in part, by
 * restoring the section in src/app/page.tsx.
 */
export const impact = [
  { value: "40", unit: "Stores", label: "S.I 가이드 적용 및 시공 완료", source: "01_07" },
  { value: "+16", unit: "%", label: "리뉴얼 런칭 후 가맹 문의 상승", source: "01_07" },
  { value: "4,100", unit: "Visitors", label: "컬리 푸드 페스타 부스 방문 및 시식", source: "02_02" },
  { value: "+29", unit: "%", label: "프로모션 기간 저녁 매출 상승", source: "06_02" },
] as const;
