# File drag and drop
HTML 드래그 앤 드롭 인터페이스를 사용하면 웹 애플리케이션이 웹 페이지에서 파일을 드래그 앤 드롭할 수 있다. 이 문서는 기본 플랫폼의 파일 관리자에서 끌어서 웹 페이지에 놓은 하나 이상의 파일을 응용 프로그램이 수락하는 방법을 설명한다.

드래그 앤 드롭의 주요 단계는 드롭 영역(즉, 파일 드롭의 대상 요소)을 정의하고 드롭 및 드래그오버 이벤트에 대한 이벤트 핸들러를 정의하는 것입니다. 이러한 단계는 예제 코드 조각을 포함하여 아래에 설명되어 있다. 전체 소스 코드는 MDN의 드래그 앤 드롭 저장소에서 사용할 수 있다(풀 요청 및/또는 문제 환영).

참고: HTML 드래그 앤 드롭은 파일 드래그 앤 드롭을 지원하기 위해 두 가지 다른 API를 정의한다. 하나의 API는 DataTransfer 인터페이스이고 두 번째 API는 DataTransferItem 및 DataTransferItemList 인터페이스입니다. 이 예제는 두 API의 사용을 보여줍니다(Gecko 특정 인터페이스는 사용하지 않음).

## Define the drop zone
drop 이벤트의 대상 요소에는 ondrop 전역 이벤트 핸들러가 필요. 다음 코드 스니펫은 <div> 요소를 사용하여 이 작업을 수행하는 방법.

```
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this Drop Zone ...</p>
</div>
```
일반적으로 응용 프로그램은 놓기 대상 요소에 dragover 이벤트 핸들러를 포함하고 해당 핸들러는 브라우저의 기본 끌기 동작을 끈다. 이 핸들러를 추가하려면 ondragover 전역 이벤트 핸들러를 포함해야 한다.

```
<div id="drop_zone" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this Drop Zone ...</p>
</div>
```
마지막으로, 애플리케이션은 요소가 놓기 영역임을 시각적으로 나타내기 위해 놓기 대상 요소의 스타일을 지정할 수 있다. 이 예에서 놓기 대상 요소는 다음 스타일을 사용한다.

```
#drop_zone {
  border: 5px solid blue;
  width:  200px;
  height: 100px;
}
```
OS에서 브라우저로 파일을 드래그할 때 dragstart 및 dragend 이벤트가 발생하지 않다.

## Process the drop
drop 이벤트는 사용자가 파일을 삭제할 때 발생한다. 다음 드롭 핸들러에서 브라우저가 DataTransferItemList 인터페이스를 지원하는 경우 getAsFile() 메소드를 사용하여 각 파일에 액세스한다. 그렇지 않으면 DataTransfer 인터페이스의 파일 속성이 각 파일에 액세스하는 데 사용된다.

이 예는 끌어온 각 파일의 이름을 콘솔에 쓰는 방법. 실제 응용 프로그램에서 응용 프로그램은 파일 API를 사용하여 파일을 처리하려고 할 수 있다.

이 예에서 파일이 아닌 드래그 항목은 무시된다.
```
function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }

```

## Prevent the browser's default drag behavior

다음 dragover 이벤트 핸들러는 preventDefault()를 호출하여 브라우저의 기본 드래그 앤 드롭 핸들러를 끈다.

```
function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
```

# DataTransfer.setDragImage()
드래그가 발생하면 드래그 대상(dragstart 이벤트가 발생하는 요소)에서 반투명 이미지가 생성되고 드래그하는 동안 마우스 포인터를 따릅니다. 이 이미지는 자동으로 생성되므로 직접 생성할 필요가 없습니다. 그러나 사용자 정의 이미지가 필요한 경우 DataTransfer.setDragImage() 메서드를 사용하여 사용할 사용자 정의 이미지를 설정할 수 있습니다. 이미지는 일반적으로 <image> 요소이지만 <canvas> 또는 다른 가시적 요소일 수도 있습니다.

메서드의 x 및 y 좌표는 마우스 포인터를 기준으로 이미지가 표시되는 방식을 정의합니다. 이 좌표는 마우스 커서가 있어야 하는 이미지의 오프셋을 정의합니다. 예를 들어 포인터가 중앙에 오도록 이미지를 표시하려면 이미지 너비와 높이의 절반인 값을 사용합니다.

이 메서드는 dragstart 이벤트 핸들러에서 호출해야 한다.
> void dataTransfer.setDragImage(img | element, xOffset, yOffset);


