# OOP(Object Oriented Programming)
> 객체 지향 프로그래밍의 설계 원칙

## SOLID 원칙

### 단일 책임 원칙(SRP, Single Responsibility Principle)
- 객체는 `단 하나의 책임`만 가져야 한다.
- 책임이란? 해야하는 것, 할 수 있는 것, 해야하는 것,..
- 책임 분리 : 한 클래스에 단 하나의 책임만 수행하도록 해 `Immutable Class`를 지향한다.
    - 책임이 많을 수록 클래스 내부에 서로 다른 역할을 수행하는 코드끼리 `강결합`할 가능성이 높다.

### 개방-폐쇄의 원칙(OCP, Open Closed Principle) 
- `확장`에 대해서는 `개방(open)적`이며 `변경`에 대해서는 `폐쇄(Close)`되어야 한다.
- **즉 기존의 코드를 변경하지 않으며 기능을 추가할 수 있도록 설계가 되어야 한다.** 
- 해당 원칙을 적용하기 위해 적용하는 방법은 `상속(is-a)`과 `컴포지션(has-a)`이 있지만 컴포지션을 추천한다.
- 상속은 상위 클래스가 변하면 하위 클래스에 끼치는 영향이 크기 때문이다.

### 리스코프 치환 원칙(LSP, Liskov Substitution Principle)
- 자식 클래스는 최소한 자신의 `부모 클래스에서 가능한 행위`를 수행할 수 있어야 한다. 
- **LSP를 만족한다면 부모 클래스의 인스턴스 대신 자식 클래스의 인스턴스로 대체해도 프로그램의 의미가 변하지 않는다.**(ex- `List<Integer> l = new ArrayList<>();`)
- LSP를 만족시키는 방법 중 하나는 부모 클래스의 메소드를 `Override`하지 않는 것이다. 

### 인터페이스 분리 원칙(ISP, Interface Segregation Principle)
- `인터페이스`를 클라이언트에 특화되도록 `분리`시키는 설계 원칙
- **클라이언트는 자신이 이용하지 않는 기능에는 영향을 받지 않아야 한다.**
- 단일 책임 원칙과 밀접한 관계가 있다.

### 의존 역전 원칙(DIP, Dependendy Inversion Principle)
- 의존 관계를 맺을 때 변화하기 쉬운 것 또는 자주 변화하기 보다는 변화하기 어려운 것, **거의 변화가 없는 것에 의존하라는 것.**
- 클래스간 의존 관계란 ? 한 클래스가 어떤 기능을 수행하려고 할 때 `다른 클래스`의 서비스가 `필요`한 경우
    - ex) A 클래스 내부에 `new` 연산자로 B 클래스가 생성되어 있는 경우.
- DIP 만족시키는 방법 : 어떤 클래스가 의존 관계를 맺을 때 구체적인 클래스보다는 `인터페이스`나 `추상 클래스`와 `의존 관계`를 맺도록 한다. 
- DIP를 만족하는 설계는 `DI` 기술로 변화를 쉽게 수용하는 코드를 작성할 수 있게 된다.

### 참고
- https://gmlwjd9405.github.io/2018/07/05/oop-solid.html
- https://velog.io/@dpudpu/2