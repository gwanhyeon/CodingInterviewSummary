# Memory (메모리)
> 메모리는 목적에 따라 사용되는 영역이 다르다. 

## Heap (힙)
- 파일로부터 읽어들인 데이터나 네트워크 상에서 수신한 데이터를 저장할 때와 같이 `필요한 만큼만 확보`해 사용하는 메모리 영역
- 필요가 없어지면 해제한다.

## Stack(스택)
- `프로그램 실행 중` 이용하는 변수의 내용을 `일시적으로 저장`하는 메모리 영역
- `프로그램의 한 단위(함수 등)`가 시작될 때 자동적으로 확보되고 처리가 종료되면 자동으로 해제된다.
- 스택영역 변수는 `LIFO` 형식으로 저장된다. 
- 사용할 수 있는 스택 영역의 용량이 정해져 있어 이를 넘을 경우 `Overflow`가 발생한다. 