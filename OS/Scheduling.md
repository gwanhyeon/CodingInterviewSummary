# Scheduling(스케쥴링)
- CPU가 `여러개의 프로세스`를 처리할 때 `CPU를 할당할 순서`를 정하는 것.

## Preemptive Scheduling(선점형 스케쥴링)
- `OS`가 실행 가능 상태인 Process(Task)에게 CPU 사용권을 할당하고 `강제적으로 프로세스를 전환`해 관리하는 것
- 현재는 선점형 스케쥴링 방식을 많이 사용한다. 

### Round Robin Scheduling(라운드 로빈 방식)
- 선점형 스케쥴링
- 프로세스가 `기다리고 있는 순서`대로 일정 `시간`씩 CPU를 할당해, 시간이 초과한 프로세스를 맨 마지막으로 돌리는 방식

## Non-Preemptive Scheduling(비선점형 스케쥴링)
- `실행 중인 Process`가 처리를 수행하지 않는 시간을 `자발적으로 해제`해 다른 Process와 동시에 실행할 수 있도록 하는 것.

### Priority Scheduling(우선 순위 방식)
- 비선점형 스케쥴링
- OS가 프로세스의 우선순위를 정해 우선순위가 높은 프로세스부터 실행해 나가는 방식.
- 많은 OS가 이 방식을 택함.
- [데드락](/OS/DeadLock.md)이 발생할 수 있음.

