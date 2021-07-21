

## Express 개발 환경 개요

Express 개발은 Nodejs의 설치, NPM 관리자, 그리고 (선택적) 그리고 Express Application Generator를 선택합니다.

노드 및 NPM 패키지 관리자는 준비된 바이너리 패키지, 설치 프로그램, 운영 체제 패키지 관리자 또는 소스(다음 섹션 참조)에서 함께 설치됩니다. 그런 다음 Express는 개별 Express 웹 애플리케이션의 종속성으로 NPM에 의해 설치됩니다(템플릿 엔진, 데이터베이스 드라이버, 인증 미들웨어, 정적 파일을 제공하는 미들웨어 등과 같은 다른 라이브러리와 함께).

NPM은 MVC 패턴을 따르는 스켈레톤 Express 웹 앱을 만들기 위한 편리한 도구인 Express Application Generator를 (전역적으로) 설치하는 데에도 사용할 수 있습니다. 이 도구를 사용하여 Express를 사용하는 앱을 만들거나 동일한 아키텍처 레이아웃 또는 종속성이 있는 Express 앱을 구성할 필요가 없기 때문에 애플리케이션 생성기는 선택 사항입니다. 시작하기가 훨씬 쉽고 모듈식 애플리케이션 구조를 촉진하기 때문에 우리는 그것을 사용할 것입니다.

> 참고: 일부 다른 웹 프레임워크와 달리 개발 환경에는 별도의 개발 웹 서버가 포함되어 있지 않습니다. Node/Express에서 웹 애플리케이션은 자체 웹 서버를 생성하고 실행합니다!

코드 편집을 위한 텍스트 편집기 또는 IDE와 다양한 버전의 코드를 안전하게 관리하기 위한 Git과 같은 소스 제어 관리 도구를 포함하여 일반적인 개발 환경의 일부인 다른 주변 도구가 있습니다. 이러한 종류의 도구(특히 텍스트 편집기)가 이미 설치되어 있다고 가정합니다.

Node는 Windows, macOS, Linux, Docker 등의 다양한 "flavours"에서 실행할 수 있습니다(nodejs 다운로드 페이지에 전체 목록이 있습니다). 거의 모든 개인용 컴퓨터는 개발 중에 Node를 실행하는 데 필요한 성능을 갖추고 있어야 합니다. Express는 Node 환경에서 실행되므로 Node.js를 실행하는 모든 플랫폼에서 실행할 수 있습니다.

Node에는 많은 릴리스가 있습니다. 최신 릴리스에는 버그 수정, 최신 버전의 ECMAScript(JavaScript) 표준 지원 및 Node API 개선 사항이 포함되어 있습니다.

일반적으로 가장 최근의 LTS(장기 지원) 릴리스를 사용해야 합니다. 이 릴리스가 "현재" 릴리스보다 더 안정적이면서 비교적 최근의 기능을 가지고 있기 때문입니다(그리고 여전히 활발하게 유지되고 있음). LTS 버전에 없는 기능이 필요한 경우 현재 릴리스를 사용해야 합니다.

Express의 경우 항상 최신 버전을 사용해야 합니다.


데이터베이스 드라이버, 템플릿 엔진, 인증 엔진 등과 같은 기타 종속성은 애플리케이션의 일부이며 NPM 패키지 관리자를 사용하여 애플리케이션 환경으로 가져옵니다. 이후의 앱별 기사에서 이에 대해 논의할 것입니다.


### Nodejs와 NPM 테스팅

노드가 설치되었는지 테스트하는 가장 쉬운 방법은 터미널/명령 프롬프트에서 "version" 명령을 실행하고 버전 문자열이 반환되는지 확인하는 것입니다.

```
//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```
코드는 "http" 모듈을 가져와 포트 3000에서 HTTP 요청을 수신하는 서버(createServer())를 만드는 데 사용합니다. 그런 다음 스크립트는 서버를 테스트하는 데 사용할 수 있는 브라우저 URL에 대한 메시지를 콘솔에 인쇄합니다. createServer() 함수는 HTTP 요청이 수신될 때 호출될 콜백 함수를 인수로 사용합니다. 이것은 단순히 HTTP 상태 코드 200("OK")과 일반 텍스트 "Hello World"가 포함된 응답을 반환합니다.

> 이 코드가 아직 정확히 무엇을 하는지 이해하지 못하더라도 걱정하지 마십시오! Express를 사용하기 시작하면 코드를 더 자세히 설명하겠습니다!

명령 프롬프트에서 hellonode.js 파일과 동일한 디렉토리로 이동하여 다음과 같이 스크립트 이름과 함께 node를 호출하여 서버를 시작합니다.

> node hellonode.js
	Server running at http://127.0.0.1:3000/

## Using NPM

노드 자체 다음으로 NPM은 노드 애플리케이션 작업을 위한 가장 중요한 도구입니다. NPM은 애플리케이션이 개발, 테스트 및/또는 프로덕션에 필요한 모든 패키지(JavaScript 라이브러리)를 가져오는 데 사용되며 개발 프로세스에서 사용되는 테스트 및 도구를 실행하는 데에도 사용할 수 있습니다.

> 참고: Node의 관점에서 Express는 NPM을 사용하여 설치한 다음 고유한 코드에 필요한 또 다른 패키지입니다.

NPM을 수동으로 사용하여 필요한 각 패키지를 별도로 가져올 수 있습니다. 일반적으로 package.json이라는 일반 텍스트 정의 파일을 사용하여 종속성을 관리합니다. 이 파일은 패키지 이름, 버전, 설명, 실행할 초기 파일, 프로덕션 종속성, 개발 종속성, 작업할 수 있는 노드 버전 등을 포함하여 특정 JavaScript "패키지"에 대한 모든 종속성을 나열합니다. package.json 파일은 NPM이 애플리케이션을 가져오고 실행하는 데 필요한 모든 것을 포함합니다(재사용 가능한 라이브러리를 작성하는 경우 이 정의를 사용하여 패키지를 npm 저장소에 업로드하고 다른 사용자가 사용할 수 있도록 할 수 있습니다).

### dependencies 추가

다음 단계에서는 NPM을 사용하여 패키지를 다운로드하고 프로젝트 종속성에 저장한 다음 노드 애플리케이션에서 요구하는 방법을 보여줍니다.

> 참고: 여기에서는 Express 패키지를 가져오고 설치하는 지침을 보여줍니다. 나중에 이 패키지와 다른 패키지가 Express Application Generator를 사용하여 이미 지정되어 있는 방법을 보여줍니다. 이 섹션은 NPM이 작동하는 방식과 애플리케이션 생성기에 의해 생성되는 내용을 이해하는 데 유용하기 때문에 제공됩니다.


### Development dependencies

종속성이 개발 중에만 사용되는 경우 대신 "개발 종속성"으로 저장해야 합니다(패키지 사용자가 프로덕션에 설치할 필요가 없도록). 예를 들어 인기 있는 JavaScript Linting 도구 eslint를 사용하려면 다음과 같이 NPM을 호출합니다.

> npm install eslint --save-dev
그러면 다음 항목이 애플리케이션의 package.json에 추가됩니다.

>  "devDependencies": {
    "eslint": "^4.12.1"}
> 참고: "Linters"는 일부 코딩 모범 사례에 대한 준수/비준수를 인식하고 보고하기 위해 소프트웨어에 대한 정적 분석을 수행하는 도구입니다.

종속성을 정의하고 가져오는 것 외에도 package.json 파일에 명명된 스크립트를 정의하고 NPM을 호출하여 run-script 명령으로 실행할 수도 있습니다. 이 접근 방식은 일반적으로 실행 테스트 및 개발의 일부를 자동화하거나 도구 체인을 빌드하는 데 사용됩니다(예: JavaScript 축소, 이미지 축소, 코드 LINT/분석 등을 위한 도구 실행).

> 참고: Gulp 및 Grunt와 같은 작업 실행기는 테스트 및 기타 외부 도구를 실행하는 데 사용할 수도 있습니다.

예를 들어, 이전 섹션에서 지정한 eslint 개발 종속성을 실행하는 스크립트를 정의하려면 package.json 파일에 다음 스크립트 블록을 추가할 수 있습니다(애플리케이션 소스가 /src/js 폴더에 있다고 가정).

```
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```
조금 더 설명하자면, eslint src/js는 터미널/명령줄에 입력하여 앱 디렉터리 내의 src/js 디렉터리에 포함된 JavaScript 파일에 대해 eslint를 실행할 수 있는 명령입니다. 위의 내용을 앱의 package.json 파일에 포함하면 이 명령에 대한 바로 가기가 제공됩니다.

그런 다음 다음을 호출하여 NPM을 사용하여 eslint를 실행할 수 있습니다.

이 예제는 원래 명령보다 짧아 보이지 않을 수 있지만 여러 명령 체인을 포함하여 npm 스크립트 내부에 훨씬 더 큰 명령을 포함할 수 있습니다. 모든 테스트를 한 번에 실행하는 단일 npm 스크립트를 식별할 수 있습니다.

### Installing the Express Application Generator

Express Application Generator 도구는 Express 애플리케이션 "골격"을 생성합니다. 표시된 대로 NPM을 사용하여 생성기를 설치합니다(-g 플래그는 도구를 전역적으로 설치하므로 어디서나 호출할 수 있음).

> npm install express-generator -g
기본 설정으로 "helloworld"라는 Express 앱을 생성하려면 생성하려는 위치로 이동하여 다음과 같이 앱을 실행합니다.
> express helloworld

클립 보드에 복사
참고: 사용할 템플릿 라이브러리와 기타 여러 설정을 지정할 수도 있습니다. 모든 옵션을 보려면 help 명령을 사용하십시오.

표현 --도움
클립 보드에 복사
NPM은 현재 위치의 하위 폴더에 새 Express 앱을 생성하여 콘솔에 빌드 진행 상황을 표시합니다. 완료되면 도구는 노드 종속성을 설치하고 앱을 시작하기 위해 입력해야 하는 명령을 표시합니다.

새 앱의 루트 디렉터리에는 package.json 파일이 있습니다. Express 및 템플릿 라이브러리 Jade를 포함하여 설치된 종속성을 보려면 이것을 열 수 있습니다.

{
  "이름": "helloworld",
  "버전": "0.0.0",
  "비공개": 사실,
  "스크립트": {
    "시작": "노드 ./bin/www"
  },
  "종속성": {
    "쿠키 파서": "~1.4.3",
    "디버그": "~2.6.9",
    "익스프레스": "~4.16.0",
    "http 오류": "~1.6.2",
    "옥": "~1.11.0",
    "모건": "~1.9.0"
  }
}
클립 보드에 복사
다음과 같이 NPM을 사용하여 helloworld 앱에 대한 모든 종속성을 설치합니다.


# 명령 프롬프트를 사용하여 Windows에서 helloworld 실행
SET DEBUG=helloworld:* & npm 시작

# PowerShell을 사용하여 Windows에서 helloworld 실행
SET DEBUG=helloworld:* | npm 시작

# Linux/macOS에서 helloworld 실행
DEBUG=helloworld:* npm 시작
클립 보드에 복사
DEBUG 명령은 유용한 로깅을 생성하여 아래와 같은 출력을 생성합니다.

>SET DEBUG=helloworld:* & npm 시작

> helloworld@0.0.0 시작 D:\Github\expresstests\helloworld
> 노드 ./bin/www




Express - 생성된 앱 기본 화면

스켈레톤 애플리케이션 생성에 대한 기사를 볼 때 생성된 앱에 대해 더 자세히 이야기할 것입니다.

요약
이제 Express 웹 응용 프로그램을 만드는 데 사용할 수 있는 컴퓨터에서 실행 중인 노드 개발 환경이 있습니다. 또한 NPM을 사용하여 Express를 응용 프로그램으로 가져오는 방법과 Express Application Generator 도구를 사용하여 응용 프로그램을 만든 다음 실행하는 방법도 보았습니다.

다음 기사에서는 이 환경 및 관련 도구를 사용하여 완전한 웹 애플리케이션을 빌드하는 자습서를 통해 작업을 시작합니다.


# The Local Library website

MDN "로컬 라이브러리" 익스프레스(노드) 튜토리얼에 오신 것을 환영합니다. 여기에서 로컬 라이브러리의 카탈로그를 관리하는 데 사용할 수 있는 웹사이트를 개발합니다.

이 튜토리얼 기사 시리즈에서는 다음을 수행합니다.

Express Application Generator 도구를 사용하여 스켈레톤 웹사이트 및 애플리케이션을 만드십시오.
노드 웹 서버를 시작하고 중지합니다.
데이터베이스를 사용하여 애플리케이션 데이터를 저장합니다.
다양한 정보를 요청하기 위한 경로와 브라우저에 표시할 HTML로 데이터를 렌더링하는 템플릿("보기")을 만듭니다.
양식으로 작업합니다.
애플리케이션을 프로덕션에 배포합니다.
이러한 주제 중 일부에 대해 이미 배웠고 다른 주제에 대해서도 간략하게 설명했습니다. 튜토리얼 시리즈를 마치면 스스로 간단한 Express 앱을 개발할 수 있을 만큼 충분히 알게 될 것입니다.


## The LocalLibrary website

LocalLibrary는 이 자습서 시리즈를 통해 만들고 발전시킬 웹 사이트의 이름입니다. 예상대로 웹 사이트의 목적은 사용자가 사용 가능한 책을 검색하고 계정을 관리할 수 있는 소규모 지역 도서관에 온라인 카탈로그를 제공하는 것입니다.

이 예는 우리가 필요로 하는 만큼 세부 사항을 표시하도록 확장할 수 있고 거의 모든 Express 기능을 표시하는 데 사용할 수 있기 때문에 신중하게 선택되었습니다. 더 중요한 것은 모든 웹사이트에서 필요한 기능을 통해 안내 경로를 제공할 수 있다는 것입니다.

처음 몇 개의 튜토리얼 기사에서 우리는 도서관 회원들이 어떤 책을 이용할 수 있는지 알아보는 데 사용할 수 있는 간단한 탐색 전용 라이브러리를 정의할 것입니다. 이를 통해 거의 모든 웹사이트에 공통적인 작업인 데이터베이스의 콘텐츠 읽기 및 표시를 탐색할 수 있습니다.
진행하면서 라이브러리 예제는 자연스럽게 확장되어 더 고급 웹 사이트 기능을 보여줍니다. 예를 들어 새 책을 만들 수 있도록 라이브러리를 확장하고 이를 사용하여 양식을 사용하고 사용자 인증을 지원하는 방법을 시연할 수 있습니다.
이것은 매우 확장 가능한 예이지만 이유가 있어 LocalLibrary라고 합니다. Express를 빠르게 시작하고 실행하는 데 도움이 되는 최소한의 정보를 보여주고자 합니다. 결과적으로 우리는 책, 책 사본, 저자 및 기타 주요 정보에 대한 정보를 저장합니다. 그러나 우리는 도서관이 빌려줄 수 있는 다른 항목에 대한 정보를 저장하지 않거나 여러 도서관 사이트 또는 기타 "큰 도서관" 기능을 지원하는 데 필요한 인프라를 제공하지 않습니다.

자습서를 진행하면서 각 지점에서 복사하여 붙여넣을 수 있는 적절한 코드 조각을 제공하고 사용자가 직접 확장할 수 있는 다른 코드가 있을 것입니다(일부 지침 포함).

모든 코드 조각을 복사하여 붙여넣는 대신 입력해 보십시오. 다음에 비슷한 것을 작성하려고 할 때 코드에 더 익숙해지기 때문에 장기적으로 도움이 될 것입니다.

막히면 여기 Github에서 웹 사이트의 완전히 개발된 버전을 찾을 수 있습니다.

> 참고: 특정 버전의 노드, Express 및 이 문서가 테스트된 기타 모듈은 프로젝트 package.json에 나열되어 있습니다.

# Creating a skeleton website

이 기사에서는 Express Application Generator 도구를 사용하여 "골격" 웹사이트를 만드는 방법을 보여줍니다. 그러면 사이트별 경로, 보기/템플릿 및 데이터베이스 호출을 채울 수 있습니다. 이 경우 도구를 사용하여 Local Library 웹 사이트의 프레임워크를 만들고 나중에 사이트에 필요한 다른 모든 코드를 추가합니다. 프로세스는 매우 간단하여 명령줄에서 새 프로젝트 이름으로 생성기를 호출하고 선택적으로 사이트의 템플릿 엔진과 CSS 생성기를 지정하기만 하면 됩니다.

다음 섹션에서는 애플리케이션 생성기를 호출하는 방법을 보여주고 다양한 보기/CSS 옵션에 대한 약간의 설명을 제공합니다. 또한 스켈레톤 웹사이트가 어떻게 구성되어 있는지 설명합니다. 마지막으로 웹 사이트를 실행하여 작동하는지 확인하는 방법을 보여드리겠습니다.

> 참고: Express Application Generator는 Express 애플리케이션을 위한 유일한 생성기가 아니며 생성된 프로젝트가 파일 및 디렉토리를 구성하는 유일한 실행 가능한 방법은 아닙니다. 그러나 생성된 사이트는 확장하고 이해하기 쉬운 모듈식 구조를 가지고 있습니다. 최소 Express 애플리케이션에 대한 정보는 Hello world 예제(Express 문서)를 참조하십시오.

> 참고: 이 자습서에서는 Express Application Generator에서 생성한 package.json에 정의된 Express 버전을 사용합니다. 이것은 (필연적으로) 최신 버전이 아닙니다!

## Using the application generator
노드 개발 환경 설정의 일부로 생성기를 이미 설치했어야 합니다. 빠른 알림으로 다음과 같이 NPM 패키지 관리자를 사용하여 사이트 전체에 생성기 도구를 설치합니다.

> npm install express-generator -g

생성기에는 --help(또는 -h) 명령을 사용하여 명령줄에서 볼 수 있는 여러 옵션이 있습니다.



Jade 보기 엔진과 일반 CSS를 사용하여 현재 디렉토리 내부에 프로젝트를 생성하도록 express를 지정할 수 있습니다(디렉토리 이름을 지정하면 해당 이름을 가진 하위 폴더에 프로젝트가 생성됨).

--view를 사용하여 보기(템플릿) 엔진을 선택하거나 --css를 사용하여 CSS 생성 엔진을 선택할 수도 있습니다.

> 노트 템플릿 엔진을 선택하는 다른 옵션(예: --hogan, --ejs, --hbs 등)은 더 이상 사용되지 않습니다. --view(또는 -v)를 사용합니다.


### What view engine should I use?
Express Application Generator를 사용하면 EJS, Hbs, Pug(Jade), Twig 및 Vash를 비롯한 여러 인기 있는 보기/템플릿 엔진을 구성할 수 있지만 보기 옵션을 지정하지 않으면 기본적으로 Jade가 선택됩니다. Express 자체는 또한 즉시 사용할 수 있는 많은 다른 템플릿 언어를 지원할 수 있습니다.

> 노트 생성기에서 지원하지 않는 템플릿 엔진을 사용하려면 Express(Express 문서)와 함께 템플릿 엔진 사용 및 대상 보기 엔진에 대한 설명서를 참조하세요.

일반적으로 말해서 필요한 모든 기능을 제공하고 더 빨리 생산성을 높일 수 있는 템플릿 엔진을 선택해야 합니다. 즉, 다른 구성 요소를 선택하는 것과 같은 방식입니다! 템플릿 엔진을 비교할 때 고려해야 할 사항:

생산성 향상 시간 — 팀이 이미 템플릿 언어에 대한 경험이 있는 경우 해당 언어를 사용하여 더 빨리 생산성을 높일 수 있습니다. 그렇지 않은 경우 후보 템플릿 엔진에 대한 상대적 학습 곡선을 고려해야 합니다.
인기도 및 활동 - 엔진의 인기도와 활발한 커뮤니티가 있는지 여부를 검토합니다. 웹사이트 전체에 걸쳐 문제가 발생할 때 지원을 받을 수 있는 것이 중요합니다.
스타일 — 일부 템플릿 엔진은 "일반" HTML 내에 삽입된 콘텐츠를 나타내기 위해 특정 마크업을 사용하는 반면 다른 템플릿 엔진은 다른 구문(예: 들여쓰기 및 블록 이름 사용)을 사용하여 HTML을 구성합니다.
성능/렌더링 시간.
기능 — 보고 있는 엔진에 다음 기능을 사용할 수 있는지 여부를 고려해야 합니다.
레이아웃 상속: 기본 템플릿을 정의한 다음 특정 페이지에 대해 다르게 하려는 부분만 "상속"할 수 있습니다. 이것은 일반적으로 여러 필수 구성 요소를 포함하여 템플릿을 작성하거나 매번 처음부터 템플릿을 작성하는 것보다 더 나은 접근 방식입니다.
"포함" 지원: 다른 템플릿을 포함하여 템플릿을 구축할 수 있습니다.
간결한 변수 및 루프 제어 구문.
템플릿 수준에서 변수 값을 필터링하는 기능(예: 변수를 대문자로 만들기 또는 날짜 값 형식 지정).
HTML(예: JSON 또는 XML) 이외의 출력 형식을 생성하는 기능.
비동기 작업 및 스트리밍을 지원합니다.
클라이언트 측 기능. 클라이언트에서 템플릿 엔진을 사용할 수 있으면 렌더링의 전부 또는 대부분을 클라이언트 측에서 수행할 수 있습니다.

이 프로젝트에서는 Pug 템플릿 엔진(최근에 이름이 변경된 Jade 엔진)을 사용할 것입니다. 이는 가장 인기 있는 Express/JavaScript 템플릿 언어 중 하나이며 생성기에서 즉시 지원하기 때문입니다.

### What CSS stylesheet engine should I use?

Express Application Generator를 사용하면 가장 일반적인 CSS 스타일시트 엔진인 LESS, SASS, Compass, Stylus를 사용하도록 구성된 프로젝트를 생성할 수 있습니다.

> 노트 CSS에는 특정 작업을 어렵게 만드는 몇 가지 제한 사항이 있습니다. CSS 스타일시트 엔진을 사용하면 CSS를 정의하기 위해 보다 강력한 구문을 사용하고 브라우저에서 사용할 수 있도록 정의를 일반 CSS로 컴파일할 수 있습니다.

템플릿 엔진과 마찬가지로 팀의 생산성을 극대화할 수 있는 스타일시트 엔진을 사용해야 합니다. 이 프로젝트에서는 CSS 요구 사항이 다른 것을 사용하는 것을 정당화할 만큼 충분히 복잡하지 않기 때문에 기본 CSS(기본값)를 사용합니다.


### What database should I use?

생성된 코드는 데이터베이스를 사용/포함하지 않습니다. Express 앱은 Node에서 지원하는 모든 데이터베이스 메커니즘을 사용할 수 있습니다(Express 자체는 데이터베이스 관리에 대한 특정 추가 동작/요구 사항을 정의하지 않음).

이후 기사에서 데이터베이스와 통합하는 방법에 대해 논의할 것입니다.


## Creating the project

빌드할 샘플 로컬 라이브러리 앱의 경우 CSS 엔진 없이 Pug 템플릿 라이브러리를 사용하여 express-locallibrary-tutorial이라는 프로젝트를 생성합니다.

먼저 프로젝트를 생성할 위치로 이동한 다음 다음과 같이 명령 프롬프트에서 Express Application Generator를 실행합니다.

> express express-locallibrary-tutorial --view=pug


출력이 끝나면 생성기가 종속성을 설치하는 방법(package.json 파일에 나열됨)과 애플리케이션을 실행하는 방법에 대한 지침을 제공합니다.

## Running the skeleton website

이 시점에서 완전한 스켈레톤 프로젝트가 있습니다. 웹 사이트는 실제로 아직 많은 작업을 수행하지 않지만 작동하는지 보여주기 위해 실행할 가치가 있습니다.

먼저 종속성을 설치합니다(설치 명령은 프로젝트의 package.json 파일에 나열된 모든 종속성 패키지를 가져옴).
> cd express-locallibrary-tutorial
npm install

그런 다음 응용 프로그램을 실행합니다.
Windows CMD 프롬프트에서 다음 명령을 사용합니다.
SET DEBUG=express-locallibrary-tutorial:* & npm 시작
클립 보드에 복사
Windows Powershell에서 다음 명령을 사용합니다.
$ENV:DEBUG = "express-locallibrary-tutorial:*"; npm 시작
클립 보드에 복사
노트
Powershell 명령은 이 자습서에서 더 이상 다루지 않습니다(제공된 "Windows" 명령은 Windows CMD 프롬프트를 사용하고 있다고 가정합니다.)

macOS 또는 Linux에서는 다음 명령을 사용합니다.
DEBUG=express-locallibrary-tutorial:* npm 시작

그런 다음 브라우저에서 http://localhost:3000/을 로드하여 앱에 액세스합니다.
다음과 같은 브라우저 페이지가 표시되어야 합니다.



npm start 명령을 사용하여 앱을 시작할 수도 있습니다. 표시된 대로 DEBUG 변수를 지정하면 콘솔 로깅/디버깅이 활성화됩니다. 예를 들어 위의 페이지를 방문하면 다음과 같은 디버그 출력을 볼 수 있습니다.


## Enable server restart on file changes

Express 웹사이트에 대한 변경 사항은 현재 서버를 다시 시작할 때까지 표시되지 않습니다. 변경할 때마다 서버를 중지하고 다시 시작해야 하는 것은 매우 짜증나는 일이므로 필요할 때 서버를 자동으로 다시 시작하는 데 시간을 할애할 가치가 있습니다.

이를 위한 편리한 도구는 nodemon입니다. 이것은 일반적으로 전역적으로 설치되지만("도구"이므로) 여기에서는 개발자 종속성으로 로컬에 설치하고 사용하므로 프로젝트 작업을 하는 모든 개발자가 응용 프로그램을 설치할 때 자동으로 가져옵니다. 스켈레톤 프로젝트의 루트 디렉터리에서 다음 명령을 사용합니다.

> npm install --save-dev nodemon
여전히 nodemon을 프로젝트의 package.json 파일뿐만 아니라 머신에 전역적으로 설치하기로 선택한 경우:

> npm install -g nodemon

프로젝트의 package.json 파일을 열면 이제 이 종속성이 있는 새 섹션이 표시.

>  "devDependencies": {
    "nodemon": "^2.0.4"
}

도구가 전역적으로 설치되어 있지 않기 때문에 명령줄에서 실행할 수 없지만(경로에 추가하지 않는 한) NPM은 설치된 패키지에 대해 모두 알고 있기 때문에 NPM 스크립트에서 호출할 수 있습니다. package.json의 스크립트 섹션을 찾으십시오. 처음에는 "start"로 시작하는 한 줄이 포함됩니다. 해당 줄 끝에 쉼표를 넣고 "devstart" 및 "serverstart" 줄을 추가하여 업데이트합니다.


이제 이전과 거의 동일한 방식으로 서버를 시작할 수 있지만 devstart 명령을 사용합니다.

> 노트 이제 프로젝트의 파일을 편집하면 서버가 다시 시작됩니다(또는 언제든지 명령 프롬프트에서 rs를 입력하여 다시 시작할 수 있음). 페이지를 새로 고치려면 브라우저를 다시 로드해야 합니다.

"start"는 실제로 명명된 스크립트에 매핑되는 NPM 명령이기 때문에 이제 npm start 대신 "npm run <scriptname>"을 호출해야 합니다. 시작 스크립트에서 명령을 교체할 수도 있었지만 개발 중에만 nodemon을 사용하려고 하므로 새 스크립트 명령을 만드는 것이 좋습니다.

위 package.json의 스크립트에 추가된 serverstart 명령이 아주 좋은 예입니다. 이 접근 방식을 사용하면 더 이상 서버를 시작하기 위해 긴 명령을 입력할 필요가 없습니다. 스크립트에 추가된 특정 명령은 macOS 또는 Linux에서만 작동합니다.


## The generated project

이제 방금 만든 프로젝트를 살펴보겠습니다.

디렉토리 구조
이제 종속성을 설치했으므로 생성된 프로젝트는 다음과 같은 파일 구조를 갖습니다(파일은 "/" 접두사가 붙지 않은 항목입니다). package.json 파일은 애플리케이션 종속성 및 기타 정보를 정의합니다. 또한 애플리케이션 진입점인 JavaScript 파일 /bin/www를 호출하는 시작 스크립트를 정의합니다. 이것은 일부 애플리케이션 오류 처리를 설정한 다음 나머지 작업을 수행하기 위해 app.js를 로드합니다. 앱 경로는 route/ 디렉토리 아래에 별도의 모듈에 저장됩니다. 템플릿은 /views 디렉토리에 저장됩니다.

종속성에는 익스프레스 패키지와 선택한 보기 엔진(pug)용 패키지가 포함됩니다. 또한 많은 웹 응용 프로그램에서 유용한 다음 패키지가 있습니다.

cookie-parser: 쿠키 헤더를 구문 분석하고 req.cookies를 채우는 데 사용됩니다(기본적으로 쿠키 정보에 액세스하기 위한 편리한 방법을 제공함).
debug: 노드 코어의 디버깅 기술을 모델로 한 작은 노드 디버깅 유틸리티입니다.
morgan: 노드용 HTTP 요청 로거 미들웨어.
http-errors: 필요한 경우 HTTP 오류를 생성합니다(빠른 오류 처리를 위해).
스크립트 섹션은 먼저 "시작" 스크립트를 정의합니다. 이 스크립트는 npm start를 호출하여 서버를 시작할 때 호출하는 것입니다(이 스크립트는 Express Application Generator에 의해 추가되었습니다). 스크립트 정의에서 이것이 실제로 node.js로 JavaScript 파일 ./bin/www를 시작한다는 것을 알 수 있습니다.

devstart 및 serverstart 스크립트를 사용하여 node가 아닌 nodemon으로 동일한 ./bin/www 파일을 시작할 수 있습니다(이 예제는 위의 파일 변경 시 서버 다시 시작 활성화에서 설명한 것처럼 Linux 및 macOS용입니다).

### www 파일
/bin/www 파일은 애플리케이션 진입점입니다! 이것이 하는 가장 첫 번째 일은 express() 애플리케이션 객체를 설정하고 반환하는 "실제" 애플리케이션 진입점(app.js, 프로젝트 루트)을 require()하는 것입니다.

> 노트 require()는 모듈을 현재 파일로 가져오는 데 사용되는 전역 노드 함수입니다. 여기서 상대 경로를 사용하고 선택적(.js) 파일 확장자를 생략하여 app.js 모듈을 지정합니다.

이 파일의 나머지 코드는 앱이 특정 포트(환경 변수에 정의됨 또는 변수가 정의되지 않은 경우 3000)로 설정된 노드 HTTP 서버를 설정하고 서버 오류 및 연결을 수신하고 보고하기 시작합니다. 지금은 코드에 대해 다른 것은 전혀 알 필요가 없지만(이 파일의 모든 내용은 "보일러 플레이트"임) 관심이 있다면 자유롭게 검토하세요.

app.js 
이 파일은 익스프레스 애플리케이션 객체(관례에 따라 app이라는 이름)를 만들고 다양한 설정과 미들웨어로 애플리케이션을 설정한 다음 모듈에서 앱을 내보냅니다. 아래 코드는 앱 개체를 만들고 내보내는 파일의 일부만 보여줍니다.

```
var express = require('express');
var app = express();
...
module.exports = app;
```
위의 www 진입점 파일로 돌아가서 이 파일을 가져올 때 호출자에게 제공되는 것은 이 module.exports 개체입니다.

app.js 파일을 자세히 살펴보겠습니다. 먼저 NPM을 사용하여 애플리케이션용으로 이전에 다운로드한 http-errors, express, morgan 및 쿠키 파서를 포함하여 require()를 사용하여 몇 가지 유용한 노드 라이브러리를 파일로 가져옵니다. 파일 및 디렉토리 경로를 구문 분석하기 위한 핵심 노드 라이브러리인 경로.
```
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
```
그런 다음 route 디렉토리에서 require() 모듈을 사용합니다. 이러한 모듈/파일에는 관련 "경로"(URL 경로)의 특정 집합을 처리하기 위한 코드가 포함되어 있습니다. 예를 들어 라이브러리의 모든 책을 나열하기 위해 골격 응용 프로그램을 확장할 때 책 관련 경로를 처리하기 위한 새 파일을 추가합니다.
```
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```
> 노트 이 시점에서 우리는 방금 모듈을 가져왔습니다. 우리는 아직 그 경로를 사용하지 않았습니다(이것은 파일 아래에서 조금 더 발생합니다).

다음으로 가져온 익스프레스 모듈을 사용하여 앱 개체를 만든 다음 이를 사용하여 보기(템플릿) 엔진을 설정합니다. 엔진을 설정하는 데는 두 부분이 있습니다. 먼저 'views' 값을 설정하여 템플릿이 저장될 폴더(이 경우 하위 폴더 /views)를 지정합니다. 그런 다음 템플릿 라이브러리(이 경우 "pug")를 지정하기 위해 '보기 엔진' 값을 설정합니다.
```
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```
다음 함수 세트는 app.use()를 호출하여 미들웨어 라이브러리를 요청 처리 체인에 추가합니다. 이전에 가져온 타사 라이브러리 외에도 express.static 미들웨어를 사용하여 Express가 프로젝트 루트의 /public 디렉토리에 있는 모든 정적 파일을 제공하도록 합니다.
```
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
```

이제 다른 모든 미들웨어가 설정되었으므로 (이전에 가져온) 경로 처리 코드를 요청 처리 체인에 추가합니다. 가져온 코드는 사이트의 다른 부분에 대한 특정 경로를 정의합니다.

```
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

> 노트 위에서 지정한 경로('/' 및 '/users')는 가져온 파일에 정의된 경로에 대한 접두사로 처리됩니다. 예를 들어 가져온 사용자 모듈이 /profile에 대한 경로를 정의하는 경우 /users/profile에서 해당 경로에 액세스합니다. 경로에 대한 자세한 내용은 이후 기사에서 다루겠습니다.

파일의 마지막 미들웨어는 오류 및 HTTP 404 응답에 대한 처리기 메서드를 추가합니다.

```
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```
이제 Express 애플리케이션 개체(앱)가 완전히 구성되었습니다. 마지막 단계는 모듈 내보내기에 추가하는 것입니다(이를 통해 /bin/www에서 가져올 수 있음).

```
module.exports = app;
```

#### Routes
경로 파일 /routes/users.js는 아래와 같습니다(경로 파일은 유사한 구조를 공유하므로 index.js도 표시할 필요가 없습니다). 먼저 express 모듈을 로드하고 이를 사용하여 express.Router 개체를 가져옵니다. 그런 다음 해당 개체에 대한 경로를 지정하고 마지막으로 모듈에서 라우터를 내보냅니다(파일을 app.js로 가져올 수 있음).

```
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```
경로는 올바른 패턴의 HTTP GET 요청이 감지될 때마다 호출될 콜백을 정의합니다. 일치하는 패턴은 모듈을 가져올 때 지정된 경로('/users')와 이 파일에 정의된 모든 것('/')입니다. 즉, 이 경로는 /users/의 URL이 수신될 때 사용됩니다.

> 팁 노드가 있는 서버를 실행하고 브라우저에서 URL(http://localhost:3000/users/)을 방문하여 이것을 시도하십시오. 'response with a resource'라는 메시지가 표시되어야 합니다.

위의 흥미로운 점 중 하나는 콜백 함수에 세 번째 인수 'next'가 있으므로 단순한 경로 콜백이 아닌 미들웨어 함수라는 것입니다. 코드는 현재 다음 인수를 사용하지 않지만 '/' 경로 경로에 여러 경로 처리기를 추가하려는 경우 나중에 유용할 수 있습니다.

#### Views (templates)

보기(템플릿)는 /views 디렉토리(app.js에 지정됨)에 저장되며 파일 확장자가 .pug로 지정됩니다. Response.render() 메서드는 개체에 전달된 명명된 변수의 값과 함께 지정된 템플릿을 렌더링한 다음 그 결과를 응답으로 보내는 데 사용됩니다. /routes/index.js의 아래 코드에서 해당 경로가 템플릿 변수 "title"을 전달하는 템플릿 "index"를 사용하여 응답을 렌더링하는 방법을 볼 수 있습니다.

```
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```
위 경로에 해당하는 템플릿은 아래에 나와 있습니다(index.pug). 구문에 대해서는 나중에 더 자세히 설명하겠습니다. 지금 알아야 할 것은 템플릿에 지정된 위치에 제목 변수(값 'Express' 포함)가 삽입된다는 것입니다.

```
extends layout

block content
  h1= title
  p Welcome to #{title}
```

URL /users/cool/에 "You're so cool"이라는 텍스트를 표시하는 /routes/users.js에 새 경로를 만듭니다. 서버를 실행하고 브라우저에서 http://localhost:3000/users/cool/을 방문하여 테스트하십시오.

요약
이제 로컬 라이브러리에 대한 스켈레톤 웹 사이트 프로젝트를 만들고 노드를 사용하여 실행되는지 확인했습니다. 가장 중요한 것은 프로젝트가 어떻게 구성되어 있는지 이해하고 있으므로 로컬 라이브러리에 대한 경로와 보기를 추가하기 위해 어디를 변경해야 하는지 잘 알 수 있다는 것입니다.

다음으로, 도서관 웹사이트로 작동하도록 골격을 수정하기 시작합니다.
