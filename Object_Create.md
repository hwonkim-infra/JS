
## Object.create()

Object.create() 메서드는 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 생성

> Object.create(proto [,propertiesObject])

### Arguments

* proto
  새로 만든 객체의 프로토타입이어야 할 객체.
* propertiesObject
  선택사항. 지정되고 undefined가 아니면, 자신의 속성이 열거가능한 객체는 해당 속성명으로 새로 만든 객체에 추가될 속성 설명자(descriptor)를 지정. 
  이러한 속성은 Object.defineProperties()의 두 번째 인수에 해당.

### Returns

지정된 프로토타입 개체와 속성을 갖는 새로운 개체.
proto 매개변수가 null 또는 객체가 아닌 경우 TypeError 예외가 발생(throw).


### Example

> Person    
ƒ Person(name) {
    this.name = name;
}    
var you = Object.create(Person.prototype);    // undefined   
you.name = 'Kim';   // "Kim"    
you.sayHello();     // Hi! My name is Kim


