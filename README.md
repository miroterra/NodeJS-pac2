# Node.js 공부2

## 내용 정리

    app.use(express.static('public'));

**정적 파일**(HTML을 제외하고 웹 페이지를 렌더링 할 때 필요한 추가적인 파일)을 제공하는 미들웨어 함수

    app.use(express.urlencoded({ extended: false }));

false이면 기본으로 내장된 querystring 모듈 사용
true이면 설치가 필요한 qs모듈을 사용하여 쿼리 스트링을 해석
이 둘의 차이는 중첩 객체 처리에 있다.
