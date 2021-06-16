


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

length		returns the length of the history URLs

