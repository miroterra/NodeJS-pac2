# Node.js 공부2

    app.use(express.urlencoded({ extended: false }));

false이면 기본으로 내장된 querystring 모듈 사용
true이면 설치가 필요한 qs모듈을 사용하여 쿼리 스트링을 해석
이 둘의 차이는 중첩 객체 처리에 있다.
