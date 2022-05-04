# Node.js 공부2

Express, nodemon, EJS

## 내용 정리

    app.use(express.static('public'));

**.static :** 정적 파일(HTML을 제외하고 웹 페이지를 렌더링 할 때 필요한 추가적인 파일)을 제공하는 미들웨어 함수

    app.use(express.urlencoded({ extended: false }));

**.urlencoded({ extended: false }) :** false이면 기본으로 내장된 querystring 모듈 사용  
true이면 설치가 필요한 qs모듈을 사용하여 쿼리 스트링을 해석  
이 둘의 차이는 중첩 객체 처리에 있다.

    res.redirect('/confirm');

**.redirect :** post 처리 할 떄 post 이후 get요청으로 자동 변경 됨에 따라 중복 처리가 되는것들 방지 할 수 있다.

<hr/>

#### EJS

템플릿 언어를 통해 동적 내용을 추가하고 HTML 코드에 JS코드 를 사용할 수 있게 되었다.

**include** 를 통해 불필요한 중복된 HTML 코드를 최소화하고 재사용이 가능하게 재분배 하였다
