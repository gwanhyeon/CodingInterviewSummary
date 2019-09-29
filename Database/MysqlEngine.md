## MySQL Storage Engine
- 대표적으로 MyIsam과 InnoDB를 사용

### MyIsam Engine
- 데이터는 디스크에서 Index와 Key만 메모리에 적재해서 사용한다. 
- Transaction을 지원하지 않고 테이블 단위 Lock 을 지원한다. 
- 따라서 특정 테이블의 여러 세션에서 데이터를 변경하려 하면 Lock 기준이 테이블이기 때문에 무조건 대기하므로 성능 저하가 일어난다.
- 저사양 서버를 위해 고안된 방법으로 Data Size와 Key, Index를 압축해서 사용한다. 그렇기 때문에 Index가 필요한 검색 기능이 추가된 테이블을 사용하기에 부적절하다.

### InnoDB Storage Engine
- Transaction을 지원한다. Concurrency Control이 가능하고 행 단위 잠금으로 데이터 변경 작업 시 다른 사용자가 테이블에 접근할 수 있다. 
- 메모리에 Index, Data가 모두 적재되기 때문에 메모리 버퍼 크기가 DB 성능에 많은 영향을 끼친다.
- 따라서 MyIsam보다 더 고사양의 서버를 요구한다.

#### 참고 
- https://wedul.site/449