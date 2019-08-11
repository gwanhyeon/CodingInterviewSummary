- [Container](/Infra/Container.md)
- [Docker](/Infra/Docker.md)
자세한 컨테이너와 도커의 내용은 위 링크에서 자세하게 살펴보실 수 있습니다.

# 쿠버네티스란?

컨테이너가 엄청 많아지면 관리와 운영이 어려워져서 오히려 운영상의 효율성이 떨어진다. 이때, 쿠버네티스(Kubernetes)를 사용하여 해결해주는 도구의 역할을 한다.
쿠버네티스는 컨테이너 오케스트레이션 플랫폼 중 하나로, 구글이 자사 서비스를 위해 개발했던 오픈소스 

* 컨테이너 플랫폼
* 유명한 컨테이너 플랫폼으로는  ** Docker ** 가 있음.
* 마이크로서비스 플랫폼
* 이식성 있는 클라우드 플랫폼

# 쿠버네티스 장점

* 무중단(Fault tolerance-FT) 서비스를 제공
쿠버네티스를 사용하게되면 점진적인 업데이트를 제공하기 때문에 서비스를 중단하지 않고도 애플리케이션을 업데이트 할 수 있음. 
또한, 쿠버네티스는 자가 회복(Self Healing)기능이 있기 때문에 특정 컨테이너에 갑작스러운 장애가 발생하더라도 곧바로 복제 컨테이너를 생성해서 서비스를 유지 할 수 있다.

* Vendor Lock In 해결

고객이 A사의 클라우드를 사용하다가 B사의 클라우드로 환경을 이전하고 싶을 때, 서로 다른 업체(Vendor)의 클라우드 제품간에 호환문제가 발생하여 이전하기 어려운 상황을 Vendor Lock In이라고 한다. 쿠버네티스는 도커 컨테이너 기반으로 하는 오픈소스 이기 때문에 사용자들이 특정 업체에 종속되지 않고 클라우드 환경들을 이전 할 수 있다. 

# 쿠버네티스의 특징

* Kubernetes는 컨테이너 관리 표준
* 컨테이너를 효과적으로 배포할 수 있는 툴
- Container 자체를 묶으면 너무 low level로 묶이기 때문에 pod을 이용
- 여러 개의 컨테이너는 하나의 Pod이라는 단위로 묶음
- Pod내 내에서 컨테이너들을 IP와 스토리지를 공유

* Kubernetes가 없는 컨테이너 환경
- 각 컨테이너가 독립적으로 실행
- 각자 다른 IP/NETWORK로 통신
- 서로 다른 노드에 설치될 수도 있음.
- 컨테이너끼리 디스크 자원을 공유할 수 없음

* Kubernetes 아키텍쳐
- Kubernetes Master가 Kubernetes Node들을 관리
- Kubernetes Node 특징
1. 여러 개의 Pod를 갖고 있음
2. Kubelet을 갖고 있음 - Master API Server와 통신
3. cAdvisor를 갖고 있음.
4. Kube-Proxy를 갖고 있음 - Pod들간의 통신을 할 때 컨테이너 이름을 기준으로 통신을 할 수 있게 해줌

- Kubernetes Master 특징
1. API Server를 갖고 있음
2. Contoller Manager를 갖고 있음
3. etcd를 갖고 있음
4. 모든 메타 정보를 갖고 있음
* Kubernetes Ingress 
- Ingress
1. L7 로드밸런서 - L7와 L4 달리 패킷의 유무를 볼 수 있음.
2.  URI 기반으로 서비스 별 라우팅
3. 서비스 앞 단에 위치 - 하나의 Ingress는 많은 서비스를 관리
4. Google Cloud의 로드 밸런서  

### Reference 
https://developer.ibm.com/kr/cloud/2019/02/01/easy_container_kubernetes/

https://developer.ibm.com/kr/cloud/2019/02/01/easy_container_kubernetes/

http://bongbonge.tistory.com/entry/컨테이너-기술에-대한-이해
