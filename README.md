# JS
web Develop


### 프로토타입 메서드와 __proto__가 없는 객체

__proto__는 브라우저를 대상으로 개발하고 있다면 다소 구식이기 때문에 더는 사용하지 않는 것이 좋습니다. 표준에도 관련 내용이 명시되어있습니다.

대신 아래와 같은 모던한 메서드들을 사용하는 것이 좋죠.

Object.create(proto, [descriptors]) – [[Prototype]]이 proto를 참조하는 빈 객체를 만듭니다. 이때 프로퍼티 설명자를 추가로 넘길 수 있습니다.   
Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환합니다.   
Object.setPrototypeOf(obj, proto) – obj의 [[Prototype]]이 proto가 되도록 설정합니다.   


### Why Arrow Functions

> let APerson = name => {this.name = name;};

  암시적 반환으로 인해 중괄호와 return 문을 생략 할 수 있다 
 1. 매개 변수 필요 없음
    > () => 42
    > _ => 42   // 사실 괄호도 필요하지 않다
 2. 여러 매개 변수
    이 때는 괄호가 필요함
    (x,y) => 42
 3. Statement (명령문)
    expression (표현식) 은 값을 생성하고 statement (명령문) 은 작업을 수행
    화살표 함수에서 명령문에는 {} 가 있어야 함. return 필요.
    > var feedCat = (cat) => {
      if (cat === 'hungry'){
        return 'Feed the Cat';
      } else {
        return 'Do Not feed the Cat';
      }
    }
 4. Block Body
    함수가 block body 에 있는 경우 명시적 return 문 사용:
    > var addValues = (x,y) => { return x+y }
 5. Object Literal
    객체 리터럴로 반환할 경우 괄호로 묶어야 함
    x => ({y:x})
    
 #### 익명성
   
   익명 함수이므로 추적과 디버그가 어렵다
   자기참조 self referencing 가 없으므로 재귀, 바인딩 해제 등을 할 수 없다
    
 #### this. Binding
 
    일반 함수에서의 this 는 contextual binding
    화살표 함수에서의 this 는 lexically binding. this 에 바인딩할 수 없으므로 scope를 올라가서 정의된 값 사용.
    
    > var obj = {
          id: 42,
          counter: function counter() {
            setTimeout(function() {
              console.log(this.id);
            }.bind(this), 1000);}};   // bind 가 없으면 상위 id 를 인식 못해서 undefind 반환.

    > var obj = {
          id: 42,
          counter: function counter() {
            setTimeout(()=> {
              console.log(this.id);
            }, 1000);}};   // bind 할 수 없음
            
            
 #### When Not Arrow Function
 
  1. Object methods
    > var cat2 = {
      lives: 9,
      jumps: () => {
          this.lives--;
          console.log("lives left: "+this.lives);
      }}  // this 가 bind 되지 않으므로 Nan 반환
      
  2. Callback functions with dynamic context
    > var button = document.getElementById('press');
      button.addEventListener('click', () => {
        this.classList.toggle('on');
      }); // this. 가 상위 scope 에 bind 되므로 오류 발생
  3. When it makes your code less readable



            
