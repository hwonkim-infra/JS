


## Browser Object Model

브라우저 개체 모델 (BOM)은 브라우저와 상호 작용하는 데 사용됩니다.

브라우저의 기본 객체는 window라는 것은 window를 지정하거나 직접 지정하여 window의 모든 기능을 호출 할 수 있음을 의미합니다. 예를 들면 :

	window.alert ( "hello javatpoint");
다음과 같습니다.

	alert ( "hello javatpoint");
document, history, screen, navigator, location, innerHeight, innerWidth, 같은 창 개체 아래에 정의 된 많은 속성 (다른 개체)을 사용할 수 있습니다.

참고 : 문서 객체는 html 문서를 나타냅니다. DOM (Document Object Model)을 형성합니다.

![image](https://user-images.githubusercontent.com/52963259/122161397-9b4acf00-ceac-11eb-891b-a9b365d2d511.png)

## JavaScript History Object

JavaScript 히스토리 개체는 사용자가 방문한 URL의 배열을 나타냅니다. 이 개체를 사용하여 이전, 앞으로 또는 특정 페이지를로드 할 수 있습니다.

히스토리 개체는 창 속성이므로 다음을 통해 액세스 할 수 있습니다.

	window.history
또는,
	history  
JavaScript 히스토리 객체의 속성

| length | history URLs 의 길이를 반환|
|--------|----------------------------------------|

## JavaScript Navigator Object

JavaScript 탐색기 개체는 브라우저 감지에 사용. appName, appCodeName, userAgent 등과 같은 브라우저 정보를 가져 오는 데 사용할 수 있다.

navigator 객체는 window 속성이므로 다음을 통해 액세스 할 수 있다.
	window.navigator  
Or,
	navigator  


| appName        | 이름을 반환                                                         |
|----------------|---------------------------------------------------------------------|
| appVersion     | 버전을 반환                                                         |
| appCodeName    | 코드   이름을 반환.                                                 |
| cookieEnabled  | 쿠키가   활성화되면 true를 반환하고 그렇지 않으면 false를 반환.     |
| userAgent      | 사용자   에이전트를 반환.                                           |
| language       | 언어를   반환. Netscape 및 Firefox에서만 지원됩니다.                |
| userLanguage   | 사용자   언어를 반환. IE에서만 지원됩니다.                          |
| plugins        | 플러그인을   반환. Netscape 및 Firefox에서만 지원됩니다.            |
| systemLanguage | 시스템   언어를 반환. IE에서만 지원됩니다.                          |
| mimeTypes[]    | MIME   유형의 배열을 반환. Netscape 및 Firefox에서만 지원됩니다.    |
| platform       | 플랫폼을   반환. Win32.                                             |
| online         | 브라우저가   온라인이면 true를 반환하고 그렇지 않으면 false를 반환. |



## JavaScript Screen Object
JavaScript 화면 개체는 브라우저 화면의 정보를 보유합니다. 화면 너비, 높이, colorDepth, pixelDepth 등을 표시하는 데 사용할 수 있습니다.

navigator 객체는 window 속성이므로 다음을 통해 액세스 할 수 있습니다.

	window.screen  
	screen  




| width       | 화면의 너비를 반환             |
|-------------|--------------------------------|
| height      | 화면의 높이를 반환             |
| availWidth  | 사용 가능한 너비를 반환합니다. |
| availHeight | 사용 가능한 높이를 반환합니다. |
| colorDepth  | 색상 심도를 반환합니다.        |
| pixelDepth  | 픽셀 심도를 반환합니다.        |
