## Generic

### 제네릭을 사용하는 이유
> 컬렉션이 담을 수 있는 타입을 컴파일러에 알려주기 위한 것. 

**1. 타입 안정성**
- `의도하지 않은 타입의 객체`가 저장되는 것을 막고, 다른 타입의 객체가 반환되는 것을 막아준다.
    - 제네릭 지원 전에는 `Object` 객체를 `형변환` 했으므로 런타임 에러가 발생했지만 제네릭 사용시 `컴파일 에러`를 발생시킨다.  
    
**2. 불필요한 형변환을 줄여줌**
- 타입을 미리 명시해 다른 타입의 객체가 저장되지 않아 객체를 사용할 시 형변환을 할 필요가 없다. 

### 참고
- [Java - Don't use raw types](https://kodakyung.github.io/2019/01/28/Programming-Java-EffectiveJava-2019-01-28-Java-Don-t-use-raw-types/)
- [Java - Use bounded wildcards to increase API flexibility](https://kodakyung.github.io/2019/01/31/Programming-Java-EffectiveJava-2019-01-31-Java-Use-bounded-wildcards-to-increase-API-flexibility/)
