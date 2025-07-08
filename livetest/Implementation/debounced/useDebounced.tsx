import { useEffect, useState } from "react";

export default function useDebounced(isValue: string, delay: number) {
  const [isDebounced, setDebounced] = useState<string>("");

  // console.log(isValue);
  useEffect(() => {
    const time = setTimeout(() => setDebounced(isValue), delay);

    return () => {
      clearTimeout(time);
    };
  }, [isValue, delay]);

  return isDebounced;
}
