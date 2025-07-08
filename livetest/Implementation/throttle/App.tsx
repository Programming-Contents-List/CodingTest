import { useEffect, useRef, useState } from "react";

// 🔧 직접 구현한 throttle 함수
function throttle(callback: () => void, delay: number) {
  let shouldWait = false;

  return () => {
    if (shouldWait) return;

    callback();
    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  // 🔁 항상 같은 throttle 함수를 쓰기 위해 useRef에 저장
  const throttledScroll = useRef(
    throttle(() => {
      setScrollY(window.scrollY);
    }, 300)
  ).current;

  useEffect(() => {
    console.log("🔥 스크롤 위치 업데이트됨:", scrollY);
  }, [scrollY]);

  useEffect(() => {
    // ✅ 이벤트 등록
    window.addEventListener("scroll", throttledScroll);

    // ✅ 컴포넌트 unmount 시 이벤트 제거
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  return (
    <div style={{ height: "2000px", padding: "2rem" }}>
      <h1>Throttle Scroll</h1>
      <p>현재 스크롤 위치: {scrollY}px</p>
    </div>
  );
}
