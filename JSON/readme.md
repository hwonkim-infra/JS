# JSON

JSON stands for JavaScript Object Notation
JSON is a text format for storing and transporting data

JSON은 객체, 배열, 숫자, 문자열, 불리언과 null을 직렬화하기 위한 구문으로, JavaScript 구문에 기반을 두고 있지만 분명한 차이

![image](https://user-images.githubusercontent.com/52963259/126188410-da90e226-71f3-48fb-bd61-bb36c109e082.png)


## The JSON Object

* is %JSON%.
* 글로벌 객체의 "JSON" property의 initial value
* is an ordinary object.
* 두 개의 함수를 포함: parse and stringify, JSON texts를 parse and construct.
* 값이 %Object.prototype%인 [[Prototype]] 내부 슬롯을 가짐
* does not have a [[Construct]] internal method; it cannot be used as a constructor with the new operator.
* does not have a [[Call]] internal method; it cannot be invoked as a function.

## Why Use JSON?
JSON 형식은 JavaScript 객체를 생성하기 위한 코드와 구문적으로 유사. JavaScript 프로그램은 JSON 데이터를 JavaScript 객체로 쉽게 변환할 수 있다.   
형식이 텍스트 전용이므로 JSON 데이터를 컴퓨터 간에 쉽게 전송할 수 있으며 모든 프로그래밍 언어에서 사용할 수 있다.    
JavaScript에는 JSON 문자열을 JavaScript 객체로 변환하는 내장 함수가 있다.
> JSON.parse()
JavaScript에는 객체를 JSON 문자열로 변환하는 내장 함수도 있다.
> JSON.stringify()    
서버에서 순수 텍스트를 받아 JavaScript 객체로 사용할 수 있다.    
JavaScript 개체를 순수 텍스트 형식으로 서버에 보낼 수 있다.    
복잡한 구문 분석 및 번역 없이 데이터를 JavaScript 개체로 사용할 수 있다.


## JSON Syntax Rules

* 데이터는 name/value 쌍 구조.
* 데이터는 쉼표로 구분.
* 중괄호{}는 객체를 보유.
* 대괄호[]는 배열을 포함.
> "name":"John"

### JSON Values
a string, a number, an object, an array, a boolean, null 등의 종류가 있다.
(JavaScript 에서는 a function, a date, undefined 가 추가)

JavaScript 객체를 JSON으로 작성할 수 있는 것과 같은 방식으로 JavaScript 배열도 JSON으로 작성할 수 있다.


## JSON vs XML
공통점:  self describing (사람이 읽을 수 있음), 계층적, XMLHttpRequest를 사용하여 JSON과 XML을 모두 가져올 수 있다.

차이점: JSON은 종료 태그를 사용하지 않고 더 짧으며 빠르고 배열을 사용할 수 있다.

가장 큰 차이점은: XML은 XML 파서로 파싱, JSON은 표준 JavaScript 함수로 구문 분석

AJAX 애플리케이션의 경우 JSON은 XML보다 빠르고 쉽다.


### JSON.parse()
JSON의 일반적인 용도는 웹 서버와 데이터를 교환하는 것: 
웹 서버에서 데이터를 수신할 때 데이터는 항상 문자열.

JSON.parse()로 데이터를 파싱하면 데이터가 JavaScript 객체가 된다.

```
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
```

배열에서 파생된 JSON에서 JSON.parse()를 사용할 때 메서드는 JavaScript 객체 대신 JavaScript 배열을 반환.

Parsing Dates: 날짜는 JSON 에서 parsing 하지 않는다. 


### JSON.stringify()
JSON의 일반적인 용도는 웹 서버와 데이터를 교환하는 것: 웹 서버에 데이터를 보낼 때 데이터는 문자열이어야.
JSON.stringify()를 사용하여 JavaScript 객체를 문자열로 변환.


```
<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
    <h2>Creating object from a JSON Literal</h2>
    <p id = "jsondemo"></p>

    <script type="text/javascript">
        const myJSON = '{"name":"John", "age":30, "car":null}';
        const myObj = JSON.parse(myJSON);
        document.getElementById("jsondemo").innerHTML = myObj.name + " " + myObj.age;   // access object values by using dot (.) notation
        document.getElementById("jsondemo").innerHTML = myObj["name"];  // access object values by using bracket ([]) notation
        let text = "";
        for (let i in myObj) {  // loop through object properties
            // text += i + ", ";
            text += myObj[i] + ", ";    // access the property values
        }
        document.getElementById("jsondemo").innerHTML = text;
    </script>
    
</body>
</html>
```

## JSON Array Litterals

JSON의 배열은 JavaScript의 배열과 거의 동일. 배열 값은 문자열, 숫자, 개체, 배열, 부울 또는 null 유형.
JavaScript에서 배열 값은 위의 모든 값과 함께 함수, 날짜 및 정의되지 않은 기타 유효한 JavaScript 표현식이 될 수 있다.

```
    <script type="text/javascript">
        const myJSON = '{"name":"John", "age":30, "car":["Ford", "BMW", "Fiat"]}';
        const myObj = JSON.parse(myJSON);
        document.getElementById("jsondemo").innerHTML = myObj.car;
        let text = "";
        for(let i in myObj.car){
            text += myObj.car[i] + ", ";
        }
        document.write(text);
    </script>
```

### JSON Server
AJAX 요청을 사용하여 서버에서 JSON을 요청할 수 있다.

서버의 응답이 JSON 형식으로 작성되어 있으면 문자열을 JavaScript 개체로 구문 분석할 수 있다.

```
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();
```


