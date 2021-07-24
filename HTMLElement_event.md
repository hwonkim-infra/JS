# HTMLElement: change event

요소 값에 대한 변경이 사용자에 의해 커밋되면 <input>, <select> 및 <textarea> 요소에 대해 변경 이벤트가 발생한다. 입력 이벤트와 달리 요소 값이 변경될 때마다 변경 이벤트가 반드시 발생하는 것은 아니다.     

변경되는 요소의 종류와 사용자가 요소와 상호 작용하는 방식에 따라 변경 이벤트가 다른 순간에 발생한다.     

요소가 <input type="radio"> 및 <input type="checkbox">에 대해 (클릭하거나 키보드를 사용하여) 체크된 경우;
사용자가 변경 사항을 명시적으로 커밋하는 경우(예: 마우스 클릭으로 <select>의 드롭다운에서 값 선택, <input type="date">에 대한 날짜 선택기에서 날짜 선택, <input type="file">에 대한 파일 선택기 등);
요소의 값이 변경되었지만 커밋되지 않은 후 포커스를 잃는 경우(예: <textarea> 또는 <input type="text">의 값을 편집한 후).     
HTML 사양은 변경 이벤트를 발생시켜야 하는 <input> 유형을 나열한다.     
  
### Example
```HTML
<label>Choose an ice cream flavor:
  <select class="ice-cream" name="ice-cream">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option>
    <option value="sardine">Sardine</option>
    <option value="vanilla">Vanilla</option>
  </select>
</label>

<div class="result"></div>
```
```javascript
const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});
```

### Text input element

<input type="text">를 포함한 일부 요소의 경우 컨트롤이 포커스를 잃을 때까지 변경 이벤트가 발생하지 않는다. 아래 필드에 무언가를 입력한 다음 다른 곳을 클릭하여 이벤트를 트리거하십시오.     


# HTMLElement: beforeinput event

DOM beforeinput 이벤트는 <input>, <select> 또는 <textarea> 요소의 값이 수정되려고 할 때 발생한다. 이벤트는 contenteditable이 활성화된 요소와 designMode가 켜져 있는 모든 요소에도 적용.     

이렇게 하면 브라우저가 DOM 트리를 수정하기 전에 웹 앱이 텍스트 편집 동작을 재정의할 수 있으며 성능을 향상시키기 위해 입력 이벤트에 대한 더 많은 제어를 제공한다.     

contenteditable 및 designMode의 경우 이벤트 대상은 편집 호스트. 이러한 속성이 여러 요소에 적용되는 경우 편집 호스트는 상위 요소를 편집할 수 없는 가장 가까운 상위 요소.     

### Example
다음 함수는 beforeinput 및 getTargetRanges가 지원되는 경우 true를 반환한다. 
```
function isBeforeInputEventAvailable() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
}
```

### Simple logger
이 예제는 해당 값을 <input> 요소에 적용된 새 값으로 바꾸기 직전에 요소의 현재 값을 기록한다.     
```HTML
<input placeholder="Enter some text" name="name"/>
<p id="values"></p>
```
```JavaScript
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('beforeinput', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```


# HTMLElement: input event

<input>, <select> 또는 <textarea> 요소의 값이 변경되면 입력 이벤트가 발생한다.     

이벤트는 contenteditable이 활성화된 요소와 designMode가 켜져 있는 모든 요소에도 적용. contenteditable 및 designMode의 경우 이벤트 대상은 편집 호스트. 이러한 속성이 여러 요소에 적용되는 경우 편집 호스트는 상위 요소를 편집할 수 없는 가장 가까운 상위 요소.     

type=checkbox 또는 type=radio인 <input> 요소의 경우 HTML5 사양에 따라 사용자가 컨트롤을 토글할 때마다 입력 이벤트가 발생해야 한다. 그러나 역사적으로 항상 그렇지는 않았습니다. 호환성을 확인하거나 이러한 유형의 요소에 대해 변경 이벤트를 대신 사용하십시오.     

> 참고: 입력 이벤트는 요소 값이 변경될 때마다 발생한다. 이것은 Enter 키를 누르거나 옵션 목록에서 값을 선택하는 것과 같이 값이 커밋될 때만 발생하는 변경 이벤트와 다릅니다.     

### Example
이 예는 <input> 요소의 값을 변경할 때마다 값을 기록한다.     
```HTML
<input placeholder="Enter some text" name="name"/>
<p id="values"></p>
```
```JavaScript
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```



