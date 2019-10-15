# Memory Management
> 메모리 확보와 해제

## Allocation (할당)
- OS가 프로세스나 데이터의 `메모리 영역`을 확보하는 것.
- 확보한 메모리 영역은 처리 종료 시 `해제`해야한다. 

## Relocation (재배치)
- `한 번 확보`한 메모리 영역의 `위치를 변경`하는 것.
- 실행 중인 프로그램의 위치를 변경하는 것을 `Dynamic Relocation(동적 재배치)`라 한다.
    - 가상 메모리 상의 주소를 물리 메모리 주소로 변환할 때 동적 재배치가 일어난다. 

## Garbage Collection (가비지 컬렉션)
- `힙` 영역이 `가득 차서` Access 할 수 없을 때 불필요한 메모리 영역을 자동으로 해제한다.

## Compaction (메모리 집약)
- `단편화된 메모리`(내/외부 단편화)의 `미사용 영역`을 모아서 연속으로 이용할 수 있도록 `메모리 영역`을 만드는 것.
- 사용 중인 프로세스를 `스왑 아웃`해 임시로 보관한 뒤 다시 `스왑 인`해야 하기 때문에 `Dynamic Relocation` 기능이 필요하다. 

### 참고
- [Memory Partioning ~ Memory Compaction](https://cenenh.tistory.com/65)