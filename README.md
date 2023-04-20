# react18 + webpack5 + typescript Boiler plate

리액트18 + 웹팩5 + 타입스크립트를 이용한 스타터킷입니다.<br>
정말 아무것도 없는 깔끔한 스타터 킷입니다.<br>
웹팩 최적화와 진짜 기본 셋팅만 되어 있습니다.<br>

### 최초 다운로드 후 해야할 것들 🐈

1. npm install -g yarn (yarn 설치)
2. yarn install(node_modules 다운로드)
3. yarn dev(실행 (개발용)-config/webpack.dev.js 기반)
4. yarn build(빌드 (운영용)-config/webpack.prod.js 기반)

### 추천하는 설치 할만한 것들 🐈

- styled-components / Emotion / TailWind (스타일링)
- redux / recoil(추천) / mobx / Jotai / Zustand ( Client 상태관리)
- react Query (Server 상태관리)
- axios(API 통신)
- lodash-es(자바스크립트 라이브러리(객체,배열,구조 변환 등))
- dayjs(날짜)
- immer(불변성)
- jest & @Testing-library/react (테스트)

## 아키텍쳐

### 디렉토리 구조

```bash
  ├─ config
  │   ├─webpack.common.js
  │   ├─webpack.dev.js
  │   └─webpack.prod.js
  ├─ node_modules
  ├─ public
  │   └─index.html
  ├─ src
  │   ├─App.tsx
  │   └─index.tsx
  ├─ .babelrc
  ├─ package.json
  ├─ tsconfig.json
  └─ yarn.lock
```

출처 블로그 : https://ryuhojin.tistory.com/19
