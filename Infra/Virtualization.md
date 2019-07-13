## 전가상화(Full Virtualization)

가상머신의 운영체제에서의 구조를 살펴보면,

Guest OS -> Hypervisor -> Hardware 

의 구조를 가지고 있다.

하드웨어 위에 Hypervisor가 존재하고, Guest OS가 그 위에 설치 된다. 그럼 Guest OS가 Hypervisor를 통해서 Hardware와 신호를 주고 받는다.

Redhat OS
Windows OS      => Hardware
Mac OS

의 구조를 생각해보면된다.

예를 들어, Redhat Windows, Mac OS에서 덧셈과 뺄셈의 연산을 하드웨어에게 요청한다고 생각해보자.
하드웨어는 이것들을 이해하기 위해서 특히, 가상화된 GUEST OS가 하드웨어 위에 올라가는데, 그 OS가 무엇이든간에 하드웨어는 OS가 내리는 명령을 알아들을 수 있어야한다.

1. Hypervisor는 OS  들에게 자원을 나눠주며, 조율한다.
2. OS들의 커널을 번역해서 하드웨어에게 알려준다.



## 반가상화(Half Virtualization)

Redhat OS (번역기)
Windows OS (번역기)      => Hardware
Mac OS (번역기)

각 OS의 명령어에다가 번역기를 달아서, 각 Guest OS에 있는 명령들을 모두 하나의 번역으로 바꾸어서 Hardware에게 전달하게 된다.
이것들을 실행하기 위해서는 OS마다 각각의 커널딴을 건드리면서 수정을 해야한다.
윈도우 같은경우는 오픈소스로 이루어져있지 않기 때문에, 커널을 수정할 수 없다. 하지만, 리눅스는 오픈소스로 모든 커널이 제공되기 때문에 커널딴을 직접적으로 운영 및 수정을 할 수 있다. 결국 GuestOS를 수정한다는 말이다.
### 하지만? Windows는?
오픈소스로 제공되지 않는다. 그러면 이것들을 수정 할 수 없다는 말인가?
아니다. Xen에서 제공하는 툴로 전부 다 가능하다. 반 가상화에서는 Hypervisor는 번역을 제공하지 않는가? 그렇다.
자체적으로 커널에 번역을 변경하였으니, Hypervisor는 단지 가상화 OS들에게 자원을 어떻게 배분할 것인가? 하는 관리적인 문제들만 다루면 된다.


