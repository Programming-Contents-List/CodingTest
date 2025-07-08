export default function handlerScroll(callback: () => void, delay: number) {
  let wait = false;
  // setScrollY(window.scrollY);

  return () => {
    if (wait) return;
    callback();
    wait = true;

    setTimeout(() => {
      wait = false;
    }, delay);
  };
}
