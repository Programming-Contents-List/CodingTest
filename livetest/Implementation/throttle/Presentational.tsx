import { Props } from "./type";

export default function Presentational({ isScrollY, styles }: Props) {
  return (
    <div style={styles}>
      <h1>Throttle Scroll</h1>
      <p>여기에 스크롤 위치를 표시해보세요 {isScrollY}</p>
    </div>
  );
}
