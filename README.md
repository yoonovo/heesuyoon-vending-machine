# 자판기 프로젝트

## 프로젝트 소개

이 프로젝트는 React와 TypeScript를 사용하여 구현한 자판기 시스템입니다. 실제 자판기와 유사하게 동작하며 결제수단 선택, 현금 투입, 상품 선택, 거스름돈 반환 등의 여러 기능들을 구현했습니다.

## 기술 스택

- React v18
- Typescript v5
- react-router-dom v7.4
- Vite v5 (https://ko.vite.dev/guide/)
- Sass v1.86 (https://www.npmjs.com/package/sass?activeTab=readme

## 프로젝트 구조

```
src/
├── components/       # 재사용 가능한 컴포넌트
├── pages/            # 페이지 컴포넌트
├── types/            # TypeScript 타입 정의
├── utils/            # 유틸리티 함수
└── assets/           # 이미지 혹은 css
```

## 개발 환경 설정

### 필수 요구사항

- node.js v20 이상
- npm v10 이상

### 설치 및 실행

1. Git clone

```bash
git clone https://github.com/yoonovo/heesuyoon-vending-machine.git
```

2. 패키지 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
# 기본적으로 http://localhost:5173 에서 실행됩니다.
```

4. 프로덕션 빌드

```bash
npm run build
npm run preview  # 빌드된 버전 미리보기
```

## 주요 기능

### 1. 결제수단 관리

- 현금
  - 지폐&동전 투입 기능
  - 현재 투입금액 표시
  - 거스름돈 반환
  - 거스름돈 부족 시 문의하기로 보충
- 카드
  - 카드 투입 시 확인 기능
  - 카드 결제 시 승인 기능

### 2. 상품 관리

- 다양한 상품 진열 및 표시
- 상품 별 재고 관리
- 품절 상품 표시

### 3. 구매 프로세스

- 상품 선택 및 구매
- 잔돈 자동 계산
- 구매한 상품 확인 기능
