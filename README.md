# Kim Sang Yuk — Portfolio

## 로컬에서 미리보기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속.

## GitHub에 올리기

```bash
git init
git add .
git commit -m "portfolio site"
git branch -M main
git remote add origin https://github.com/사용자이름/저장소이름.git
git push -u origin main
```

## Netlify / Vercel과 연결

1. netlify.com 또는 vercel.com 가입 (GitHub 계정으로 로그인 가능)
2. "Add new project" → "Import from GitHub" → 방금 만든 저장소 선택
3. Build command: `npm run build` / Output directory: `dist` (보통 자동 감지됨)
4. Deploy 클릭 → 몇 분 뒤 정식 주소 발급

이후로는 `git push`만 하면 자동으로 재배포됩니다.

## 사진/책 표지 교체

`src/assets/face.jpg`, `src/assets/book-cover.jpg` 파일을 원하는 이미지로
같은 파일명으로 덮어쓰면 바로 반영됩니다.
