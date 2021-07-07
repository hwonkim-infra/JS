

## this 키워드

메서드: 자신이 속한 객체의 상태 즉 property 를 참조하고 변경  
 ㄴ 먼저 자신이 속한 객체를 가리키는 identifier 를 참조할 수 있어야 함
 
 객체 리터럴 방식으로 생성한 객체는 메서드 내부에서 자신이 속한 객체의 identifier를 재귀적으로 참조할 수 있다.
 
 > const circle = {   
		radius: 5,   // property: 객체 고유의 상태 데이터  
		getDia(){    // method: 상태 데이터를 참조하고 조작하는 동작  
			return 2*circle.radius;    // method 가 속한 객체(circle)도 참조할 수 있어야 한다  
		}			// 이 객체 리터럴은 circle 변수에 할당되기 전에 평가됨: getDia method 호출 전에 이미 객체 생성.   
	};  

  >> circle.getDia();	// 10
  
 생성자 함수 내부에서는 property 또는 method 추가 위해 자신이 생성할 인스턴스 참조 필요:   
  먼저 생성자 함수가 존재하고 new 등으로 생성자 함수를 호출하는 단계가 추가.   
  **this는 자신이 속한 또는 생성할 인스턴스를 가리키는 자기 참조 변수**  
  this 도 지역변수처럼 사용할 수 있다: this 바인딩은 함수 호출 방식에 따라 동적으로 결정. 
  
  ```binding: identifier와 값을 연결하는 과정. 변수 선언은 변수 이름(identifier)과 확보된 메모리 공간의 주소를 연결. this binding은 this 가 가리킬 객체를 연결```
  
 > const circle = {   
		radius: 5,   
		getDia(){    
			return 2*this.radius;    // this: 메서드를 호출한 객체를 가리킴
		}
	};
  
 > function Circle(radius){    // 생성자 함수
		this.radius = radius;    // this: constructor가 생성할 인스턴스
	}
	Circle.prototype.getDia = function(){   
    return 2*this.radius;	// 생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스를 가리킴. (상황에 따라 다르다)
	};
	
 > 	this
	// Window {window: Window, self: Window, document: document, name: "", location: Location, …}
	// 전역에서 this 는 전역 객체 window 를 가리킴.
	
 > function square(num){
		console.log(this);	// Window 
		return num**2;
	}  
	square(2);	// 4
	
 > const Person ={
		name: 'Lee',
		getName(){
			console.log(this);	// method 내부의 this: method 를 호출한 객체를 가리킴. 
			return this.name;
		}
	};	  
	Person.getName(); // "Lee"


## 함수 호출 방식과 this Binding
  this 바인딩은 함수가 어떻게 호출되었는지에 따라 동적으로 결정됨
  
  > const foo = function(){
		console.dir(this);};
	foo();    // Window. 일반 함수 호출 결과.
	
  > obj = {foo};  // foo 함수를 property값으로 할당하여 호출
    obj.foo();    // Object. 메서드를 호출한 객체를 가리킴.

  > Object.create(foo.prototype);	// 생성자 함수 호출
	// foo {} 생성자 함수가 생성한 instance 를 가리킴.

 ### 일반 함수 호출    
  기본적으로 this 에는 전역 객체가 바인딩   
  > function foo() {
	  console.log("foo's this: ", this);  // window
	  function bar() {
		console.log("bar's this: ", this); // window
	  }
	  bar();
	}
	foo();	// 둘 다 window 반환.
	
  > function foo(){
		'use strict';	// strict 모드로 실행하면 둘 모두 undefined 로 반환됨.
		console.log("foo's this: ", this);
		function bar(){
			console.log("bar's this: ", this);
		}
		bar();
	}

  > const obj = {
		value: 100,
		foo(){
			console.log("foo's this: ", this); 	// {value: 100, foo: ƒ}
			console.log("foo's this.value: ", this.value);	// 100
			function bar(){
				console.log("bar's this: ", this);	// Window 
				console.log("bar's this.value: ", this.value);	// 1. 중첩 함수이지만 일반함수로 호출시 전역
			}
			bar();
		}
	};
  중첩 함수를 일반 함수로 호출하면 내부 this 에는 전역 객체가 바인딩됨. (특별한 의미는 없는 바인딩)  
  콜백 함수도 일반 함수로 호출되면 콜백 함수 내 this 에도 전역 바인딩됨
  > const obj = {
		value: 100, 
		foo(){
			console.log("foo's this: ", this);	// foo's this:  {value: 100, foo: ƒ}
			setTimeout(function(){
				console.log("callback's this: ", this);	// callback's this:  Window
				console.log("callback's this.value: ", this.value);	// callback's this.value:  undefined
			}, 100);
		}
	};
	obj.foo();	// 
  중첩/콜백 함수는 외부 함수를 돕는 헬버이므로 메서드의 this 바인딩과 일치시켜야 함.    
  > var value = 1;
	const obj = {
		value: 100, 
		foo(){
			console.log("foo's this: ", this);  // foo's this:  { value: 100, foo: [Function: foo] }
			setTimeout(function(){
				console.log("callback's this: ", this); // callback's this:  { value: 100, foo: [Function: foo] }
				console.log("callback's this.value: ", this.value); // callback's this.value:  100
			}.bind(this), 100); // callback 함수에 명시적으로 this binding.
		}
	};
	obj.foo();
  
 ### 메서드 호출    
  메서드 내부의 this 는 메서드를 소유한 객체가 아니라 호출한 객체에 bind
  > const person = {
		name: 'John',
		getName(){
			return this.name;   // method 내의 this: 호출한 객체에 bind
		}
	}
	console.log(person.getName());  // John
 
 ### 생성자 함수 호출  
  생성자 함수는 객체instance를 생성하는 함수: 내부 this 에는 생성자 함수가 생성할 인스턴스가 바인딩된다. 
  > const person = {
		name: 'Lee',
		getName() {
		  // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
		  return this.name;
		}
	};

	const anotherPerson = {
		name: 'John'
	};
	anotherPerson.getName = person.getName; // getName method 를 다른 객체의 method 로 할당
	console.log(anotherPerson.getName());   // John. 메서드만 할당됨.

	const getName = person.getName; // 변수에도 할당
	console.log(getName()); // undefined. 일반함수 호출이므로.

 
 
 ### Function.prototype.apply/call/bind 에 의한 간접 호출  
  Function.prototype의 메서드. 모든 함수가 상속받아 사용 가능. 
  > function getThisBindings() {   
		console.log(arguments);  
		return this;    // 함수를 호출하면서 인수로 전달한 객체를 this에 바인딩
	}

	var thisArg = {};   // this 로 사용할 객체
	thisArg.a = 1;  

	console.log(getThisBindings.apply(thisArg, [1,2,3]));   // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]0: 11: 22: 3callee: ƒ getThisBindings()length: 3Symbol(Symbol.iterator): ƒ values()__proto__: Object
	// {a: 1}
	console.log(getThisBindings.call(thisArg, [1,2,3])); // call: 호출할 함수의 인수들을 리스트 형식으로 전달
	// Arguments [Array(3), callee: ƒ, Symbol(Symbol.iterator): ƒ]
	// {a: 1} 

   > function convertArgsToArray(){
		console.log(arguments);   
		const arr = Array.prototype.slice.call(arguments); // arguments 객체를 배열로 변환.    
		// prototype.slice 를 인수없이 호출하면 배열의 복사본 생성   
		console.log(arr);   
		return arr;
	}   
	convertArgsToArray(1,2,3);  // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
		//(3) [1, 2, 3]
	
	
   > function getThisBindings() {
		return this;
	}
	const thisArg = {};	// this 로 사용할 객체
	thisArg.a = 1;
		
	getThisBindings.bind(thisArg);	// bind method: 함수에 사용할 객체를 전달.
	ƒ getThisBindings() {
		return this;
	}
	getThisBindings.bind(thisArg)();	// 함수를 전달하지는 않으므로 명시적 호출 필요.
	{a: 1}
	
   > const person = {
		name: 'John',
		foo(callback){
			setTimeout(callback, 100);
		}
	};
	person.foo(function(){
		console.log(`Hi! My name is ${this.name}`);
	}); // 일반 함수로 호출된 콜백 함수 내부의 this.name은 window.name과 같으므로 출력되지 않음
	
   > const person = {
		name: 'John',
		foo(callback){
			setTimeout(callback.bind(this), 100);   
		}   // bind method 로 callback 함수 내부의 this 를 전달
	};
	person.foo(function(){
		console.log(`Hi! My name is ${this.name}`);
	}); // Hi! My name is John
