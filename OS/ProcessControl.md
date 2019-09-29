## 프로세스 제어

### 프로그램 상태어(PSW: Program Status Word)
- 인터럽트로 인해 중단된 프로그램의 상태나 연산의 종료 상태를 저장해두는 레지스터(CPU 내부에 존재)
- 영어 단어를 표현할 수 있는 정도의 용량(64bit)이므로 'word'를 사용함.

### 프로세스 제어 블럭(PCB: Process Control Block)
- 각 프로세스의 CPU 상태(Context 등)나 프로세스 상태를 저장해 두는 메모리 영역을 일컬음. 

### 컨텍스트 스위치(Context Switch)
- 인터럽트로 인해 프로세스를 전환할 때 OS가 컨텍스트를 PCB에 저장하고 복원하는 것을 말함.
- 컨텍스트 스위치때 약간의 오버헤드가 발생함. 