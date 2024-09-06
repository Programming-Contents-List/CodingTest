# 🧠DFS

> 깊이 우선 탐색, depth-first-search

- ### ⏱시간복잡도 : O(V+E)
- ### 🧩개념
  - DFS는 그래프 완전 탐색 기법 중 하나이다. 따라 그래프의 모든 노드를 탐색한다고 보면 된다.
- ### 👀특징
  - [재귀 함수](https://www.acmicpc.net/problemset?sort=ac_desc&algo=62 "baekjoon 재귀함수") 로 구현
  - [스택](https://www.acmicpc.net/problemset?sort=ac_desc&algo=71 "baekjoon 스택") 자료구조 이용
    > FILO(선입선출): 먼저 들어온 DATA가 나중에 나간다.
  - 스택 오버플로에 유의 해야한다.

---

# 📌핵심 이론

- 한번 방문한 노드를 다시 방문하면 안된다.
  > 노드 방문 여부 체크할 배열이 필요.(**방문 배열**)
- 그래프는 [인접 리스트](https://www.inflearn.com/course/lecture?courseSlug=%EB%91%90%EC%9E%87-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%8C%8C%EC%9D%B4%EC%8D%AC&unitId=148393&tab=curriculum "그래프 inflearn")로 표현.
- DFS는 LIFO(후입선출) 특성을 가지고 있다.
  > DFS구현은 스택보다 스택 성질을 갖는 [재귀 함수](https://www.acmicpc.net/problemset?sort=ac_desc&algo=62 "baekjoon 재귀함수")로 많이 구현

---

# 📝문제예시

> - 그래프 완전 탐색: 단절점 찾기, 단절선 찾기, 사이클 찾기, 위상 정렬
> - 재귀함수 방법, 스택 방법

- Descriptions [[링크]("풀이방식")]

# ✍풀이방식

1. DFS를 시작할 노드를 정한 후 사용할 자료구조([인접리스트](https://www.inflearn.com/course/lecture?courseSlug=%EB%91%90%EC%9E%87-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%8C%8C%EC%9D%B4%EC%8D%AC&unitId=148393&tab=curriculum "그래프 inflearn")) 초기화하기
2. 스택에서 노드를 꺼낸 후 꺼낸 노드를 다시 스택에 사입하기
3. 스택 자료구조에 값이 없을 때까지 반복하기
   > 다녀간 노드는 **방문 배열**을 바탕으로 재삽입하지 않는 것이 핵심

- 스택에 노드를 삽입(`push`)할 때 **방문 배열**을 체크, 스택에서 노드를 뺄(`pop`) 때 **탐색 순서에 기록**, 인접 노드를 방문 배열과 **대조**

---

# 👨‍💻Summary

> ### 🔥KeyWord
>
> - 스택
> - 재귀함수
> - 그래프
>   - 인접리스트
> - 방문 배열
> - 탐색 순서
> - 대조
