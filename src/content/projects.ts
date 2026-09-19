/**
 * Project content.
 *
 * Source: Figma "PORTFOLIO_2025" (FdJ87N3Ibyckl9U9xAoCax). Each entry lists the
 * deck frames it was transcribed from in `frames`, so copy can be re-checked
 * against the design. Figures in `results` are quoted from the deck's own
 * results slides - never add a metric that is not on a slide.
 *
 * Imagery lives under /public/work/<slug>/. `cover` names the file that has to
 * exist for the project to appear at all - src/lib/published.ts hides a project
 * whose cover is missing. The `media` entries here only supply captions: the
 * gallery itself is built from the numbered files actually in the folder, so an
 * added 05.jpg shows up on its own, uncaptioned until it is listed here.
 * See ASSETS.md for the export sizes.
 */

export type Category = "BX" | "SPACE" | "GRAPHIC" | "DIGITAL" | "AI" | "PERSONAL";

export type Project = {
  slug: string;
  frames: string[];
  title: string;
  titleKo: string;
  category: Category;
  featured?: boolean;
  role: string;
  tools?: string;
  overview: string;
  sections?: { heading: string; body: string }[];
  results?: { value: string; label: string }[];
  quote?: string;
  cover: string;
  media?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "siniju-brand-renewal",
    frames: ["01_00", "01_02", "01_04", "01_07"],
    title: "SINIJU BRAND RENEWAL",
    titleKo: "신의주찹쌀순대 공간 및 시각 아이덴티티 전면 리뉴얼",
    category: "BX",
    featured: true,
    role: "BX Directing 100% (기획, 공간, 그래픽, 외주 감리 총괄)",
    tools: "Illustrator, Photoshop, Sketchup, Dimension",
    overview:
      "직영점 오픈에 맞춰 기존의 노후화된 브랜드 이미지를 탈피하고, 현대적이면서도 신뢰감을 주는 공간 아이덴티티(S.I) 고도화가 필요했습니다. 단순히 로고를 바꾸는 것을 넘어 파사드, 인테리어 마감재, 내부 그래픽 사인물까지 통합적인 브랜드 경험 가이드를 새롭게 구축했습니다. 이를 통해 전국 40개 신규가맹점에 일관된 톤앤매너를 적용하고, 가맹 문의를 16% 상승시키는 비즈니스 임팩트를 창출했습니다.",
    sections: [
      {
        heading: "Design Strategy",
        body: "전국 가맹점에 일괄 적용되는 S.I매뉴얼과 인테리어 스펙리스트를 구축하였습니다. 인테리어·주방·사인 등 다수 외주 업체 간의 커뮤니케이션 프로세스와 시공 일정을 규격화하여 현장의 공정 오류 및 재작업 리스크를 방어했습니다. 특히 시공 효율성을 극대화하기 위해 기존 사인 디자인의 구조를 전면 개편하고, 월 그래픽을 포함한 내부 시각물 가이드라인을 새롭게 자산화하여 불필요한 시공 단가를 절감하는 동시에 전국 40개 매장의 공간 및 시각 퀄리티를 성공적으로 상향 평준화했습니다. 더불어, 매장별 현장 구조 및 특성에 따라 매뉴얼 외의 예외적 적용이 필요한 한계 상황에서는 외주 업체와 주도적으로 최적의 해결 방안을 도출했습니다. 이를 단순 일회성 대응에 그치지 않고 유형별 '현장 대응 사례 리스트'로 자산화 구축함으로써, 향후 발생 가능한 현장 리스크를 선제적으로 제어하고 시스템의 유연성과 완성도를 높였습니다.",
      },
      {
        heading: "브랜드 통합 가이드라인",
        body: "정보의 위계에 따른 서체 및 색채 가이드를 정리하여 전국 가맹점이 동일한 기준으로 시공과 홍보물 제작을 진행할 수 있도록 했습니다.",
      },
    ],
    results: [
      { value: "40 Stores Open", label: "전국 40개 매장 S.I 가이드 적용 및 시공 완료" },
      { value: "+16% Inquiries", label: "리뉴얼 런칭 후, 이전 기간 대비 가맹 문의 상승" },
      { value: "BX System Building", label: "그래픽, 로고, 인테리어 스펙리스트 전사 자산화 및 외주 효율성 증대" },
    ],
    quote:
      "내가 알던 그 신의주가 맞나 싶을 정도로 놀랍다. 패밀리레스토랑처럼 깔끔하고 단정해서 믿음이 간다.",
    cover: "/work/siniju-brand-renewal/cover.jpg",
    media: [
      { src: "/work/siniju-brand-renewal/01.jpg", caption: "리뉴얼 매장 파사드" },
      { src: "/work/siniju-brand-renewal/02.jpg", caption: "브랜드 통합 가이드라인" },
      { src: "/work/siniju-brand-renewal/03.jpg", caption: "내부 그래픽 사인 시스템" },
      { src: "/work/siniju-brand-renewal/04.jpg", caption: "S.I 가이드 적용 매장" },
    ],
  },
  {
    slug: "kurly-food-festa",
    frames: ["02_00", "02_01", "02_02"],
    title: "2025 KURLY FOOD FESTA",
    titleKo: "신의주찹쌀순대 브랜드 부스 기획 및 공간 디자인 총괄",
    category: "SPACE",
    featured: true,
    role: "동선 및 행사기획, 부스 및 MD상품 디자인, 견적관리",
    tools: "Illustrator, Photoshop, Sketchup, Dimension",
    overview:
      "F&B 브랜드가 밀집한 '2025 컬리 푸드 페스타'에서 신의주찹쌀순대만의 존재감을 각인시키고 실질적인 브랜드경험을 이끌어내야 했습니다. '선물이 가득한 크리스마스 이브'라는 테마를 바탕으로, 한정된 공간 내에서 시식·체험·이벤트로 이어지는 입체적인 고객 여정(CX)과 최적의 운영 동선을 설계했습니다. 그 결과 4,100명의 현장 트래픽을 유치했으며, 오프라인의 긍정적 경험을 온라인으로 전환시켜 플랫폼 내 브랜드 '찜' 1,200개 증가를 달성했습니다.",
    sections: [
      {
        heading: "Design Strategy",
        body: "현장 조리가 필수적인 F&B 부스의 특성을 반영하여, 간이 주방의 조리 동선과 최소 필요 면적을 최우선으로 확보한 뒤 방문객의 체험 동선과 이벤트 프로그램을 유기적으로 설계했습니다. 부스의 테마는 '제품 인지도 확보'라는 핵심 목적을 잃지 않으면서도 페스타의 '연말 파티' 무드를 자연스럽게 결합해 시각적인 매력도를 높였습니다. 특히, 한정된 예산 내에서 최상의 임팩트를 내기 위해 다수 대행사의 비딩 및 견적 비교를 철저히 진행하였으며, 일반 부스 규모에서 시공 비용 대비 시각적 효과가 뛰어난 마감재를 전략적으로 채택하여 예산을 최적화했습니다. 또한, 행사장에서 쉽게 버려지는 일반적인 리플렛 대신, 타겟 고객의 흥미를 유발하면서도 제품의 핵심 정보를 담아낸 '스토리텔링 부적' 형태의 굿즈를 기획 및 디자인하여 방문객의 자발적인 바이럴과 브랜드 경험을 높였습니다.",
      },
    ],
    results: [
      { value: "4,100 Visitors", label: "부스 누적 방문 및 시식 진행 (QR코드 이벤트 2,757회 참여)" },
      { value: "+1,200 Traffic", label: "컬리 플랫폼 내 브랜드 '찜' 증가 (실질적 트래픽 전환)" },
    ],
    cover: "/work/kurly-food-festa/cover.jpg",
  },
  {
    slug: "gukbap-master",
    frames: ["03_01", "03_02", "03_04"],
    title: "GUKBAP MASTER VISUAL SYSTEM",
    titleKo: "국밥장인 신규 브랜드 공간 아이덴티티 및 비주얼 시스템 구축",
    category: "BX",
    featured: true,
    role: "BX Directing 100% (S.I 고도화, 매장사인 및 브랜드 가이드라인 작성)",
    tools: "Illustrator, Photoshop, Sketchup, Dimension",
    overview:
      "신규 외식 브랜드 '국밥장인'의 성공적인 시장 진입과 프랜차이즈 확장을 위해, 초기 기획 단계부터 공간(S.I) 및 시각 디자인 가이드라인을 통합 구축했습니다. '장인'이라는 키워드를 시각화한 독창적인 현판 시스템과 매장 내외부 디자인을 고도화하여, 런칭 후 전국 10개 지점에 일관된 브랜드 아이덴티티를 성공적으로 적용했습니다.",
    sections: [
      {
        heading: "Design Strategy",
        body: "'합리적인 가격대'라는 브랜드 강점과 '장인'이라는 프리미엄 컨셉을 동시에 구현하기 위해 내·외부 사인물 및 공간 시스템을 전략적으로 기획했습니다. 파사드(외관)에는 따뜻한 우드톤 마감재와 시그니처 조명을 매칭하고, 금속 소재의 '장인 현판'을 독자적인 시각 자산으로 개발하여 브랜드의 무게감을 확고히 다졌습니다. 특히, 가맹점의 시공 비용을 절감하기 위해 내부 입면의 일부를 도장으로 마감하는 합리적인 스펙리스트를 설계했습니다. 동시에 자칫 단조로울 수 있는 도장 면에는 자체 개발한 전용 벽 장식 소품을 적용하여, 단가 절감과 시각적 완성도라는 두 가지 목표를 모두 달성했습니다.",
      },
    ],
    results: [
      { value: "10 Stores Open", label: "10개 매장 S.I 가이드 적용 및 시공 완료" },
      { value: "BX System Building", label: "그래픽, 로고, 인테리어 스펙리스트 전사 자산화 및 외주 효율성 증대" },
    ],
    cover: "/work/gukbap-master/cover.jpg",
    media: [{ src: "/work/gukbap-master/01.jpg", caption: "외부 특화 사인" }],
  },
  {
    slug: "siniju-thao-dien",
    frames: ["04_01", "04_02", "04_04"],
    title: "SINIJU THAO DIEN S.I DESIGN",
    titleKo: "베트남 타오디엔 신의주 브랜드 및 S.I 디자인",
    category: "BX",
    featured: true,
    role: "BX Directing 100% (브랜딩, 매장 및 사인물 디자인)",
    tools: "Illustrator, Photoshop",
    overview:
      "베트남 타오디엔 상권 특성과 다변화된 메뉴 라인업에 발맞춰, 기존 브랜드 이미지에서 탈피한 완전히 새로운 글로벌 브랜딩 기획이 요구되었습니다. 이에 '생동감 넘치는 한국의 현대적인 이미지'를 디자인 모티브로 차용하여, 베트남 타오디엔을 위한 SINIJU 브랜드를 재정립했습니다.",
    sections: [
      {
        heading: "Design Strategy",
        body: "타오디엔의 특성에 맞춰 신의주의 새로운 플래그십 매장 컨셉을 기획했습니다. 브랜드의 고유한 한국적 유산을 현지 고객에게 가장 매력적으로 전달하기 위해, 전통적인 '오방색'을 감각적인 포인트 컬러로 재해석하고 이를 모던한 타이포그래피와 결합했습니다. 자칫 무거울 수 있는 전통 국밥의 이미지를 탈피하고 '현대적 K-Culture'를 제안하는 형태로 기획하였습니다.",
      },
      {
        heading: "고객 방문 여정",
        body: "공간별 이미지 전개를 통해 진입부터 착석, 식사, 퇴장까지의 접점을 순차적으로 설계했습니다.",
      },
    ],
    results: [
      { value: "Global Flagship", label: "베트남 타오디엔 글로벌 플래그십 스토어 런칭 및 신규 S.I 구축" },
    ],
    cover: "/work/siniju-thao-dien/cover.jpg",
    media: [
      { src: "/work/siniju-thao-dien/01.jpg", caption: "공간별 이미지 전개" },
      { src: "/work/siniju-thao-dien/02.jpg", caption: "브랜드 아이템 및 매장 적용" },
    ],
  },
  {
    slug: "wangsimni-store-launching",
    frames: ["003_01", "003_02", "003_03", "003_04"],
    title: "WANGSIMNI STORE LAUNCHING",
    titleKo: "신의주찹쌀순대 왕십리직영점 오픈",
    category: "SPACE",
    featured: true,
    role: "공간기획 및 디렉팅, 매장채널운영",
    tools: "Illustrator, Photoshop, Sketchup",
    overview:
      "메뉴개편과 함께 새로운 지역에 직영점을 오픈하게 됨에 따라, 예산안에서 인테리어 업체와 공사범위를 지정하고 보수해야할 곳의 방향을 지정하여 부분공사로 진행했습니다. 또한 매장의 온라인 홍보를 위한 플랫폼별 채널을 직접 셋팅하고 월별 성과를 모니터링하며 직접 운영하여 고객으로 하여금 '깔끔하고 친절해 편하게 찾기 좋은 동네식당'의 이미지를 구축하였습니다.",
    sections: [
      {
        heading: "Design Strategy",
        body: "예산에 따라 파사드의 일부 사양변경과 내부 인테리어의 기존구조 재사용이 필요했습니다. 예산에도 맞으면서도 기존 컨셉과의 시각적 분위기를 통일하기 위해 일부 주요 구조를 간략하게 모델링하고 생성형 AI로 희망하는 분위기의 씬을 만들어 인테리어 및 사인업체와 소통 및 보고 등에 활용해 의사결정의 시간을 대폭 단축하였습니다.",
      },
      {
        heading: "플랫폼별 채널운영",
        body: "온라인 유입증대를 위한 플랫폼별 채널을 생성하고, 체험단 마케팅과 직접 촬영한 컨텐츠를 통해 원소스 멀티유즈 형태로 꾸준한 소식 및 채널관리를 진행하였습니다. 순대국집 방문에서 겪는 고객의 주요 페인포인트를 분석하고 온라인상에서 발행되는 컨텐츠와 고객 상호작용을 통해 문제해결에 대한 메세지를 동일하게 전달하였습니다.",
      },
    ],
    results: [
      { value: "5 Days → 1 Day", label: "생성형 AI 컨셉 이미지 도입으로 시안 합의 리드타임 단축" },
      { value: "Local Search #2", label: "네이버플레이스 '상왕십리 맛집' 검색 2위 (2026.09.13)" },
    ],
    quote: "오픈 일주일 됐는데 7번째 방문 중.........",
    cover: "/work/wangsimni-store-launching/cover.jpg",
    media: [
      { src: "/work/wangsimni-store-launching/01.jpg", caption: "생성형 AI를 활용한 파사드 시안" },
      { src: "/work/wangsimni-store-launching/02.jpg", caption: "플랫폼별 채널 운영" },
    ],
  },
  {
    slug: "ai-workflow-design",
    frames: ["004_01", "004_02"],
    title: "AI WORKFLOW DESIGN",
    titleKo: "AI 툴을 통한 업무방식 전환과 확장",
    category: "AI",
    featured: true,
    role: "AI툴 스터디 및 팀내 협업",
    tools: "GPT CODEX, Genspark AI",
    overview:
      "기획마케팅팀에 팀장·마케팅 인력 공백이 겹치며 기존 작업 방식으로는 산출을 유지할 수 없는 상황이었습니다. 개인업무에 적용해 속도와 비용을 절감하는 한편, 할 수 없었던 캐릭터디자인과 코딩, 비디자이너와의 협업툴 개발까지 다양한 시도를 통해 효율적인 업무환경 개선을 스터디하고 있습니다.",
    sections: [
      {
        heading: "Scope · 바이브코딩을 활용한 회사 홈페이지 구축",
        body: "추가적인 개발비용 지출이 어려운 상황에서 회사 공식 채널 부재로 인한 검색 신뢰도 공백을 해결하여 추가적인 협업문의가 이루어질 수 있는 창구로 활용. 신의주찹쌀순대 가맹모집 페이지 하단에도 패밀리사이트로 추가해 '본사가 있는 신뢰할 수 있는 브랜드' 이미지 구축. GA, 서치콘솔 등을 연결하여 성과 지표를 모니터링할 수 있도록 했습니다.",
      },
      {
        heading: "Scope · 브랜드 캐릭터 자산화",
        body: "벡터형태의 몇 가지 포즈가 개발되어 있는 캐릭터를 생성형 AI를 통해 렌더링한 듯한 3D 그래픽으로 고도화하여 SNS 컨텐츠에 활용. 오래된 브랜드 이미지 개선과 함께 캐릭터를 단발성 일러스트가 아닌 메시지를 전달하는 브랜드 페르소나로 운용했습니다.",
      },
      {
        heading: "Scope · 가맹점 배포용 포스터 이미지 제작기 개발",
        body: "가맹점별 메뉴 가격이 다른 경우, 기존 디자인프로그램에서 가격을 수정해 이미지로 전달하는 방식에서 프로그램을 켜지 않고 가격만 바꿔 이미지로 내보내기 할 수 있는 도구를 개발했습니다. 디자인 프로그램이 없어도 서체 깨짐 없이 사용할 수 있어 전달과정 없이 즉시 대응이 가능합니다.",
      },
      {
        heading: "Speed · 리드타임의 효율적 관리",
        body: "공간컨셉 이해를 위해 필수적으로 제작하는 CG이미지 대신 생성형 AI로 공간이미지를 생성해 의사결정 시간을 5일에서 1일로 단축했습니다. 동일 구도의 섬네일 생성 프롬프트 워크플로우로 단순업무를 1시간에서 15분으로, 일러스트 작가 이탈 상황에서는 생성형 AI로 메뉴사진을 일러스트화하여 1주일 걸릴 작업을 1일에 완료했습니다. 레퍼런스 조사와 아이디어 스케치 과정에도 AI를 적용해 사전조사 시간을 3일에서 2시간으로 줄였습니다.",
      },
    ],
    results: [
      { value: "2,760 Impressions", label: "자체 구축 홈페이지 검색 노출 (2026.06-09)" },
      { value: "4 New Channels", label: "신규 협업 문의 창구 확보" },
      { value: "5 Days → 1 Day", label: "공간 컨셉 의사결정 리드타임 단축" },
    ],
    cover: "/work/ai-workflow-design/cover.jpg",
    media: [
      { src: "/work/ai-workflow-design/01.jpg", caption: "회사 홈페이지" },
      { src: "/work/ai-workflow-design/02.jpg", caption: "브랜드 캐릭터 3D 자산" },
      { src: "/work/ai-workflow-design/03.jpg", caption: "포스터 빌더" },
    ],
  },
  {
    slug: "siniju-hmr-package",
    frames: ["05_01", "05_02", "05_03"],
    title: "SINIJU HMR PACKAGE DESIGN",
    titleKo: "신의주 간편식(HMR) 시리즈 패키지 디자인",
    category: "GRAPHIC",
    role: "촬영 디렉팅, 패키지 디자인 및 인쇄 감리 (100%)",
    tools: "Illustrator, Photoshop",
    overview:
      "제품 포장방식의 변경으로 5종의 제품패키지를 신규로 디자인해야 하는 상황에서 패키지에 필요한 사진촬영을 포함해 추후 늘어날 제품군에도 적용할 수 있는 범용 디자인이 필요했습니다. 매장과는 다른 톤으로 디자인하되, 브랜드의 확장을 암시할 수 있는 요소를 배치하여 디자인을 진행하였습니다.",
    sections: [
      {
        heading: "Design Strategy",
        body: "제품사진 기획에서는 짧은 시간에 필요한 패키지용 사진을 모두 찍는 것을 목표로 일정과 포토그래퍼, 스타일리스트 간 협업을 진행하였습니다. 통일된 브랜드 컬러를 전 제품에 적용하는 것보다 제품의 특징에 맞는 배경색을 사용하되 전용패턴이 포함된 백그라운드와 서체, 로고 위치를 동일하게 위치하여 시리즈 제품임을 이해할 수 있도록 기획하였습니다. 추후 여러 OEM제품과 콜라보 제품에 본 가이드를 제공하여 브랜드의 통일성을 유지하며 디자인을 전개할 수 있었습니다.",
      },
    ],
    results: [
      { value: "2026 Best New Product", label: "한국일보 주최 2026 베스트신상품 선정" },
      { value: "+15 SKU", label: "총 15종의 제품에 가이드라인 확장 적용 및 콜라보상품 가이드 활용" },
    ],
    cover: "/work/siniju-hmr-package/cover.jpg",
    media: [{ src: "/work/siniju-hmr-package/01.jpg", caption: "제품용 브랜드 가이드" }],
  },
  {
    slug: "menu-promotion-kv",
    frames: ["06_01", "06_02"],
    title: "MENU PROMOTION KV DESIGN",
    titleKo: "저녁메뉴 프로모션 기획 및 KV 디자인",
    category: "GRAPHIC",
    role: "슬로건/키비주얼 디자인 총괄 (100%)",
    tools: "Illustrator, Photoshop",
    overview:
      "직관적인 카피라이팅과 메뉴 연출을 통해 오프라인 매장의 고객 접점(내외부 POP, 포스터)에서 즉각적인 아이캐치와 구매 전환을 유도하는 시각적 장치를 설계했습니다. 또한, 디자인 템플릿을 시스템화하여 향후 가맹점별 주류 이벤트 진행 시 발생하는 외주/업무 리소스를 대폭 단축했습니다.",
    results: [{ value: "+29% Sales Growth", label: "이벤트 진행 기간 내 저녁 매출 29% 상승 견인" }],
    cover: "/work/menu-promotion-kv/cover.jpg",
    media: [
      { src: "/work/menu-promotion-kv/01.jpg", caption: "매장 POP 및 포스터" },
    ],
  },
  {
    slug: "new-menu-kv",
    frames: ["07_01", "07_02"],
    title: "NEW MENU KV DESIGN",
    titleKo: "신메뉴 백순대곱창볶음 런칭 키비주얼 디자인",
    category: "GRAPHIC",
    role: "메뉴 컨셉 기획, 촬영 디렉팅, 키비주얼 디자인",
    tools: "Illustrator, Photoshop, Premiere, Framer",
    overview:
      "'시장에서 먹던 추억의 맛'이라는 소구점과 강렬한 타이포그래피를 결합해 시각적 주목도를 극대화했습니다. 소비자 대상 홍보물뿐만 아니라 점주 교육을 위한 레시피 전용 사이트까지 통합 구축하여, 신메뉴 도입 시 발생할 수 있는 현장의 오퍼레이션 리스크를 선제적으로 방어했습니다.",
    cover: "/work/new-menu-kv/cover.jpg",
    media: [{ src: "/work/new-menu-kv/01.jpg", caption: "점주 교육용 레시피 사이트" }],
  },
  {
    slug: "brand-anniversary",
    frames: ["08_01", "08_02", "08_03"],
    title: "BRAND ANNIVERSARY PROMOTION",
    titleKo: "국밥장인 1주년 기념 프로모션 기획 및 디자인",
    category: "GRAPHIC",
    role: "예산에 따른 이벤트 기획, 굿즈 소싱 및 시각 디자인 총괄 (100%)",
    tools: "Illustrator, Photoshop",
    overview:
      "브랜드 런칭 1주년을 맞아 셀프서비스 가맹점 환경에 최적화된 고객 참여형 온오프라인 프로모션을 기획하고 실행에 필요한 디자인과 이벤트 홍보를 위한 숏폼컨텐츠 촬영까지 직접 진행하였습니다. 결과적으로 실질적인 매출 증대와 마케팅용 고객 DB를 성공적으로 확보했습니다.",
    sections: [
      {
        heading: "오프라인 이벤트",
        body: "영수건수와 객단가 인상을 목적으로 한 오프라인 이벤트로 일정금액 이상 영수건당 기념품 증정형태로 기획했습니다. 한정된 예산 안에서 적절한 수량과 고객호응도를 높이기 위해 단순 로고 삽입이 아닌 별도의 기념 KV를 개발해 삽입하고, 카운터가 없는 매장에서도 대응이 쉽도록 응모와 증정 프로세스를 간편하게 기획하였습니다.",
      },
      {
        heading: "온라인 이벤트",
        body: "매장방문 고객 전원에게 QR코드 입력폼이 연결된 명함형 응모권을 제공하여 고객DB 수집 및 매장방문객 증대를 위한 온라인 이벤트를 기획하였습니다. 매장명과 연령대를 함께 수집하여 매장별 고객성향 분석 및 신메뉴 도입 시 마케팅용 LMS 발송에 이용하였습니다.",
      },
    ],
    results: [
      { value: "+10% Sales Growth", label: "1주년 이벤트 진행 전 대비 매출 10%, 영수 건수 12% 상승" },
      { value: "Customer DB", label: "향후 신메뉴 마케팅 및 프로모션을 위한 가맹점별 타겟 고객 DB 구축" },
    ],
    cover: "/work/brand-anniversary/cover.jpg",
    media: [
      { src: "/work/brand-anniversary/01.jpg", caption: "매장 이벤트 포스터" },
      { src: "/work/brand-anniversary/02.jpg", caption: "1주년 기념품 굿즈" },
    ],
  },
  {
    slug: "brand-supporters",
    frames: ["09_01", "09_02"],
    title: "BRAND SUPPORTERS KV DESIGN",
    titleKo: "SINIJU 서포터즈 브랜딩 및 디자인",
    category: "GRAPHIC",
    role: "컨셉 기획 및 품목별 디자인 (100%)",
    tools: "Illustrator, Photoshop",
    overview:
      "기존 보수적인 순대국 브랜드의 이미지를 탈피하고 2030 젊은 타겟층과 적극적으로 소통하기 위해, 서포터즈 전용 서브 아이덴티티를 구축했습니다. 우주선처럼 보이는 반짝이는 뚝배기를 모티프로 디자인하여 행사용품 및 기념품에 활용하였습니다.",
    sections: [
      {
        heading: "발대식과 해단식",
        body: "2기까지 진행한 서포터즈에서 행사에 사용될 다양한 기념품과 행사용 현수막 및 배너를 동일한 KV에 맞춰 전개하였습니다.",
      },
      {
        heading: "성과증명서",
        body: "일반적으로 서포터즈와 같은 대외활동 종료 시에는 '수료증' 형태로 증정하는 경우가 많지만, 서포터즈라는 마케팅의 근본적 목적에 대해 고민하고 기여한 성과에 대해 감사하는 마음을 전하기 위해 '증명서' 형태의 기념품을 기획하고 제작하였습니다.",
      },
    ],
    cover: "/work/brand-supporters/cover.jpg",
    media: [
      { src: "/work/brand-supporters/01.jpg", caption: "서포터즈 기념품 및 성과증명서" },
    ],
  },
  {
    slug: "yourshelf-pro",
    frames: ["10_01", "10_02", "10_03", "10_04"],
    title: "YOURSHELF PRO LAUNCHING",
    titleKo: "모듈형 장식장 신제품 출시에 따른 기획 및 디자인",
    category: "GRAPHIC",
    role: "사진촬영 컨셉기획 및 상세페이지, 패키지, 사용설명서 디자인 (100%)",
    tools: "Illustrator, Photoshop, Sketchup, Dimension",
    overview:
      "조립형 모듈 장식장이라는 제품의 구조적 특성을 직관적으로 전달하기 위해, 패키지 박스부터 조립 설명서, 온라인 상세페이지까지 일관된 톤앤매너의 고객 경험을 설계했습니다. 특히 대형 가구 제품 특성상 발생하는 세트장 대관 및 스튜디오 촬영 비용의 한계를 극복하기 위해, 제품 이미지의 상당 부분을 3D 렌더링(Dimension, Sketchup)으로 자체 구현하여 실사 촬영과 자연스럽게 합성했습니다.",
    sections: [
      {
        heading: "사진촬영 기획",
        body: "제품을 소구할 수 있는 다양한 연출을 3D 모델링 툴을 이용해 구체화한 후에 촬영작가와 소통해 촬영을 진행했습니다. 명확한 컨셉 전달로 의사소통의 오류를 줄이고 촬영결과물의 만족도를 높일 수 있었습니다.",
      },
    ],
    cover: "/work/yourshelf-pro/cover.jpg",
    media: [
      { src: "/work/yourshelf-pro/01.jpg", caption: "기획안" },
      { src: "/work/yourshelf-pro/02.jpg", caption: "촬영본" },
    ],
  },
  {
    slug: "yourshelf-550",
    frames: ["11_01", "11_02"],
    title: "YOURSHELF 550 LAUNCHING",
    titleKo: "장식장 시리즈 신제품 출시에 따른 기획 및 디자인",
    category: "GRAPHIC",
    role: "사진촬영 컨셉기획 및 상세페이지, 패키지, 사용설명서 디자인 (100%)",
    tools: "Illustrator, Photoshop, Sketchup, Dimension",
    overview:
      "'협소한 공간에 최적화된 콤팩트 장식장'이라는 550 시리즈만의 핵심 소구점을 극대화하기 위해, 타겟 고객의 라이프스타일에 맞춘 촬영 컨셉을 기획하고 상세페이지를 설계했습니다. 구현하기 까다로운 컷들은 3D 모델링 렌더링으로 완벽하게 대체하여 실사 촬영과 이질감 없이 결합했습니다. 이를 통해 풍성하고 입체적인 시각 소구 포인트를 완성했습니다.",
    cover: "/work/yourshelf-550/cover.jpg",
  },
  {
    slug: "podoal-seat-review",
    frames: ["12_01", "12_02", "12_03"],
    title: "PODOAL WEB SERVICE UI",
    titleKo: "좌석리뷰 서비스 포도알 UI 디자인",
    category: "DIGITAL",
    featured: true,
    role: "UI (PC/MOBILE) 디자인 (100%)",
    tools: "Figma",
    overview:
      "공연 관람객들이 공통으로 겪는 '좌석 시야 정보 부족'이라는 페인포인트를 해결하기 위해, 실시간 좌석 리뷰를 공유하는 플랫폼 'PODOAL'의 UI/UX를 설계했습니다. 베타 런칭 후 67명의 유저를 대상으로 설문을 진행하여, '직관적이지 못한 화면 구성' 등의 문제를 데이터 기반으로 개선했습니다. 모바일과 PC 웹 환경 모두에서 리뷰 작성과 정보 탐색이 매끄럽게 이어지도록 유저 저니를 최적화하였으며, 프론트엔드/백엔드 개발 직군과 협업했습니다.",
    sections: [
      {
        heading: "MVP 범위",
        body: "MVP#1 실시간 리뷰, MVP#2 공연별 리뷰목록 보기와 필터링, MVP#3 평가항목별 좌석리뷰 보기 및 쓰기와 수정으로 단계를 나누어 설계했습니다. 공연별 좌석 리뷰 확인과 작성, 실시간 등록 리뷰 확인, 내가 등록한 리뷰 확인, 공연장 상세정보 확인을 핵심 플로우로 정의했습니다.",
      },
    ],
    cover: "/work/podoal-seat-review/cover.jpg",
    media: [
      { src: "/work/podoal-seat-review/01.jpg", caption: "MVP#1 실시간 리뷰" },
      { src: "/work/podoal-seat-review/02.jpg", caption: "MVP#2 리뷰목록과 필터링" },
      { src: "/work/podoal-seat-review/03.jpg", caption: "MVP#3 평가항목별 좌석리뷰" },
    ],
  },
  {
    slug: "illiyoon-ai-brand-film",
    frames: ["13_01", "13_02"],
    title: "ILLIYOON AI BRAND FILM",
    titleKo: "아모레퍼시픽 AI 콘텐츠 챌린지 2025",
    category: "AI",
    role: "기획 및 영상제작 (100%)",
    tools: "Midjourney, Kling, Runway",
    overview:
      "일리윤 제품의 특허받은 핵심 기능인 '노폐물 흡착' 및 '수분 공급' 효능을 시각적으로 극대화하기 위해 생성형 AI 툴만을 이용해 모든 영상컷을 제작하였습니다. 1차 예선 통과 후 피드백 과정을 거쳐 보완한 뒤 본선에서 아이디어상을 수상하였습니다.",
    results: [{ value: "아이디어상", label: "아모레퍼시픽 AI 콘텐츠 챌린지 2025 본선 수상" }],
    cover: "/work/illiyoon-ai-brand-film/cover.jpg",
  },
  {
    slug: "kimdobe-personal-branding",
    frames: ["14_01", "14_02"],
    title: "KIMDOBE PERSONAL BRANDING",
    titleKo: "포토샵 끊은지 오래인 김도비 SNS 채널 운영",
    category: "PERSONAL",
    role: "SNS 컨텐츠 제작 (100%)",
    overview:
      "SNS 컨텐츠 트렌드를 익히고자 취미로 시작한 SNS 채널로, 디자인 툴팁 공유로 시작해 현재는 AI 활용 작업물과 프롬프트 공유를 주제로 컨텐츠를 연재하였습니다. 8,800 팔로워를 달성하고 교육플랫폼에서 강의제안과 다수의 협업제안을 받는 등의 노출 성과를 달성했습니다.",
    results: [
      { value: "8.8K Followers", label: "게시물 270개 · @kim.dobe" },
      { value: "강의 · 협업 제안", label: "교육플랫폼 강의제안 및 다수 협업제안 수신" },
    ],
    cover: "/work/kimdobe-personal-branding/cover.jpg",
    media: [
      { src: "/work/kimdobe-personal-branding/01.jpg", caption: "SNS 채널 콘텐츠" },
    ],
  },
  {
    slug: "pace-page-1-hour",
    frames: ["15_01", "15_02", "15_03"],
    title: "PACE : PAGE 1 HOUR",
    titleKo: "한 걸음, 한 페이지에 몰입하는 시간",
    category: "PERSONAL",
    role: "SNS 컨텐츠용 개인작업 (100%)",
    overview:
      "좋아하는 취미인 독서와 러닝의 '몰입'이라는 공통소구를 활용한 가상의 행사를 기획하였습니다. 겹쳐진 라운드된 곡선은 펼쳐진 책장이 되기도 하고, 달리기를 위한 트랙이 되기도 합니다.",
    cover: "/work/pace-page-1-hour/cover.jpg",
    media: [
      { src: "/work/pace-page-1-hour/01.jpg", caption: "행사 굿즈 및 키비주얼" },
      { src: "/work/pace-page-1-hour/02.jpg", caption: "행사 포스터" },
    ],
  },
  {
    slug: "rnd-academy-space",
    frames: ["001_01", "001_02"],
    title: "R&D ACADEMY SPACE DESIGN",
    titleKo: "외식연구아카데미 공간디자인",
    category: "SPACE",
    role: "공간 사인물 디자인 (100%)",
    tools: "Illustrator, Photoshop",
    overview:
      "제품에 대한 연구개발과 조리교육을 위한 공간을 신설하게 됨에 따라 기업 브랜드 컬러를 차용하여 공간에 맞는 사인물과 네이밍을 기획하고 디자인하였습니다.",
    cover: "/work/rnd-academy-space/cover.jpg",
  },
  {
    slug: "geosung-dabang",
    frames: ["002_01"],
    title: "GEOSUNG DABANG SPACE DESIGN",
    titleKo: "사내카페 공간디자인",
    category: "SPACE",
    role: "공간기획 (80%)",
    tools: "Illustrator, Photoshop",
    overview:
      "사내 카페테리아 공간을 신설하게 됨에 따라 인테리어 업체와 협업하여 공간기획 및 재료선별에 따른 인테리어를 진행하였습니다. 이후 보유하고 있던 가구의 재사용을 적용해 가구구매 예산을 절감하였습니다.",
    cover: "/work/geosung-dabang/cover.jpg",
  },
];

export const categories: Category[] = ["BX", "SPACE", "GRAPHIC", "DIGITAL", "AI", "PERSONAL"];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
