import { useEffect, useState, useRef } from "react";
import handlerScroll from "./handlerScroll";

export default function useThottle() {
  const [isScrollY, setScrollY] = useState<number>(0);
  /**
   * useRef를 사용한 이유는 useCallback은 결과 값을 저장하는 메모이제이션이기 때문이고 useRef는 함수를 참조하기 때문이다.
   * 왜 여기서 useState가 전역에 있지 않고 내부에 들어왔는가.
   * 이유는 useState가 전역에 있게 되면, useRef가 참조하고 있는 함수의 setScrollY가 명확해지지 않는다 .이를 함수로 바인딩해서 관리한다 해도
   * 비효율적인 방법이기 때문에 훅에서 관리하는 것이 옳다.
   */
  const throttle = useRef<() => void>(
    handlerScroll(() => setScrollY(window.scrollY), 400)
  ).current;

  useEffect(() => {
    window.addEventListener("scroll", throttle);

    return () => {
      window.removeEventListener("scroll", throttle);
    };
  }, [throttle]);

  return { isScrollY };
}
