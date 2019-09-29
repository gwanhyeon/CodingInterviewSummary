# MSA(Micro Service Architecture)

## 모놀리스 아키텍처(Monolithic Architecture)
- `모든 업무 로직`이 `하나의 애플리케이션` 형태로 패키지 되어 서비스되고 애플리케이션에서 사용하는 `데이터 또한 한 곳`에 모인 데이터를 참조하여 서비스하는 형태
- 단점: 비즈니스 변화가 빠르고 수시로 앱을 변경해서 사용해야하는 환경에서는 하나의 앱으로 `유연`하게 대처하기 어려움.
    - 프로그램의 일부만 수정해도 관련없는 기능들까지 전부 다시 빌드해 배포해야함. 연속성을 위한 2중화 3중화 장비들에도 순차적으로 배포하고 재기동하는 시간, 노력이 듬.

## 마이크로 서비스 아키텍처(MSA, MicroService Architecture)
- 간단히 말하면 단일 어플리케이션을 `작은 어플리케이션`으로 `나누어 서비스` 하는 것.

### 마이크로 서비스 아키텍처의 개념
- 아주 작은 단위의 서비스들을 실행할 수 있도록 구성하기 위한 `서비스 중심`의 아키텍처.
- 마이크로 서비스 아키텍처는 소프트 아키텍처 구성 중 하나의 스타일
- `마이크로 서비스`로 이루어져 있음
- 서비스와 데이터가 분할되어 작은 서비스들이 여러 `독립적 형태`로 `서비스를 제공`
- 필요에 따라 서로 `참고`해 사용되기도 함.
- 애플리케이션 기능뿐만 아니라 `데이터까지 분리`해 격리된 독립된 환경으로 구성된다는 것이 차이점

### 마이크로 서비스 아키텍처와 모놀리스 아키텍처의 차이점
#### 모놀리스 아키텍처
- 하나의 어플리케이션에 데이터가 연결된 구성이 일반적.
- **따라서 크기가 클수록 변경과 배포가 쉽지 않은 구조**
- `단일 어플리케이션`이기 때문에 클라이언트의 요청에 대한 `처리 반응 속도`가 아주 중요
- 데이터 조회에 대한 부하나 이를 처리하는 앱에 문제가 생긴다면 시스템이 동작하지 않게 됨.
- 이를 대응 하기 위해 `로드 밸런서`, `2중화` , `3중화`, `백업 및 복구 방안`이 아주 중요
- `환경 구성`을 위해 `많은 시스템 리소스`를 투자함
- **시스템 부하를 분석해 하드웨어 스케일업 과정과 앱의 빠른 대응과 데이터 조회의 성능 개선을 위한 튜닝 활동들이 아키텍트들의 주 관심**
#### 마이크로 서비스 아키텍처
- 마이크로 서비스 아키텍처는 보다 `수평적`으로 `유연성`과 `탄력성`을 가짐.
- 하지만 많은 서비스를 관리하고 제어하는 `에코시스템`의 역할이 중요하고
- `자동화`, `시각화`가 고려되지 않으면 오히려 운영 측면에서 리스크가 증가함.

## 서비스 지향 아키텍처(SOA, Service Oriented Architecture)
- 대규모 시스템 환경에서 업무 처리 단위를 데이터 중심이 아닌 `전체 시스템을 중심`으로 설계하는 아키텍처 스타일
- MSA가 주목받기 전부터 주로 사용
- 서비스 단위로 개발하여 호출 가능한 상태로 만듦, 따라서 `중복`되는 프로세스나 업무들을 피할 수 있음.
### 마이크로 서비스 아키텍처와 서비스 지향 아키텍처의 차이점
#### 공통점
- `비즈니스 변화 대응`을 위한 서비스 중심의 아키텍처
- 기능 중심의 모듈 재사용보다 상위 수준의 `서비스 수준에서의 재사용성` 초점

<br>

- SOA : 비즈니스 측면에서의 서비스 재사용성 강조
    - 많은 서비스의 `공유`를 위해 `ESB(Enterprise Service Bus)` 서비스 채널에서 서비스를 공유, 재사용
- MSA : 한가지 작은 서비스에 집중
    - 서비스를 공유하지 않고 `독립`되어 실행하는 것을 지향함

#### 차이점
- 서비스의 상대적 크기와 관심사, 오너십, 기술 구조

1. 서비스의 상대적 크기와 관심사
    - SOA : `비즈니스`에 집중
    - MSA : `작은 서비스 하나`에 집중.
2. 서비스 오너십 측면
    - SOA : 비즈니스 프로세스의 흐름을 알아야 하기 때문에 업무, 공통 기능 개발팀, 개발팀 간 `상호 협업`이 필수
    - MSA : `하나의 작은 팀`에서 관리, 개발-운영-오너십, 권한까지 관리
3. 서비스 공유 정도의 차이
    - SOA : 되도록 `많은 서비스 공유` 지향 > 재사용성을 높여 비용을 절감하고 품질을 높이는데 초점
    - MSA : `공유 최소화` 지향 > 서비스간 결합도를 낮추어 변화에 능동적으로 대응하기 위한 민첩성에 초점
4. 기술 방식의 차이
    - SOA : 공통의 서비스를 EBS라는 `공통 채널`에 모아 사업 측면에서 공통 서비스 형식으로 서비스를 제공
    - MSA : 각각 독립된 서비스가 필요에 따라 노출된 `REST API`를 사용