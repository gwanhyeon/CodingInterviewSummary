## IoC(Inversion of Control)
- `제어의 역전`, 프로그램의 제어 흐름 구조가 바뀌는 것.
- 일반적으로 main() 메소드부터 프로그램의 각 오브젝트가 다른 오브젝트를 호출하며 프로그램의 흐름을 결정한다.
- 이와 다르게 오브젝트가 자신이 사용할 오브젝트를 정하지 않고 위임하는 것이 IoC이다. 

### 라이브러리 vs 프레임워크
- 라이브러리는 라이브러리를 사용하는 애플리케이션 코드가 직접 흐름을 제어한다.
- 프레임워크는 반대로 `어플리케이션 코드가 프레임워크에 의해 사용`된다.
- 즉 어플리케이션 코드는 프레임워크가 짜놓은 틀에서 `수동적`으로 동작한다.

### Spring에서의 IoC
- 객체가 자신과 함께 작동하는 객체를 `생성자`, `팩토리 메소드 인자`, `프로퍼티`로만 받는 프로세스가 IoC이다. 

## DI (Dependency Injection)
- `의존성 주입`
- 객체간 의존성을 자신이 아닌 `외부에서 주입`하는 개념.
- 의존성이란 객체와 객체의 `결합 관계`이다.
- A 객체에서 B 객체를 사용한다면 A 객체 내부에서 `new`로 B 객체를 생성하는데 이를 의존 관계라 한다.
- 즉 객체의 인스턴스를 `외부에서 생성 받는 것`을 의존성 주입이라한다.
- 제어권이 프레임워크로 넘어갔기 때문에(IoC) DI의 사용이 가능하다.

### Spring의 DI 방법들
1. `Constructor`를 통한 의존성 주입
2. `Setter`를 통한 의존성 주입
3. `@Autowired` 어노테이션을 통한 의존성 주입
    - setter와 같은 역할을 자동으로 수행한다. 
- `Immutable Object`를 생성하기 위해 생성자를 통한 의존성 주입을 권장하는 편이다. 

### 참고
- [Jbee Devlog](https://asfirstalways.tistory.com/334)
- [기계인간 Jogn Grib](https://johngrib.github.io/wiki/spring-ioc/?fbclid=IwAR0qXjkEPjGecqDkKHoQM3iuawkOI98sotXyhomJRIHiKh3LHFyvY-yA6wI#di%EB%A5%BC-%ED%95%98%EB%8A%94-3%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95)
- [dmz 개발창고](https://mo-world.tistory.com/entry/IOC%EC%99%80-DI-%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC-%EC%8A%A4%ED%94%84%EB%A7%81-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85)

