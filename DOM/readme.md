

# JS Dome


문서 객체는 전체 html 문서를 나타낸다.

html 문서가 브라우저에 로드되면 문서 객체가 된다.: html 문서를 나타내는 루트 요소. 속성과 메서드를 가지며  문서 개체의 도움으로 웹 페이지에 동적 콘텐츠를 추가 할 수 있다.
 > window.document
 
는
 > document     
 
와 동일


 *"W3C DOM (문서 개체 모델)은 프로그램과 스크립트가 문서의 콘텐츠, 구조 및 스타일에 동적으로 액세스하고 업데이트 할 수 있도록하는 플랫폼 및 언어 중립적 인터페이스"* 

### Properties of document object

![javascript document object](https://static.javatpoint.com/images/javascript/dom.jpg)


### Methods of document object

| Method                   | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| write("string")          | writes the given string on the doucment.                                   |
| writeln("string")        | writes the given string on the doucment with newline character at the end. |
| getElementById()         | returns the element having the given id value.                             |
| getElementsByName()      | returns all the elements having the given name value.                      |
| getElementsByTagName()   | returns all the elements having the given tag name.                        |
| getElementsByClassName() | returns all the elements having the given class name.                      |


#### Accessing field value by document object

 document.form1.name.value의 예 : 
document는 html 문서를 나타내는 루트 요소.
form1은 양식의 이름.
name은 입력 텍스트의 속성 이름.
value는 입력 텍스트의 값을 반환하는 속성.



