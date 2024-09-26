# GROWPLAN
## ⚒️ TECH STACK
- node 18.17.0
- react 18
- zustand
- @tanstack/react-query
- tailwindcss

## 🏃🏻 GETTING STARTED
```bash
# installation
npm install

# run development-mode
npm run dev

# run production-mode
npm start
```

## 🗂️ FOLDER CONVENTION
[폴더 구조는 Next.js 표준을 지향하고 있습니다.](https://nextjs.org/docs)

### public
public 폴더에는 이미지, 동영상 등의 리소스를 보관합니다.

### app
routing을 담당합니다. routing 규칙은 next.js 표준을 따릅니다.

page.tsx는 해당 폴더 경로의 페이지를 의미합니다.
layout.tsx는 자식 노드를 감싸는 공통 컴포넌트를 정의합니다.

### asset
asset 폴더에는 정적인 파일을 보관합니다.

보통 json 파일을 보관합니다.

### components
JSX 문법으로 작성된 모듈을 보관합니다.
주로 UI를 요소를 보관합니다. 기본적으로 유지보수성을 위해 atomic-design-pattern을 지향합니다.

다만 FSD 아키텍처를 적극적으로 사용해야하는 상황이라면, 다른 `react-hook`이나 함수를 보관해도 무방합니다.

- [Atomic 디자인 패턴이란?](https://yozm.wishket.com/magazine/detail/1531/)
- [FSD 아키텍처란?](https://emewjin.github.io/feature-sliced-design/)


### interface
interface는 `interface`, `type`, type-guard 함수 등을 보관합니다.

구조에 대한 설계를 보관하는 폴더입니다.

### hook
hook 폴더에는 react-hook을 보관합니다.
react-hook은 반드시 함수명이 `use`로 시작해야합니다.

### util
util 폴더에는 유용한 유틸함수를 보관합니다.
