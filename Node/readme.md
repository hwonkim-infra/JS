
## Node.js REPL

REPL이라는 용어는 Read Eval Print and Loop를 나타냅니다. 윈도우 콘솔이나 Unix / Linux 셸과 같은 컴퓨터 환경을 지정하여 명령을 입력하면 시스템이 대화 형 모드로 출력으로 응답.

### REPL Environment
Node.js 또는 노드는 REPL 환경과 함께 번들로 제공. REPL 환경의 각 부분에는 특정 작업이 있다.

읽기 : 사용자 입력을 읽다. 입력을 JavaScript 데이터 구조로 구문 분석하고 메모리에 저장.

Eval : 데이터 구조를 취하고 평가.

인쇄 : 결과를 인쇄.

루프 : 사용자가 ctrl-c를 두 번 누를 때까지 위 명령을 반복.


## Node.js Package Manager

Node Package Manager는 두 가지 주요 기능을 제공.

search.nodejs.org에서 검색 가능한 node.js 패키지 / 모듈에 대한 온라인 저장소를 제공.
또한 Node.js 패키지를 설치하고 Node.js 패키지의 버전 관리 및 종속성 관리를 수행하는 명령 줄 유틸리티를 제공.
npm은 v0.6.3 이후 버전의 Node.js 설치 파일과 함께 번들로 제공. Node.js 명령 프롬프트를 열고 다음 명령을 입력하여 버전을 확인할 수 있다.


## Node.js Command Line Options
Node.js에는 다양한 명령 줄 옵션이 있다. 이러한 옵션은 스크립트 및 기타 유용한 런타임 옵션을 실행하는 여러 방법을 제공.

| v, --version           | 노드의 버전을 인쇄하는 데 사용.                                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| -h, --help             | 노드 명령 줄 옵션을 인쇄하는 데 사용.                                                                                                   |
| -e, --eval "script"    | 다음 인수를   JavaScript로 평가. REPL에 미리 정의 된 모듈은 스크립트에서도 사용할 수 있다.                                          |
| -p, --print "script"   | -e와 동일하지만 결과를 인쇄.                                                                                                            |
| -c, --check            | 구문은 실행하지 않고 스크립트를 확인.                                                                                                   |
| -i, --interactive      | stdin이 터미널로 보이지 않더라도 REPL을 엽니 다.                                                                                              |
| -r, --require module   | 시작시 지정된 모듈을 미리로드하는 데 사용. require ()의 모듈 확인 규칙을 따릅니다. 모듈은 파일 경로 또는 노드 모듈 이름 일 수 있다. |
| --no-deprecation       | 지원 중단 경고를 무음으로 설정.                                                                                                         |
| --trace-deprecation    | 지원 중단에 대한 스택 추적을 인쇄하는 데 사용.                                                                                          |
| --throw-deprecation    | 지원 중단에 대한 오류가 발생.                                                                                                           |
| --no-warnings          | 모든 프로세스 경고 (지원 중단 포함)를 음소거.                                                                                           |
| --trace-warnings       | 프로세스 경고 (사용 중단 포함)에 대한 스택 추적을 인쇄.                                                                                 |
| --trace-sync-io        | 이벤트 루프의 첫 번째 턴 후에 동기 I / O가 감지 될 때마다 스택 추적을 인쇄.                                                             |
| --zero-fill-buffers    | 새로 할당 된 모든 버퍼 및 느린 버퍼 인스턴스를 자동으로 0으로 채 웁니다.                                                                      |
| --track-heap-objects   | 힙 스냅 샷에 대한 힙 오브젝트 할당을 추적.                                                                                              |
| --prof-process         | v8   옵션 --prof를 사용하여 생성 된 V8 프로파일 러 출력을 처리.                                                                         |
| --V8-options           | V8   명령 줄 옵션을 인쇄.                                                                                                               |
| --tls-cipher-list=list | 대체 기본 tls 암호 목록을 지정. (암호화 지원으로 빌드하려면   node.js가 필요. (기본값))                                           |
| --enable-fips          | 시작시 fips 호환 암호화를 활성화. (./configure --openssl-fips로 빌드하려면   node.js 필요)                                              |
| --force-fips           | 시작시 fips 호환 암호화를 강제. (스크립트 코드에서 비활성화 할 수 없다.) (--enable-fips와 동일한 요구 사항)                         |
| --icu-data-dir=file    | ICU   데이터로드 경로를 지정. (node_icu_data 재정의)                                                                                    |
|                        |                                                                                                                                               |


## Node.js Global Objects

Node.js 전역 객체는 본질적으로 전역 적이며 모든 모듈에서 사용할 수 있다. 응용 프로그램에 이러한 개체를 포함 할 필요가 없다. 오히려 직접 사용할 수 있다. 이러한 개체는 모듈, 함수, 문자열 및 개체 등. 이러한 개체 중 일부는 실제로 전역 범위가 아니라 모듈 범위에 있다.

Node.js 전역 개체 목록은 다음과 같다.

__dirname
__filename
Console
Process
Buffer
setImmediate(callback[, arg][, ...])
setInterval(callback, delay[, arg][, ...])
setTimeout(callback, delay[, arg][, ...])
clearImmediate(immediateObject)
clearInterval(intervalObject)
clearTimeout(timeoutObject)


## Node.js OS
Node.js OS는 몇 가지 기본 운영 체제 관련 유틸리티 기능을 제공. 일반적으로 사용되는 함수 또는 메서드 목록을 살펴 보겠다.

| os.arch()              | 이 방법은 운영 체제 CPU 아키텍처를   가져 오는 데 사용.                                                                                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| os.cpus()              | 이 방법은 설치된 각 CPU / 코어에   대한 정보를 포함하는 객체 배열을 가져 오는 데 사용 : 모델, 속도 (MHz 단위) 및 시간 (cpu / 코어가 소비 한 밀리 초 수를 포함하는 객체 :   user, nice, sys, 유휴 및 irq). |
| os.endianness()        | 이 메서드는 CPU의 엔디안을 반환. 가능한 값은 빅 엔디안의 경우 'BE', 리틀   엔디안의 경우 'LE'.                                                                                                      |
| os.freemem()           | 이 메서드는 사용 가능한 시스템 메모리 양을 바이트 단위로 반환.                                                                                                                                            |
| os.homedir()           | 이 메서드는 현재 사용자의 홈 디렉터리를 반환.                                                                                                                                                             |
| os.hostname()          | 이 메서드는 운영 체제의 호스트 이름을 반환하는 데 사용.                                                                                                                                                   |
| os.loadavg()           | 이 메서드는 1 분, 5 분 및 15 분로드 평균이 포함 된 배열을 반환. 로드 평균은 운영 체제에서 계산되고 분수로 표현되는 시스템 활동에 의해 소요되는 시간 비율.                                           |
| os.networkinterfaces() | 이 메서드는 네트워크 인터페이스 목록을 반환.                                                                                                                                                              |
| os.platform()          | 이 메서드는 실행중인 컴퓨터의 운영 체제 플랫폼 (예 :   'darwin', 'win32', 'freebsd', 'linux', 'sunos'등)을 반환.                                                                                          |
| os.release()           | 이 메서드는 운영 체제 릴리스를 반환.                                                                                                                                                                      |
| os.tmpdir()            | 이 메서드는 임시 파일에 대한 운영 체제의 기본 디렉터리를 반환.                                                                                                                                            |
| os.totalmem()          | 이 메서드는 총 시스템 메모리 양 (바이트)을 반환.                                                                                                                                                          |
| os.type()              | 이 메서드는 운영 체제 이름을 반환. 예를 들어 linux에서는 'linux', os x에서는 'darwin', Windows에서는 'windows_nt'.                                                                                  |
| os.uptime()            | 이 메서드는 시스템 가동 시간을 초 단위로 반환.                                                                                                                                                            |
| os.userinfo([options]) | 이 메서드는 현재 유효 사용자에 대한 암호 파일 항목의 하위 집합을 반환.                                                                                                                                    |


## Node.js require()
TL;DR
require()는 module.exports를 리턴한다.
exports는 module.exports를 refer하고 있으며, shortcut에 불과하다.
exports와 module.exports는 용례를 익힐 필요가 있다.



## Node.js Timer

Node.js 타이머 함수는 전역 함수. 타이머 함수를 사용하기 위해 require () 함수를 사용할 필요가 없다. 타이머 기능 목록을 보겠다.

타이머 기능 설정 :

setImmediate () : setImmediate를 실행하는데 사용.
setInterval () : 시간 간격을 정의하는 데 사용.
setTimeout () : ()-밀리 초 지연 후 일회성 콜백을 실행하는 데 사용.
타이머 기능 지우기 :

clearImmediate (immediateObject) : setImmediate에 의해 생성 된 즉시 객체를 중지하는 데 사용.
clearInterval (intervalObject) : setInterval에 의해 생성 된대로 intervalObject를 중지하는 데 사용.
clearTimeout (timeoutObject) : setTimeout에 의해 생성 된 timeoutObject를 방지.


## Node.js Errors

The Node.js applications generally face four types of errors:

Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
System errors
User-specified errors
Assertion errors



## Node.js DNS
Node.js DNS 모듈에는 지정된 호스트 이름의 정보를 가져 오는 메서드가 포함되어 있다. 일반적으로 사용되는 DNS 기능 목록을 살펴 보겠다.

dns.getServers()
dns.setServers(servers)
dns.lookup(hostname[, options], callback)
dns.lookupService(address, port, callback)
dns.resolve(hostname[, rrtype], callback)
dns.resolve4(hostname, callback)
dns.resolve6(hostname, callback)
dns.resolveCname(hostname, callback)
dns.resolveMx(hostname, callback)
dns.resolveNs(hostname, callback)
dns.resolveSoa(hostname, callback)
dns.resolveSrv(hostname, callback)
dns.resolvePtr(hostname, callback)
dns.resolveTxt(hostname, callback)
dns.reverse(ip, callback)


## Node.js Net
Node.js는 소켓 프로그래밍을 수행하는 기능을 제공. Node.js에서 소켓 프로그래밍을 사용하여 채팅 애플리케이션을 만들거나 클라이언트 및 서버 애플리케이션을 통신 할 수 있다. Node.js net 모듈에는 서버와 클라이언트를 모두 만드는 기능이 포함되어 있다.



## Node.js Crypto
Node.js Crypto 모듈은 암호화를 지원. 개방형 SSL의 해시 HMAC, 암호, 해독, 서명 및 확인 기능에 대한 래퍼 세트를 포함하는 암호화 기능을 제공.

### What is Hash
Node.js Crypto 모듈은 암호화를 지원. 개방형 SSL의 해시 HMAC, 암호, 해독, 서명 및 확인 기능에 대한 래퍼 세트를 포함하는 암호화 기능을 제공.

### What is HMAC
HMAC는 해시 기반 메시지 인증 코드를 나타냅니다. 데이터와 비밀 키 모두에 해시 알고리즘을 적용하여 단일 최종 해시를 생성하는 프로세스.


## Node.js TLS/SSL
### What is TLS/SSL
TLS는 Transport Layer Security를 나타냅니다. SSL (Secure Sockets Layer)의 후속 제품. SSL과 함께 TLS는 웹을 통한 통신을 보호하기위한 암호화 프로토콜에 사용.

TLS는 공개 키 암호화를 사용하여 메시지를 암호화. 일반적으로 TCP 계층에서 통신을 암호화.


### What is public-key cryptography
공개 키 암호화에서 각 클라이언트와 각 서버에는 공개 키와 개인 키의 두 가지 키가 있다. 공개 키는 모든 사람과 공유되며 개인 키는 보호. 메시지를 암호화하려면 컴퓨터에 개인 키와 수신자의 공개 키가 필요. 반면에 메시지를 해독하려면 수신자가 자신의

tls 모듈은 OpenSSL을 사용하여 전송 계층 보안 및 보안 소켓 계층을 얻다. TLS / SSL은 공개 / 개인 키 인프라. 각 클라이언트와 각 서버에는 개인 키가 있어야.


다음과 같이 개인 키를 만들 수 있다.

	openssl genrsa -out ryans-key.pem 1024
모든 서버와 일부 클라이언트에는 인증서가 있어야. 인증서는 인증 기관에서 서명하거나 자체 서명 한 공개 키. 인증서를 얻으려면 "인증서 서명 요청"(CSR) 파일을 만들어야.

다음과 같이 인증서를 만들 수 있다.

	openssl req -new -key ryans-key.pem -out ryans-csr.pem   
CSR로 자체 서명 된 인증서를 생성하려면 :

	openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem   


## Node.js Debugger
Node.js는 간단한 TCP 기반 프로토콜과 내장 디버깅 클라이언트를 제공. JavaScript 파일을 디버깅하려면 디버그 할 js 파일 이름 뒤에 디버그 인수를 사용할 수 있다.


## Node.js Process
Node.js는 프로세스 ID, 아키텍처, 플랫폼, 버전, 릴리스, 가동 시간, upu 사용량 등과 같은 프로세스 정보를 얻을 수있는 기능을 제공. 또한 프로세스를 종료하고, uid를 설정하고, 그룹을 설정하고, 마스크를 해제하는 데 사용할 수 있다.

프로세스는 EventEmitter의 인스턴스 인 전역 개체이며 어디서나 액세스 할 수 있다.

### Node.js Process Properties
일반적으로 사용되는 Node.js 프로세스 속성 목록은 다음과 같다.

| Property | Description                                                                            |
|----------|----------------------------------------------------------------------------------------|
| arch     | 프로세스 아키텍처 반환 : 'arm', 'ia32'또는 'x64'                                       |
| args     | 명령 줄 인수를 배열로 반환.                                                      |
| env      | 사용자 환경을 반환.                                                              |
| pid      | 프로세스의 프로세스 ID를 반환.                                                   |
| platform | 프로세스의 플랫폼을 반환 : 'darwin', 'freebsd',   'linux', 'sunos'또는   'win32' |
| release  | 현재 노드 릴리스에 대한 메타 데이터를 반환.                                      |
| version  | 노드 버전을 반환.                                                                |
| versions | 노드 버전 및 해당 종속성을 반환.                                                 |


## Node.js Child Process
Node.js 자식 프로세스 모듈은 popen (3)과 유사한 방식으로 자식 프로세스를 생성하는 기능을 제공.

자식 프로세스를 만드는 세 가지 주요 방법이 있다.

child_process.exec () 메서드 :이 메서드는 콘솔에서 명령을 실행하고 출력을 버퍼링.
child_process.spawn () 메서드 :이 메서드는 주어진 명령으로 새 프로세스를 시작.
child_process.fork () 메서드 :이 메서드는 자식 프로세스를 생성하는 spawn () 메서드의 특별한 경우.

### Node.js child_process.exec() method
child_process.exec () 메서드는 콘솔에서 명령을 실행하고 출력을 버퍼링.
	child_process.exec(command[, options], callback)  

매개 변수 :

1) 명령 : 실행할 명령을 공백으로 구분 된 인수로 지정.
2) 옵션 : 다음 옵션 중 하나 이상을 포함 할 수 있다.

cwd : 자식 프로세스의 현재 작업 디렉터리를 지정.
env : 환경 키-값 쌍을 지정.
encoding : 문자열 (기본값 : 'utf8')
shell : 명령을 실행할 문자열 Shell을 지정 (기본값 : UNIX의 경우 '/ bin / sh', Windows의 경우 'cmd.exe', 쉘은 UNIX의 경우 -c 스위치, Windows의 경우 / s / c를 이해해야. Windows, 명령 줄 구문 분석은 cmd.exe와 호환되어야.)
timeout : 숫자 (기본값 : 0)
maxBuffer : 숫자 (기본값 : 200 * 1024)
killSignal : 문자열 (기본값 : 'SIGTERM')
uid Number : 프로세스의 사용자 ID를 설정.
gid Number : 프로세스의 그룹 ID를 설정.
callback : 콜백 함수는 프로세스가 종료 될 때 다음 출력과 함께 호출되는 세 가지 인수 error, stdout 및 stderr을 지정.

### Node.js child_process.spawn() method

child_process.spawn () 메서드는 주어진 명령으로 새 프로세스를 시작. 이 메서드는 스트림 (stdout 및 stderr)을 반환하며 일반적으로 프로세스가 많은 양의 데이터를 반환 할 때 사용.

Syntax:

	child_process.spawn(command[, args][, options])   
Parameters:
1) 명령 : 실행할 명령을 지정.
2) args : 문자열 인수의 배열 목록을 지정.
3) 옵션 : 다음 옵션 중 하나 이상을 포함 할 수 있다.

cwd : 자식 프로세스의 현재 작업 디렉터리를 지정.
env : 환경 키-값 쌍을 지정.
stdio : Array | String Child의 stdio 구성
customFds : stdio에 사용할 자식에 대한 더 이상 사용되지 않는 배열 파일 설명자
detached Boolean : 하위가 프로세스 그룹 리더가.
uid 번호 : 프로세스의 사용자 ID를 설정.
gid 번호 : 프로세스의 그룹 ID를 설정.


## Node.js Buffers
Node.js는 정수 배열과 유사한 원시 데이터를 저장하는 Buffer 클래스를 제공하지만 V8 힙 외부의 원시 메모리 할당에 해당. 순수 JavaScript는 바이너리 데이터에 좋지 않기 때문에 버퍼 클래스가 사용. 따라서 TCP 스트림이나 파일 시스템을 다룰 때 옥텟 스트림을 처리해야.

버퍼 클래스는 글로벌 클래스. 버퍼 모듈을 가져 오지 않고도 응용 프로그램에서 액세스 할 수 있다.


## Node.js Streams
스트림은 소스에서 데이터를 읽고 대상에 데이터를 쓰는 데 도움이되는 개체. Node.js에는 네 가지 유형의 스트림이 있다.

읽기 가능 :이 스트림은 읽기 작업에 사용.
쓰기 가능 :이 스트림은 쓰기 작업에 사용.
이중 :이 스트림은 읽기 및 쓰기 작업 모두에 사용할 수 있다.
변환 : 입력에 따라 출력이 계산되는 이중 스트림 유형.
각 스트림 유형은 이벤트 이미 터 인스턴스이며 서로 다른 시간에 여러 이벤트를 발생시킨다. 다음은 일반적으로 사용되는 몇 가지 이벤트.

데이터 :이 이벤트는 읽을 수있는 데이터가있을 때 시작.
끝 :이 이벤트는 읽을 수있는 데이터가 더 이상 없을 때 시작.
오류 :이 이벤트는 데이터 수신 또는 쓰기 오류가있을 때 시작.
Finish :이 이벤트는 모든 데이터가 기본 시스템으로 플러시되면 시작.

## Node.js File System (FS)

In Node.js, file I/O is provided by simple wrappers around standard POSIX functions. Node File System (fs) module can be imported using following syntax:

### Node.js FS Reading File

fs 모듈의 모든 메서드에는 동기 및 비동기 형식이 있다.

비동기 메서드는 마지막 매개 변수를 완료 함수 콜백으로 사용. 비동기 메서드는 동기 메서드가 차단하는 경우 프로그램 실행을 차단하지 않기 때문에 동기 메서드보다 선호.

	*fs.open(path, flags[, mode], callback)*
경로 : 경로를 포함한 파일 이름이있는 문자열.

flags : 플래그는 열 파일의 동작을 지정. 가능한 모든 값은 아래에 언급되어 있다.

mode : 파일 모드 (권한 및 고정 비트)를 설정하지만 파일이 생성 된 경우에만 해당. 기본값은 0666이며 읽기 및 쓰기가 가능.

callback : 두 개의 인수 (err, fd)를 가져 오는 콜백 함수.



| r   | 읽기 위해 파일을 엽니 다. 파일이 없으면 예외가 발생.                                                                             |
|-----|----------------------------------------------------------------------------------------------------------------------------------------|
| r+  | 읽고 쓰기 위해 파일을 엽니 다. 파일이 없으면 예외가 발생.                                                                        |
| rs  | 동기 모드에서 읽기 위해 파일을 엽니 다.                                                                                                |
| rs+ | 읽기 및 쓰기를 위해 파일을 열고 OS에 동기식으로 열도록 지시. 주의해서 이것을 사용하는 것에 대한 'rs'에 대한 메모를 참조. |
| w   | 쓰기 위해 파일을 엽니 다. 파일이 생성되거나 (존재하지 않는 경우) 잘립니다 (존재하는 경우).                                             |
| wx  | 'w'와 같지만 경로가 있으면 실패.                                                                                                 |
| w+  | 읽고 쓰기 위해 파일을 엽니 다. 파일이 생성되거나 (존재하지 않는 경우) 잘립니다 (존재하는 경우).                                        |
| wx+ | 'w   +'와 같지만 경로가 있으면 실패.                                                                                             |
| a   | 추가 할 파일을 엽니 다. 파일이 없으면 작성.                                                                                      |
| ax  | 'a'와 같지만 경로가 있으면 실패.                                                                                                 |
| a+  | 읽고 추가 할 파일을 엽니 다. 파일이 없으면 작성.                                                                                 |
| ax+ | 읽고 추가 할 파일을 엽니 다. 파일이 없으면 작성.                                                                                 |

### Node.js File Information Method
	*fs.stat(path, callback)  *
경로 : 경로를 포함한 파일 이름이있는 문자열.
콜백 : stats가 fs.Stats 유형의 객체 인 두 개의 인수 (err, stats)를 가져 오는 콜백 함수.


| Method                    | Description                                        |
|---------------------------|----------------------------------------------------|
| stats.isfile()            | 단순 파일의 파일 유형 인 경우 true를 리턴.   |
| stats.isdirectory()       | 디렉토리의 파일 유형 인 경우 true를 반환.    |
| stats.isblockdevice()     | 블록 장치의 파일 유형이면 true를 반환.       |
| stats.ischaracterdevice() | 문자 장치의 파일 유형이면 true를 반환.       |
| stats.issymboliclink()    | 심볼릭 링크의 파일 유형 인 경우 true를 반환. |
| stats.isfifo()            | fifo의 파일 유형이면   true를 반환.          |
| stats.issocket()          | 파일 유형이   asocket이면 true를 반환.       |


## Node.js Path



| path.normalize(p)                  | ..'및 '.'를 처리하여 문자열 경로를 정규화하는 데 사용.                                                                                                         |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| path.join([path1][, path2][, ...]) | 모든 인수를 결합하고 결과 경로를 정규화하는 데 사용.                                                                                                           |
| path.resolve([from ...], to)       | 절대 경로를 확인하는 데 사용.                                                                                                                                  |
| path.isabsolute(path)              | 경로가 절대 경로인지 여부를 결정. 절대 경로는 작업 디렉토리에 관계없이 항상 동일한 위치로 확인.                                                          |
| path.relative(from, to)            | from에서 "to"까지의 상대 경로를 해결하는 데 사용.                                                                                                              |
| path.dirname(p)                    | 경로의 디렉토리 이름을 반환. unix dirname 명령과 유사.                                                                                                   |
| path.basename(p[, ext])            | 경로의 마지막 부분을 반환. Unix basename 명령과 유사.                                                                                                    |
| path.extname(p)                    | 마지막 '.'에서 경로의 확장을 반환. 경로의 마지막 부분에서 문자열의 끝까지. '.'가 없으면 경로의 마지막 부분 또는 첫 번째 문자가 '.'이면 빈 문자열을 반환. |
| path.parse(pathstring)             | 경로 문자열에서 개체를 반환.                                                                                                                                   |
| path.format(pathobject)            | 위의 path.parse와 반대 인 객체에서 경로 문자열을 반환.                                                                                                         |


## Node.js StringDecoder
Node.js StringDecoder는 버퍼를 문자열로 디코딩하는 데 사용. buffer.toString ()과 유사하지만 UTF에 대한 추가 지원을 제공.

StringDecoder 모듈을 사용하려면 require ( 'string_decoder')를 사용해야.
	*const StringDecoder = require('string_decoder').StringDecoder;*

| decoder.write(buffer) | 디코딩 된 문자열을 반환하는 데 사용.                 |
|-----------------------|------------------------------------------------------------|
| decoder.end()         | 버퍼에 남아있는 경우 후행 바이트를 반환하는 데 사용. |
|                       |                                                            |


## Node.js Query String
Node.js 쿼리 문자열은 쿼리 문자열을 처리하는 방법을 제공. 쿼리 문자열을 JSON 개체로 변환하거나 그 반대로 변환하는 데 사용할 수 있다.

쿼리 문자열 모듈을 사용하려면 require ( 'querystring')을 사용해야.

| querystring.parse(str[, sep][, eq][, options])       | 쿼리 문자열을   JSON 개체로 변환. |
|------------------------------------------------------|-----------------------------------------|
| querystring.stringify(obj[, sep][, eq][,   options]) | JSON   개체를 쿼리 문자열로 변환. |
|                                                      |                                         |


## Node.js ZLIB

Node.js Zlib 모듈은 압축 및 압축 해제 (zip 및 unzip) 기능을 제공하는 데 사용. Gzip 및 deflate / inflate를 사용하여 구현.

zlib 모듈은 다음을 사용하여 액세스 할 수 있다.

	*const zlib = require ( 'zlib');*
파일 압축 및 압축 해제는 소스 스트림 데이터를 zlib 스트림을 통해 대상 스트림으로 파이핑하여 수행 할 수 있다.


## Node.js Assertion Testing
Node.js Assert는 테스트를 작성하는 가장 기본적인 방법. 실패하지 않는 한 테스트를 실행할 때 피드백을 제공하지 않다. assert 모듈은 불변을 테스트하는 데 사용할 수있는 간단한 assertion 테스트 세트를 제공. 모듈은 Node.js에서 내부적으로 사용하기위한 것이지만 require ( 'assert')를 통해 애플리케이션 코드에서 사용할 수 있다.

그러나 assert는 테스트 프레임 워크가 아니며 범용 assertion 라이브러리로 사용할 수 없다.


## Node.js V8
What is V8
V8은 Google Chrome 웹 브라우저 용으로 Chromium 프로젝트에서 개발 한 오픈 소스 JavaScript 엔진. C ++로 작성되었다. 이제 Couchbase, MongoDB 및 Node.js와 같은 많은 프로젝트에서 사용.


### V8 in Node.js
Node.js V8 모듈은 V8 버전과 관련된 인터페이스 및 이벤트를 나타냅니다. v8.getHeapStatistics () 및 v8.getHeapSpaceStatistics () 메소드를 통해 힙 메모리에 대한 정보를 가져 오는 메소드를 제공.

이 모듈을 사용하려면 require ( 'v8')를 사용해야.


	*const v8 = require('v8');*

v8.getHeapStatistics () 메서드는 총 힙 크기, 사용 된 힙 크기, 힙 크기 제한, 사용 가능한 총 크기 등과 같은 힙에 대한 통계를 반환. 


v8.getHeapSpaceStatistics ()는 힙 공간에 대한 통계를 반환. 새 공간, 이전 공간, 코드 공간,지도 공간 및 대형 객체 공간의 5 개 객체 배열을 반환. 각 개체에는 공간 이름, 공간 크기, 사용 된 공간 크기, 사용 가능한 공간 크기 및 물리적 공간 크기에 대한 정보가 포함.



### Memory limit of V8 in Node.js
현재 기본적으로 v8의 메모리 제한은 32 비트에서 512MB이고 64 비트 시스템에서 1GB. --max-old-space-size를 32 비트의 경우 최대 1GB, 64 비트 시스템의 경우 최대 1.7GB로 설정하여 제한을 늘릴 수 있다. 그러나 메모리 제한에 도달하는 경우 단일 프로세스를 여러 작업자로 분할하는 것이 좋다. 



## Node.js Callbacks
콜백은 함수에 해당하는 비동기식. 각 작업이 완료 될 때 호출. Node.js에서는 일반적으로 콜백이 사용. Node의 모든 API는 콜백을 지원하는 방식으로 작성되었다. 예를 들어, 함수가 파일 읽기를 시작하면 즉시 실행 환경으로 제어를 되돌려 다음 명령을 실행할 수 있다.

Node.js에서는 파일 I / O가 완료되면 콜백 함수를 호출. 따라서 차단이 없거나 파일 I / O를 기다립니다. 이것은 Node.js가 결과를 반환 할 함수를 기다리지 않고 많은 수의 요청을 처리 할 수 있기 때문에 확장 성이 뛰어납니다.

위의 두 예는 차단 및 비 차단 호출의 개념을 설명. 첫 번째 예는 프로그램이 파일을 읽을 때까지 차단 한 다음 프로그램 만 종료하는 반면 두 번째 예에서는 프로그램이 파일 읽기를 기다리지 않고 "프로그램 종료 됨"과 같은 시간 프로그램을 인쇄하는 것을 보여줍니다. 차단하지 않고 계속 파일을 읽다.
그래서 우리는 차단 프로그램이 순서대로 매우 많이 실행된다고 말할 수 있다. 블록 프로그램의 프로그래밍 관점에서 로직을 구현하는 것도 더 쉽다. 그러나 non-blocking 프로그램은 순차적으로 실행되지 않으므로 프로그램이 처리 할 데이터를 사용해야하는 경우 동일한 블록에 보관하여 순차적으로 실행해야.



## Node.js Events
Node.js 애플리케이션에서 이벤트 및 콜백 개념은 동시성을 제공하는 데 사용. Node.js 애플리케이션은 단일 스레드이고 Node j의 모든 API는 비동기 적. 따라서 비동기 기능을 사용하여 동시성을 유지. 노드는 관찰자 패턴을 사용. 노드 스레드는 이벤트 루프를 유지하고 작업 완료 후 이벤트 리스너 함수가 실행되도록 신호를 보내는 해당 이벤트를 발생시킨다.

### Event Driven Programming

Node.js는 이벤트 기반 프로그래밍을 사용. Node가 서버를 시작하자마자 변수를 시작하고 함수를 선언 한 다음 이벤트가 발생하기를 기다립니다. Node.js가 다른 유사한 기술에 비해 매우 빠른 이유 중 하나.

이벤트 구동 애플리케이션에는 이벤트를 수신 한 다음 해당 이벤트 중 하나가 감지되면 콜백 함수를 트리거하는 메인 루프가 있다.

Node.js 이벤트 1
 https://www.javatpoint.com/js/nodejs/images/nodejs-events1.png
 
이벤트와 콜백의 차이점 :
	
이벤트와 콜백은 비슷해 보이지만 비동기 함수가 결과를 반환 할 때 콜백 함수가 호출되고 이벤트 처리가 관찰자 패턴에서 작동한다는 점이 다릅니다. 이벤트가 시작될 때마다 리스너 함수가 실행되기 시작. Node.js에는 이벤트 모듈과 이벤트 및 이벤트 리스너를 바인딩하는 데 사용되는 EventEmitter 클래스를 통해 사용할 수있는 여러 내장 이벤트가 있다.

이벤트 및 이벤트 리스너를 바인딩하는 EventEmitter 클래스 :

// 이벤트 모듈 가져 오기
	*var events = require ( 'events');*
// eventEmitter 객체 생성
	*var eventEmitter = new events.EventEmitter ();*
이벤트 핸들러를 이벤트와 바인딩하려면 :

// 다음과 같이 이벤트와 핸들러를 바인딩.
	*eventEmitter.on ( 'eventName', eventHandler);*
이벤트를 시작하려면 :

// 이벤트 시작
	*eventEmitter.emit ( 'eventName');*


## Node.js Punycode
### What is Punycode
Punycode는 유니 코드 (UTF-8) 문자열을 기본 ASCII 문자열로 변환하는 데 사용되는 인코딩 구문. 호스트 이름은 ASCII 문자 만 이해하므로 Punycode가 사용. 국제화 된 도메인 이름 (IDN 또는 IDNA)으로 사용. 예를 들어 이해합시다.

브라우저에서 mañana.com을 검색하여 브라우저 (IDNA 활성화 됨)를 먼저 punycode xn--maana-pta.com으로 변환한다고 가정. 왜냐하면 ñ 문자는 일반 도메인 이름에 허용되지 않기 때문. 이전 버전에서는 지원되지 않다.

### Punycode in Node.js
Punycode.js는 Node.js v0.6.2 이상 버전과 함께 번들로 제공. 다른 Node.js 버전과 함께 사용하려면 npm을 사용하여 먼저 punycode 모듈을 설치. 액세스하려면 require ( 'punycode')를 사용해야. 

Syntax:

punycode = require('punycode');  



## Node.js Web Module
### What is Web Server
웹 서버는 웹 브라우저와 같은 HTTP 클라이언트가 보낸 HTTTP 요청을 처리하고 클라이언트에 대한 응답으로 웹 페이지를 반환하는 소프트웨어 프로그램. 웹 서버는 일반적으로 이미지, 스타일 시트 및 스크립트와 함께 html 문서로 응답.

대부분의 웹 서버는 스크립팅 언어를 사용하여 서버 측 스크립트를 지원하거나 데이터베이스에서 데이터를 가져오고 복잡한 논리를 수행하는 특정 작업을 수행하는 응용 프로그램 서버로 리디렉션 한 다음 웹 서버를 통해 HTTP 클라이언트에 결과를 보냅니다.

Apache 웹 서버는 가장 일반적으로 사용되는 웹 서버 중 하나. 오픈 소스 프로젝트.

### Web Application Architecture
웹 애플리케이션은 4 개의 레이어로 나눌 수 있다.

클라이언트 계층 : 클라이언트 계층에는 웹 서버에 HTTP 요청을 할 수있는 웹 브라우저, 모바일 브라우저 또는 애플리케이션이 포함.
서버 계층 : 서버 계층에는 클라이언트의 요청을 가로 채서 응답을 전달할 수있는 웹 서버가 포함되어 있다.
비즈니스 계층 : 비즈니스 계층에는 웹 서버에서 필요한 처리를 수행하는 데 사용되는 애플리케이션 서버가 포함. 이 계층은 데이터베이스 또는 일부 외부 프로그램을 통해 데이터 계층과 상호 작용.
데이터 영역 : 데이터 영역에는 데이터베이스 또는 데이터 소스가 포함.

Node.js web layer

