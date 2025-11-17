​

## 📌 Figma 디자인 파일을 수동으로 내보내지 않고 자동으로 관리하는 방법은?
Figma에서 디자인 파일을 수동으로 내보내고 공유하는 데 드는 시간을 절약하기 위해 <mark>Figma, Make, Airtable을 활용한 완전 자동화된 자산 관리 시스템을 구축</mark>하는 것입니다.


## 💡 이 시스템으로 Figma 파일을 어디로 내보낼 수 있는가?
Google Drive, Dropbox, Notion, Slack, 이메일 첨부 등 <mark>필요한 모든 곳으로 디자인을 내보낼 수 있습니다.</mark>


피그마(Figma) 사용자들이 반복적인 디자인 파일 공유 및 **에셋 관리**에 낭비하는 시간을 획기적으로 줄여줄 **완벽 자동화 시스템** 구축 가이드입니다. 엔지니어가 아니더라도 Make(Integromat)와 에어테이블(Airtable)을 활용하여, 피그마 컴포넌트의 '발행(Publish)' 버튼 한 번으로 수백, 수천 개의 디자인 에셋을 구글 드라이브, 드롭박스, 노션 등 원하는 곳으로 **자동 동기화**하는 방법을 단계별로 배울 수 있습니다. 이 시스템은 디자이너가 피그마를 떠나지 않고도 모든 에셋을 중앙 집중식으로 관리하고, 마케터나 협업자들이 항상 최신 파일을 즉시 사용할 수 있게 하여 **업무 효율성을 극대화**합니다.
## 1. 자동화된 Figma 에셋 관리 시스템 개요 및 시연 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/0.jpg)
1. **문제 제기 및 해결책 제시**:
  1. 디자이너들이 Figma에서 반복적인 파일 공유 및 에셋 내보내기에 많은 시간을 낭비하는 문제를 해결해야 한다 .
  2. 엔지니어가 아니더라도 Make(Integromat)와 Airtable을 활용하여 Figma 파일 내보내기 작업을 **완전히 자동화**할 수 있다 .
  3. 이 시스템은 Figma 컴포넌트의 '발행(Publish)' 버튼 한 번 클릭만으로 수천 개의 에셋을 Google Drive, Dropbox, Notion, Slack, 이메일 첨부 등 원하는 모든 곳으로 자동 동기화할 수 있다 .

2. **자동화 시스템 시연 (로고 데이터베이스 사례)**:
  1. 시연을 위해 디자이너가 설정한 **로고 데이터베이스** Figma 파일을 사용한다 .
  2. 이 데이터베이스에는 웹사이트, 프레젠테이션, LinkedIn 게시물 등에 자주 사용되는 다양한 AI 및 노코드 도구의 로고가 컴포넌트로 설정되어 있다 .
  3. **기존 방식의 문제점**: 디자이너에게 필요한 로고를 매번 요청해야 하는 번거로움이 있었다 .
  4. **자동화 시스템의 이점**: 현재 페이지에 있는 약 <mark>480개</mark>의 모든 앱 로고가 Airtable 베이스와 Google Drive 폴더에 동기화되어 있다 .
  5. 팀원들은 Google Drive 폴더에서 항상 최신 로고 파일을 즉시 사용할 수 있게 된다 .

3. **실시간 동기화 시연 (Gumloop 로고 추가)**:
  1. 새로운 도구인 Gumloop의 로고를 Figma 파일에 추가하고 컴포넌트로 변환한다 .
  2. 컴포넌트가 되면 '발행(Publish)' 옵션이 활성화되며, 이 버튼을 누르는 것이 동기화의 **트리거**가 된다 .
  3. **발행(Publish) 실행**: Figma 웹훅(Web hook)을 활용하여 발행을 누르면 Airtable과 Google Drive로의 동기화가 시작된다 .
  4. **Airtable 동기화 확인**:
  1. Airtable에 새로운 레코드가 생성되며, 초기 상태는 'trigger'로 설정된다 .
  2. 잠시 후 두 번째 자동화가 트리거되면서 상태가 'trigger'에서 사라지고, Gumloop 이미지가 추가되며 상태가 'complete'로 업데이트된다 .
  3. Airtable에서 Gumloop 로고에 접근 가능하며, Google Drive 파일 ID가 성공적으로 푸시되었음을 확인한다 .
  5. **Google Drive 동기화 확인**: Google Drive 폴더에서 Gumloop 로고가 성공적으로 추가되었음을 확인한다 .
  6. 이 시스템을 통해 디자이너는 Figma를 떠나지 않고도 발행 버튼 클릭만으로 모든 에셋을 Airtable과 Google Drive에 자동 내보낼 수 있다 .


## 2. 자동화 시스템의 구성 요소 및 작동 원리 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/289.jpg)
1. **시스템의 핵심 구성 요소**:
  1. **Figma 파일 및 컴포넌트**: 컴포넌트 기능이 있어야 '발행(Publish)' 버튼에 접근할 수 있으므로 컴포넌트가 핵심이다 .
  2. **Figma 웹훅**: 컴포넌트나 라이브러리가 발행될 때 이를 감지하여 Make 시나리오를 트리거한다 .

2. **Make 시나리오 1 (Figma → Airtable 동기화)**:
  1. 웹훅이 트리거되면 Make 시나리오가 실행되며, 약 500개의 에셋을 단 <mark>5번의 작업</mark>으로 효율적으로 동기화할 수 있다 .
  2. **효율적인 데이터 처리**: Make의 집계(Aggregation) 기능을 활용하여 모든 컴포넌트를 하나의 CSV로 집계한 후, Airtable의 Sync API를 사용하여 Airtable로 전송한다 .
  3. **Airtable Sync API의 역할**:
  1. Airtable의 동기화된 필드(Synced Fields)를 생성하며, 새로운 컴포넌트가 발행될 때마다 Airtable에 500개의 행을 다시 추가하는 것이 아니라, Figma 파일의 현재 상태와 정확히 일치하도록 1:1로 매칭하여 업데이트한다 .
  2. 이 단계(시나리오 1)는 단순히 컴포넌트 목록을 Airtable에 나열하는 역할만 하며, 실제 파일 다운로드나 내보내기는 아직 수행하지 않는다 .

3. **Make 시나리오 2 (Airtable → Google Drive 내보내기)**:
  1. **Airtable 자동화 트리거**: Airtable에서 레코드의 상태가 'trigger' (새 레코드의 기본 상태)일 때 Airtable 자동화를 트리거한다 .
  2. **두 번째 Make 시나리오 실행**: 이 Airtable 자동화는 두 번째 Make 시나리오를 트리거한다 .
  3. **이미지 내보내기 및 처리**:
  1. 두 번째 시나리오는 Figma API를 다시 활용하여 이미지를 내보내고 다운로드한다 .
  2. **업데이트 처리**: 이미 Airtable에 존재하는 파일(예: 로고 변경)인 경우, Airtable에서 재트리거하여 파일과 Airtable 레코드를 업데이트한다 .
  3. **신규 파일 처리**: 처음 보는 파일인 경우, Google Drive에 업로드하고 Airtable 레코드를 '성공적으로 완료됨'으로 업데이트하며, 로고 파일 자체도 Airtable에 업로드한다 .
  4. 최종적으로 Google Drive에 푸시하고 Airtable에 다시 추가하는 과정으로 마무리된다 .


## 3. Make 시나리오 1 구축: Figma 컴포넌트 목록 Airtable 동기화 


### 3.1. Make 시나리오 1 (Figma to Airtable Sync) 설정 및 Figma 정보 추출 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/475.jpg)
1. **준비물 다운로드 및 Make 시나리오 생성**:
  1. 설명에 제공된 <mark>4가지 청사진(Blueprint)</mark> 파일을 다운로드해야 한다 .
  2. Make.com 계정에서 새 시나리오를 생성한다 .
  3. **청사진 가져오기**: 하단의 'More' → 'Import blueprint'를 클릭하여 첫 번째 청사진 파일(001, sync Figma to AirTable)을 가져온다 .

2. **연결 설정 및 웹훅 생성**:
  1. 가져온 시나리오의 모든 모듈에 필요한 연결(Connection)을 설정해야 한다 (Figma 및 Airtable 인증) .
  2. **웹훅 생성**: 시나리오 시작 부분의 웹훅 모듈에서 새 웹훅을 생성하고 이름을 지정한다 (예: Figma Library published) .
  3. Make가 제공하는 **웹훅 URL**을 복사하여 저장한다. 이 URL은 Figma가 정보를 보낼 주소이다 .

3. **변수 설정 (Figma File Key 및 Node ID 추출)**:
  1. 'Set variables' 단계에서 필요한 세 가지 정보(Figma file key, Figma node ID, Airtable endpoint path)를 설정해야 한다 .
  2. **Figma File Key 찾기**: Figma 파일 URL에서 슬래시(/)와 파일 이름 사이에 있는 ID를 복사하여 'Figma file key' 변수에 붙여넣는다 .
  3. **Figma Node ID 찾기**:
  1. 내보내기를 원하는 상위 프레임(컴포넌트)을 선택한 상태에서 URL을 확인하면 노드 ID를 얻을 수 있다 (예: 968-7793) .
  2. 페이지나 개별 프레임마다 노드 ID가 다르므로, 내보내기를 원하는 **부모 컴포넌트 프레임**이 선택되었는지 확인하고 ID를 복사한다 .
  3. 이 노드 ID를 'Figma node ID' 변수에 붙여넣는다 .
  4. 'Airtable endpoint path'는 나중에 설정한다 .


### 3.2. Figma 웹훅 생성 및 테스트 (시나리오 2 활용) 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/833.jpg)
1. **웹훅 생성 시나리오 가져오기**:
  1. 새 Make 시나리오를 생성하고 두 번째 청사진 파일(002, create Figma web hwk)을 가져온다 .
  2. 이 자동화는 웹훅을 생성하기 위해 **단 한 번만 실행**하면 된다 .

2. **API 호출 설정**:
  1. Figma는 사용자 인터페이스가 아닌 API 호출을 통해 웹훅을 생성해야 한다 (V2 API 사용) .
  2. **인증 설정**:
  1. Figma 개발자 문서에 따라 헤더 이름은 <mark>X-Figma-Token</mark>으로 설정해야 한다 .
  2. Figma 설정(Settings) → 보안(Security)에서 개인 액세스 토큰(Personal Access Tokens)을 생성하고 복사하여 Make의 'X-Figma-Token' 값으로 붙여넣는다 . (API 키는 한 번만 볼 수 있으므로 안전하게 보관해야 한다) .

3. **웹훅 세부 정보 구성**:
  1. **이벤트(Event)**: 웹훅이 감지할 이벤트를 설정한다. 가장 효율적인 이벤트는 <mark>library publish</mark>이다 (파일 업데이트나 댓글보다 발생 빈도가 낮아 효율적) .
  2. **Figma Team ID**: Figma 메인 메뉴 프로필에서 URL의 'for/team/' 뒤에 있는 ID를 복사하여 붙여넣는다 .
  3. **엔드포인트(Endpoint)**: 첫 번째 시나리오에서 생성한 웹훅 URL을 복사하여 붙여넣는다 .
  4. **패스코드를 설정**: 보안 강화를 위해 패스코드를 설정한다 (필수 입력 사항) .

4. **웹훅 실행 및 테스트**:
  1. 웹훅 생성 시나리오를 실행하여 상태 코드 <mark>200</mark>을 받으면 웹훅이 성공적으로 설정된 것이다 .
  2. **시나리오 1 테스트**: 첫 번째 시나리오(Figma to Airtable Sync)를 끄고, 웹훅 모듈만 실행하여 새 이벤트 수신 대기 상태로 만든다 .
  3. Figma에서 컴포넌트 프레임 내 요소를 변경하고 'Publish changes'를 클릭하여 라이브러리를 발행한다 .
  4. Make 시나리오가 트리거되고, 이벤트 데이터(파일 키, 파일 이름, 수정된 컴포넌트)를 수신했음을 확인한다 .

5. **파일 키 필터 설정**:
  1. Figma 웹훅은 팀 전체의 라이브러리 발행 이벤트를 감지하므로, 원치 않는 파일의 동기화를 방지하기 위해 필터를 설정해야 한다 .
  2. **필터 조건**: 웹훅에서 받은 파일 키가 'Set variables' 단계에서 설정한 파일 키와 **일치할 때만** 시나리오를 계속 진행하도록 설정한다 .
  3. 필터가 성공적으로 통과되면, 첫 번째 Figma API 호출이 실행되어 노드 ID 내의 모든 자식 요소(개별 썸네일) 목록을 가져온다 .


### 3.3. 데이터 조작 및 Airtable Sync API 설정 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/1348.jpg)
1. **데이터 조작 및 반복자(Iterator)**:
  1. Figma API 응답 내에 깊숙이 묻혀있는 자식 요소(children) 데이터를 추출하여 Airtable에 동기화하기 위해 반복자(Iterator)를 사용한다 .
  2. 데이터 조작 단계를 거쳐 반복자는 각 자식 요소(예: 개별 썸네일)를 별도의 번들(Bundle)로 분리한다 .
  3. **CSV 변환**: 분리된 번들을 Airtable의 Sync API가 필요로 하는 형식인 CSV 파일로 변환한다 .

2. **Airtable 베이스 및 Sync API 설정**:
  1. Airtable에서 새 베이스를 생성하고 새 테이블을 추가한다 .
  2. 테이블 생성 시 '23 more sources'에서 **Sync API**를 선택한다 .
  3. **엔드포인트 경로 추출**: Airtable이 제공하는 Sync API 엔드포인트 URL 전체를 복사한다 .
  4. **Make 변수 업데이트**: 첫 번째 시나리오의 'Set variables' 단계로 돌아가, 복사한 URL에서 <mark>v0 이전의 모든 부분</mark>을 제거하고 나머지 경로를 'Airtable endpoint path'에 붙여넣는다 (상대 경로만 필요) .

3. **CSV 매핑 및 동기화 테스트**:
  1. CSV 모듈에서 데이터 구조(node ID, parent node ID, name, file key)가 올바르게 매핑되었는지 확인한다 .
  2. 시나리오 전체를 실행하고 Figma에서 다시 변경 사항을 발행하여 동기화를 트리거한다 .
  3. Make에서 상태 <mark>202</mark>를 받으면 Airtable이 API 요청을 성공적으로 수신한 것이다 .

4. **Airtable 테이블 구성**:
  1. Airtable에서 동기화된 필드들의 유형을 'Single line text'로 변경한다 (Node ID, Parent Node ID, Name, File Key) .
  2. **고유 값 설정**: Node ID는 변경되지 않는 고유 값(Unique value)이므로 이를 고유 값으로 설정한다 .
  3. **Sync API 설정 옵션**:
  1. Sync API는 Airtable의 **Business 및 Enterprise 플랜**에서만 사용할 수 있다 .
  2. **자동 업데이트 설정**: 'API 요청 수신 시 테이블 자동 업데이트'를 선택한다 .
  3. **레코드 삭제 옵션**: Figma에서 삭제된 요소가 Airtable에서도 삭제되도록 하려면 <mark>Delete the records</mark>를 선택한다 (전체 덮어쓰기 방식) .
  4. 테이블 생성을 완료하고 이름을 변경한다 (예: YouTube thumbnails) .

5. **불필요한 요소 필터링**:
  1. Figma 컴포넌트 내에 있는 플레이스홀더와 같이 Airtable에 동기화하고 싶지 않은 요소가 있을 수 있다 .
  2. CSV 파일 모듈 앞에 필터를 추가하여, 요소의 이름이 특정 명명 규칙(예: 'YouTube thumb')으로 시작하는 경우에만 동기화되도록 설정한다 .
  3. 필터 설정 후 시나리오를 다시 실행하고 Airtable에서 'Sync now'를 클릭하여 플레이스홀더가 제거되었는지 확인한다 .


## 4. Make 시나리오 2 구축: Airtable 트리거 기반 이미지 내보내기 및 Google Drive 업로드 


### 4.1. Airtable 테이블 확장 및 트리거 필드 설정 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/1876.jpg)
1. **추가 컬럼 생성**: Sync API로 동기화된 컬럼(번개 표시) 옆에 사용자 정의 컬럼을 추가한다 .
2. **'upload image' 필드**:
  1. Single Select 타입으로 생성하며, 옵션은 <mark>trigger</mark>, <mark>in process</mark>, <mark>complete</mark> 세 가지로 설정한다 .
  2. 이 필드는 두 번째 자동화를 트리거하는 데 사용된다 .
  3. **기본값 설정**: 새로운 파일이 추가될 때 자동으로 트리거되도록 기본 옵션을 **trigger**로 설정한다 .
3. **'image' 필드**: 내보낸 이미지를 호스팅할 Attachment 타입 필드를 생성한다 .
4. **'Google Drive file ID' 필드**: Google Drive에 업로드된 파일의 ID를 저장할 Single line text 필드를 생성한다 .


### 4.2. Make 시나리오 2 (Airtable to Google Drive Export) 설정 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/1998.jpg)
1. **시나리오 2 가져오기**:
  1. 새 Make 시나리오를 생성하고 세 번째 청사진 파일(003)을 가져온다 .
  2. Figma 연결을 확인하고 Airtable 연결을 새로 생성한 'YouTube assets' 베이스와 'YouTube thumbnails' 테이블로 변경한다 .
  3. **웹훅 생성**: 새 웹훅을 생성하고 이름을 지정한다 (예: Airtable Figma Asset Management export image) .
  4. 생성된 웹훅 URL을 복사하여 저장한다 .


### 4.3. Airtable 자동화 설정 (Make 시나리오 2 트리거) 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/2118.jpg)
1. **Airtable 자동화 생성**:
  1. Airtable의 'Automations' 탭에서 새 자동화를 생성하고 이름을 지정한다 (예: Trigger Figma image export) .
  2. **트리거 설정**: 'When a record matches conditions'를 선택하고, 조건은 'YouTube thumbnails' 테이블에서 'upload image' 필드가 **trigger**와 일치할 때로 설정한다 .
2. **스크립트 실행 액션**:
  1. 액션으로 'Run script'를 선택한다 .
  2. **스크립트 복사**: 다운로드한 네 번째 파일(스크립트)의 내용을 복사하여 붙여넣는다 .
  3. **입력 변수 설정**: 스크립트가 작동하는 데 필요한 입력 변수(record ID, node ID, file key, Figma name, Google Drive ID)를 Airtable 레코드에서 매핑한다 .
  4. **Make 웹훅 URL 삽입**: 스크립트 내의 지정된 줄(line 8)에 방금 생성한 두 번째 Make 시나리오의 웹훅 URL을 붙여넣는다 .
  5. 이 스크립트는 해당 레코드의 모든 데이터를 Make로 전송하는 POST 요청을 수행한다 .
3. **테스트**: Make 시나리오 2를 실행 대기 상태로 두고, Airtable 자동화를 테스트하여 데이터가 Make로 성공적으로 전송되었는지 확인한다 .


### 4.4. Google Drive 업로드 및 Airtable 업데이트 설정 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/2330.jpg)
1. **이미지 내보내기 확인**: Make 시나리오 2에서 Figma API 호출을 통해 파일 키와 노드 ID를 사용하여 PNG 형식으로 이미지를 내보내고, 내보낸 이미지의 URL을 성공적으로 반환하는지 확인한다 .
2. **Google Drive 폴더 ID 설정**:
  1. Google Drive에 이미지를 저장할 새 폴더를 생성한다 .
  2. 폴더 URL에서 'folders/' 뒤의 ID를 복사하여 **폴더 ID**로 사용한다 .
  3. Make 시나리오 2의 첫 번째 Google Drive 모듈(Upload a file)에서 이 폴더 ID를 업데이트한다 . (두 번째 Google Drive 모듈은 파일 ID 기반 업데이트이므로 폴더 ID가 필요 없다) .
3. **데이터 흐름 확인**:
  1. Figma에서 내보낸 이미지 URL을 HTTP 모듈로 다운로드한다 .
  2. 다운로드된 이미지를 Google Drive 모듈로 업로드한다 .
4. **Airtable 레코드 업데이트 설정**:
  1. Airtable 모듈(Update a record)을 설정한다. 업데이트할 레코드는 웹훅에서 받은 **record ID**를 사용한다 .
  2. **필드 업데이트**:
  1. 'upload image' 필드를 **complete**로 변경한다 .
  2. 'image' 필드에 다운로드된 이미지의 **파일 URL**을 사용하여 첨부 파일을 추가한다 .
  3. 'Google Drive file ID' 필드에 Google Drive 업로드 단계에서 반환된 **파일 ID**를 매핑한다 .
5. **기존 파일 업데이트 경로 설정**:
  1. 기존 이미지를 업데이트하는 두 번째 Airtable 모듈(경로 2)도 동일하게 설정한다 .
  2. 이 경로는 웹훅에서 Google Drive 파일 ID를 이미 받은 경우에 사용되며, Google Drive 모듈 11(Update a file)에서 반환된 파일 ID를 Airtable에 다시 매핑하도록 설정한다 .


### 4.5. 최종 실행 및 결과 확인 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/eIEeILDE1kc/2547.jpg)
1. **자동화 활성화**:
  1. Make 시나리오 2를 켠다 .
  2. Airtable 자동화를 켜고 'Process old data'를 선택한다 .
2. **수동 트리거**: Airtable에서 기존 레코드들의 'upload image' 필드를 수동으로 **trigger**로 변경하여 자동화를 실행시킨다 .
3. **결과 확인**:
  1. Make 시나리오가 실행되고, Airtable에서 'upload image' 상태가 'complete'로 업데이트되며, 'image' 첨부 파일과 'Google Drive file ID'가 채워진다 .
  2. Google Drive 폴더에서도 모든 썸네일이 성공적으로 다운로드되었음을 확인한다 .
4. **시스템의 유연성**: 이 시스템은 Google Drive 외에도 Dropbox, Notion 등 필요한 도구에 맞게 Make 시나리오를 수정하여 동기화할 수 있으며, Airtable을 통해 모든 에셋이 중앙 집중식으로 관리된다 .

