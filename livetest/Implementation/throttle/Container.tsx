import { useEffect } from "react";
import Presentational from "./Presentational";
import useThrottle from "./useThrottle";

export default function Container() {
  const { isScrollY } = useThrottle();

  useEffect(() => {
    console.log(isScrollY);
  }, [isScrollY]);

  return (
    <Presentational
      isScrollY={isScrollY}
      styles={{
        height: "2000px",
        padding: "2rem",
        backgroundColor: "gray",
      }}
    />
  );
}
