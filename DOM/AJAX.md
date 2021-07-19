# Ajax 
비동기 자바스크립트와 XML (Asynchronous JavaScript And XML)    
서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것     
AJAX의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행 되는 "비동기성"    
* 페이지 새로고침 없이 서버에 요청
* 서버로부터 데이터를 받고 작업을 수행

![image](https://user-images.githubusercontent.com/52963259/126131810-6c87569a-deb1-4fa3-82a1-c5126affaa24.png)

1. 웹페이지에서 이벤트 발생(페이지 로딩, 버튼 클릭)
2. XMLHttpRequest 객체는 JavaScript에 의해 생성.
3. XMLHttpRequest 객체는 웹 서버에 요청을 보낸다.
4. 서버가 요청을 처리.
5. 서버가 웹 페이지에 응답을 보낸다.
6. JavaScript에서 응답을 읽음.
7. 페이지 업데이트와 같은 적절한 조치는 JavaScript가 수행.

## XMLHttpRequest 객체
모든 최신 브라우저는 XMLHttpRequest 객체를 지원.

XMLHttpRequest 객체는 배후에서 웹 서버와 데이터를 교환하는 데 사용할 수 있다. 즉, 전체 페이지를 다시 로드하지 않고도 웹페이지의 일부를 업데이트.

### XMLHttpRequest 객체 생성:

```
variable = new XMLHttpRequest();
```
### Define a Callback Function
콜백 함수는 다른 함수에 매개변수로 전달되는 함수.
이 경우 콜백 함수에는 응답이 준비되었을 때 실행할 코드가 포함되어야 한다.

```
xhttp.onload = function() {
  // What do do when the response is ready
}
```
서버에 요청을 보내려면 XMLHttpRequest 객체의 open() 및 send() 메서드를 사용할 수 있다.
```
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

보안상의 이유로 최신 브라우저는 도메인 간 액세스를 허용하지 않아 웹 페이지와 웹 페이지에서 로드하려는 XML 파일이 모두 동일한 서버에 있어야 한다.
자신의 웹 페이지 중 하나에서 위의 예를 사용하려면 로드하는 XML 파일이 자체 서버에 있어야 한다.


## AJAX - XMLHttpRequest

서버에 요청을 보내기 위해 XMLHttpRequest 객체의 open() 및 send() 메서드를 사용합니다.
```
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();		
```

open() 메소드의 url 매개변수는 서버에 있는 파일의 주소.

파일은 .txt 및 .xml과 같은 모든 종류의 파일이거나 .asp 및 .php와 같은 서버 스크립팅 파일(응답을 다시 보내기 전에 서버에서 작업을 수행할 수 있음)일 수 있다.


서버 요청은 비동기적으로 보내야 한다.

open() 메서드의 async 매개변수는 true로 설정해야 한다.

비동기식으로 전송하면 JavaScript는 서버 응답을 기다릴 필요가 없지만 대신 다음을 수행할 수 있다.

서버 응답을 기다리는 동안 다른 스크립트 실행
응답이 준비된 후 응답 처리
async 매개변수의 기본값은 async = true.

코드에서 세 번째 매개변수를 안전하게 제거할 수 있다.

동기식 XMLHttpRequest(async = false)는 서버 응답이 준비될 때까지 JavaScript 실행이 중지되므로 권장되지 않는다. 서버가 사용 중이거나 느린 경우 응용 프로그램이 중단되거나 중지.

### GET or POST?

GET은 POST보다 간단하고 빠르며 대부분의 경우 사용할 수 있다.
그러나 다음과 같은 경우 항상 POST 요청을 사용.

* 캐시된 파일을 사용할 수 없는 경우 (서버의 파일 또는 데이터베이스 업데이트).
* 많은 양의 데이터를 서버로 전송(POST에는 크기 제한이 없다).
* 사용자 입력(알 수 없는 문자를 포함할 수 있음)을 보내는 POST는 GET보다 강력하고 안전.
