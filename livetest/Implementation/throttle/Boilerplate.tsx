/**
 * 	window.scrollY를 추적해서 상태에 저장
 * p 태그에 현재 스크롤 위치를 표시
 * 단, 스크롤 이벤트에 throttle을 적용해서 너무 자주 setState가 발생하지 않도록 제한
 * lodash 사용 ❌ 금지
 * 함수 직접 구현 or useRef, useCallback 사용 가능
 *
 */

import { useEffect, useState } from "react";

export default function App() {
  return (
    <div style={{ height: "2000px", padding: "2rem" }}>
      <h1>Throttle Scroll</h1>
      <p>여기에 스크롤 위치를 표시해보세요</p>
    </div>
  );
}
