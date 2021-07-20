

### Creating First Server


```node.js
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req, url);
    res.end('Hello Node.js');
})

server.listen(3000);
```

> const http = require('http');
require는 다른 언어로 import 또는 include와 유사. http라는 Node.js의 패키지를 import.     
패키지 이름을 문자열 인수로 받아 패키지를 반환. http라는 변수에 할당 
일반적인 규칙은 모듈이 필요할 때 모듈 자체와 이름이 같은 변수에 넣는 것     
http는 서버에서 작업을 수행하기 위해 Node.js가 제공하는 내장 패키지 중 하나    
> const server = http.createServer(…) 
다음으로 http 패키지에서 createServer 메소드로 서버를 생성하고 시작

> const server = http.createServer((req, res) => {
createServer에 제공되는 함수는 콜백 함수: 함수가 완료되면 호출.    
호출되면 함수에서 요청(req – 브라우저의 요청) 및 응답(res – 브라우저에 되돌려주는 응답) 개체가 제공된다. 함수 본문에 있는 두 객체로 원하는 모든 작업을 수행할 수 있다.  
이번에는 단순히 요청 URL을 기록하고 함수 본문에 'Hello Node.js' 텍스트로 응답합니다. 

> server.listen(3000) 
마지막으로 server.listen(3000)으로 요청을 받기 시작하도록 서버를 시작. 즉, 서버는 포트 3000에서 요청을 수신. 원하는 포트를 지정할 수 있으며 3000일 필요는 없다. 

> res.end('Hello Node.js');
요청에 대한 응답 출력. 


### More on Request and Response 

```
const http = require('http');   
const server = http.createServer((req, res) => {
    console.log(req.url);    
    if(req.url == '/about')	// 콜백 함수에서 if-else 문을 사용하여 요청 URL을 확인하고 경로에 따라 다른 메시지로 응답
        res.end("The about page");
    else if(req.url == `/contact`)
        res.end("The contact page");
    else if(req.url == `/`)
        res.end("The home page");
    else {
        res.writeHead(404);
        res.end('page not found');
    }    
})
server.listen(3000);
```

### Responding with HTML
정적 텍스트 대신 HTML로 응답하고자 하는 경우 

> const fs = require('fs');
 파일 시스템 모듈. 서버의 파일과 통신할 수 있게 함. 
 
```
const http = require('http');
const fs = require('fs');
const homepage = fs.readFileSync('NODE/index.html');
const aboutPage = fs.readFileSync('NODE/about.html');
const contactpage = fs.readFileSync('NODE/contact.html');
const notFoundpage = fs.readFileSync('NODE/notfoundpage.html');
const server = http.createServer((req, res) => {
    console.log(req.url);        
    if(req.url === '/about')
        res.end(aboutPage);
    else if(req.url === '/contact')
        res.end(contactpage);
    else if(req.url === '/')
        res.end(homepage);
    else {
        res.writeHead(404);
        res.end(notFoundpage);
    }    
})
server.listen(3000);
```
이 단일 기능은 컴퓨터, 휴대폰 또는 API를 사용하는 다른 클라이언트에서 웹 브라우저의 요청을 수신: 이 함수를 요청 핸들러라고 부른다. 요청이 들어오면 이 함수는 요청을 보고 응답 방법을 결정. 요청을 나타내는 객체(req)와 응답을 나타내는 객체(res)라는 두 개의 인수를 취한다.

모든 Node.js 애플리케이션은 요청에 응답하는 단일 요청 핸들러 함수와 같다. 동적 재사용 가능한 HTML 템플릿 렌더링, 이미지 렌더링/업로드 등을 포함하는 대규모 페이지의 경우 Express가 이 문제를 해결하고 Node.js를 사용하여 웹 애플리케이션을 더 쉽게 작성할 수 있도록 한다.



