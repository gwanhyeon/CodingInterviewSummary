# 빌더(Builder) 패턴

>**복잡한 객체의 생성을 그 객체의 표현과 분리하여, 생성 절차는 항상 동일하되 결과는 다를 수 있게 만드는 패턴**

>  객체의 구성요소들을 요소별로 분리한 뒤, 개별 요소들에 대한 값을 조합하여 하나의 객체를 생성함. 조합하는 방법의 구체적인 방법은 빌더를 통해 결정함.

=> 메서드의 호출 결과로 자신의 객체 참조를 돌려줌.



** 많은 생성 요소를 한번에 넣어 체이닝 형식으로 만들어줄 수 있음.

** return type을 Builder로 해야 함.



#  구조

* **Director** : 객체 생성 방식에 대한 책임을 짐. ConcreteBuilder를 인자로 받아 필요 동작 수행
* **Builder** : 객체를 생성하는 추상 인터페이스
* **ConcreteBuilder** : Builder의 구현 클래스. 객체 생성 결과에 대한 구체적인 구현 책임.
* **Product** : Builder를 이용해서 Director가 만들어낸 최종 객체

![img](https://t1.daumcdn.net/cfile/tistory/9999204B5A3753AF03)

# 사용하는 이유?

1. 불필요한 생성자를 만들지 않고 객체 생성
2. 데이터의 순서에 상관 없이 객체 생성
3. 사용자 입장에서 명시적이고 이해하기 쉽게 생성



# 사용하기 좋은 경우

1. 여러 요소를 갖는 복잡한 객체를 생성할 필요가 있을 때
2. 어떤 객체를 여러 가지 방법으로 생성할 필요가 있을 때



# 빌더 vs 추상 팩토리

* 주로 복잡한 객체 생성 || 객체의 단순함, 복잡함 상관없음
* 여러 단계를 거쳐 마지막 단계에서 객체 반환 || 한 단계로 객체를 생성하여 즉시 반환
* 빌더를 통한 여러 가지 방법으로 객체 생성 || 한 가지 방법으로 객체 생성
* 한 가지 타입의 특정 객체 생성에 초점 || 같은 종류의 여러 가지 객체 생성에 초점