# JS
web Develop


### 프로토타입 메서드와 __proto__가 없는 객체

__proto__는 브라우저를 대상으로 개발하고 있다면 다소 구식이기 때문에 더는 사용하지 않는 것이 좋습니다. 표준에도 관련 내용이 명시되어있습니다.

대신 아래와 같은 모던한 메서드들을 사용하는 것이 좋죠.

Object.create(proto, [descriptors]) – [[Prototype]]이 proto를 참조하는 빈 객체를 만듭니다. 이때 프로퍼티 설명자를 추가로 넘길 수 있습니다.   
Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환합니다.   
Object.setPrototypeOf(obj, proto) – obj의 [[Prototype]]이 proto가 되도록 설정합니다.   
