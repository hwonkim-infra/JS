
# ch6. JSON DATA PERSISTENCE

JSON 데이터 지속성: 데이터를 생성한 프로세스가 종료하더라도 데이터는 지속. 
JSON text 가 생성되고 프로세스가 종료되면 직렬화 프로세스도 종료되지만 이 데이터는 http cookie 등으로 저장됨.

## http cookie

쿠키는 기본형식의 ASCII 문자 시퀀스.
웹사이트가 설정하고 브라우저가 유지하는 데이터 패킷. Javascript 를 이용하여 웹 애플리케이션의 클라이언트에서 사용할 수 있다:
모든 브라우저 요청의 헤더 내부에 제공: 서버는 쿠키에 엑세스하고 헤더를 구문분석하여 서버측 스크립트에서 사용.
브라우저는 그 데이터 조각들을 저장해 놓았다가, 동일한 서버에 재 요청 시 저장된 데이터를 함께 전송. 
쿠키는 두 요청이 동일한 브라우저에서 들어왔는지 아닌지를 판단할 때 주로 사용. 이를 이용하면 사용자의 로그인 상태를 유지할 수 있다. 상태가 없는(stateless) HTTP 프로토콜에서 상태 정보를 기억시켜주기 때문.


웹사이트와 사용자의 상호작용 내에서 격리된 작업. 
*쿠키의 구문을 학습 및 이해하고 이후 사용하기 위해 JSON 유지

> Set-Cookie: <cookie-name>=<cookie-value>

> HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
[page content]

### Cookie lifetime

- 세션 쿠키는 현재 세션이 끝날 때 삭제. 브라우저는 "현재 세션"이 끝나는 시점을 정의하며, 어떤 브라우저들은 재시작할 때 세션을 복원해 세션 쿠키가 무기한 존재할 수 있도록 한다.
- 영속적인 쿠키는 Expires 속성에 명시된 날짜에 삭제되거나, Max-Age 속성에 명시된 기간 이후에 삭제.

> Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;


#### expires attribute

Cookie에 대한 만료 날짜와 시간을 DateTime으로 가져오거나 설정.

```	// key:value 쌍에 데이터를 추가하고 쿠키에 만료를 지정.
	var date = new Date("Tue Jul 20 2021 09:00");
	"emp=test; expires="+ date.toUTCString();
```
원칙적으로 세션이 종료되면 쿠키는 즉시 삭제되지만 요즘은 브라우저 기능에 따라 세션 유지. 

#### domain attribute

액세스할 수 있는 유효한 URI를 가져오거나 설정.
브라우저는 쿠키가 제공한 도메인 속성을 방문한 페이지의 URL 과 비교. 꼬릿말 일치를 강제 실행하여 하위 도메인 명을 이용한 다른 주소 액세스 방지.  



## Web Storage

Web Storage API는 브라우저에서 쿠키를 사용하는 것보다 훨씬 직관적으로 key/value 데이터를 안전하게 저장할 수 있는 메커니즘을 제공
Storage 객체는 단순한 key-value 저장소이며, 이는 객체와 비슷하지만 이 데이터들은 페이지 로딩에도 온전하게 유지.      
key와 그 value는 항상 문자열. (만약 정수로 키를 사용할 경우 이는 자동으로 string으로 변경)     
객체를 사용하듯이 쉽게 값에 접근할 수 있으며, 이 때 Storage.getItem() (en-US)과 Storage.setItem() (en-US) 메서드를 사용할 수 있다. 아래 세 줄은 (동일한) colorSetting 엔트리에 값을 설정하는 방법입니다.

sessionStorage: 페이지의 세션이 유지되는 동안 사용할 수 있는 각 origin별로 별도의 스토리지를 관리 (페이지 리로딩 및 복원을 포함한, 브라우저가 열려있는 한 최대한 긴 시간 동안)
localStorage: 브라우저가 닫히거나 다시 열리더라도 유지. 사용자가 브라우저나 응용프로그램으로 상태를 제거할 때 까지 유지

Web Storage API의 Storage 인터페이스는 특정 도메인을 위한 세션 저장소 또는 로컬 저장소의 접근 경로로서 데이터를 추가하고 수정하거나 삭제할 수 있다.

도메인의 세션 저장소를 수정해야 하면 Window.sessionStorage에, 로컬 저장소를 수정해야 하면 Window.localStorage에 접근.

Storage.setItem()
> storage.setItem(keyName, keyValue);
	키가 저장소에 존재하는 경우 값을 재설정. 존재하지 않으면 키와 값을 저장소에 추가.

Storage.getItem()
> var aValue = storage.getItem(keyName);
	주어진 키에 연결된 값을 반환

Storage.key()
> var aKeyName = storage.key(index);
	주어진 숫자 n에 대하여 저장소의 n번째 항목 키를 반환

Storage.removeItem()
> storage.removeItem(keyName);
	주어진 키를 저장소에서 제거.




	
	
	
