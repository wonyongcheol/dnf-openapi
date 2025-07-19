# DNF 캐릭터 검색 웹앱

이 프로젝트는 던전앤파이터(던파) 공식 오픈 API를 활용하여
게임 캐릭터를 검색할 수 있는 웹사이트입니다.

- **프론트엔드**: Vite + React + TypeScript + TailwindCSS + shadcn/ui
- **백엔드**: Node.js + Express (네오플 API 프록시)

---

## 폴더 구조

```
dnf-api/
  frontend/   # 프론트엔드(React)
  backend/    # 백엔드(Node.js)
```

---

## 1. 백엔드(Node.js) 설정 및 실행

1. **의존성 설치**
   ```sh
   cd backend
   npm install
   ```

2. **.env 파일 생성 및 네오플 API Key 입력**
   - `backend/.env` 파일 생성 후 아래와 같이 입력
     ```
     NEOPLE_API_KEY=여기에_네오플_API_키를_입력하세요
     ```

3. **서버 실행**
   ```sh
   npm run dev
   # 또는
   node index.js
   ```

---

## 2. 프론트엔드(React) 설정 및 실행

1. **의존성 설치**
   ```sh
   cd frontend
   npm install
   ```

2. **shadcn/ui 컴포넌트 설치**
   ```sh
   npx shadcn@latest add input button card
   ```

3. **개발 서버 실행**
   ```sh
   npm run dev
   ```
   - 브라우저에서 [http://localhost:5173](http://localhost:5173) 접속

---

## 3. 주요 기능 및 구조

- **서버 정보 조회**: `/api/servers` (백엔드에서 네오플 API 프록시)
- **캐릭터 검색**: `/api/character?serverId=...&characterName=...`
- **프론트엔드**: 서버 선택(select), 캐릭터명 입력, 검색 결과 표시
- **UI**: TailwindCSS + shadcn/ui 기반의 미니멀/모던 카드형 폼

---

## 4. 개발/운영 참고사항

- **프론트엔드와 백엔드는 각각 독립적으로 실행**
- **Vite 프록시 설정**으로 `/api` 요청은 자동으로 백엔드로 전달
- **네오플 API Key**는 반드시 백엔드의 .env에만 보관 (프론트엔드에 노출 금지)
- **서버 목록/캐릭터 검색 등 모든 API는 백엔드 프록시를 통해 호출**

---

## 5. 커스텀/확장

- shadcn/ui 컴포넌트 추가: `npx shadcn@latest add [컴포넌트명]`
- TailwindCSS 유틸리티로 자유롭게 스타일 확장 가능
- 백엔드 라우트/컨트롤러 분리(MVC 구조)

---

## 6. 예시 화면

- 서버 선택(select), 캐릭터명 입력, 검색 결과 카드 UI
- 모바일/데스크톱 반응형 지원

---

## 7. 참고
- 네오플 오픈 API: https://developers.neople.co.kr/contents/apiDocs
- shadcn/ui: https://ui.shadcn.com/
- TailwindCSS: https://tailwindcss.com/