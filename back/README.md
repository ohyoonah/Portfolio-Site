# 포트폴리오 공유 서비스 백엔드 코드

## <실행 방법>

## 1. Express 실행

현재 경로가 ./back 이 맞는지 확인해 주세요. \
npm 패키지인 yarn부터 설치합니다. (이미 설치 시 생략) \
yarn 커맨드는 yarn install 커맨드의 단축키입니다. \
yarn 입력 시 package.json 바탕으로 라이브러리를 한꺼번에 설치해 줍니다.

```bash
npm install --global yarn
yarn
yarn start
```

<hr />

## <파일 구조 설명>

📦src \
 ┣ 📂db \
 ┃ ┣ 📂models \
 ┃ ┃ ┣ 📜Award.js \
 ┃ ┃ ┣ 📜Certificate.js \
 ┃ ┃ ┣ 📜Education.js \
 ┃ ┃ ┣ 📜Like.js \
 ┃ ┃ ┣ 📜Project.js \
 ┃ ┃ ┗ 📜User.js \
 ┃ ┣ 📂schemas \
 ┃ ┃ ┣ 📜award.js \
 ┃ ┃ ┣ 📜certificate.js \
 ┃ ┃ ┣ 📜education.js \
 ┃ ┃ ┣ 📜like.js \
 ┃ ┃ ┣ 📜project.js \
 ┃ ┃ ┗ 📜user.js \
 ┃ ┗ 📜index.js \
 ┣ 📂middlewares \
 ┃ ┣ 📜errorMiddleware.js \
 ┃ ┣ 📜login_required.js \
 ┃ ┗ 📜uploader.js \
 ┣ 📂routers \
 ┃ ┣ 📜awardRouter.js \
 ┃ ┣ 📜certificateRouter.js \
 ┃ ┣ 📜educationRouter.js \
 ┃ ┣ 📜likeRouter.js \
 ┃ ┣ 📜projectRouter.js \
 ┃ ┗ 📜userRouter.js \
 ┣ 📂services \
 ┃ ┣ 📜awardService.js \
 ┃ ┣ 📜certificateService.js \
 ┃ ┣ 📜educationService.js \
 ┃ ┣ 📜likeService.js \
 ┃ ┣ 📜projectService.js \
 ┃ ┗ 📜userService.js \
 ┗ 📜app.js

1. src폴더는 크게는 routers, services, db의 3개 폴더로 구분됩니다. \
각각의 폴더에는 MVP 별로 1개씩, 그리고 (추가 기능) '좋아요' 기능까지 총 6개 파일이 있습니다. \
기본 MVP - 학력, 수상내역, 자격사항, 프로젝트

- routers:
  - request와 response가 처리됩니다.
  - GET, POST, PUT, DELETE 요청을 처리하고 있습니다.

- services:
  - 백엔드 로직 코드가 있습니다.

- db:
  - 데이터베이스 관련한 코드가 있습니다.
  - Mongoose와 mongodb 서버를 연결하는 코드가 있는 index.js
  - Mongoose 스키마가 있는 schemas 폴더
  - Mongoose 모델 ORM 코드가 있는 models 폴더

2. 이외 폴더는 아래와 같습니다.

- src/middlewares:
  - jwt토큰을 다루는 미들웨어인 login_required.js
  - 학습 편의를 위해 일괄 http 400 코드로 에러를 변환하는 에러핸들러인 errorMiddleware.js
  - (추가 기능) 사용자 이미지를 직접 추가할 수 있도록 구현한 uploader.js
