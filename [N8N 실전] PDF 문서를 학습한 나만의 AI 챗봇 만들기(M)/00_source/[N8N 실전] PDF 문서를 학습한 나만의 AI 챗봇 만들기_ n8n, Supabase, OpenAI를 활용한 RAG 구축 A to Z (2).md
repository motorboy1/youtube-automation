​

## 📌 PDF 문서를 학습한 나만의 AI 챗봇을 만들기 위한 RAG 구축 방법은?
 n8n, supabase, openai를 활용하여 PDF 문서를 벡터 스토어에 저장하고, 이를 기반으로 ai 챗봇이 질문에 답변하도록 rag(검색 증강 생성) 시스템을 구축하는 방법을 다룹니다. 


## 💡 RAG 구축 과정에서 Supabase와 OpenAI는 어떻게 활용되나요?

- **Supabase**: PDF 문서 내용을 벡터 스토어에 저장하고 관리합니다.
- **OpenAI**: 저장된 벡터 데이터를 기반으로 질문에 대한 답변을 생성하는 AI 모델로 활용됩니다.

제공된 PDF 문서와 같은 **비정형 데이터를 학습**시켜 나만의 ai 챗봇을 구축하는 **rag****(검색 증강 생성) 시스템**의 실전 구현 과정을 A to Z로 배울 수 있습니다. n8n, supabase, openai를 연동하여 구글 드라이브의 문서를 **벡터 스토어****에 저장**하고, 이를 활용해 사용자의 질문에 정확히 답변하는 챗봇을 만드는 **구체적인 워크플로우**를 직접 따라 해보며 실무 역량을 강화할 수 있습니다. 특히, 텍스트를 효율적으로 쪼개고(Recursive Character Text Split), **오버래핑을 설정**하여 llm의 인식률을 높이는 핵심 기술을 습득하여 데이터 기반 AI 구축의 완성도를 높일 수 있습니다.
## 1. RAG 시스템 구축: Supabase 벡터 스토어 연결 및 설정 


### 1.1. Supabase 연결 및 계정 설정 
![image]()
1. **Supabase**** ****벡터 스토어**** 노드 추가**:
  1. n8n 워크플로우에서 '파일 다운로드' 노드 이후에 Supabase Vector Store의 Add Document Vector Store 노드를 추가한다. 
  2. 해당 노드에서 Credentials를 연결하기 위해 Create New Credentials를 선택한다. 
2. **Supabase**** 계정 생성 및 프로젝트 URL 확보**:
  1. Supabase 문서(Open Docs)를 통해 Supabase 계정으로 이동한다. 
  2. 새로운 조직(Organization)을 NRN 구글 드라이브로 생성하고, 프리 플랜을 선택하여 조직 생성을 완료한다. 
  3. 한국에서 가까운 지역인 싱가포르를 선택하여 새로운 프로젝트를 생성하고 암호를 입력한다. 
  4. 프로젝트 생성 후, 첫 페이지에서 **프로젝트 URL**을 복사하여 n8n의 Host 필드에 붙여넣는다. 
3. **API 키****(Secret Key) 확보 및 연결**:
  1. Supabase의 설정(Settings) > 프로젝트 세팅(Project Settings) > API 키(API Keys)로 이동한다. 
  2. Legacy API Key 섹션에서 Secret Role의 키를 Reveal하여 복사한다. 
  3. 복사한 키를 n8n의 Secret Key 필드에 붙여넣고 저장하여 기본적인 연결을 완료한다. 
4. **오퍼레이션 모드 설정**:
  1. 연결 완료 후, Operation Mode에서 구글 드라이브에서 다운받은 데이터를 넣기 위해 **Insert Document**를 선택한다. 


### 1.2. Supabase 테이블 생성 및 설정 
![image]()
1. **테이블 생성 필요성 확인**:
  1. Insert Document를 선택한 후 From List를 확인하면, 계정 및 크리덴셜은 연결되었으나 아직 데이터를 저장할 테이블이 없기 때문에 빈칸으로 표시된다. 
2. **SQL 코드를 통한 테이블 생성**:
  1. 구글에서 n8n documentation을 검색하여 문서 페이지로 이동한다. 
  2. 문서 내에서 Supabase Vector Store를 검색하고, Quick Start for Vector Store 가이드를 확인한다. 
  3. 가이드에 제공된 SQL 코드를 복사한다.
  - 해당 코드는 인베딩 모델로 Embedding Chamber를 사용하는 것을 전제로 하며, 다른 모델(예: Ollama) 사용 시 코드를 수정해야 하지만, 여기서는 기본 설정을 그대로 사용한다. 
  4. Supabase로 돌아가 SQL Editor를 누르고 Create New SQL을 선택한 후, 복사한 SQL 코드를 붙여넣고 Run을 실행한다. 
3. **테이블 생성 확인**:
  1. 실행 결과 Success가 나오며, 좌측에 vector_document_search_system이 생성된 것을 확인한다. 
  2. Home > Table Editor로 돌아가면 documents 테이블이 생성되었으며, id, content, metadata, embedding 컬럼이 존재하는 것을 볼 수 있다. 
  - content: 한국어로 된 문서 내용이 들어간다. 
  - metadata: 페이지 정보 등 분류 정보가 JSON 형태로 표시된다. 
  - embedding: 토큰 단위로 LLM이 인식하는 단어로 변환되어 벡터 파일에 저장된다. 
4. **n8n**** 노드 설정 완료**:
  1. n8n으로 돌아가 저장(Save) 후, Supabase Vector Store 노드를 열면 From List에 **documents** 테이블이 나타난다. 
  2. RPC Match Document는 다큐먼트 매칭을 지원하는 SQL 쿼리 테이블이며, Batch Size는 기본값인 <mark>200</mark>을 그대로 둔다. 
  3. 옵션 추가(Add Option)를 누르면 자동으로 Match Document가 들어가며, 이대로 진행하고 저장한다. 


## 2. 인베딩 모델 설정 및 텍스트 분할 전략 적용 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/KGVWxgeZ7S8/361.jpg)
1. **인베딩 모델 추가**:
  1. Embedding Model을 추가하기 위해 **Embedding ****OpenAI**를 선택한다. 
  2. 미리 저장된 OpenAI 계정을 연결하고, 모델은 기본적으로 **Small Model**을 선택한다. 
2. **다큐먼트 데이터 형식 설정**:
  1. 인베딩 모델 설정 후, Document 섹션의 플러스 버튼을 누른다. 
  2. 데이터 형식은 JSON 방식에서 Binary를 선택하고, Load or Interpret by Type을 선택하여 어떠한 데이터가 들어오더라도 자동으로 인식하고 분류할 수 있도록 설정한다. 
3. **재귀적 문자 텍스트 분할(Recursive Character Text Split) 적용**:
  1. 텍스트 분할(Text Split) 방식은 단순한(Simple) 방식 대신 **Custom**을 선택한다. 
  2. Text Split에 플러스 버튼을 누르고 **Recursive Character Text Split**을 선택한다. 
  - <em>토큰</em><em> 스플릿(Token Split)</em>: LLM이 인식하는 문자를 토큰으로 쪼갤 때 사용한다. 
  - <em>트리 </em><em>텍스트 스플릿</em><em>(Tree Text Split)</em>: 단순한 방법으로 텍스트를 쪼개는 방식이다. 
  - **재귀적 문자 ****텍스트 스플릿**: 문자, 단어, 문장 단위로 첨부된 파일을 인식하여 한 단계 높은 방식으로 텍스트를 분할한다. 
4. **청크 사이즈**** 및 오버랩 설정**:
  1. Chunk Size는 기본값인 <mark>1,000</mark>으로 설정되어 있다. 
  2. Chunk Overlap은 기본값 <mark>0</mark> 대신 <mark>200</mark>으로 설정한다. 
  - **오버래핑의 중요성**: 문서를 1페이지, 2페이지로 끊는 것보다 1페이지에서 2.5페이지처럼 오버래핑을 하면, 텍스트가 잘려서 LLM의 인식률이 낮아지는 확률을 줄일 수 있다. 
  - **최적화 방법**: 청크 사이즈와 오버랩은 GPT나 Gemini 같은 모델에 해당 파일을 넣고 어떤 크기로 쪼개는 것이 좋을지 물어보고 정하는 것이 가장 좋다. 
  3. 모든 설정이 완료되면 저장(Save)을 진행한다. 


## 3. 워크플로우 실행 및 벡터 스토어 저장 결과 확인 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/KGVWxgeZ7S8/508.jpg)
1. **실행 전 대상 문서 확인**:
  1. 현재 벡터 스토어에 넣을 문서는 **골프 규칙 요약본**이다. 
  2. 이 문서는 규칙 1, 2, 3 등 골프에 대한 규칙이 나열되어 있으며, 이 문서가 얼마나 잘 쪼개지고 나중에 챗봇이 어떻게 인식하는지 확인할 예정이다. 
2. **워크플로우 실행 및 로그 확인**:
  1. n8n 패널로 돌아가 실행(Run)을 누르면 워크플로우가 실행된다. 
  2. 실행 결과, 데이터가 조인(Join)된 후 인베딩을 통해 마무리된 것을 볼 수 있다. 
  3. Supabase Vector Store 노드의 로그를 확인하면, 리커시브 캐릭터 스플릿이 어떻게 쪼개졌는지 단위가 나오며, 인풋/아웃풋 인베딩 결과도 확인할 수 있다. 
3. **Supabase**** 저장 결과 확인**:
  1. Supabase로 이동하여 저장된 내용을 확인한다. 
  2. documents 테이블에는 id 44번으로 첫 번째 내용이 저장되었으며, content가 저장된 것을 볼 수 있다. 
  3. metadata에는 <mark>1에서 235 라인</mark>까지 저장되었다는 정보가 있으며, 총 <mark>22페이지</mark>를 쪼개서 인베딩한 결과가 오른쪽에 표시된다. 
  4. 이로써 벡터 스토어에 문서 저장 작업이 완료되었다. 


## 4. AI 챗봇(AI Agent) 구축 및 테스트 
![image](https://resource-release.s3.ap-northeast-2.amazonaws.com/thumbnails/KGVWxgeZ7S8/609.jpg)
1. **AI 에이전트**** 노드 추가 및 연결**:
  1. 작업 완료 후, 새로운 패널을 열어 **AI Agent** 노드를 추가한다. 
  2. 챗봇을 활성화하기 위해 **Trigger Chat Trigger** 노드를 연결한다. 
2. **챗 모델 및 툴 설정**:
  1. **Chat Model**은 GPT 모델을 사용하며, 미리 저장된 OpenAI 계정에서 **GPT****-4 Mini**를 선택한다. 
  2. 메모리는 현재 필요 없으며, **Tools**에서 벡터 스토어와 질문을 주고받는 역할을 하는 **Vector Store Question Answering Tool**을 추가한다. 
  - Question의 리밋은 <mark>4번</mark>으로 설정되어 있다. 
3. **벡터 스토어**** 연결 및 설정**:
  1. Vector Store에 **Supabase**** Vector Store**를 추가하고, 저장된 계정을 그대로 사용한다. 
  2. Table은 저장했던 **documents**를 선택하고, 옵션에서 Add Option을 눌러 Master Data Filter를 추가하여 자동으로 저장된 데이터를 가져오도록 설정한다. 
  3. 옵션에서 Query Name을 설정한다. 
4. **인베딩 및 최종 답변 모델 설정**:
  1. Embedding 진행 시 **Embedding ****OpenAI**를 동일하게 사용하며, 계정 및 모델은 **Small Model**을 선택한다. 
  2. Answer에 사용할 최종 챗 모델도 **Chat ****GPT**** Model**을 사용하며, OpenAI 계정에서 **GPT****-4 Mini**를 선택한다. 
5. **챗봇 테스트 및 결과 확인**:
  1. 모든 설정이 완료되면 저장(Save)하고 챗봇을 연다. 
  2. 챗봇에 "골프 규칙에 대해서 알려줘", "1번 규칙 제일 궁금해"라고 질문한다. 
  3. **처리 과정**: 질문이 들어오면 Supabase에서 벡터 스토어 처리가 진행되고, OpenAI 모델이 질문에 답변(Answer Question)한 후, 이 내용이 AI Agent를 거쳐 OpenAI Chat Model로 전달된다. 
  4. **답변 확인**: 챗봇은 "경기는 타인 구역에서 시작하여 공이 홀에 들어갈 때까지 계속합니다"라고 답변하며, 이는 원본 문서의 내용과 정확히 일치하는 것을 확인한다. 


## 5. 챗봇 작동 로그 분석 및 향후 계획 
![image]()
1. **챗봇 작동 로그 분석**:
  1. 챗봇의 로그를 확인하면, 첫 번째로 OpenAI가 질문을 받고 Question with Vector Store로 넘어간다. 
  2. 질문("골프 1 규칙에 대해서 설명해 달라고")에 대한 답변을 찾기 위해 Supabase 벡터 스토어에서 가장 확률적으로 비슷한 인베딩 값을 가진 로우(Row) <mark>네 개</mark>를 찾아서 가져온다. 
  3. 가져온 네 개의 로우 값들을 다시 인베딩을 진행한다. 
  4. 인베딩이 끝난 후, 이 내용을 OpenAI 모델이 전체적으로 가져와서 요약(Summary)한다. 
  5. 요약된 아웃풋이 최종적으로 AI 챗봇에 전달되어 사용자에게 답변을 제공한다. 
2. **향후 계획**:
  1. 현재 챗봇이 정확히 완료되었으며, 다음 시간에는 Supabase에서 제공하는 **Rank Result** 기능을 사용할 예정이다. 
  2. Rank Result는 업그레이드된 벡터 스토어 버전으로, 자료를 좀 더 효율적으로 찾을 수 있는 방안을 제공한다. 
3. **마무리**:
  1. 오늘의 강의는 여기까지 진행하고 마친다. 

