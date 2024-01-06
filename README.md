## 프로젝트 개요
![image](https://github.com/hyewon0615/-2024nbcamp_timeattack/assets/146814055/0d82620d-7717-496c-9356-3333f1b7b163)
![image](https://github.com/hyewon0615/-2024nbcamp_timeattack/assets/146814055/d85aed98-8a17-4d08-b685-3afc21f15ff6)

E-Commerce 의 기본 제품 요소인 로그인, 회원가입 기능 구현 페이지다. 페이지는 로그인과, 회원가입 페이지만 있고 회원가입 완료 시 로그인 페이지로, 로그인 완료 시 다시 로그인 페이지로 리디렉션 된다.

#### 유효성 검사

react-hook-form 과 yup 라이브러리를 사용해서 진행했다. 불필요한 렌더링을 줄이고 input의 수가 많아 react-hook-form을 사용했고 유효성 검사를 보다 간편하게 하기 위해 사용했다.
![image](https://github.com/hyewon0615/-2024nbcamp_timeattack/assets/146814055/5c9a4d19-06b2-4fa2-a261-b4624a3afb8c)
![image](https://github.com/hyewon0615/-2024nbcamp_timeattack/assets/146814055/372911fe-77ef-4c0a-b809-329b171f7218)

#### 상태관리

redux-toolkit을 사용해서 관리 했고 로그인, 회원가입 로직은 axios로 local에서 관리 했다.

#### 스타일

스타일은 styled - components를 사용해 파일을 분리하지 않고 하단에서 관리했다

#### 만능버튼

처음에 로그인이 완료 되었을 때 이동 페이지로 로그아웃 버튼이 있는 페이지를 만들었다가 과제가 로그인 후 로그인 페이지로 리디렉션이여서 삭제되었지만 버튼이 공통으로 들어가있는 곳이 있어서 만능 버튼을 만들었다. 수정 후 로그인 회원가입 페이지에서만 쓰이고 있다

#### 브랜치 별 안내

main => 과제 제출물 react-typescript => custom훅을 이용한 input 라이브러리 없이 구현한 버전 (실수로 유효성 검사 부분 사라짐) react-hook-form => 라이브러리를 사용한 과제 작업 브랜치

## 구현하며 중요하게 생각했던 점
 ### type , ivalidation, rendering
 타입스크립트가 능숙하지 하진 못하지만 최대한 타입을 지정해주고 any 타입을 적게 사용하려 노력했다.
 
 그리고 가장 신경 쓴 부분은 유효성 검사 부분이다. alert를 최소화하면서 경우에 따라 각각의 오류를 보여주는 것을 하고 싶었고 if문을 사용하면서 장황한 코드가 아닌 정리된 코드로 구성하고 싶었다. yup의 경우 상황을 정의하는 코드가 한 줄이면 끝나기 때문에 원하는 바를 이룬 것 같다. 

또한 전에 구현했을 때 렌더링 문제로 버튼을 두번 눌러야 적용이 된거나, 무한 렌더링을 많이 경험해서 이번에는 렌더링이 최적화된 코드를 짜고 싶었다. 완전히 최적화 되었다곤 할 수 없는 코드지만 react-hook-form을 이용해 input의 값이 늘어날 때 마다 일어나는 렌더링은 줄였다고 생각한다. 

## 아쉬운 점
1. 로그인, 회원가입 로직을 thunk로 관리 했으면 좋았을 것 같다.
2. yup의 특성을 잘 파악해 로그인과 회원가입을 토글되게 했으면 좋았을 것 같다.
3. 유효성검사를 버튼을 누르면 진행하는 것이 아닌 입력마다 진행하는 것은 렌더링 차원에서 별로인듯 하다. 


