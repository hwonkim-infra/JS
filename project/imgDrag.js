function dropHandler(ev){
    console.log('File(s) dropped');
    ev.preventDefault();    // 브라우저의 기본 동작 (파일 열기) 방지

    if(ev.dataTransfer.items){  // dataTransfer Item List: 파일에 접근하는 인터페이스 
        for(var i=0; i<ev.dataTransfer.items.length; i++){
            if(ev.dataTransfer.items[i].kind === 'file'){   // 읽기 전용 DataTransferItem.kind 드래그 데이터 항목 종류(일부 텍스트 또는 일부 파일)를 나타내는 DataTransferItem을 반환
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('...file['+i+'].name = '+file.name);                
            }
        }
    } else {
        for (var i = 0; i < ev.dataTransfer.items.length; i++){
            console.log('...file['+i+'].name = '+ev.dataTransfer.items[i].name);
        }
    }
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
    ev.preventDefault();
    
}

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }
