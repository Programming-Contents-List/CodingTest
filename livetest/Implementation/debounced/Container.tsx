import { useEffect, useState } from "react";
import MessageList from "./MessageList";
import useDebounced from "./useDebounced";
type Message = {
  id: string;
  text: string;
};

export default function Container() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello" },
    { id: "2", text: "World" },
  ]);
  //   const [isMessage, setMessage] = useState<Message[]>([...messages]);
  const [isValue, setValue] = useState<string>("");
  // const [isDebounced, setDebounced] = useState<string>("");
  const value = useDebounced(isValue, 400);

  function onRegister(e: any) {
    e.preventDefault();
    // if (!value.trim()) {
    //   alert("입력값이 debounce 처리 중이거나 비어 있습니다.");
    //   return;
    // }
    const data = {
      id: Date.now().toString(),
      text: value,
    };
    setMessages([...messages, data]);
    console.log(messages);
  }

  // useEffect(() => {
  //   // console.log(messages);
  //   // function debounced(value: string, delay: number) {
  //   //   setTimeout(() => setDebounced(value), delay);
  //   // }
  //   const time = setTimeout(() => setDebounced(isValue), 400);
  //   // console.log(isDebounced);

  //   return () => {
  //     clearTimeout(time);
  //   };
  // }, [isValue]);

  useEffect(() => {
    console.log("🔥 디바운스된 값:", value);
  }, [value]);

  return (
    <form onSubmit={onRegister}>
      <input
        type="text"
        placeholder="입력"
        value={isValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <MessageList messages={messages} />
      <button
        type="submit"
        disabled={!value.trim()}
        onClick={() => setValue("")}
      >
        submit
      </button>
    </form>
  );
}
