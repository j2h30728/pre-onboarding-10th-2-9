
<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
</p>
<br/>

## 🗓️ 프로젝트 기간
### 2023.5.3 ~ 2023.5.5

## ✨ 기능 구현 방법 및 전략
### 1. [로컬 캐싱 구현](https://github.com/j2h30728/pre-onboarding-10th-2-9/pull/7)
- keyword 검색시, 캐싱되어있지않거나 만료기간이 초과할 경우 캐싱 데이터를 저장, 캐싱되어있는 데이터가 존재하면 찾아오기, 만료기간이 초과된 캐싱데이터 제거가 함께 이뤄집니다.
- expire time 5분으로 설정 되어있습니다.
- 코드상에서 cachingDatas 라는 객체 공간을 만들어 저장하고 사용하는 것. 새로고침을 하거나 브라우저를 끄게 될경우, 이전의 캐싱데이터는 사라집니다.
 

https://user-images.githubusercontent.com/60846068/236073786-d169712b-a684-4ccb-bcee-a6f64774dbea.mov


 
 
### 2. [API 호출 횟수 조절](https://github.com/j2h30728/pre-onboarding-10th-2-9/pull/6)
- 입력마다 API 호출하지 않고 최종 입력의 500ms 후에 호출하여 횟수를 줄입니다.
- 커스텀훅 `useDebounce`을 만들어 기능 구현했습니다.


https://user-images.githubusercontent.com/60846068/236074139-99da5948-4d3f-4887-8131-7e3e5d4d953a.mov




### 3. [키보드를 이용한 추천 검색어 이동 기능](https://github.com/j2h30728/pre-onboarding-10th-2-9/pull/8)
- 사용하여 검색창에서 `아래방향키`를 누를경우, `useRef의 DOM조작 기능을 사용하여 추천검색어의 첫 번째 인덱스 항목으로 focus 됩니다. foucs가 되면 CSS를 주어 표시 했습니다.
- `아래방향키`를 사용해 검색창에서 추천검색어의 마지막 인덱스 까지 이동 가능 합니다.
- `위방향키`를 사용해 추천검색어 마지막부터 검색창까지 이동 가능 합니다.



https://user-images.githubusercontent.com/60846068/236074283-fe0076a1-7ccf-473f-9ae1-f5ce62e695fe.mov



<br/>

## 🛠️ 추가로 고치거나 확인 해야할 점
- 디자인임 임의로 되어있으므로 수정이 필요합니다.
- 컴포넌트화 및 관심사 분리가 더 필요해 보입니다.

<br/>

## 💡 코드 작성이 있었던 이슈
- '키보드를 이용한 추천 검색어 이동' 을 구현 할 때, 검색어 입력창에서 `onKeyDown`이벤트가 일어 났을 경우, 입력창에 마지막 한글이 한 번더 입력되어 다시 검색되었다.
  - [참고 링크](https://velog.io/@corinthionia/JS-keydown%EC%97%90%EC%84%9C-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5-%EC%8B%9C-%EB%A7%88%EC%A7%80%EB%A7%89-%EC%9D%8C%EC%A0%88%EC%9D%B4-%EC%A4%91%EB%B3%B5-%EC%9E%85%EB%A0%A5%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0-%ED%95%A8%EC%88%98%EA%B0%80-%EB%91%90-%EB%B2%88-%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0)를 통해 해당 이슈를 해결 하였다.
  - 기본적으로 한글은 조합이 되어있는 경우를 알지 못해서 `event.nativeEvent.isComposing`이벤트가 treu => false로 두 번 일어난다. `event.nativeEvent.isComposing === false`를 통과하게 하여, 검색의 한글이 조합 중이지 않을 경우만 통과하게 하여 focus를 이동시켰다. 



<br/>


## 📂 폴더 구조

```javascript
src
├── @types
│   └── index.ts
├── App.tsx
├── api
│   └── index.ts
├── components
│   ├── SeachInput.tsx
│   ├── Svg.tsx
│   └── style.ts
├── hooks
│   ├── index.ts
│   ├── useCachingData.ts
│   ├── useCheckExpriesAt.ts
│   ├── useInput.ts
│   └── userDebounce.ts
├── index.tsx
└── utils
    └── constant.ts

```
