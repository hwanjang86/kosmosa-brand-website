# KOSMOSA 브랜드 웹사이트 구축 계획 문서 (Amazon US Market) - 신규 실물 기반 연출 샷 적용

## 1. 개요 (Goal Description)
미국 아마존(Amazon US) 마켓을 타겟으로 한 데스크테리어/데스크셋업 프리미엄 브랜드 **KOSMOSA**의 공식 브랜드 웹사이트 개발 플랜입니다.

* **브랜드명**: KOSMOSA
* **슬로건**: *"orbit in your order."*
* **주요 카테고리**: 사무용품, 데스크테리어, 데스크셋업 (Desk Setup / Workspace Elevation)
* **주요 타겟**: 미국 아마존 고객 (홈오피스 전문가, 디자이너, 테크 에너시스트)
* **디자인 & 인터랙션 콘셉트**:
  - **Apple HIG Design & Emil Design Engineering**: `damping: 1.0` 스프링 애니메이션, 1:1 드래그 트래킹, `backdrop-filter` 글래스모피즘 Chrome
  - 새로 추가된 **KOSMOSA 원본 패드폴리오 이미지**를 베이스로 하여 로고 위치, 포켓 레이아웃, 펜 홀더 위치, 마감 모양 등을 100% 동일하게 유지한 **고품질 데스크 시뮬레이터 연출 샷 생성 적용**.

---

## 2. 신규 원본 기반 생성 AI 데스크테리어 이미지 자산 (Generated AI Image Assets)

새로 추가된 KOSMOSA 원본 패드폴리오(`75ea4ada-8a4e-4f16-928b-14dfc49cd2cc.png`, `8535b7ac-3cb1-4bb6-bce5-fa16d7d99f29.png`)를 베이스로 디테일을 완벽히 유지하며 생성된 데스크 시뮬레이터 연출 샷이 프로젝트 폴더(`E:\JHS\amazon\public\images\`)에 저장 완료되었습니다:

- `public/images/kosmosa_hero_setup.jpg` (신규 원본 기반 Hero Desk Setup Visual)
- `public/images/kosmosa_desk_lifestyle.jpg` (신규 원본 기반 Executive Lifestyle Workspace Visual)
- `public/images/kosmosa_padfolio_detail.jpg` (신규 원본 기반 Padfolio Detail Close-up Visual)

---

## 3. 사용자 검토 필요 사항 (User Review Required)

> **기술 스택 및 애플 스타일 물리 엔진**
> * **Framework**: Vite + React
> * **Physics Engine**: `framer-motion` (Apple 물리 스프링 `type: 'spring', damping: 25, stiffness: 200` & `drag` 1:1 인터럽트 지원)
> * **Icons**: `lucide-react`
> * **Styling**: Vanilla CSS Design System (`index.css`) + Apple SF Pro/Inter Optical Typography (`letter-spacing: -0.02em`, `backdrop-filter: blur(20px)`)

---

## 4. 구현 상세 계획 (Proposed Architecture & Features)

### File Structure (프로젝트 내 구성)
```
E:\JHS\amazon\
├── PLAN.md                        [Plan File]
├── kosmosa_brand_website_plan.md   [Plan File]
├── logo\
│   └── logo-kosmosa.svg           [Extracted SVG Logo]
├── public\
│   └── images\
│       ├── kosmosa_hero_setup.jpg     [AI Deskterior Visual (New Ref Matched)]
│       ├── kosmosa_desk_lifestyle.jpg [AI Lifestyle Visual (New Ref Matched)]
│       └── kosmosa_padfolio_detail.jpg[AI Detail Visual (New Ref Matched)]
├── Product\                       [Actual Product Assets]
│   ├── Deskmat\
│   └── Padfolio\
├── src\
│   ├── components\
│   │   ├── Header.jsx             [Translucent Glassmorphism Chrome Header]
│   │   ├── Hero.jsx               [Interactive Spring Canvas & Slogan Intro]
│   │   ├── ProductCatalog.jsx     [Apple-Style Fluid Spring Drag Product Cards]
│   │   ├── DeskVisualizer.jsx     [1:1 Drag-and-Drop Interactive Desk Builder]
│   │   ├── AmazonCTA.jsx          [Amazon US Storefront Buy Button & Listing Preview]
│   │   ├── BrandStory.jsx         [Minimalist Luxury Narrative]
│   │   └── Footer.jsx             [Dark Executive Footer]
│   ├── App.jsx
│   └── index.css                  [Apple HIG Tokens, Optical Typography, Dark Theme]
└── package.json
```

### 컴포넌트별 주요 구현 내용

#### 1. `Header.jsx` (플로팅 아크릴 헤더)
- `backdrop-filter: blur(20px) saturate(180%)` 반투명 아크릴 재질
- KOSMOSA SVG 로고 및 아마존 US 바로가기 버튼

#### 2. `Hero.jsx` (히어로 섹션)
- 슬로건 *"orbit in your order."* 헤드라인 (타이포그래피 트래킹 `-0.03em`, 이중 텍스트 릴리즈 애니메이션)
- 애플 스타일의 마우스/터치 드래그로 탐색하는 인터랙티브 데스크 카루셀 (새로 생성된 연출 샷 사용)

#### 3. `ProductCatalog.jsx` (스프링 드래그 카탈로그)
- **Padfolio** (CL A4 Black/Brown, CL Mini 초록/Navy, OP A4 Black/Brown) & **Felt Deskmat** 라인업
- 컬러 스와치 클릭 시 실시간 스프링 전환 및 고화질 이미지 줌 기능
- 모션 관성(Momentum projection) 기반 수평 슬라이더

#### 4. `DeskVisualizer.jsx` (1:1 애플 드래그 데스크 시뮬레이터)
- 캔버스 내에서 KOSMOSA 패드폴리오와 데스크매트를 1:1 포인터 캡처(`setPointerCapture`)로 직접 드래그하여 데스크 위 배치를 체험하는 마이크로 인터랙션 (신규 생성된 연출 샷 기반)

#### 5. `AmazonCTA.jsx` (아마존 US 연동 지원)
- 미국 아마존 스토어 바로가기 뱃지, Prime 배송 표기, 아마존 전용 A+ 콘텐트 뷰어

---

## 5. 검증 계획 (Verification Plan)

### 빌드 및 로컬 테스트
1. 프로젝트 패키지 설치 (`npm install`)
2. Vite 개발 서버 실행 (`npm run dev`)
3. 브라우저에서 드래그/스프링 물리 엔진, 반응형 디스플레이, 이미지 로딩 검증
4. 프로덕션 빌드 성공 여부 검증 (`npm run build`)
